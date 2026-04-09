const InputSkeleton = () => {
  return (
    <div>
      <div className='mb-2 h-4 w-28 animate-pulse rounded-full bg-slate-700/70' />
      <div className='h-12 w-full animate-pulse rounded-[var(--radius-sm)] bg-slate-800/80' />
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
          <div className='mb-2 h-4 w-28 animate-pulse rounded-full bg-slate-700/70' />
          <div className='h-40 w-full animate-pulse rounded-[var(--radius-sm)] bg-slate-800/80' />
        </div>
      </div>
      <div>
        <div className='float-right h-12 w-40 animate-pulse rounded-[var(--radius-sm)] bg-slate-700/80' />
      </div>
    </>
  );
};

export { SkeletonForm };
