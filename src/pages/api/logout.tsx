import { serialize } from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ error: 'Not logged in' });
  }

  const serialized = serialize('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 0,
    path: '/',
  });

  res.setHeader('Set-Cookie', serialized);
  return res.status(200).json({
    message: 'Logout successful',
  });
}
