import { ryanMeetup } from '@/lib/profile';
import { Button } from './Button';
import { FaHandshake as Handshake } from 'react-icons/fa';

type RyanMeetupCtaProps = {
  className?: string;
};

const RyanMeetupCta = (props: RyanMeetupCtaProps) => {
  const { className } = props;

  return (
    <Button
      className={className}
      fullWidth
      href={ryanMeetup.urls.about}
      target='_blank'
      rel='noreferrer'
      icon={<Handshake />}
      variant='outline'
    >
      Learn more about the Ryan Meetup
    </Button>
  );
};

export { RyanMeetupCta };
