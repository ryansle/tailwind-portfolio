type SkeletonProps = {
  className?: string;
  width?: number;
  height?: number;
}

const Skeleton = (props: SkeletonProps) => {
  const { className, width, height } = props;

  return (
    <div className={`${className} h-[${height}px] w-[${width}px] animate-pulse bg-gray-200 rounded-xl`} />
  );
};

export { Skeleton };
