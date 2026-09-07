import { fireEvent, render, screen } from '@testing-library/react';
import { expect, it, vi } from 'vitest';

const { refresh } = vi.hoisted(() => ({ refresh: vi.fn() }));
vi.mock('next/navigation', () => ({ useRouter: () => ({ refresh }) }));

import ErrorPage from '@/app/error';
import Loading from '@/app/loading';
import { ProjectFilter } from '@/components/projects/ProjectFilter';
import { SkillsGrid } from '@/components/skills/SkillsGrid';
import { SkillsList } from '@/components/skills/SkillsList';

it('retries the server request and boundary, with independent contact and resume exits', () => {
  const reset = vi.fn();
  render(<ErrorPage error={new Error('private diagnostic')} reset={reset} />);
  fireEvent.click(screen.getByRole('button', { name: 'Try again' }));
  expect(refresh).toHaveBeenCalledOnce();
  expect(reset).toHaveBeenCalledOnce();
  expect(screen.getByRole('link', { name: 'Get in touch' }).getAttribute('href')).toBe('/contact');
  expect(screen.getByRole('link', { name: 'Download resume' }).getAttribute('download')).toBe('ryan-le-resume.pdf');
  expect(screen.queryByText('private diagnostic')).toBeNull();
});

it('announces loading with decorative skeletons hidden from assistive technology', () => {
  render(<Loading />);
  expect(screen.getByRole('status').textContent).toContain('Loading page');
  expect(screen.getByRole('status').querySelector('[aria-hidden="true"]')).not.toBeNull();
});

it('explains an empty project category and lets All restore the cards', () => {
  render(<ProjectFilter projects={[{ id: 'one', category: 'Personal', content: <p>Available project</p> }]} />);
  fireEvent.click(screen.getByRole('button', { name: /Freelance/ }));
  expect(screen.getByRole('status').textContent).toContain('No projects match this category');
  expect(screen.queryByText('Available project')).toBeNull();
  fireEvent.click(screen.getByRole('button', { name: /All/ }));
  expect(screen.getByText('Available project')).not.toBeNull();
});

it('explains empty web and creative skill lists', () => {
  render(<><SkillsGrid skills={[]} /><SkillsList skills={[]} /></>);
  expect(screen.getByText('No web engineering tools are listed yet.')).not.toBeNull();
  expect(screen.getByText('No creative skills are listed yet.')).not.toBeNull();
});
