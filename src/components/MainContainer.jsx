import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies )
    
    

    if(movies == null) return;
    const mainMovie = movies[0]

    const {original_title, overview , id , backdrop_path} = mainMovie;

    
  return (
    <div className='w-full flex justify-center overflow-hidden'>
        <div className=' w-full  '>
            <VideoTitle title={original_title} overview={overview} backdrop_path={backdrop_path}/>
            <VideoBackground movieId={id} />
        </div>
    </div>
  )
}

export default MainContainer
