import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Hello!</h1>
      <Link href="/authenticate">Sign Up</Link>
    </>
  );
}
