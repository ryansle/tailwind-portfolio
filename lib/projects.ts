// Types
import type { Project } from '@/lib/types';

const categoryBadgeClasses: Record<Project['category'], string> = {
  Professional: 'border-sky-400/25 bg-sky-400/10 text-sky-100',
  Personal: 'border-amber-300/25 bg-amber-300/10 text-amber-100',
  Freelance: 'border-emerald-400/25 bg-emerald-400/10 text-emerald-100',
};

export { categoryBadgeClasses };
