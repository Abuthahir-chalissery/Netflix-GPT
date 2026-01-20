import React, { useRef, useState } from 'react'
import lang from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS, GEMINI_KEY } from '../utils/constants';
import { json } from '@openrouter/sdk/lib/matchers.js';
import { addGptMovieResult } from '../utils/gptSlice';







const GptSearchBar = () => {

  const [loading, setLoading] = useState(false);
  const [outputText, setOutputText] = useState(null)
  const searchText = useRef(null)
  const [err, setErr] = useState(null)
  const dispatch = useDispatch()
  

  // search movies and fetch movie form TMDB
  const fetchMovie = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS )

    const json = await data.json()
    return json.results
  }



  const handleGptSearchClick = async () => {
    if (!searchText.current.value) {
      setErr("Enter something!");
      return;
    }
  
    const geminiQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated.";
  
    try {
      setLoading(true);
      setErr(null);

      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": GEMINI_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "nvidia/nemotron-3-nano-30b-a3b:free",
          messages: [{ role: "user", content: geminiQuery }],
        }),
      });
      
      const data = await res.json();
      // Array of movies
      const output = data.choices[0].message.content.split(",");

      // search each movie
      const promiseArray =  output.map(movie=>  fetchMovie(movie))
      // [Promise, Promise, Promise, Promise, Promise,]
      
      const tmdbResults = await Promise.all(promiseArray)

      dispatch(addGptMovieResult({ movieResults: tmdbResults}));
      
    } catch (err) {
      setErr("Limit exceeded or API error!");
    } finally {
      setLoading(false);
    }
  };
  

  
  const langKey = useSelector(store=> store.config.lang)


  return (
    <div className=' flex justify-center gap-8 items-center'>
        {err && <h1 className='slide-down transform transition-all duration-700 ease-in-out translate-y-0 opacity-100 text-red-500 absolute top-70 border border-gray-500 px-3 p-2 rounded-md'>{err}</h1>}
        {outputText && <h1 className='slide-down transform transition-all duration-700 ease-in-out translate-y-0 opacity-100 text-red-500 absolute top-70 border border-gray-500 px-3 p-2 rounded-md'>{outputText}</h1>}
        <input ref={searchText} type="text" className='text-white w-150 p-2 border pl-3 border-gray-500 rounded-md ' placeholder={lang[langKey].gptSearchPlaceholder} />
        {!loading ? <button onClick={handleGptSearchClick}><img className='w-10 border border-gray-500 hover:border-white cursor-pointer hover:shadow-lg/50 shadow-white   rounded-4xl' src="assets/GPT-Seach-icon2.png " alt="" /></button> : <h1 className=' animate-spin border border-white rounded-xl' >-</h1>}
        
    </div>
  )
}

export default GptSearchBar
// export const output = data.choices[0].message.content.split(",");
