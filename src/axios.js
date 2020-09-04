import axios from "axios";

const instance = axios.create({
  baseURL: "htps://api.themoviedb.org/3",
});

export default instance;
