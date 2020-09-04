import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-backend-mern-stack.herokuapp.com/",
});

export default instance;
