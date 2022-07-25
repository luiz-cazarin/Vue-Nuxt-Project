import axios from "axios";

const api = axios.create({
  baseURL: "https://gorest.co.in/public/v2/",
  headers: {
    Authorization: `Bearer ${"6cce40afa14cbbdcca7c34aa019974ba94a130ad003d1a4bdf8dce053419b61c"}`,
  },
});

export default api;
