import Authenticate from '@/components/Authenticate';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function AuthenticatePage() {
  const router = useRouter();

  useEffect(() => {
    (() => {
      if (localStorage.getItem('token')?.length) return router.push('/home');
    })();
  }, []);
  return (
    <>
      <Authenticate />
    </>
  );
}
