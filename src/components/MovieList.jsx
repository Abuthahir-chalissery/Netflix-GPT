import React, { useRef } from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title , movies}) => {

    
    const carouselRef = useRef(null);
    const scrollLeft = () => {
        carouselRef.current.scrollBy({
            left: -300,
            behavior: "smooth",
        });
    }

    const scrollRight = () => {
        carouselRef.current.scrollBy({
            left: 300,
            behavior: "smooth",
        });
    };
    

  return (
    <div className='w-full h-auto pl-5 py-3 flex flex-col gap-2 relative'>
        <div>
            <h1 className='text-xl pl-5 text-white font-semibold '>{title}</h1>
        </div>

        <div>
            <img onClick={scrollLeft} className='w-8 cursor-pointer absolute top-80 left-8  z-110 bg-gray-700 p-1 rounded-3xl ' src="assets/left_arrow.png" alt="" />
        </div>

        <div ref={carouselRef} className='flex gap-8 pl-5 overflow-x-scroll  scrollbar-hide scroll-smooth pr-5 cursor-pointer  '>
            {movies?.map((movie, index) => (  
                <MovieCard key={index} posterPath={movie.poster_path}/>
            ))}
        </div>
            
        <div>
            <img onClick={scrollRight} className='w-8 cursor-pointer absolute top-80 right-8  z-110 bg-gray-700 p-1 rounded-3xl ' src="assets/right_arrow.png" alt="" />
        </div>
        <hr className='text-gray-800 mt-13'/>
    </div>
  )
}

export default MovieList


