import type { ReactNode } from 'react';

type SectionHeaderProps = {
  icon: ReactNode;
  title: string;
  badge: ReactNode;
  children: ReactNode;
};

const SectionHeader = ({ icon, title, badge, children }: SectionHeaderProps) => (
  <div className='mb-6 space-y-4'>
    <div className='flex flex-wrap items-center justify-between gap-4'>
      <div className='flex items-center gap-3'>
        <span className='section-icon'>{icon}</span>
        <h2 className='type-section-title'>{title}</h2>
      </div>
      <span className='ui-badge ui-badge-brand'>{badge}</span>
    </div>
    <div className='space-y-4 type-body'>{children}</div>
  </div>
);

export { SectionHeader };
