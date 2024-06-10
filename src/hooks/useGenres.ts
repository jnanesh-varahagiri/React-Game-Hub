
import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../Services/api-client";
import apiClient from "../Services/api-client";
export interface Genre{
    id: number;
    name: string;
    games_count: number;
    slug: string;
    image_background : string
}

async function getGenres() {

    const res = await apiClient.get<FetchResponse<Genre>>('/genres')
    return res.data
    
}


export function useGenres() {

    return useQuery({
        queryKey: ['genres'],
        queryFn: getGenres,
        staleTime: 24 * 60 * 60 * 1000, //24Hrs,
    })
    
}



