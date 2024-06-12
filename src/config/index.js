import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://dummyjson.com",
});

export default baseUrl;
