import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    
    if(movies == null) return;
    const mainMovie = movies[0]

    console.log(mainMovie);
    
    const {original_title, overview} = mainMovie;

  return (
    <div className='w-full flex justify-center'>
        <div className='pt-20 w-full pl-4 max-w-360 '>
            
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground mainMovie={mainMovie}/>
        </div>
    </div>
  )
}

export default MainContainer
