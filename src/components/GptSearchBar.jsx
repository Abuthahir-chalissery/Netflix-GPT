import React, { useRef, useState } from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

  const searchText = useRef(null)
  
  const [error, setError] = useState(null)

  const handleGptSearchClick = () => {
    const value = searchText.current.value;

    if (value.length == 0) {
      setError("Enter anything...")
    }else{
      setError("Limit Exceeded")
    }

    setTimeout(() => {
      setError(null)
    }, 5000);

  }

  const langKey = useSelector(store=> store.config.lang)

  return (
    <div className=' flex justify-center gap-5'>
        { error && <h1 className='slide-down transform transition-all duration-700 ease-in-out translate-y-0 opacity-100 text-red-500 absolute top-70 border border-gray-500 px-3 p-2 rounded-md'>{error}</h1>}
        <input ref={searchText} type="text" className='text-white w-150 p-2 border pl-3 border-gray-500 rounded-md ' placeholder={lang[langKey].gptSearchPlaceholder} />
        <button onClick={handleGptSearchClick}><img className='w-10 border border-gray-500 hover:border-white cursor-pointer hover:shadow-lg/50 shadow-white   rounded-4xl' src="assets/GPT-Seach-icon2.png " alt="" /></button>
    </div>
  )
}

export default GptSearchBar
