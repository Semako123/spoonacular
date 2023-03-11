import React from "react";
import "./home.css";
import { hbg } from "../../assets/images";
import { useEffect, useState } from "react";
import { Button } from "../../components";

const Home = () => {
  const [bgHeight, setBgHeight] = useState("");
  useEffect(() => {
    setBgHeight(document.querySelector(".home__bg img").offsetHeight);
    console.log(bgHeight)
  }, );
  return (
    <div className="home" style={{ height: `${bgHeight}px` }}>
      <div className="home__bg">
        <img src={hbg} alt="" />
      </div>
      <div className="home__content">
        <h2>Be the chef of your kitchen</h2>
        <p>From Breakfast to Dinner, We have You Covered</p>
        <Button variant="filled">Get Cooking Now</Button>
      </div>
    </div>
  );
};

export default Home;
