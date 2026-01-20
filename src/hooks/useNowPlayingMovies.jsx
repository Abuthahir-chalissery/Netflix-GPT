import { useDispatch, useSelector } from "react-redux"
import { addLoading, addNowPlayingMovies } from "../utils/moviesSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"



const useNowPlayingMovies = () => {

    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)

    // Fetch data from TMDB API and update store
    const dispatch = useDispatch()
    
    const getNowPlayingMovies = async () => {
        dispatch(addLoading())
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS )
        const json = await data.json()
        setTimeout(() => {
            dispatch(addNowPlayingMovies(json.results))
        }, 1500);
        
    }

    useEffect(()=> {
        !nowPlayingMovies && getNowPlayingMovies()
    },[])

}


export default useNowPlayingMovies;