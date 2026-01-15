import React, { useState } from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux';

const Header = ({ signIn }) => {

    const [showMenu , setShowMenu] = useState(false)

    const user = useSelector(store => store.user)

    const navigate = useNavigate() 

    const handleSignout = () => {
        signOut(auth).then(() => {
            navigate("/")
            
        }).catch((error) => {
            navigate("/error")
        });
    }


    console.log(user);

  return (
    <div onClick={()=> setShowMenu(false)} className={`w-full h-auto flex justify-between items-center p-5 ${user ? "bg-black": ""}`}>
        <img className='w-46 ' src="assets/Netflix_Logo.png" alt="Logo" />
        
        {user && <div>
            <div className='flex gap-2 items-center'>
                <img onMouseEnter={() => setShowMenu(true)}   className='w-12 rounded-3xl cursor-pointer' src={user?.photoURL} alt="" />
                <h1 className='text-white uppercase'>{user?.displayName}</h1>
            </div>
            {showMenu && <div onMouseLeave={()=> setShowMenu(false)} className='w-40 h-50 absolute right-15 top-25 bg-red-100 rounded-md p-2 flex flex-col items-center justify-end transition-all duration-200 ease-in-out'>
                <button onClick={handleSignout}  className='w-20  h-10   text-black  right-15 rounded-md cursor-pointer'>Sign out</button> 

            </div>}
        </div>}

    </div>
    
  )
}

export default Header

