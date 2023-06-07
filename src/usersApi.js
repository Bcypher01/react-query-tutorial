import axios from "axios";

const api = axios.create({
  baseURL: "https://api.tvmaze.com/search/shows?q=all",
});

export const getUsers = () => api.get().then((res) => res.data);
