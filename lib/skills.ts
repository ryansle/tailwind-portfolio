import type { Skill } from '@/lib/types';
import { convertImageUrl } from '../utils/convert.ts';

type PreparedSkill = {
  skill: Skill;
  iconUrl: string | null;
};

/** Primary skills first, then alphabetical in a fixed locale, independent of CMS edit order. */
const compareSkills = (a: Skill, b: Skill) =>
  Number(b.primary) - Number(a.primary)
  || a.technology.localeCompare(b.technology, 'en');

/** Visibility controls publication on both the home and skills pages. */
const getPublishedSkills = (skills: readonly Skill[]): Skill[] =>
  skills.filter((skill) => skill.visibility).sort(compareSkills);

/** Primary selects the hero subset; it never overrides publication. */
const getPrimarySkills = (skills: readonly Skill[]): Skill[] =>
  getPublishedSkills(skills).filter((skill) => skill.primary);

/** Keep skills with unresolved icons so text-based layouts can still show them. */
const prepareSkills = (skills: readonly Skill[]): PreparedSkill[] =>
  skills.map((skill) => ({ skill, iconUrl: convertImageUrl(skill.icon) }));

export { getPublishedSkills, getPrimarySkills, prepareSkills };
export type { PreparedSkill };
