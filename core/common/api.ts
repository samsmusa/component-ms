import { AxiosRequestConfig, AxiosResponse } from "axios";
import axiosInstance from "@/core/common/axiosInterceptor";

interface ErrorType {
    response?: unknown;
    request?: unknown;
    message?: string;
}

const errorHandler = (error: ErrorType): never => {
    throw error;
};

function apiGet<T>(apiPath: string, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    return axiosInstance
        .get<T>(apiPath, config)
        .then((response) => response)
        .catch(errorHandler);
}

function apiPost<R, T>(
    apiPath: string,
    data: R,
    config: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> {
    return axiosInstance
        .post<T>(apiPath, data, config)
        .then((response) => response)
        .catch(errorHandler);
}

function apiDelete<T>(apiPath: string, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    return axiosInstance
        .delete<T>(apiPath, config)
        .then((response) => response)
        .catch(errorHandler);
}

function apiPut<R, T>(
    apiPath: string,
    data: R,
    config: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> {
    return axiosInstance
        .put<T>(apiPath, data, config)
        .then((response) => response)
        .catch(errorHandler);
}

function apiPatch<R, T>(
    apiPath: string,
    data: R,
    config: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> {
    return axiosInstance
        .patch<T>(apiPath, data, config)
        .then((response) => response)
        .catch(errorHandler);
}

export { apiGet, apiPost, apiDelete, apiPut, apiPatch };
