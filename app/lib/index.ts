import { client } from './sanityClient';

export const getEvents = async () => {
  const CONTENT_QUERY = `*[_type == "event" && (startDateTime > now() || endDateTime > now())] | order(startDateTime asc) {
    ...,
    location {
      ...
    }
  }
  `;
  return await client.fetch(CONTENT_QUERY);
}