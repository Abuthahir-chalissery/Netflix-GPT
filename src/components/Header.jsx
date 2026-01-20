import React, { useEffect, useState } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { AVATAR_URL, LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

    const showGptSearch = useSelector(store => store.gpt.showGptSearch)
    

    const dispatch = useDispatch()
    const [showMenu , setShowMenu] = useState(false)

    const user = useSelector(store => store.user)

    const navigate = useNavigate() 

    const handleSignout = () => {
        signOut(auth).then(() => {
        
            
        }).catch((error) => {
            navigate("/error")
        });
    }

    // Authentication
    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid,  email, displayName, photoURL} = user;
                dispatch(addUser({uid: uid,  email: email, displayName: displayName, photoURL:photoURL}))
                navigate("/browse")

            } else {
                dispatch(removeUser())
                navigate("/")
                
            }
        });

        // Unsubscibe when component unmount
        return () => unsubscribe()
    },[])


    const handleGptSearchClick = () => {
        //Toggle GPT Search
        dispatch(toggleGptSearchView())
    }

    // Change Language
    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))
    }

  return (
    <div onClick={()=> setShowMenu(false)} className={`w-full h-16 flex justify-center items-start ${showGptSearch ? "bg-black": "absolute"} z-70 }`}>
        <div className='w-full  pr-15 sm:pl-12 flex justify-between items-center '>
            <div className='flex justify-center gap-10 items-center'>
                <img className='w-35 sm:w-40 ' src={LOGO} alt="Logo" />

                {user&& !showGptSearch && <div className='text-gray-400 font-semibold gap-6 flex text-lg '>
                    <h1 className='text-white cursor-not-allowed'>Home</h1>
                    <h1 className='cursor-not-allowed'>TV Shows</h1>
                    <h1 className='cursor-not-allowed'>Movies</h1>
                    <h1 className='cursor-not-allowed'>New & Popular</h1>
                    <h1 className='cursor-not-allowed'>My List</h1>
                    <h1 className='cursor-not-allowed'>Browse by Languages</h1>
                </div>}
            </div>
            
            {user && <div className='flex  items-center gap-5'>

                {showGptSearch && <div>
                    <select name="" id="" onChange={handleLanguageChange} className=' text-white bg-black border border-white p-1 text-xs rounded-md'>
                        {SUPPORTED_LANGUAGES.map((lang) => (
                            <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                        ))}
                        
                    </select>
                </div>}
                <div className='flex gap-3 justify-center items-center'>
                    {showGptSearch ? <h1 onClick={handleGptSearchClick}  className='text-red-500 cursor-pointer border px-2 p-1 rounded-md border-gray-500 hover:shadow-lg/80  hover:border-black shadow-red-500'>Go back</h1> : <span className='flex justify-center items-center text-white'><h1>Ai Search</h1> <img  onClick={handleGptSearchClick} className='size-10 cursor-pointer ' src="/assets/GPT-Seach-icon1.png" alt=""  /></span>}
                    <img className='size-6 cursor-not-allowed' src="/assets/notification_icon.png" alt="" />
                </div>
                <div className='flex gap-2 items-center'>
                    <img className='w-9 rounded-sm cursor-pointer' src={AVATAR_URL} alt="" />
                    <img onMouseEnter={() => setShowMenu(true)} className='w-4 cursor-pointer' src="/assets/down_arrow.png" alt="" />
                </div>
                {showMenu && <div onMouseLeave={()=> setShowMenu(false)} className=' w-40 h-50 absolute right-13 top-17 bg-gray-400 rounded-xs p-2 flex flex-col items-center justify-end transition-all duration-200 ease-in-out'>
                    <button onClick={handleSignout}  className='w-20  h-10   text-black  right-15 rounded-md cursor-pointer hover:underline'>Sign out</button> 

                </div>}
            </div>}
        </div>

    </div>
    
  )
}

export default Header

