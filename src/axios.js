import axios from "axios";

const instance = axios.create({
  baseURL: "https://myshop-server-production.up.railway.app",
  withCredentials: true, // if you're using cookies/session
});

export default instance;