// Types
import type { EventHighlight } from '@/components/initiatives';

/**
 * The four Ryan Meetup nights featured on the initiatives page, drawing on
 * organizer accounts, public event listings, and press coverage.
 */
const ryanMeetupEvents: EventHighlight[] = [
  {
    src: '/ryan-meetup/rave.webp',
    alt: 'Ryan Rave event poster',
    label: 'Ryan Rave',
    date: 'September 2, 2023',
    city: 'Los Angeles, CA',
    venue: 'Downtown Los Angeles',
    summary: [
      'Six weeks earlier we had run the Ryan Retreat, a low-key afternoon at a Santa Monica bar that drew about 30 Ryans. One of them was an LA-based creator, also a Ryan, who filmed a reel about it that went on to pass 44 million views.',
      'We got in touch and built Ryan Rave with him while the hype was still cresting. More than 600 Ryans turned up to a downtown LA venue, and it became the clearest turning point in Ryan Meetup history: the night we stopped thinking of this as hangouts at a bar and started treating it as something we could actually produce.',
    ],
    factsTitle: 'Why it mattered',
    facts: [
      '600+ Ryans attended, roughly twenty times the Santa Monica turnout six weeks earlier.',
      'It was our first real collaboration with a Ryan creator, off a reel that cleared 44M views.',
      'Ryan Racela flew 7,299 miles from Metro Manila for it.',
      'Every larger event we have run since was scoped against what this one proved possible.',
    ],
    videos: [
      {
        id: 'WQisCN32j78',
        title: 'The World’s Largest Gathering of Ryans',
        channel: 'Ryan meets',
      },
      {
        id: '68ML1COHErI',
        title: 'Ryan Raved with Other Ryans at the Ryan Rave 2023',
        channel: 'Funhaus Too',
      },
    ],
    sources: [
      {
        href: 'https://www.latimes.com/california/newsletter/2023-09-11/at-the-dumb-and-wholesome-ryan-rave-everyone-belongs-and-everyones-ryan-essential-california',
        label: 'LA Times',
      },
      {
        href: 'https://www.meetup.com/ryanmeetup/events/295181182',
        label: 'Event listing',
      },
      {
        href: 'https://www.reddit.com/r/pics/comments/16jwbgu/we_gathered_hundreds_of_people_named_ryan_in_one/',
        label: 'Organizer recap',
      },
    ],
  },
  {
    src: '/ryan-meetup/rytoberfest.webp',
    alt: 'Rytoberfest event poster',
    label: 'Rytoberfest',
    date: 'October 2023, then September 2025',
    city: 'New York, NY',
    venue: 'Clinton Hall, then Torch & Crown',
    summary: [
      'Still riding high from the success of Ryan Rave, we came right back to New York City for our next big event: Rytoberfest. We put everything we had just learned about producing a huge party into an Oktoberfest celebration built around Ryans. What started at Clinton Hall in Brooklyn returned at Torch & Crown near Union Square. We invented a holiday, then turned it into a tradition.',
      'It was also our first foray into corporate event sponsorship, alongside Partiful. We had recently moved our event RSVPs from Meetup to Partiful, and Rytoberfest took that relationship beyond the RSVP page and into the event itself.',
    ],
    factsTitle: 'What made it a tradition',
    facts: [
      'We raised $10,000 for the Ryan Callahan Foundation.',
      'A three-part competition put Ryans to the test in stein holding, sausage eating, and beer drinking.',
      'Ryan Kristafer helped bring plenty of local news coverage to the event through FOX 5 NY.',
      'Ryan Clapham flew 9,572 miles from Buxton, Australia to be there.',
    ],
    sources: [
      {
        href: 'https://www.cbsnews.com/newyork/news/ryan-meetup-nyc-2025/',
        label: 'CBS New York',
      },
      {
        href: 'https://abc7ny.com/amp/post/ryan-meetup-holds-rytoberfest-event-union-square-nyc-attempting-set-guinness-world-record/17808903/',
        label: 'ABC7 New York',
      },
      {
        href: 'https://www.timeout.com/newyork/nightlife/rytoberfest-a-party-for-ryans',
        label: 'Time Out',
      },
    ],
  },
  {
    src: '/ryan-meetup/gameshow.webp',
    alt: 'Ryan Meetup game show contestants on stage',
    label: 'Ryan’s Game Show',
    date: 'January 25, 2025',
    city: 'San Diego, CA',
    venue: 'National Lampoon’s Yellow Door',
    summary: [
      'After attending Ryan Rave, Ryan Hailey reached out to tell us he loved what we were doing. If we ever needed content, he said, he would be honored if we showcased the “shitty game show” he had hosted in his garage a decade earlier. I watched it, loved it, and immediately recognized the exact kind of silliness we strive for at Ryan Meetup.',
      'I proposed bringing it back as a live Ryan Meetup event, complete with a live audience. He was down. We spent a long time trying to make it happen in LA, but couldn’t find a venue. Then a Ryan who ran a comedy club in San Diego reached out and offered us the space pro bono. Suddenly, the vision had a home.',
      'It took a long time to come together, but we were so excited to bring his game show back to life. We also worked closely with Felix Lighting, who sponsored the lighting equipment and props. Between prizes, podiums, lighting, and AV, we pulled together everything we needed to put on a real game show of our own.',
    ],
    factsTitle: 'How it went',
    facts: [
      'Ryan Hailey’s garage game show returned a decade later as a Ryan Meetup event with a live audience.',
      'A fellow Ryan offered his San Diego comedy club pro bono after a long search for a venue in LA.',
      'Felix Lighting sponsored the lighting equipment and props that helped bring the show to life.',
      'We put together prizes, podiums, lighting, and AV to give the revived show the full live game show treatment.',
      'Ryan Chang took the main title, and Ryan Dean won Ryan’s Got Talent.',
      'It closed out a two-night San Diego weekend that opened with Last Ryan Standing.',
    ],
    videos: [
      {
        id: '_UPNVjG1yfY',
        title: 'Ryan’s Game Show — Video 1',
      },
      {
        id: '2ctySokYvNE',
        title: 'Ryan’s Game Show — Video 2',
      },
    ],
    videoNote: 'Full edited cut coming soon, courtesy of Ryan Hailey.',
    sources: [
      {
        href: 'https://www.meetup.com/ryanmeetup/events/304903829',
        label: 'Event listing',
      },
      {
        href: 'https://www.ryanmeetup.com/awards',
        label: 'Meet the winners',
      },
      {
        href: 'https://www.ryanmeetup.com/events',
        label: 'Event archive',
      },
    ],
  },
  {
    src: '/ryan-meetup/deadpool.webp',
    alt: 'Ryans dressed as Deadpool at a private movie screening',
    label: '150 Deadpools & Wolverine',
    date: 'July 27, 2024',
    city: 'New York, NY',
    venue: 'AMC Empire 25',
    summary: [
      'Ryan Reynolds was nice enough to invite his friend Hugh to star in a movie with him, so we decided to return the favor: 150 Ryans, one theater, and exactly one Hugh invited to join us for Deadpool & Wolverine. Then we found our guy. His name?',
      'We teamed up with HOMAGE, who had just worked out a deal with Maximum Effort to create official Deadpool merchandise. Together, we put 150 Ryans in matching Deadpool shirts and gave our one Hugh his Wolverine moment.',
      'We also tried every avenue we could to get Reynolds himself there: Ryans at Disney and Marvel, his co-star Morena, his team at Maximum Effort. The man himself didn’t make it, but a woman named Ryann Reynolds did. The guest list kept writing its own jokes.',
    ],
    summaryCallout: {
      title: 'HUGH RYAN.',
      description: 'His actual name. We set out to find one Hugh for a room full of Ryans and found a Hugh who was ALSO A RYAN. What are the odds? You could not write a better ending to that search.',
    },
    factsTitle: 'The full premiere treatment',
    facts: [
      'We rented out a theater at AMC Empire 25 in Times Square for opening weekend and filled every seat.',
      'Reynolds donated Aviation Gin to the event, which we handed out as prizes.',
      'We created a custom Ryan-themed ad reel to run during the movie previews. Even the pre-show was in on the joke.',
      'The response on social media was so huge that people thought our event was part of the official Deadpool marketing campaign. We’ll take it.',
    ],
    sources: [
      {
        href: 'https://www.dexerto.com/tv-movies/deadpool-and-wolverine-screening-with-hundreds-of-ryans-and-1-hugh-goes-viral-2852490/',
        label: 'Dexerto',
      },
      {
        href: 'https://wegotthiscovered.com/marvel/now-this-is-boys-will-be-boys-an-army-of-ryans-take-to-the-theater-for-a-truly-unique-deadpool-wolverine-viewing/',
        label: 'We Got This Covered',
      },
      {
        href: 'https://www.ryanmeetup.com/events',
        label: 'Event archive',
      },
    ],
  },
];

export { ryanMeetupEvents };
