type ContactIntentId = 'hiring' | 'initiative';

type ContactIntent = {
  /** Shown above the form so people can see what was assumed about them. */
  label: string;
  subject: string;
  messagePlaceholder: string;
};

/**
 * Every CTA that points at /contact carries an intent, so the form already knows
 * roughly why someone showed up. The subject gets prefilled; the message only
 * gets a placeholder, since a message I wrote for them isn't worth reading.
 */
const contactIntents: Record<ContactIntentId, ContactIntent> = {
  hiring: {
    label: 'Role or freelance work',
    subject: 'Full-time role or freelance project',
    messagePlaceholder: 'The team, the scope, what you\'re building, and where it is today...',
  },
  initiative: {
    label: 'Community or event',
    subject: 'Community initiative or event collaboration',
    messagePlaceholder: 'The idea, who it\'s for, and what part you\'d want me on...',
  },
};

const isContactIntentId = (value: string | null | undefined): value is ContactIntentId => {
  return typeof value === 'string' && Object.hasOwn(contactIntents, value);
};

/** Links to the contact page with an intent attached, e.g. /contact?intent=hiring */
const contactHref = (intent: ContactIntentId) => `/contact?intent=${intent}`;

export { contactIntents, contactHref, isContactIntentId };
export type { ContactIntent, ContactIntentId };
