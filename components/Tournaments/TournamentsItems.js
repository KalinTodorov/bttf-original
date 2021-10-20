import Image from 'next/image';
import {
  ChartBarIcon,
  HomeIcon,
  UserGroupIcon,
  UsersIcon,
} from '@heroicons/react/solid';
function Item(props) {
  return (
    <li
      className=" bg-gray-100 hover:bg-gray-300 p-1 mb-2 rounded-md  text-base  \
    hover:border-gray-400 border border-gray-200  h-16 list-none "
    >
      <div className="flex mx-1 rounded-md vertical ">
        {/* First row  */}
        <div className=" items-stretch cursor-pointer mt-1 ml-2">
          <div className="">
            <Image
              src="/bg-flag.png"
              alt="bul"
              width="20px"
              height="15px"
              className="shadow-3xl ml-1 mr-1 inline"
            />{' '}
            <span>{props.name}</span>
          </div>
          <div className="text-left">
            <span className="text-gray-600">
              {props.date}, {props.city}
            </span>
          </div>
        </div>
        {/*  Third Row  */}
        <div className="flex-1 cursor-pointer text-right ">
          <div className="">
            <span className="hidden sm:inline-block mr-3 ">Срещи</span>
            <div className="h-5 w-5  inline-block text-gray-800 pt-1">
              <UsersIcon />
            </div>
          </div>
          <div>
            <span className="hidden sm:inline-block   mr-3 mb-4">Детайли</span>
            <div className="h-5 w-5 inline-block text-green-800 pt-1">
              <ChartBarIcon />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Item;
