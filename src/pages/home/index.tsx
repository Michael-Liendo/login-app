import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [user, setUser] = useState<{
    email?: string;
    name?: string;
    lastName?: string;
  }>({});

  useEffect(() => {
    async function getProfile() {
      const request = await fetch('http://localhost:3000/api/profile');
      const response = await request.json();

      setUser(response);
    }
    getProfile();
  }, []);

  return (
    <>
      <h1 className="text-3xl">
        Hello {user.name} {user.lastName}
      </h1>
      <Link href="/logout">Log out</Link>
    </>
  );
}
