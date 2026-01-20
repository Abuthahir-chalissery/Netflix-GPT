import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import GptSearch from './GptSearchPage'
import { useSelector } from 'react-redux'
import GptSearchPage from './GptSearchPage'
import Loading from './Loading'

const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  const isLoading = useSelector(store=> store.movies.isLoading)

  useNowPlayingMovies()
  usePopularMovies()
  


  


  return (
    <>
      <div >
        <Header/>
        {showGptSearch ? (<GptSearchPage/>): isLoading? (<Loading/>) : (<>
          <MainContainer/>
          <SecondaryContainer/>
        </>)}
      
    </div>
    </>
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