import 'server-only';

import { getContentfulClient } from './contentful';
import { fixtures } from './fixtures';
import { normalizers } from './normalize';
import { isFixtureMode } from '@/lib/fixture-mode';
import { convertStartDate } from '@/utils/convert';
import type { ContentType, Content } from './normalize';

const fetchLiveEntries = async (contentType: ContentType) => {
  const client = getContentfulClient();
  const entries: unknown[] = [];
  let total: number;

  do {
    const data = await client.getEntries({
      content_type: contentType,
      limit: 100,
      skip: entries.length,
      // Preserve edit order, with a deterministic tie-breaker across pages.
      order: ['-sys.updatedAt', 'sys.id'],
    }).catch((error: unknown) => {
      // SDK errors can contain request headers. Do not log/rethrow credentials.
      const status = typeof error === 'object' && error !== null && 'status' in error
        && typeof error.status === 'number' ? ` (HTTP ${error.status})` : '';
      throw new Error(`Unable to load Contentful "${contentType}" entries${status}. Check CMS availability, the content type, and server credentials, then retry.`);
    });

    total = data.total;
    if (data.items.length === 0 && entries.length < total) {
      throw new Error(`Contentful "${contentType}" pagination stopped before all ${total} entries were received. Retry the request.`);
    }
    entries.push(...data.items);
  } while (entries.length < total);

  return entries;
};

/** Both sources share a boundary. Live failures never silently publish demo data. */
const fetchEntries = async <K extends ContentType>(contentType: K): Promise<Content[K][]> => {
  const entries = isFixtureMode()
    ? fixtures[contentType]
    : await fetchLiveEntries(contentType);
  const normalize = normalizers[contentType] as (entry: unknown) => Content[K] | null;

  return entries.map((entry) => normalize(entry)).filter((entry) => entry !== null);
};

const fetchExperience = async () => {
  const experiences = await fetchEntries('experience');

  return experiences.sort((a, b) => convertStartDate(b.datesEmployed) - convertStartDate(a.datesEmployed));
};

const fetchSkills = () => fetchEntries('skills');
const fetchTestimonies = () => fetchEntries('testimonies');
const fetchProjects = () => fetchEntries('projects');

export { fetchExperience, fetchSkills, fetchTestimonies, fetchProjects };
