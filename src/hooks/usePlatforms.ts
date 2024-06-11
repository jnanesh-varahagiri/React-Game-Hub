import { useQuery } from "@tanstack/react-query";

import ApiClient from "../Services/api-client";



export interface Platform { 
    id: number;
    name: string;
    slug : string
}
const apiClient = new ApiClient<Platform>('/platforms/lists/parents')
// const usePlatforms = () => useData<Platform>('/platforms/lists/parents')

async function getPlatforms() {
    const res = await apiClient.getAll()
    return res.data
}
export function usePlatforms() {
    return useQuery({
        queryKey: ['platforms'],
        queryFn: getPlatforms,
        staleTime:24*60*60*1000 //24hrs
        
    }) 
}

export default usePlatforms