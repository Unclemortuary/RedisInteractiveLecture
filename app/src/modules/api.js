import axios from 'axios';

let axiosInstance = null;
let initialized = false;

export default () => {
    if (!initialized) {
        axiosInstance = axios.create({
            baseURL: 'http://localhost:60000/tetflix'
        });
    }

    return axiosInstance;
}