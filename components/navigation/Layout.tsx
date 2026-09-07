import { Header } from './Header';
import { Footer } from './Footer';

import clsx from 'clsx';

import type { ReactNode } from 'react';

type LayoutProps = {
  className?: string;
  children: ReactNode;
}

/**
 * `<main>` marks the content unique to the current page, so the header and
 * footer sit outside it rather than within - otherwise the landmark covers the
 * whole document and "skip to content" has nothing to skip.
 */
const Layout = (props: LayoutProps) => {
  const { className, children } = props;

  return (
    <div className='app-frame'>
      <a className='skip-link' href='#content'>
        Skip to content
      </a>
      <Header />
      <main id='content' className='page-wrap'>
        <div className={clsx('page-shell', className)}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export { Layout };
