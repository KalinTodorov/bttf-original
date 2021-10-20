import Item from './PlayersItems';
import { useState, useEffect } from 'react';
export default function Players() {
  const Player = [
    { name: 'Калин', lastName: 'Тодорв', rating: 2500, id: 23 },
    { name: 'Ивелин', lastName: 'Величков', rating: 1800, id: 43 },
    { name: 'Станимир', lastName: 'Славов', rating: 1210, id: 43 },
    { name: 'Истанал', lastName: 'Мирослав', rating: 1500, id: 43 },
  ];
  const [PlayerFilters, setPlayerFilters] = useState({
    leagueUpper: 2500,
    leagueLower: 1000,
    name: '',
    city: '',
  });

  return (
    <>
      <div className="flex flex-wrap relative justify-center">
        <div
          className="rounded-md p-4 inline-table table-fixed bg-white border mt-1 md:w-filter \
        w-11/12 border-gray-200  "
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

        <div
          className="md:w-filter rounded-md p-4 sm:mt-1 \
         inline-table table-fixed bg-white ml-1 w-11/12 border border-gray-200 mt-1 "
        >
          <div className="flex justify-around">
            <button
              type="button"
              className="w-28 h-10 bg-red-300 text-lg rounded-md"
            >
              Мъже
            </button>

            <button
              type="button"
              className="w-28 bg-red-300 rounded-md  text-lg leading-4"
            >
              Жени
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap relative justify-center">
        <div
          className="rounded-md p-4 inline-table table-fixed bg-white mt-1 mb-0 md:mb-1 md:w-filter \
        w-11/12 border-gray-200 border "
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
           bg-white m-1 md:w-filter w-11/12"
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
                  placeholder="(Град)"
                  className="relative z-1 rounded-t-lg w-full border-b-2 h-8 border-red-400 \
                  before:z-0 block focus:border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-white rounded-2xl  mt-4  border-gray-200 \
     border w-11/12 m-auto max-w-4xl "
      >
        {/* Player Filters */}

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
