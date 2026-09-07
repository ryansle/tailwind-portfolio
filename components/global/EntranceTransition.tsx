'use client';

import { Transition } from '@headlessui/react';
import type { ReactNode } from 'react';

type EntranceTransitionProps = {
  children: ReactNode;
  enter: string;
  enterFrom: string;
  enterTo: string;
};

// Keep entrance animation on the client while accepting server-rendered content.
const EntranceTransition = ({ children, ...transition }: EntranceTransitionProps) => (
  <Transition as='div' appear show {...transition}>
    {children}
  </Transition>
);

export { EntranceTransition };
