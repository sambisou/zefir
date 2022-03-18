// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { getRandomHomes } from '../../business/getRandomHomes';

/**
 * Return random homes for the landing page
 * 
 * THIS PREDEFINED API ENDPOINT IS PART OF THE EXERCISE, DO NOT MODIFY IT
 */
export default async function handleRequest(
  _req: NextApiRequest,
  res: NextApiResponse<Home[]>
) {
  res.status(200).json(await getRandomHomes());
}
