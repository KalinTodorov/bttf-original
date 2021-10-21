import Image from 'next/image';
import Link from 'next/link';
import {
  ChartBarIcon,
  HomeIcon,
  IdentificationIcon,
  UsersIcon,
} from '@heroicons/react/solid';
function Header(props) {
  const button_style =
    'border-gray-200 border bg-white text-black font-bold \
    py-2 px-2 rounded-md text-sm w-full h-13 \
     sm:text-base block  ';

  // nav bar option css
  const active = 'border-red-400 border-b-2 ';
  const unactive =
    'border-white border-b-2 hover:border-red-300 hover:border-b-2';
  let buttons = [];
  if (props.menuSelection) {
    for (let i = 1; i < 4; i++) {
      if (i === props.menuSelection) {
        buttons.push(active);
        continue;
      }
      buttons.push(unactive);
    }
  }
  return (
    <div className="w-body m-auto max-w-5xl">
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
          <h1 className=" font-bold font-body  sm:text-2xl xs:text-lg xxs:text-md text-md  ">
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
        <Link href="/men">
          <div className={`${buttons[0]} w-full`}>
            <button className={button_style}>
              <div className="w-8 h-8 ml-auto mr-auto text-gray-700 ">
                <UsersIcon className="" />
              </div>

              <span className="hidden xxs:block font-body2">Състезатели</span>
            </button>
          </div>
        </Link>
        <Link href="/tournaments">
          <div className={`${buttons[1]} w-full`}>
            <button className={button_style}>
              <ChartBarIcon className="w-8 h-8 ml-auto mr-auto text-gray-700" />

              <span className="hidden xxs:block font-body2">Състезания</span>
            </button>
          </div>
        </Link>
        <Link href="/clubs">
          <div className={`${buttons[2]} w-full`}>
            <button className={button_style}>
              <div className="w-8 h-8 m-auto text-gray-700">
                <HomeIcon />
              </div>

              <span className="hidden xxs:block font-body2">Клубове</span>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
