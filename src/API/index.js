import axios from "axios";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "text/plain",
  },
};
export const params = {
  apiKey: "78b5c27daa1b47a39fd33a1e22b23e64",
};

const API = axios.create({
  baseURL: "https://api.spoonacular.com/",
  https: config,
  params: params,
});

export default API;
