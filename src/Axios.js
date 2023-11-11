import Axios from "axios";
Axios.defaults.baseURL = "http://localhost:8000/";
export const axiosInstance = Axios.create({});
