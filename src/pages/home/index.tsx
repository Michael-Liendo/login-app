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
      <section className=" bg-[#071e34] flex font-medium items-center justify-center h-screen">
        <section className="w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
          <div className="flex items-center justify-between">
            <Link href="/logout" className="text-gray-400 text-sm">
              Logout
            </Link>
          </div>
          <div className="mt-6 w-fit mx-auto">
            <img
              src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe"
              className="rounded-full w-28 "
              alt="profile picture"
            />
          </div>

          <div className="mt-8 ">
            <h2 className="text-white font-bold text-2xl tracking-wide">
              {user.name} <br /> {user.lastName}
            </h2>
          </div>
          <p className="text-emerald-400 font-semibold mt-2.5">{user.email}</p>
        </section>
      </section>
    </>
  );
}
