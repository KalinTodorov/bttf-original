import Head from 'next/head';
import Header from '../components/Header';
import Players from '../components/Players/Players';

export default function Home() {
  return (
    <div className="bg-gray-50 bg-contain  h-full min-h-screen ">
      <Head>
        <title>Бъгарска Федерация по тенис на маса</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="">
        {/* {Header} */}
        <Header />

        {/* {Main} */}
        <Players />

        <h1>this is the tabletennisbuild</h1>
      </div>
    </div>
  );
}
