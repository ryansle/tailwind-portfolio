// Components
import { Header } from './Header';

// Types
import type { ReactNode } from 'react';

type LayoutProps = {
  className?: string;
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { className, children } = props;

  return (
    <main>
      <Header />
      <section className={`${className} text-white min-h-full pt-12 pb-8 px-6 flex flex-col overflow-hidden bg-gradient-to-b from-neutral-900 to-black xs:px-20 lg:px-48 2xl:px-72 3xl:px-[400px] 4xl:px-[500px]`}>
        {children}
      </section>
    </main>
  );
};

export { Layout };
