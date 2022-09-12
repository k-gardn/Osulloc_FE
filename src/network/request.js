import axios from "axios";

export const instance = axios.create({
  // baseURL: "http://localhost:3001",
  baseURL: "http://3.36.123.198",
  // "Access-Control-Allow-Credentials": "*",
});
