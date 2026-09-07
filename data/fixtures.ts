import type { ContentType } from './normalize';

// Invented evaluation content, never a copy of a private CMS export.
const icon = { fields: { file: { url: '/next.svg', details: { image: { width: 180, height: 37 } } } } };
const screenshot = { fields: { file: { url: '/fixtures/project.svg', details: { image: { width: 1200, height: 720 } } } } };
/** Fixture entries carry a sys.id so demo content has the same identity live entries do. */
const entry = (id: string, fields: Record<string, unknown>) => ({ sys: { id }, fields });
const skills = [
  entry('demo-typescript', { technology: 'TypeScript', type: 'web', visibility: true, primary: true, uses: 'Typed application boundaries.', icon }),
  entry('demo-react', { technology: 'React', type: 'web', visibility: true, primary: true, uses: 'Reusable, accessible interfaces.', icon }),
  entry('demo-css', { technology: 'CSS', type: 'web', visibility: true, primary: false, uses: 'Responsive layouts.' }),
  entry('demo-event-production', { technology: 'Event production', type: 'creative', visibility: true, primary: false, uses: 'Planning community events.' }),
  entry('demo-unpublished', { technology: 'Unpublished example', type: 'web', visibility: false, primary: true }),
];
const techStack = skills.slice(0, 2);
const project = (id: string, title: string, category: string, featured = false) =>
  entry(id, { title, category, featured, summary: 'Demonstration content for evaluating the portfolio. This is not a client project.', image: screenshot, techStack });

export const fixtures: Record<ContentType, unknown[]> = {
  skills,
  projects: [
    project('demo-design-system', 'Demo design system', 'Professional', true),
    project('demo-team-dashboard', 'Demo team dashboard', 'Professional'),
    project('demo-community-directory', 'Demo community directory', 'Personal'),
    project('demo-studio-website', 'Demo studio website', 'Freelance'),
  ],
  experience: [
    entry('demo-example-studio', { company: 'Example Studio (demo)', title: 'Frontend Engineer', datesEmployed: 'January 2020 - December 2022', summary: 'Sample employment entry.', responsibilities: ['Built reusable interface components.'], techStack }),
    entry('demo-example-team', { company: 'Example Team (demo)', title: 'UI Engineer', datesEmployed: 'January 2023 - Now', summary: 'Sample current role.', responsibilities: ['Improved keyboard navigation and form feedback.'], techStack }),
  ],
  testimonies: [entry('demo-reviewer', {
    name: 'Sample reviewer (demo)', jobTitle: 'Example collaborator',
    testimony: 'This is a fictional testimonial used to demonstrate the layout, not an endorsement.',
  })],
};
