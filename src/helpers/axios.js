import axios from "axios";
import { api } from "../urlConfig";

const access_token = window.localStorage.getItem('access_token');
const axiosInstance = axios.create({
        baseURL: api,
        headers:{
                'Authorization': access_token ? `Bearer ${access_token}` : ''
        }
});


export default axiosInstance;