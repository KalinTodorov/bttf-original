import Image from 'next/image';
import {
  ChartBarIcon,
  HomeIcon,
  IdentificationIcon,
  UsersIcon,
} from '@heroicons/react/solid';
function Item(props) {
  return (
    <li
      className="bg-gray-200  p-1 mb-2 rounded-md  text-sm  hover:h-14 hover:border-2 \
    hover:border-gray-500 hover:text-base h-12 list-none "
    >
      <div className="flex mx-1 rounded-md vertical ">
        {/* First row  */}
        <div className="mr-2">
          <span> {1}</span>
        </div>
        {/* Second row  */}
        <div className="">
          <div className="">
            <Image
              src="/bg-flag.png"
              alt="bul"
              width="20px"
              height="15px"
              className="shadow-md ml-1"
            />
            <span className="mr-1  text-sm col text-gray-600">BUL</span>
            <span>
              {props.name} {props.lastName}
            </span>
          </div>
          <div>
            <span className="text-red-600">{props.rating} Rating</span>
          </div>
        </div>
        {/*  Third Row  */}
        <div className="flex-1 grid cursor-pointer text-right align-middle">
          <div className="">
            <span className="xss:invisible visible mr-4 ">Профил</span>
            <div className="h-4 w-4 inline-block">
              <UsersIcon />
            </div>
          </div>
          <div>
            <span className="hide-mobile mr-4 mb-4">Детайли</span>
            <div className="h-4 w-4 inline-block text-green-800">
              <ChartBarIcon />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Item;
