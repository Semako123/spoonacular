import React from "react";
import "./random.css";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { FCard } from "../../components";

const Random = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="section__padding random">
      <h4>Looking for random inspiration on your next adventure</h4>
      <FCard
        title={data[0].title}
        likes={data[0].aggregateLikes}
        time={data[0].readyInMinutes}
        cuisines={data[0].cuisines}
        image={data[0].image}
      />
    </div>
  );
};

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "text/plain",
  },
};
const params = {
  apiKey: "2f2001aef23b46b6837008671ba6e399",
};
const API = axios.create({
  baseURL: "https://api.spoonacular.com/",
  https: config,
  params: params,
});

export const homeLoader = () => {
  return API.get("/recipes/random", { params: { ...params, number: 20 } }).then(
    (res) => res.data.recipes
  );
};

export default Random;
