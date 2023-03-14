import React from "react";
import "./home.css";
import { hbg } from "../../assets/images";
import { useState } from "react";
import { Button } from "../../components";
import { Link } from "react-router-dom";

const Home = () => {
  const [bgHeight, setBgHeight] = useState("");
  return (
    <div className="home" style={{ height: `${bgHeight}px` }}>
      <div className="home__bg">
        <img
          src={hbg}
          alt=""
          onLoad={() => {
            setBgHeight(document.querySelector(".home__bg img").offsetHeight);
          }}
        />
      </div>
      <div className="home__content">
        <h2>Be the chef of your kitchen</h2>
        <p>From Breakfast to Dinner, We have You Covered</p>
        <Link to="/cuisines">
          <Button variant="rounded" color="gold">
            Get Cooking Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
