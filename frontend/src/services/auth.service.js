import axios from "axios";
import { BASE_URL, PORT } from "../config/constants.cfg";

const URL_API = `http://${BASE_URL}:${PORT}/api/auth`;
// const URL_API = `https://${BASE_URL}:${PORT}/api/auth`;
export function addUser(user) {
  return axios.post(`${URL_API}/register`, user);
}

export function login(data) {
  return axios.post(`${URL_API}/login`, data, {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
}

export function logout() {
  return axios.post(`${URL_API}/logout`, undefined, { withCredentials: true });
  // return fetch(`${URL_API}/logout`, {method: 'POST',credentials: 'include'})
}
