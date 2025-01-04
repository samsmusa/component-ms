import axios from "axios";
import {config} from "@/core/common/appConfig";


export const axiosInstance = axios.create({
    baseURL: `${config.PUBLIC_BASEURL}`,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    timeout: 30000,
});

axiosInstance.interceptors.request.use(
    (config) => {
        // const accessToken = getJWTToken(jwtTokens.USER_ACCESS_TOKEN);
        // if (accessToken) {
        //     config.headers.Authorization = `Bearer ${accessToken}`;
        // }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                return axiosInstance(originalRequest);
            } catch (error) {
                return Promise.reject(error);
            }
        }
        throw error;
    },
);

export default axiosInstance;
