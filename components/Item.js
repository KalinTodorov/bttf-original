import Image from 'next/image';
function Item(props) {
  return (
    <li className="bg-gray-200 p-1 mb-2 rounded-md  text-sm  hover:h-16 hover:text-base h-12 list-none ">
      <div className="flex mx-1 mb-2 rounded-md  ">
        <div>
          <span> {1}</span>
        </div>

        <div className="">
          <div calssName="">
            <Image
              src="/bg-flag.png"
              alt="bul"
              width="20px"
              height="15px"
              className="rounded-sm m-"
            />
            <span className="org">BUL</span>
            <span>
              {props.name} {props.lastName}
            </span>
          </div>
          <div>
            <span className="text-red-600">{props.rating} Rating</span>
          </div>
        </div>
        <div className="flex-1 grid cursor-pointer text-right">
          <div>
            <span className="hide-mobile m-r-5">Профил</span>
            <i className="fa fa-user-circle text-grey"></i>
          </div>
          <div>
            <span className="hide-mobile m-r-5 ">Детайли</span>
            <i className="fa fa-bar-chart text-lgreen"></i>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Item;
