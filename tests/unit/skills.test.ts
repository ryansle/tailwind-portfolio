import { expect, it } from 'vitest';
import { getPrimarySkills, getPublishedSkills, prepareSkills } from '@/lib/skills';
import { normalizers } from '@/data/normalize';
import type { Skill } from '@/lib/types';

const skill = (technology: string, primary: boolean, visibility = true): Skill =>
  normalizers.skills({ sys: { id: technology.toLowerCase() }, fields: { technology, type: 'web', primary, visibility } })!;

it('selects only published skills, primary first then alphabetical, without mutating CMS order', () => {
  const skills = [skill('Zebra', false), skill('Hidden', true, false), skill('TypeScript', true), skill('React', true), skill('CSS', false)];
  const before = [...skills];
  expect(getPublishedSkills(skills).map((s) => s.technology)).toEqual(['React', 'TypeScript', 'CSS', 'Zebra']);
  expect(getPrimarySkills(skills).map((s) => s.technology)).toEqual(['React', 'TypeScript']);
  expect(skills).toEqual(before);
});

it('keeps a published skill with no icon available for text layouts', () => {
  expect(prepareSkills([skill('React', true)])[0]).toMatchObject({ skill: { technology: 'React' }, iconUrl: null });
  expect(getPrimarySkills([])).toEqual([]);
});
