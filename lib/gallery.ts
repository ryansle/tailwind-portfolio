type GalleryItem = {
  src: string;
  alt: string;
  title?: string;
  city?: string;
};

/**
 * The rotating set of Ryan Meetup group photos, ordered so consecutive slides
 * change city and setting rather than showing two bars in a row. Sourced from
 * the ryanmeetup.com landing gallery and re-encoded to 1600px webp for here.
 */
const ryanMeetupGallery: GalleryItem[] = [
  {
    src: '/ryan-meetup/photos/gameshow.webp',
    alt: 'A packed theater of Ryans cheering behind a hand-painted Ryan Game Show banner',
    title: 'Ryan\'s Game Show',
    city: 'San Diego, CA',
  },
  {
    src: '/ryan-meetup/photos/ryancoaster.webp',
    alt: 'Hundreds of Ryans in name tags filling the atrium of the Mall of America',
    title: 'Ryde the Ryan Coaster',
    city: 'Minneapolis, MN',
  },
  {
    src: '/ryan-meetup/photos/rockies.webp',
    alt: 'Ryans filling a section of Coors Field for a Rockies game',
    title: 'Ryans @ Rockies',
    city: 'Denver, CO',
  },
  {
    src: '/ryan-meetup/photos/royale.webp',
    alt: 'A group of Ryans in paper crowns posing together at Ryan Royale',
    title: 'Ryan Royale',
    city: 'Toronto, ON',
  },
  {
    src: '/ryan-meetup/photos/serhant.webp',
    alt: 'A Ryan addressing a crowd through a megaphone at a Manhattan meetup',
    title: 'Ryans Own Manhattan',
    city: 'New York, NY',
  },
  {
    src: '/ryan-meetup/photos/rodeo.webp',
    alt: 'Ryans in cowboy hats gathered together at the Ryan Rodeo',
    title: 'Ryan Rodeo',
    city: 'Austin, TX',
  },
  {
    src: '/ryan-meetup/photos/deadpoolgroup.webp',
    alt: 'A crowd of Ryans dressed as Deadpool outside a private movie screening',
    title: '150 Deadpools & Wolverine',
    city: 'New York, NY',
  },
  {
    src: '/ryan-meetup/photos/stryan.webp',
    alt: 'Ryans in green celebrating St. Ryan\'s Day in Chicago',
    title: 'St. Ryan\'s Day',
    city: 'Chicago, IL',
  },
  {
    src: '/ryan-meetup/photos/ryami.webp',
    alt: 'Ryans posing together in pastel outfits at Ryami Vice',
    title: 'Ryami Vice',
    city: 'Miami, FL',
  },
  {
    src: '/ryan-meetup/photos/comedy.webp',
    alt: 'A bar full of Ryans raising drinks and taking selfies at a comedy night',
    title: 'Last Ryan Standing',
    city: 'San Diego, CA',
  },
  {
    src: '/ryan-meetup/photos/rytober.webp',
    alt: 'Ryans with steins at Rytoberfest in New York City',
    title: 'Rytoberfest II',
    city: 'New York, NY',
  },
  {
    src: '/ryan-meetup/photos/ryanroundup.webp',
    alt: 'A room full of Ryans posing together under a Ryan Meetup banner',
    title: 'Ryan Roundup',
    city: 'New York, NY',
  },
];

export { ryanMeetupGallery };

export type { GalleryItem };
