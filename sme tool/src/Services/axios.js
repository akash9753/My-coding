import axios from "axios";

const Baseurl = process.env.REACT_APP_BASEURL;
let token = localStorage.getItem("token");
const controller = new AbortController();

const axiosHttpRequest = axios.create({
    baseURL: `${Baseurl}/connect/api/`,
    signal: controller.signal,
    headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
        Accept: "application/json",
    }
});

axiosHttpRequest.interceptors.request.use((config) => {
    config.params = config.params || {};
    return config
});
axiosHttpRequest.interceptors.response.use((response) => {
    return response;
})
export default axiosHttpRequest;

//  axios request for storage -----------------------

export const axiosHttpRequestStorage = axios.create({
    baseURL: `${Baseurl}/api/storage/app/`,
    signal: controller.signal,
    headers: {
        Authorization: `Bearer ${token}`,
        responseType: "blob"
    }
});

axiosHttpRequestStorage.interceptors.request.use((config) => {
    config.params = config.params || {};
    return config
});
axiosHttpRequestStorage.interceptors.response.use((response) => {
    return response;
});

//  axios request without authorization -----------------------
export const axiosHttpRequestWithoutAuth = axios.create({
    baseURL: `${Baseurl}/connect/api/`,
    signal: controller.signal,
    headers: {
        "Content-type": "application/json",
        Accept: "application/json",
    }
});

axiosHttpRequestWithoutAuth.interceptors.request.use((config) => {
    config.params = config.params || {};
    return config
});
axiosHttpRequestWithoutAuth.interceptors.response.use((response) => {
    return response;
});