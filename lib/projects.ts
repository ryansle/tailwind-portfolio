import type { Project } from '@/lib/types';

const categoryBadgeClasses: Record<Project['category'], string> = {
  Professional: 'border-sky-400/40 bg-sky-400/15 text-sky-200',
  Personal: 'border-amber-400/40 bg-amber-400/15 text-amber-200',
  Freelance: 'border-emerald-400/40 bg-emerald-400/15 text-emerald-200',
};

export { categoryBadgeClasses };
