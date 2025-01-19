import { createClient } from '@sanity/client';
import { dataset, projectId } from '../env';
const sanityClient = createClient({
  projectId, // Replace with your Sanity project ID
  dataset, // Replace with your dataset name (e.g., 'production')
  useCdn: false,                // Use `false` if you want fresh data every time
  apiVersion: '2023-01-01',     // Replace with your API version
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // Add your token for write access
});

export default sanityClient;
