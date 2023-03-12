import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handlerGetUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { token } = req.cookies;

  console.log(token);

  const request = await fetch('http://localhost:3001/protected', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const response = await request.json();

  if (response.ok) {
    return res.status(200).json(response);
  } else {
    res.json(response);
  }
}
