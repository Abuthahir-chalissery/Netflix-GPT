import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
    
  return (
    <div className='w-40 h-67  flex justify-center  items-center shrink-0   '>
        <img className='w-full object-cover hover:scale-110 transition-transform duration-300 ease-out z-100 object-center rounded-md' src={IMG_CDN_URL + posterPath} alt="MovieImage" />
    </div>
  )
}

export default MovieCard
