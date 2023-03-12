import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const route = useRouter();
  async function setCookie() {
    route.push('http://localhost:3001/cookie');
    /*
    const request = await fetch('http://localhost:3001/cookie');
    const response = await request.json();
    console.log(response);*/
  }
  return (
    <>
      <h1>Hello!</h1>
      please sign
      <Link href="/authenticate">Sign Up</Link>
      <button onClick={setCookie}>Click me</button>
    </>
  );
}
