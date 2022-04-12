import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://ninja-maki-nextjs.vercel.app/api/",
});
