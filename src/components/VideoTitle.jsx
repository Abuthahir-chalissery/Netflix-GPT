import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='flex flex-col gap-3'>
        <h1 className='text-4xl font-semibold text-gray-800'>{title}</h1>
        <h1 className=' text-gray-600'>{overview}</h1>

        <div className='flex gap-2'>
            <button className='cursor-pointer bg-white text-black font-semibold p-1 w-20 rounded-sm border'>Play</button>
            <button className='cursor-pointer bg-slate-400 text-white - p-1 w-25 rounded-sm '>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
