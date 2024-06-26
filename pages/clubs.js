import Head from 'next/head';
import Header from '../components/Header';
import Clubs from '../components/Clubs';

export default function Home() {
  const menuSelection = 3;
  return (
    <div className="bg-gray-50 bg-contain  h-full min-h-screen ">
      <Head>
        <title>Бъгарска Федерация по тенис на маса</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="">
        {/* {Header} */}
        <Header menuSelection={menuSelection} />

        {/* {Main} */}
        <Clubs />

        <h1>this is the tabletennisbuild</h1>
      </div>
    </div>
  );
}
