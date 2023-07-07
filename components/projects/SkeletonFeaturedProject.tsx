// Components
import { Skeleton } from '@/components/global';

type SkeletonProps = {
  order: boolean;
}

const SkeletonFeaturedProject = (props: SkeletonProps) => {
  const { order } = props;

  return (
    <div className='grid grid-cols-12 mb-10 xl:mb-20'>
      <div className={`${order ? 'pr-8 mt-4 order-last xl:order-first' : 'order-last pl-8 mt-4'} col-span-12 xl:col-span-5`}>
        <Skeleton width={100} height={20} />
        <div className={`${order ? 'text-left' : 'text-right'}`}>
          <Skeleton width={265} height={25} />
          <Skeleton width={215} height={20} />
        </div>
        <div className='rounded-xl border bg-zinc-950 p-4 border-gray-700'>
          <Skeleton width={380} height={20} />
        </div>
      </div>
    </div>
  );
};

export { SkeletonFeaturedProject };
