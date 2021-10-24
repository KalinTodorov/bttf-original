import Item from './MenItems';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { db } from '../../firebase';
import { collection, doc, getDoc } from '@firebase/firestore';
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

  for (let number = 0; number < 3; number++) {
    let isItemActive;
    if (activePage === number)
      isItemActive =
        'justify-center items-center w-3/12 flex flex-colmn pointer\
    border border-gray-200 rounded-md bg-red-300 text-gray-50 font-bold';
    else {
      isItemActive =
        'text-center flex flex-colmn w-3/12 justify-center items-center pointer\
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

  return (
    <>
      {/* filter 1 and 2 */}

      <div
        className="bg-white rounded-2xl  mt-4  border-gray-200 \
     border w-body m-auto max-w-5xl "
      >
        <div className="flex flex-wrap relative justify-center space-x-0 md:space-x-2 mr-2 md:mr-0 md:ml-0 ml-2  m-auto sm:max-w-5xl">
          <div
            className=" md:w-filter rounded-md  \
         inline-table table-fixed bg-gray-100   w-full border p-4 mt-2 "
          >
            <div className="flex justify-around">
              <div
                className="w-28 h-10  border border-gray-300  text-lg
               rounded-md bg-gradient-to-t from-gray-300 shadow-sm"
              >
                <Link href="/men">
                  <button
                    type="button"
                    className="w-full h-full   text-lg leading-4  "
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

          <div
            className="border-gray-200 border rounded-md p-4 inline-table table-fixed
          bg-gray-100 mt-2 md:w-filter w-full "
          >
            <div className="table-cell ">
              <div className="relative bg-white rounded-md">
                <select
                  className="relative z-1 rounded-t-lg w-full border-b-2 h-10 border-gray-400 \
              before:z-0 block focus:border-0"
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
        <div
          className="flex flex-wrap relative justify-center space-x-0
         md:space-x-2 mr-2 md:mr-0 md:ml-0 ml-2 m-auto sm:max-w-5xl"
        >
          <div
            className="border-gray-200 border rounded-md p-4 inline-table table-fixed
          bg-gray-100 mt-2 md:w-filter w-full"
          >
            <div className="select-wp">
              <div className="autocomplete">
                <p className="clear-filter" style={{ display: 'none' }}>
                  <span className="fa fa-trash-o"></span>
                </p>
                <input
                  type="text"
                  placeholder="(Име)"
                  className="relative z-1 rounded-t-lg w-full border-b-2 h-10 border-gray-400 \
                before:z-0 block focus:border-0"
                />
                <div
                  className="autocomplete-suggestions"
                  style={{ display: 'none' }}
                ></div>
              </div>
            </div>
          </div>

          <div
            className="border-gray-200 border rounded-md p-4 inline-table table-fixed
          bg-gray-100 mt-2 md:w-filter w-full"
          >
            <div className="filter">
              <div className="select-wp">
                <div className="autocomplete">
                  <p className="clear-filter" style={{ display: 'none' }}>
                    <span className="fa fa-trash-o"></span>
                  </p>
                  <input
                    type="text"
                    value=""
                    placeholder="(Клуб)"
                    className="relative z-1 rounded-t-lg w-full border-b-2 h-10 border-gray-400 \
                  before:z-0 block focus:border-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Players*/}
        <div className="">
          <div className="p-2 w-full">
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
        <div className="block sm:flex border m-2 -mt-2 rounded-md bg-gray-100 h-auto p-2 items-center flex-grow-0">
          <div className="flex justify-center sm:justify-end">
            <span>
              От{' '}
              {filteredMen.length > resultsPerPage
                ? resultsPerPage
                : filteredMen.length}{' '}
              от общо {filteredMen.length} състезатели.
            </span>
          </div>
          <nav className="flex-grow items-center  ">
            <ul className="list-none flex-grow flex relative h-11 justify-center sm:justify-end mr-2 ">
              {items}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
