import React from "react";
import "./home.css";
import { hbg } from "../../assets/images";
// import axios from "axios";

const Home = () => {

  // const config = {
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Content-Type": "application/json",
  //   },
  // };

  // const API = axios.create({
  //   baseURL: "https://api.spoonacular.com/",
  //   https: config,
  // });

  // API.get("/recipes/complexSearch", {
  //   params: {
  //     cuisine:"italian",
  //     apiKey: "2f2001aef23b46b6837008671ba6e399",
  //   },
  // }).then((res) => {
  //   console.log(res);
  // });
  return (
    <div>
      <div className="home__bg">
        <img src={hbg} alt="" />
      </div>
    </div>
  );
};

export default Home;
