import client from './contentful';

const fetchSocialMedia = async () => {
  const data = await client.getEntries(({ content_type: 'socialMedia' }));

  return data.items.map((entry) => entry.fields);
};

const fetchAccomplishments = async () => {
  const data = await client.getEntries(({ content_type: 'accomplishments' }));

  return data.items.map((entry) => entry.fields);
};

const fetchExperience = async () => {
  const data = await client.getEntries(({ content_type: 'experience' }));

  return data.items.map((entry) => entry.fields);
};

const fetchSkills = async () => {
  const data = await client.getEntries(({ content_type: 'skills' }));

  return data.items.map((entry) => entry.fields);
};

const fetchTestimonies = async () => {
  const data = await client.getEntries(({ content_type: 'testimonies' }));

  return data.items.map((entry) => entry.fields);
};

const fetchProjects = async () => {
  const data = await client.getEntries(({ content_type: 'projects' }));

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
