import type { ReactNode } from 'react';

export const EmptyContent = ({ children }: { children: ReactNode }) => (
  <p className='subtle-panel px-5 py-5 text-sm leading-7 text-soft'>{children}</p>
);
