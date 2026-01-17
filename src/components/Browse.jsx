import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'

const Browse = () => {

  useNowPlayingMovies()
  usePopularMovies()
  



  return (
    <div >
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
    </div>
  )
}

export default Browse



{/* 

  Main Container
    -Video Background
    -Video Title
  
  Secondary Container
    -Movies List *n
    -Cards *n

*/}