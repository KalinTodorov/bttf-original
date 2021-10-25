import Item from './MenItems';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { db } from '../../firebase';
import { collection, doc, getDoc } from '@firebase/firestore';
import {
  SearchIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from '@heroicons/react/outline';
export default function Players() {
  const [men, setMen] = useState([]);
  const [filteredMen, setFilteredMen] = useState([]);
  const [activePage, setActivePage] = useState(0);

  const fetchPlayers = async () => {
    const docRef = doc(db, 'players', 'men');
    const docSnap = await getDoc(docRef);
    // setMen(data);
    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
      let data = docSnap.data();
      data = data.all;
      console.log(data);

      setMen([...data]);
      setFilteredMen([...data]);
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
  };
  useEffect(() => {
    fetchPlayers();
    console.log(men);
  }, []);
  const resultsPerPage = 1;
  let numOfPages = Math.ceil(filteredMen.length / resultsPerPage);
  let items = [];

  const LowerPage = () => {
    if (activePage !== 0) {
      setActivePage(activePage - 1);
    }
  };
  const HigherPage = () => {
    if (activePage !== 10) {
      setActivePage(activePage + 1);
    }
  };
  items.push(
    <li
      className="text-center flex flex-colmn w-3/12 justify-center items-center cursor-pointer\
    border border-gray-300 rounded-md  bg-white text-gray-700"
      onClick={LowerPage}
    >
      <ArrowLeftIcon className="w-4" />
    </li>
  );
  for (let number = 0; number < 3; number++) {
    let isItemActive;
    if (activePage === number)
      isItemActive =
        'justify-center items-center w-3/12 flex flex-colmn pointer\
    border border-gray-200 rounded-md bg-gradient-to-t from-gray-300 text-black  ';
    else {
      isItemActive =
        'text-center flex flex-colmn w-3/12 justify-center items-center cursor-pointer\
      border border-gray-300 rounded-md  bg-white text-gray-700';
    }

    const handlePaginationChange = () => {
      setActivePage(number);
    };

    items.push(
      <li
        className={isItemActive}
        key={number}
        onClick={handlePaginationChange}
      >
        <a>{number}</a>
      </li>
    );
  }
  items.push(
    <li
      className="text-center flex flex-colmn w-3/12 justify-center items-center cursor-pointer\
    border border-gray-300 rounded-md  bg-white text-gray-700"
      onClick={HigherPage}
    >
      <ArrowRightIcon className="w-4" />
    </li>
  );

  return (
    <>
      <div
        className="bg-white rounded-2xl  mt-2  border-gray-200 \
     border w-body m-auto max-w-5xl "
      >
        {/* filter 1 and 2 */}
        <div
          className="flex flex-wrap relative justify-center space-x-0 md:space-x-1
        mr-1 md:mr-0 md:ml-0 ml-1  m-auto sm:max-w-5xl"
        >
          {/* filter by sex */}
          <div
            className=" md:w-filter rounded-lg \
         inline-table table-fixed bg-gray-100   w-full border p-4 mt-1 "
          >
            <div className="flex justify-around">
              <div
                className="w-28 h-10  border border-gray-300  text-lg
               rounded-md bg-gradient-to-t from-gray-300 to-gray-200 shadow-sm"
              >
                <Link href="/men">
                  <button
                    type="button"
                    className="w-full h-full   text-lg leading-4 font-semibold "
                  >
                    Мъже
                  </button>
                </Link>
              </div>

              <div className="w-28 h-10 bg-white border border-gray-200  text-lg rounded-md ">
                <Link href="/women">
                  <button
                    type="button"
                    className="w-full h-full   text-lg leading-4 hover:from-gray-100  hover:bg-gradient-to-t"
                  >
                    Жени
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* filter by league */}
          <div
            className="border-gray-200 border rounded-md p-4 inline-table table-fixed
          bg-gray-100 mt-1 md:w-filter w-full "
          >
            <div className="table-cell ">
              <div className="relative  rounded-md  h-12 ">
                <select
                  className="p-1  relative rounded-lg w-full  h-full  \
               block  border border-gray-300 focus:outline-none focus:border-gray-400
              focus:border-2 focus:ring-2 focus:ring-gray-200 bg-gradient-to-t from-gray-300
              to-gray-200 shadow-md font-semibold"
                >
                  <option value="0">Всички Състезатели</option>
                  <option value="2050">Супер Лига</option>
                  <option value="1900">А Лига</option>
                  <option value="1750">Б Лига</option>
                  <option value="1600">В Лига</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* filter 3 and 4 */}
        <div
          className="flex flex-wrap relative justify-center space-x-0
         md:space-x-1 mr-1 md:mr-0 md:ml-0 ml-1 m-auto sm:max-w-5xl"
        >
          {/*filter by name */}
          <div
            className="border-gray-200 border rounded-md p-4 inline-table table-fixed
          bg-gray-100 mt-1 md:w-filter w-full"
          >
            <div className="relative rounded-sm  p-1 h-12">
              <div className=" absolute inset-y-0 fl-3 flex items-center pointer-events-none">
                <SearchIcon className="ml-2 h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="(Име)"
                className="  w-full h-full pl-8 rounded-md bg-white block text-md sm:text-base
                  border border-gray-200 focus:outline-none focus:border-gray-400
                 focus:border-2 focus:ring-2 focus:ring-gray-200 font-semibold"
              />
            </div>
          </div>

          <div
            className="border-gray-200 border rounded-md p-4 inline-table table-fixed
          bg-gray-100 mt-1 md:w-filter w-full"
          >
            <div className="relative rounded-sm  p-1 h-12">
              <div className=" absolute inset-y-0 fl-3 flex items-center pointer-events-none">
                <SearchIcon className="ml-2 h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="(Клуб)"
                className="  w-full h-full pl-8 rounded-md bg-white block text-md sm:text-base
                   border border-gray-200 focus:outline-none focus:border-gray-400
                 focus:border-2 focus:ring-2 focus:ring-gray-200 font-semibold"
              />
            </div>
          </div>
        </div>

        {/* Map Players*/}
        <div className="">
          <div className="p-1 w-full">
            {men
              .sort(function (a, b) {
                return b.rating - a.rating;
              })
              .map((item) => (
                <Item key={`${item.id}`} {...item} />
              ))}
          </div>
        </div>

        {/* Paginator */}
        <div className="block sm:flex border m-1 -mt-1 rounded-md bg-gray-100 h-auto p-2 items-center flex-grow-0">
          <div className="flex justify-center sm:justify-end">
            <span>
              От{' '}
              {filteredMen.length > resultsPerPage
                ? resultsPerPage
                : filteredMen.length}{' '}
              от общо {filteredMen.length} състезатели.
            </span>
          </div>
          <nav className="flex-grow items-center ml-2 sm:ml-4  ">
            <ul className="list-none flex-grow flex relative h-11 justify-center sm:justify-end mr-2 font-semibold">
              {items}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
