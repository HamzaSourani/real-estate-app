import BASE_URL from "@/constants/domines";
import axios from "axios";

const publicAxiosInstance = axios.create({ baseURL: BASE_URL });
publicAxiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Accept = "application/json";

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
publicAxiosInstance.interceptors.response.use((response) => {
  return response;
});
export default publicAxiosInstance;
