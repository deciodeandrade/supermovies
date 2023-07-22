import axios from "axios";

const api = axios.create({
  baseURL: 'https://www.themoviedb.org/3/'
});

export default api;