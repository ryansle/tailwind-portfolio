import client from './contentful';

const fetchSocialMedia = async () => {
  const data = await client.getEntries(({ content_type: 'Social Media' }));

  return data.items.map((entry) => entry.fields);
};

const fetchAccomplishments = async () => {
  const data = await client.getEntries(({ content_type: 'Accomplishments' }));

  return data.items.map((entry) => entry.fields);
};

const fetchExperience = async () => {
  const data = await client.getEntries(({ content_type: 'Experience' }));

  return data.items.map((entry) => entry.fields);
};

const fetchSkills = async () => {
  const data = await client.getEntries(({ content_type: 'skills' }));

  return data.items.map((entry) => entry.fields);
};

const fetchTestimonies = async () => {
  const data = await client.getEntries(({ content_type: 'Testimonies' }));

  return data.items.map((entry) => entry.fields);
};

const fetchProjects = async () => {
  const data = await client.getEntries(({ content_type: 'Projects' }));

  return data.items.map((entry) => entry.fields);
};

export {
  fetchSocialMedia,
  fetchAccomplishments,
  fetchExperience,
  fetchSkills,
  fetchTestimonies,
  fetchProjects
};
