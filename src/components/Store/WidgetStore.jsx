import React from "react";

export default function WidgetStore({
  searchQuery,
  onSearchChange,
  filteredData,
}) {
  const genres = [...new Set(filteredData.map((item) => item.genre))];

  return (
    <div className="widjet --filters">
      <div className="widjet__head">
        <h3 className="uk-text-lead">Games Store</h3>
      </div>
      <div className="widjet__body">
        <div
          className="uk-grid uk-child-width-1-6@xl uk-child-width-1-3@l uk-child-width-1-2@s uk-flex-middle uk-grid-small"
          data-uk-grid
        >
          <div className="uk-width-1-1">
            <div className="search">
              <div className="search__input">
                <i className="ico_search"></i>
                <input
                  type="search"
                  name="search"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={onSearchChange}
                />
              </div>
              <div className="search__btn">
                <button type="button">
                  <i className="ico_microphone"></i>
                </button>
              </div>
            </div>
          </div>

          <div>
            <select className="js-select">
              <option value="">Category: All</option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>

          <div className="uk-text-right">
            <a href="#!">{filteredData.length} item</a>
          </div>
        </div>
      </div>
    </div>
  );
}
