import axios, { AxiosRequestConfig } from "axios";


const axiosInstance =  axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key:'b88a0b3dc5a64c5b9aeaef29d8eeba30'
    }
})


export interface FetchResponse<T> {
    count: number;
    results: T[];
    next: string | null;
}


class ApiClient<T>{
    endpoint: string
    constructor(endpoint:string) {
        this.endpoint = endpoint
    }

    getAll(config?: AxiosRequestConfig) {
        if (config) {
            return axiosInstance.get<FetchResponse<T>>(this.endpoint,config)
        }
        return axiosInstance.get<FetchResponse<T>>(this.endpoint )
       
    }
}

export default ApiClient
  
  