import "./search.css";
import React from "react";
import { Outlet } from "react-router-dom";
import { search } from "../../assets/images";
import { Dropdown } from "../../components";
import {
  cuisine_list,
  diet_list,
  intolerances_list,
  meal_type,
} from "../../data";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log({ ...searchParams });

  const updatePara = (key, value) => {
    // setSearchParams({ ...searchParams, ...{ [key]: value } });
  };
  return (
    <>
      <div className="search section__padding">
        <h3>
          Let us help you find that <span> RECIPE!</span>
        </h3>
        <div className="search__input">
          <input type="text" placeholder="Search recipe..... Try 'Desserts' " />
          <img src={search} alt="" />
        </div>
        <div className="search__filters">
          <p>Filters</p>
          <div className="search__filters-menu">
            <Dropdown
              data={cuisine_list}
              title="Cuisine"
              onchange={updatePara}
              id="cuisine"
            />
            <Dropdown
              data={diet_list}
              title="Diet"
              onchange={updatePara}
              id="diet"
            />
            <Dropdown
              data={intolerances_list}
              title="Intolerances"
              onchange={updatePara}
              id="intolerances"
            />
            <Dropdown
              data={meal_type}
              title="Meal type"
              onchange={updatePara}
              id="type"
            />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Search;
