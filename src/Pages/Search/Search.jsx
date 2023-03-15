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
import { useSearchParams, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const updatePara = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(key, value);
    setSearchParams(newParams);
  };

  const updateQuery = (e) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("query", e.target.value);
    setSearchParams(newParams);
  };

  const handleSubmit = () => {
    navigate(`/search/result${location.search}`);
  };
  return (
    <>
      <div className="search section__padding">
        <h3>
          Let us help you find that <span> RECIPE!</span>
        </h3>
        <div className="search__input">
          <input
            type="text"
            placeholder="Search recipe..... Try 'Desserts' "
            onChange={updateQuery}
            value={searchParams.get("query") ? searchParams.get("query") : ""}
          />
          <div onClick={handleSubmit}>
            <img src={search} alt="" />
          </div>
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
              data={meal_type}
              title="Meal type"
              onchange={updatePara}
              id="type"
            />
            <Dropdown
              data={intolerances_list}
              title="Intolerances"
              onchange={updatePara}
              id="intolerances"
            />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Search;
