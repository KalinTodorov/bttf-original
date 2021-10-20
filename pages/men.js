import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Men from '../components/Men/Men';

export default function Home() {
  const menuSelection = 1;
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date().setMonth(startDate.getMonth() + 1)
  );
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

        <h1>this is the tabletennisbuild</h1>
      </div>
    </div>
  );
}
