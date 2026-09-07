import emailjs from '@emailjs/browser';

/** The payload the EmailJS template renders, and the shape the form collects. */
type ContactMessage = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

/**
 * Read on each send rather than at module scope. Next inlines NEXT_PUBLIC_*
 * at build time, so these have to stay as literal property reads.
 */
const emailConfig = () => ({
  serviceId: process.env.NEXT_PUBLIC_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_USER_ID,
});

/** Throws when the provider is unconfigured or rejects, so callers handle one failure path. */
const sendContactEmail = async (message: ContactMessage) => {
  const { serviceId, templateId, publicKey } = emailConfig();
  if (!serviceId || !templateId || !publicKey) throw new Error('EmailJS is not configured.');
  await emailjs.send(serviceId, templateId, message, publicKey);
};

export { sendContactEmail };
export type { ContactMessage };
