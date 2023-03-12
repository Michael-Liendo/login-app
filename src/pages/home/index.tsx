import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [user, setUser] = useState<{ email?: String }>({});

  useEffect(() => {
    const token = localStorage.getItem('token');

    async function getUserData() {
      const request = await fetch('http://localhost:3001/protected', {
        headers: {
          authorization: `${token}`,
        },
      });
      const response = await request.json();

      setUser(response);
    }
    getUserData();
  }, []);

  return (
    <>
      <h1 className="text-3xl">Hello {user.email}</h1>
      <Link href="/logout">Log out</Link>
    </>
  );
}
