import Item from './TournamentsItems';

import { useState, useEffect } from 'react';
export default function Players() {
  const Player = [
    {
      name: 'Млад Олимпиец до 18г.',
      city: 'Пловдив',
      rating: 2500,
      date: '4 Май 2022',
    },
    {
      name: 'Млад Олимпиец до 15г.',
      rating: 1800,
      city: 'Пловдив',
      date: '4 Май 2021',
    },
    {
      name: 'Републиканско първенство до 21г.',
      rating: 1210,
      city: 'Пловдив',
      date: '4 Май 2020',
    },
    {
      name: 'Държавно Индивидуално Първенство',
      city: 'Пловдив',
      rating: 1500,
      date: '4 Май 2020',
    },
  ];
  const [PlayerFilters, setPlayerFilters] = useState({
    leagueUpper: 2500,
    leagueLower: 1000,
    name: '',
    city: '',
  });

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
              <div className="w-28 h-10 bg-white border border-gray-200  text-lg rounded-md ">
                <button
                  type="button"
                  className="w-full h-full   text-lg leading-4 border-red-400 border-b-2 hover:border-red-300 hover:border-b-2"
                >
                  Мъже
                </button>
              </div>
              <div className="w-28 h-10 bg-white border border-gray-200  text-lg rounded-md ">
                <button
                  type="button"
                  className="w-full h-full   text-lg leading-4 border-white border-b-2 hover:border-red-300 hover:border-b-2"
                >
                  Жени
                </button>
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
                  className="relative z-1 rounded-t-lg w-full border-b-2 h-8 border-red-400 \
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
        <div className="flex flex-wrap relative justify-center space-x-0 md:space-x-2 mr-2 md:mr-0 md:ml-0 ml-2 m-auto sm:max-w-5xl">
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
                  className="relative z-1 rounded-t-lg w-full border-b-2 h-8 border-red-400 \
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
                    className="relative z-1 rounded-t-lg w-full border-b-2 h-8 border-red-400 \
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
            {Player.map((item) => (
              <Item key={`${item.id}`} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
