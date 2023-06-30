// Components
import NextImage from 'next/image';

// Utilities
import clsx from 'clsx';

type CompanyTagProps = {
  company: string;
}

const CompanyTag = (props: CompanyTagProps) => {
  const { company } = props;

  const renderClasses = (company: string) => {
    return clsx([
      company === 'CrowdStrike' && 'bg-white border-red-500 text-red-500',
      company === 'American Express' && 'bg-blue-400 border-blue-500 text-white',
      company === 'Nelnet' && 'bg-green-50 border-green-600 text-[#A3BC2D]',
      company === 'University of Nebraska-Lincoln' && 'border-red-500 bg-white text-red-500',
      company === 'Hoffman Strategy Group' && 'bg-[#998A81] border-[#924C2E] text-white'
    ]);
  };

  const renderRounded = (company: string) => {
    return clsx([
      (company === 'American Express' ||
        company === 'Freelancing' || company === 'Hoffman Strategy Group') && 'rounded'
    ]);
  };

  const renderImage = (company: string) => {
    switch (company) {
      case 'CrowdStrike':
        return '/CRWD.svg';
      case 'American Express':
        return '/amex.png';
      case 'Hoffman Strategy Group':
        return '/hsg.jpeg';
      case 'Nelnet':
        return '/nelnet.png';
      case 'Raven Industries':
        return '/raven.png';
      case 'Freelancing':
        return '/headshot.png';
      case 'University of Nebraska-Lincoln':
        return '/Nebraska.png';
      default:
        return '/next.svg';
    }
  };

  return (
    <div className={`${renderClasses(company)} flex items-center rounded-lg border w-fit p-1 mr-1 mb-1`}>
      <NextImage
        className={`${renderRounded(company)} mr-1`}
        src={renderImage(company)}
        alt={`${company} Icon`}
        width={20}
        height={20}
      />

      <p className='uppercase text-xs font-medium'>
        {company}
      </p>
    </div>
  );
};

export { CompanyTag };
