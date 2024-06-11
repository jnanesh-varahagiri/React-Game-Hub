import { Genre, useGenres } from "./useGenres";

 const useGenre = (id?: number) => {
    const  { data: genres } = useGenres()
    if ( id && genres && genres.results && genres.results.length) {
        const Platform : Genre|undefined = genres.results.find((genre) => genre.id === id);
        return Platform
    }
    else {
        return undefined
    }
}


export default useGenre