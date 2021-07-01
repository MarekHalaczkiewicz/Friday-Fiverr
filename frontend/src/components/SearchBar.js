import React from "react";

const SearchBar = ({ keyword, setKeyword }) => {
  const BarStyling = {
    width: "20rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
    borderRadius: "15px",
  };
  return (
    <input
      style={BarStyling}
      key="random1"
      value={keyword}
      placeholder={"Search by location"}
      onChange={(e) => setKeyword(e.target.value)}
    />
  );
};

export default SearchBar;
