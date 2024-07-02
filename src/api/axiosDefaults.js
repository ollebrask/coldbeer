import axios from "axios";

axios.defaults.baseURL = "https://pp5-olle-4b42abf5cfb4.herokuapp.com/";
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();