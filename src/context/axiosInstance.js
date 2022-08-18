import axios from "axios";

const API_URL = "http://localhost:5005";

const token = localStorage.getItem("authToken");

const instance = axios.create({
  baseURL: API_URL,
  headers: { Authorization: `Bearer ${token}` },
});

export default instance;
