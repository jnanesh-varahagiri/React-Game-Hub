import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import { FetchResponse } from '../Services/api-client';
import { Platform } from "./usePlatforms";
import ApiClient from '../Services/api-client';


//Interfaces
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  platforms:[],
  metacritic: number;
  rating_top:number
}

const apiClient = new ApiClient<Game>('/games')


// const useGames = (gameQuery : GameQuery) => useData<Game>('/games' , {params :{genres:gameQuery.genre?.id, platforms: gameQuery.platform?.id , ordering:gameQuery.sortOrder ,search : gameQuery.search} },[gameQuery])


async function getGames(gameQuery:GameQuery,pageParam:any) {
  const res = await apiClient.getAll({ params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering: gameQuery.sortOrder, search: gameQuery.search ,page :pageParam } })
  console.log(res)
  return res.data
}
const useGames = (gameQuery: GameQuery) => {

  return useInfiniteQuery<FetchResponse<Game>,Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam }) => getGames(gameQuery,pageParam),
    initialPageParam: 1,
    staleTime: 24 * 60 * 60 * 1000, //24,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length+1 : undefined
    }
  })

  
}
export default useGames;
