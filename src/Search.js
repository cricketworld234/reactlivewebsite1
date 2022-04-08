import React, { useState } from "react";
import Sresult from "./Sresult";

const Search = () => {
  const [news, setNews] = useState("");
  const input = (event) => {
    const data = event.target.value;

    setNews(data);
  };

  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search Anything"
          value={news}
          onChange={input}
        />
        {news === "" ? null : <Sresult name={news} />}
      </div>
    </>
  );
};
export default Search;
