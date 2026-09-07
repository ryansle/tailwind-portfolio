import { describe, expect, it, vi } from 'vitest';
import { normalizers, normalizeImage, normalizeTechStack } from '@/data/normalize';
import { fetchExperience, fetchProjects, fetchSkills, fetchTestimonies } from '@/data/fetch';
import { getContentfulClient } from '@/data/contentful';
import { convertImageUrl } from '@/utils/convert';
import * as contentful from 'contentful';

vi.mock('contentful', () => ({ createClient: vi.fn() }));

describe('CMS boundary', () => {
  it('drops unresolved links and supplies safe collection defaults', () => {
    expect(normalizeTechStack([null, { sys: { id: 'unpublished' } }, {
      sys: { id: 'react' }, fields: { technology: 'React', type: 'web', visibility: true },
    }])).toEqual([{ fields: expect.objectContaining({ id: 'react', technology: 'React', experiences: [] }) }]);
    const project = normalizers.projects({ sys: { id: 'example' }, fields: { title: 'Example', category: 'Personal', image: { sys: {} } } });
    expect(project).toMatchObject({ id: 'example', featured: false, summary: '', techStack: [] });
    expect(project?.image).toBeUndefined();
    expect(normalizers.experience({ sys: { id: 'role' }, fields: { company: 'Example', title: 'Engineer', responsibilities: [null, 'Build UI', 3] } }))
      .toMatchObject({ responsibilities: ['Build UI'] });
  });

  it('rejects malformed records and does not treat truthy strings as publication', () => {
    expect(normalizers.projects({ sys: { id: 'example' }, fields: { title: 'Example', category: 'Unknown' } })).toBeNull();
    expect(normalizers.skills({ sys: { id: 'example' }, fields: { technology: 'Example', type: 'unknown' } })).toBeNull();
    expect(normalizers.testimonies({ sys: { id: 'example' }, fields: { name: 'Example' } })).toBeNull();
    expect(normalizers.experience(null)).toBeNull();
    expect(normalizers.skills({ sys: { id: 'example' }, fields: { technology: 'Example', type: 'web', visibility: 'true', primary: 'false' } }))
      .toMatchObject({ visibility: false, primary: false });
  });

  it('normalizes protocol-relative images and ignores unresolved or invalid assets', () => {
    expect(convertImageUrl(normalizeImage({ fields: { file: { url: '//images.ctfassets.net/example.png' } } })))
      .toBe('https://images.ctfassets.net/example.png');
    expect(normalizeImage({ sys: { id: 'missing' } })).toBeUndefined();
    expect(normalizeImage({ fields: { file: { url: 123 } } })).toBeUndefined();
  });

  it('keys records by sys.id so repeated names stay distinct, and drops entries without one', () => {
    const roles = [
      { sys: { id: 'role-engineer' }, fields: { company: 'Repeat Co', title: 'Engineer' } },
      { sys: { id: 'role-lead' }, fields: { company: 'Repeat Co', title: 'Lead Engineer' } },
    ].map(normalizers.experience);
    expect(roles.map((role) => role?.id)).toEqual(['role-engineer', 'role-lead']);
    expect(new Set(roles.map((role) => role?.id)).size).toBe(2);

    const references = [
      { sys: { id: 'reference-first' }, fields: { name: 'Alex Doe', testimony: 'First collaboration.' } },
      { sys: { id: 'reference-second' }, fields: { name: 'Alex Doe', testimony: 'A different Alex Doe.' } },
    ].map(normalizers.testimonies);
    expect(references.map((reference) => reference?.id)).toEqual(['reference-first', 'reference-second']);

    expect(normalizers.projects({ fields: { title: 'Example', category: 'Personal' } })).toBeNull();
    expect(normalizers.skills({ sys: { id: '  ' }, fields: { technology: 'Example', type: 'web' } })).toBeNull();
  });

  it('serves all fixture collections without initializing Contentful and sorts employment by start date', async () => {
    vi.stubEnv('NEXT_PUBLIC_FIXTURE_MODE', 'true');
    const [projects, skills, references, experience] = await Promise.all([
      fetchProjects(), fetchSkills(), fetchTestimonies(), fetchExperience(),
    ]);
    expect(projects).toHaveLength(4);
    expect(new Set(projects.map((project) => project.id)).size).toBe(4);
    expect(skills.length).toBeGreaterThan(0);
    expect(references).toHaveLength(1);
    expect(experience.map((role) => role.company)).toEqual(['Example Team (demo)', 'Example Studio (demo)']);
    expect(contentful.createClient).not.toHaveBeenCalled();
  });

  it('gives actionable configuration errors and propagates live failures', async () => {
    for (const key of ['CONTENTFUL_SPACE_ID', 'CONTENTFUL_ACCESS_TOKEN', 'NEXT_PUBLIC_CONTENTFUL_SPACE_ID', 'NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN']) vi.stubEnv(key, '');
    expect(getContentfulClient).toThrow('NEXT_PUBLIC_FIXTURE_MODE=true');
    vi.stubEnv('NEXT_PUBLIC_FIXTURE_MODE', 'false');
    vi.stubEnv('CONTENTFUL_SPACE_ID', 'example-space');
    vi.stubEnv('CONTENTFUL_ACCESS_TOKEN', 'example-token');
    vi.mocked(contentful.createClient).mockImplementation(() => { throw new Error('CMS unavailable'); });
    await expect(fetchProjects()).rejects.toThrow('CMS unavailable');
  });
});
