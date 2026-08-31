import { Button } from './Button';
import { FaHandshake as Handshake } from 'react-icons/fa';

type RyanMeetupCtaProps = {
  className?: string;
};

const RYAN_MEETUP_COMPANY = 'Ryan Meetup';

const RyanMeetupCta = (props: RyanMeetupCtaProps) => {
  const { className } = props;

  return (
    <Button
      className={className}
      fullWidth
      href='https://www.ryanmeetup.com/about'
      target='_blank'
      rel='noreferrer'
      icon={<Handshake />}
      variant='outline'
    >
      Learn more about the Ryan Meetup
    </Button>
  );
};

export { RyanMeetupCta, RYAN_MEETUP_COMPANY };
