// Components
import { Header } from './Header';
import { Footer } from './Footer';

// Utilities
import clsx from 'clsx';

// Types
import type { ReactNode } from 'react';

type LayoutProps = {
  className?: string;
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { className, children } = props;

  return (
    <main className='app-frame'>
      <Header />
      <section className='page-wrap'>
        <div className={clsx('page-shell', className)}>
          {children}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export { Layout };
