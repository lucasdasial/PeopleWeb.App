import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:13827/api",
  timeout: 5000,
  headers: { "Access-Control-Allow-Origin": "*" },
});
