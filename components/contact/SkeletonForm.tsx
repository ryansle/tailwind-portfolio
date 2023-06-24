const InputSkeleton = () => {
  return (
    <div>
      <div className='h-4 bg-gray-700 rounded-full w-28 mb-1 animate-pulse mb-1' />
      <div className='h-10 bg-gray-700 rounded-md w-full animate-pulse' />
    </div>
  );
};

const SkeletonForm = () => {
  return (
    <>
      <div className='grid grid-cols-2 gap-x-4 gap-y-4 mb-4'>
        <div className='col-span-1'>
          <InputSkeleton />
        </div>

        <div className='col-span-1'>
          <InputSkeleton />
        </div>

        <div className='col-span-2 sm:col-span-1'>
          <InputSkeleton />
        </div>

        <div className='col-span-2 sm:col-span-1'>
          <InputSkeleton />
        </div>

        <div className='col-span-2'>
          <InputSkeleton />
        </div>

        <div className='col-span-2'>
          <div className='h-4 bg-gray-700 rounded-full w-28 mb-1 animate-pulse mb-1' />
          <div className='h-40 bg-gray-700 rounded-md w-full animate-pulse' />
        </div>
      </div>
      <div className=''>
        <div className='h-10 bg-gray-700 rounded-md w-36 animate-pulse float-right' />
      </div>
    </>
  );
};

export { SkeletonForm };
