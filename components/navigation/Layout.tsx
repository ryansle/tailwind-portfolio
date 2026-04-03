// Components
import { Header, Footer } from '@/components/navigation';

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
      <section className='app-container pt-28'>
        <div className={`${className ?? ''} page-shell ${fullscreen ? '' : ''}`}>
          {children}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export { Layout };
