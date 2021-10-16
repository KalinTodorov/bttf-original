import Head from 'next/head';
import Header from '../components/Header';
import Players from '../components/Players';

export default function Clubs() {
  return (
    <div className="bg-gray-100 ">
      <Head>
        <title>Бъгарска Федерация по тенис на маса</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className=" mt-4 mb-4 text-center m-auto max-w-3xl w-11/12">
        {/* {Header} */}
        <div className="bg-fixed w-full h-full"></div>
        <Header />

        {/* {Main} */}
        <Players />

        <h1>this is the tabletennisbuild</h1>
      </div>
    </div>
  );
}
