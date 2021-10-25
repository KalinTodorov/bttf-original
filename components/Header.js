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
    'border-gray-200 border   text-black font-bold \
    py-2 px-2 rounded-md text-sm w-full h-13 \
     sm:text-base block shadow-sm';

  // nav bar option css
  const active =
    'bg-gradient-to-t from-gray-300 to-gray-200 shadow-md  border-gray-300 font-bold';
  const unactive = 'hover:bg-gradient-to-t  hover:from-gray-100 font-semibold';
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

      <div className="flex justify-between  items-center space-x-1 sm:space-x-2 font-bold">
        <Link href="/men">
          <button className={`${button_style} ${buttons[0]}`}>
            <div className="w-8 h-8 ml-auto mr-auto text-gray-700">
              <UsersIcon className="" />
            </div>

            <span className="hidden xxs:block ">Състезатели</span>
          </button>
        </Link>
        <Link href="/tournaments">
          <button className={`${button_style} ${buttons[1]}`}>
            <div className="w-8 h-8 ml-auto mr-auto text-gray-700">
              <ChartBarIcon className="" />
            </div>

            <span className="hidden xxs:block ">Състезания</span>
          </button>
        </Link>
        <Link href="/clubs">
          <button className={`${button_style} ${buttons[2]}`}>
            <div className="w-8 h-8 ml-auto mr-auto text-gray-700">
              <HomeIcon className="" />
            </div>

            <span className="hidden xxs:block ">Клубове</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
