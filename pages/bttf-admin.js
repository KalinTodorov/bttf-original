import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Women from '../components/Women/Women';
import { signOut, useSession } from 'next-auth/react';
import { db } from '../firebase';
export default function Home() {
  const menuSelection = 1;

  const { data: session } = useSession();
  console.log('message', session);
  console.log(db);

  return (
    <div className="bg-gray-50 bg-contain  h-full min-h-screen ">
      <Head>
        <title>Бъгарска Федерация по тенис на маса</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="">
        {session ? <h1>sadsad</h1> : <h1>not logged in</h1>}
        {/* {Header} */}
        <Header menuSelection={menuSelection} />

        {/* {Main} */}
        <Women />
      </div>
    </div>
  );
}
