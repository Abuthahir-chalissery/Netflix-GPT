import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'

const VideoBackground = ({ movieId }) => {

  const trailerVideo = useSelector(store => store.movies?.trailerVideo)

  // fetch trailer video
  useMovieTrailer(movieId)



  return (
    <div className='w-full flex overflow-hidden bg-linear-to-t from-black'>
        <iframe className='w-full h-screen -z-50  scale-155' src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1&controls=0&disablekb=1&iv_load_policy=3&rel=0&playsinline=1&loop=1"} title="YouTube video player"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackground
