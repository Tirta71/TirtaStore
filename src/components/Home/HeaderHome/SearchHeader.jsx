import React, { useState } from "react";
import { motion } from "framer-motion";
import { dataGameCard } from "../../../Data/dataGameCard";
import "./searchHeader.css";

export default function SearchHeader() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = dataGameCard.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="page-header__search">
        <div className="search">
          <div className="search__input">
            <i className="ico_search"></i>
            <input
              type="search"
              name="search"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
      <div>
        <motion.div
          className={searchTerm ? "container-search-header" : ""}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {searchTerm && filteredData.length > 0 ? (
            filteredData.map((item) => (
              <motion.div
                className="widjet__body"
                key={item.id}
                style={{ marginTop: "10px" }}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="widjet-game">
                  <div className="widjet-game__media">
                    <a href={item.slug}>
                      <img src={item.image} alt={item.title} />
                    </a>
                  </div>
                  <div className="widjet-game__info">
                    <a className="widjet-game__title" href={item.slug}>
                      {item.title}
                    </a>
                    <div className="widjet-game__record">{item.date}</div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              className="no-results"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {searchTerm ? "No results found." : ""}
            </motion.div>
          )}
        </motion.div>
      </div>
    </>
  );
}
