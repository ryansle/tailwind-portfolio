import { Hero } from '@/components/home';
import { Layout } from '@/components/navigation';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <div className='h-[1px] border-t border-gray-700 my-8' />
    </Layout>
  );
};

export default Home;