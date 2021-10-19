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
      className=" bg-gray-100 hover:bg-gray-300 p-1 mb-2 rounded-md  text-base  hover:border-2 \
    hover:border-gray-500  h-16 list-none "
    >
      <div className="flex mx-1 rounded-md vertical ">
        {/* First row  */}
        <div className="mr-2">
          <span> {1}</span>
        </div>
        {/* Second row  */}
        <div className=" items-stretch cursor-pointer">
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
          <div className="grid text-left align-middle">
            <span className="text-red-600">{props.rating} Rating</span>
          </div>
        </div>
        {/*  Third Row  */}
        <div className="flex-1 cursor-pointer text-right ">
          <div className="">
            <span className="invisible xs:visible mr-4 ">Профил</span>
            <div className="h-5 w-5  inline-block">
              <UsersIcon />
            </div>
          </div>
          <div>
            <span className="invisible xs:visible  mr-4 mb-4">Детайли</span>
            <div className="h-5 w-5 inline-block text-green-800">
              <ChartBarIcon />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Item;
