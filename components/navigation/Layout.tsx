// Components
import { Header } from './Header';
import { Footer } from './Footer';

// Types
import type { ReactNode } from 'react';

type LayoutProps = {
  className?: string;
  children: ReactNode;
  fullscreen?: boolean;
}

const Layout = (props: LayoutProps) => {
  const { className, children, fullscreen = false } = props;

  return (
    <main className='app-frame'>
      <Header />
      <section className='page-wrap'>
        <div className={`${className ?? ''} page-shell ${fullscreen ? '' : ''}`}>
          {children}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export { Layout };
