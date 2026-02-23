import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/users";

// AXIOS
export const getUsersAxios = async () => {
  const res = await axios.get(API);
  return res.data;
};

// FETCH
export const getUsersFetch = async () => {
  const res = await fetch(API);
  return res.json();
};

export const addUser = async (user) => {
  const res = await axios.post(API, user);
  return res.data;
};