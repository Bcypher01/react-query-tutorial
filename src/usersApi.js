import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const getUsers = () => api.get("/users").then((res) => res.data);

export const getUser = (id) =>
  api.get(`/user-detail/${id}/`).then((res) => res.data);

export const updateUser = ({ id, ...updateUser }) => {
  api.put(`/user-detail/${id}/`, updateUser).then((res) => res.data);
};
