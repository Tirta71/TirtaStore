import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
export default function ContentHeader({ searchTerm, filteredData }) {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  return (
    <>
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
              style={{
                marginTop: "10px",
                borderBottom: "1px solid #f46119",
                padding: isMobile ? "0" : "",
              }}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="widjet-game">
                <div className="widjet-game__media">
                  <a href={item.slug}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        height: "50px",
                        objectFit: "cover",
                        display: isMobile ? "none" : "block",
                      }}
                    />
                  </a>
                </div>
                <div className="widjet-game__info">
                  <a
                    className="widjet-game__title"
                    href={item.slug}
                    style={{ fontSize: isMobile ? "10px" : "15px" }}
                  >
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
    </>
  );
}
