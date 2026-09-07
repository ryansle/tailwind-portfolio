import { beforeEach, describe, expect, it, vi } from 'vitest';

const { createClient, getEntries } = vi.hoisted(() => ({ createClient: vi.fn(), getEntries: vi.fn() }));
vi.mock('contentful', () => ({ createClient }));

import { getContentfulClient } from '@/data/contentful';
import { fetchExperience, fetchProjects, fetchSkills, fetchTestimonies } from '@/data/fetch';

beforeEach(() => {
  getEntries.mockReset();
  createClient.mockReset().mockReturnValue({ getEntries });
  vi.stubEnv('NEXT_PUBLIC_FIXTURE_MODE', 'false');
  vi.stubEnv('CONTENTFUL_SPACE_ID', 'test-space');
  vi.stubEnv('CONTENTFUL_ACCESS_TOKEN', 'test-token');
});

describe('CMS configuration', () => {
  it('rejects missing and blank server variables even when legacy public names exist', () => {
    vi.stubEnv('CONTENTFUL_SPACE_ID', ' ');
    vi.stubEnv('CONTENTFUL_ACCESS_TOKEN', undefined);
    vi.stubEnv('NEXT_PUBLIC_CONTENTFUL_SPACE_ID', 'legacy-space');
    vi.stubEnv('NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN', 'legacy-token');
    expect(getContentfulClient).toThrow('Missing Contentful configuration: CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN.');
    expect(createClient).not.toHaveBeenCalled();
  });

  it('names only the missing variable and does not expose the configured token', () => {
    vi.stubEnv('CONTENTFUL_SPACE_ID', undefined);
    expect(getContentfulClient).toThrow('Missing Contentful configuration: CONTENTFUL_SPACE_ID.');
    try { getContentfulClient(); } catch (error) {
      expect(String(error)).not.toContain('test-token');
    }
  });

  it('passes trimmed server credentials to the SDK', () => {
    vi.stubEnv('CONTENTFUL_SPACE_ID', ' test-space ');
    vi.stubEnv('CONTENTFUL_ACCESS_TOKEN', ' test-token ');
    getContentfulClient();
    expect(createClient).toHaveBeenCalledWith({ space: 'test-space', accessToken: 'test-token' });
  });
});

describe('CMS reads', () => {
  it('reads beyond the first 100 results before normalizing', async () => {
    const items = Array.from({ length: 101 }, (_, index) => ({
      sys: { id: `tool-${index}` },
      fields: { technology: `Tool ${index}`, type: 'web', visibility: true },
    }));
    getEntries.mockResolvedValueOnce({ items: items.slice(0, 100), total: 101 })
      .mockResolvedValueOnce({ items: items.slice(100), total: 101 });
    const skills = await fetchSkills();
    expect(skills).toHaveLength(101);
    expect(skills[100].technology).toBe('Tool 100');
    expect(getEntries).toHaveBeenNthCalledWith(2, {
      content_type: 'skills', limit: 100, skip: 100, order: ['-sys.updatedAt', 'sys.id'],
    });
  });

  it('returns empty results only for a successful empty response', async () => {
    getEntries.mockResolvedValue({ items: [], total: 0 });
    await expect(fetchProjects()).resolves.toEqual([]);
    expect(getEntries).toHaveBeenCalledTimes(1);
  });

  it('rejects later page failures without publishing partial content or SDK secrets', async () => {
    getEntries.mockResolvedValueOnce({ items: [{ sys: { id: 'first' }, fields: { title: 'First', category: 'Personal' } }], total: 2 })
      .mockRejectedValueOnce({ status: 503, message: 'Authorization: secret-token' });
    await expect(fetchProjects()).rejects.toThrow('Unable to load Contentful "projects" entries (HTTP 503).');
    getEntries.mockRejectedValueOnce({ message: 'Authorization: secret-token' });
    await expect(fetchProjects()).rejects.not.toThrow('secret-token');
  });

  it('fails an incomplete empty page instead of looping or truncating', async () => {
    getEntries.mockResolvedValue({ items: [], total: 1 });
    await expect(fetchTestimonies()).rejects.toThrow('pagination stopped before all 1 entries were received');
    expect(getEntries).toHaveBeenCalledTimes(1);
  });

  it('sorts experience across all pages by start date', async () => {
    getEntries.mockResolvedValueOnce({ items: [{ sys: { id: 'older' }, fields: { company: 'Older', title: 'Engineer', datesEmployed: 'January 2020 - December 2022' } }], total: 2 })
      .mockResolvedValueOnce({ items: [{ sys: { id: 'newer' }, fields: { company: 'Newer', title: 'Engineer', datesEmployed: 'January 2023 - Now' } }], total: 2 });
    expect((await fetchExperience()).map((entry) => entry.company)).toEqual(['Newer', 'Older']);
  });

  it('uses fixtures only when explicitly enabled, without initializing the CMS', async () => {
    vi.stubEnv('NEXT_PUBLIC_FIXTURE_MODE', 'true');
    vi.stubEnv('CONTENTFUL_SPACE_ID', undefined);
    vi.stubEnv('CONTENTFUL_ACCESS_TOKEN', undefined);
    expect((await fetchSkills()).length).toBeGreaterThan(0);
    expect(createClient).not.toHaveBeenCalled();
  });
});
