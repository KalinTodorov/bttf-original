import Image from 'next/image';
import Link from 'next/link';
import {
  ChartBarIcon,
  HomeIcon,
  IdentificationIcon,
  UsersIcon,
} from '@heroicons/react/solid';
function Header() {
  const button_style =
    'border-gray-200 border bg-white text-black font-bold \
    py-2 px-2 rounded-md text-sm w-full h-13 \
     sm:text-base block  ';
  return (
    <div className="w-11/12 m-auto max-w-4xl min-h-full">
      {/* heading  */}
      <div className=" p-3.5 flex m-auto justify-between items-center ">
        {/* left */}
        <Link href="/">
          <div className="relative w-18 h-18 md:w-20 md:h-20 rounded-3xl shadow-lg">
            <Image src="/logo.png" layout="fill" objectFit="contain" />
          </div>
        </Link>

        {/* midle */}
        <div className="">
          <h1 className=" font-bold   sm:text-2xl xs:text-lg xxs:text-md text-md  ">
            БФТМ - Ранкинг
          </h1>
        </div>

        {/* right */}
        <div className="relative w-18 h-18 md:w-20 md:h-20 rounded-xl border border-grey-200 bg-white shadow-sm">
          <Image src="/ittf.png" layout="fill" objectFit="contain" />
        </div>

        {/* menu */}
      </div>

      <div className="flex justify-between  items-center space-x-1 sm:space-x-2 ">
        <Link href="/">
          <button className={button_style}>
            <div className="w-8 h-8 ml-auto mr-auto">
              <UsersIcon className="" />
            </div>

            <span className="hidden xxs:block">Състезатели</span>
          </button>
        </Link>
        <Link href="/tournaments">
          <button className={button_style}>
            <ChartBarIcon className="w-8 h-8 ml-auto mr-auto " />

            <span className="hidden xxs:block">Състезания</span>
          </button>
        </Link>
        <Link href="/clubs">
          <button className={button_style}>
            <div className="w-8 h-8 m-auto">
              <HomeIcon />
            </div>

            <span className="hidden xxs:block">Клубове</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
