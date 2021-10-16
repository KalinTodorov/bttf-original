import Image from 'next/image';
import Link from 'next/link';
function Header() {
  const button_style =
    'border-gray-200 border bg-white text-black font-bold \
    py-4 px-4 rounded-md text-sm w-full h-13  hover:border-t-0\
    hover:border-l-0 hover:border-r-0 hover:border-orange-300 hover:border-b-2\
    sm:text-base overflow-auto';
  return (
    <div className="w-11/12 m-auto max-w-4xl min-h-full">
      {/* heading  */}
      <div className=" p-3.5 flex m-auto justify-between items-center ">
        {/* left */}
        <div className="relative w-20 h-20 rounded-2xl shadow-lg">
          <Image src="/logo.png" layout="fill" objectFit="contain" />
        </div>

        {/* midle */}
        <div className="">
          <h1 className=" font-normal text-2xl sm:text-3xl ">БФТМ - Ранкинг</h1>
        </div>

        {/* right */}
        <div className="relative w-20 h-20 rounded-xl border border-grey-200 bg-white shadow-sm">
          <Image src="/ittf.png" layout="fill" objectFit="contain" />
        </div>

        {/* menu */}
      </div>

      <div className="flex justify-between items-center space-x-2">
        <button className={button_style}>Състезатели</button>
        <button className={button_style}>Състезания</button>
        <button className={button_style}>Клубове</button>
      </div>
    </div>
  );
}

export default Header;
