import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const GptMovieSuggestions = ({pickMovie}) => {

  
  
  return (
    <div className=' flex justify-center items-center  gap-12  overflow-hidden p-2 slide-down'>
          <div className='group  flex flex-col  gap-5  justify-center items-center '>
            <div className='  items-center w-full max-w-50 min-h-10 max-h-15 border border-gray-600 p-2 group-hover:border-red-800 rounded-md flex justify-center'>
              {<h1 className=' text-white text-lg  group-hover:text-red-400'>{pickMovie.title}</h1>}
            </div>
            <div className=' w-50 h-70 flex justify-center items-center  hover:scale-110  cursor-pointer duration-300 ease-in-out'>
              {<img className='w-full h-full hover:rounded-none rounded-md object-cover object-center' src={IMG_CDN_URL+pickMovie.poster_path}  alt={pickMovie.title} />}
            </div>
        </div>
      
    </div>
  )
}

export default GptMovieSuggestions
