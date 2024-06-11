import usePlatforms, { Platform } from "./usePlatforms";

 const usePlatform = (id?: number) => {
    const  { data: platforms } = usePlatforms()
    if (id && platforms && platforms.results && platforms.results.length) {
        const Platform : Platform|undefined = platforms.results.find((platform) => platform.id === id);
        return Platform
    }
    else {
        return undefined
    }
}


export default usePlatform