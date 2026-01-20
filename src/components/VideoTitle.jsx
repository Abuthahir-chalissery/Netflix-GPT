import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const VideoTitle = ({title, overview , backdrop_path}) => {
  return (
    <div className='w-full h-screen flex flex-col gap-5 absolute bg-gradient-to-r from-black pt-60 md:pt-60 px-5 md:px-15'>
        <h1 className='text-3xl md:text-5xl  font-semibold text-white'>#{title}</h1>
        <h1 className=' text-gray-300 hidden md:block w-1/2 md:w-1/3'>{overview}</h1>
        {/* <img className='w-60' src={IMG_CDN_URL+backdrop_path} alt="" /> */}

        <div className='flex gap-3'>
            <button className='cursor-pointer flex items-center hover:bg-gray-200 text-sm md:text-lg justify-center gap-1 bg-white text-black font-semibold p-1 px-2 md:px-4 rounded-sm '> <span><img className='w-3 md:w-5' src="/assets/play_icon.png" alt="" /></span> Play</button>
            <button className='cursor-pointer flex items-center text-sm md:text-lg justify-center gap-1 bg-slate-500 text-white p-1 px-2 rounded-sm '> <span><img className='w-5 md:w-7' src="/assets/info_icon.png" alt="" /></span> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
