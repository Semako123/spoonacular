import React from "react";
import "./random.css";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const Random = () => {
  const data = useLoaderData();
  return (
    <div className="section__padding random">
      <h4>Looking for random inspiration on your next adventure</h4>
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
    (res) => res
  );
};

export default Random;
