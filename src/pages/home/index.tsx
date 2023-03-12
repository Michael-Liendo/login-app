import Link from 'next/link';

export default function Home({ user }: any) {
  console.log(user);

  return (
    <>
      <h1 className="text-3xl">Hello </h1>
      <Link href="/logout">Log out</Link>
    </>
  );
}

export async function getServerSideProps() {
  const request = await fetch('http://localhost:3000/api/getUser');
  const response = await request.json();
  console.log(response);

  return {
    props: {
      user: response,
    }, // will be passed to the page component as props
  };
}
