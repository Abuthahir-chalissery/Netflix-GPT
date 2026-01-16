import React, { useEffect, useState } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { AVATAR_URL, LOGO } from '../utils/constants';

const Header = () => {

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



  return (
    <div onClick={()=> setShowMenu(false)} className={`w-full h-16 flex justify-center items-start absolute z-70 }`}>
        <div className='w-full  pr-15 pl-12 flex justify-between items-center '>
            <div className='flex justify-center gap-10 items-center'>
                <img className='w-40 ' src={LOGO} alt="Logo" />

                {user&& <div className='text-gray-400 font-semibold gap-6 flex text-lg '>
                    <h1 className='text-white'>Home</h1>
                    <h1>TV Shows</h1>
                    <h1>Movies</h1>
                    <h1>New & Popular</h1>
                    <h1>My List</h1>
                    <h1>Browse by Languages</h1>
                </div>}
            </div>
            
            {user && <div className='flex j items-center gap-5'>

                <div className='flex gap-3'>
                    <img className='size-6' src="/assets/search_icon.png" alt="" />
                    <img className='size-6' src="/assets/notification_icon.png" alt="" />
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

