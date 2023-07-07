import clsx from 'clsx';

type DividerProps = {
  margins?: 'sm' | 'md' | 'lg';
}

const Divider = (props: DividerProps) => {
  const { margins = 'lg' } = props;

  const renderMargin = (margins: string) => {
    return clsx([
      margins === 'lg' && 'my-8',
      margins === 'md' && 'my-4',
      margins === 'sm' && 'my-2',
    ]);
  };

  return (
    <div className={`${renderMargin(margins)} h-[1px] border-t border-gray-700`} />
  );
};

export { Divider };
