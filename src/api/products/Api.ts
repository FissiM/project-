import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export async function apiRequest<D = {}, R = unknown>({
  url,
  ...options
}: AxiosRequestConfig<D>) {
  return await Axios.request<DOMException, AxiosResponse<R>>({
    ...options,
    url: `${import.meta.env.VITE_API_URL}/${url}`,
  });
}
