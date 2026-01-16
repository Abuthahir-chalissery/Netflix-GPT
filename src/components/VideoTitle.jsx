import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='flex flex-col gap-3'>
        <h1 className='text-4xl font-semibold text-gray-800'>{title}</h1>
        <h1 className=' text-gray-600 w-1/3'>{overview}</h1>

        <div className='flex gap-3'>
            <button className='cursor-pointer flex items-center justify-center gap-1 bg-white text-black font-semibold p-1 px-4 rounded-sm border'> <span><img className='w-4' src="/assets/play_icon.png" alt="" /></span> Play</button>
            <button className='cursor-pointer flex items-center justify-center gap-1 bg-slate-400 text-white - p-1 px-2 rounded-sm '> <span><img className='w-6' src="/assets/info_icon.png" alt="" /></span> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
