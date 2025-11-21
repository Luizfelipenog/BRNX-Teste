import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000", // ajuste a porta se for outra
});
