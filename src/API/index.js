import axios from "axios";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "text/plain",
  },
};
export const params = {
  apiKey: "2f2001aef23b46b6837008671ba6e399",
};

const API = axios.create({
  baseURL: "https://api.spoonacular.com/",
  https: config,
  params: params,
});

export default API;
