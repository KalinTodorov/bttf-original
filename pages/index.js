import Head from 'next/head';
import Header from '../components/Header';
import Men from '../components/Men/Men';

export default function Home() {
  const menuSelection = 1;

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
        <Men />
      </div>
    </div>
  );
}
