import "./navbar.css";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { loupe, restaurant, dish } from "../../assets/images";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div>
          <Link to="/home">
            <img src={restaurant} alt="" />
          </Link>
        </div>
        <div>
          <Link to="/cuisines">
            <img src={dish} alt="" />
          </Link>
          <Link to="/search">
            <img src={loupe} alt="" />
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
