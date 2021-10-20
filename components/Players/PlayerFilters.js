function PlayerFilters() {
  return (
    <>
      <div className="selectors">
        <div className="match-filters">
          <div className="filter">
            <div className="select-wp">
              <select onChange={(e) => handleLeague(e)}>
                <option value="0">Всички Състезатели</option>
                <option value="2050">Супер Лига</option>
                <option value="1900">А Лига</option>
                <option value="1750">Б Лига</option>
                <option value="1600">В Лига</option>
              </select>
            </div>
          </div>
        </div>

        <div className="match-filters">
          <div className="filter">
            <div className="select-wp">
              <div className="autocomplete">
                <p className="clear-filter" style={{ display: 'none' }}>
                  <span className="fa fa-trash-o"></span>
                </p>
                <input
                  type="text"
                  value={setAfilter.city}
                  onChange={handleCity}
                  placeholder="(Град)"
                  className="form-control input-sm "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="selectors">
        <div className="match-filters">
          <div className="filter">
            <div className="select-wp">
              <div className="autocomplete">
                <p className="clear-filter" style={{ display: 'none' }}>
                  <span className="fa fa-trash-o"></span>
                </p>
                <input
                  type="text"
                  onChange={handleName}
                  placeholder="(Име)"
                  className="form-control input-sm"
                />
                <div
                  className="autocomplete-suggestions"
                  style={{ display: 'none' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayerFilters;
