import axios from "axios";

const service = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  timeout: 30000,
});
service.interceptors.request.use(
  (config) => {
    // let token = sessionStorage.getItem("Token");
    config.headers = { 
      // Authorization: token,
      "Accept": "application/json",
      "Content-Type": "application/json",
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
