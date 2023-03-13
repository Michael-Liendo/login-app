import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Logout() {
  const router = useRouter();
  useEffect(() => {
    async function logout() {
      fetch('/api/logout');
      router.push('/');
    }
    logout();
  }, [router]);

  return <h1>Logging out...</h1>;
}
