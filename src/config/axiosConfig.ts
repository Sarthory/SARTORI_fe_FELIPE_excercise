import axios, {AxiosRequestConfig} from 'axios';

const axiosConfig: AxiosRequestConfig = {
    baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
    validateStatus: status => {
        return status >= 200 && status < 503;
    },
};

const http = axios.create(axiosConfig);

export default http;
