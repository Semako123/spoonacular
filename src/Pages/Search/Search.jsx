import "./search.css";
import React from "react";
import { Outlet } from "react-router-dom";

const Search = () => {
  return (
    <div>
      Search
      <Outlet />
    </div>
  );
};

export default Search;
