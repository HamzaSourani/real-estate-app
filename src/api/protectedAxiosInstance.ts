import { BASE_URL } from "@/constants/domines";
import axios from "axios";

const protectedAxiosInstance = axios.create({
  baseURL: BASE_URL,
});
protectedAxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token !== null && token !== undefined) {
      config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    }
    config.headers.Accept = "application/json";

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
protectedAxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.replace("/auth/sign-in");
    }
    Promise.reject(error);
  }
);
export default protectedAxiosInstance;
