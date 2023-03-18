import axios from "axios";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "text/plain",
  },
};
export const params = {
  apiKey: "2f346feeb59a40ef9aeac79ad8dd5cf6",
  number: 100,
};

const API = axios.create({
  baseURL: "https://api.spoonacular.com/",
  https: config,
  params: params,
});

export default API;
