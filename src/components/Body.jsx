import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import Loading from './Loading';


const Body = () => {

    const dispatch = useDispatch()



    const appRouter = createBrowserRouter([
        {
            
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browse/>

        },
        {
            path:'/loading',
            element:<Loading/>
        }
    ])


    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid,  email, displayName, photoURL} = user;
                dispatch(addUser({uid: uid,  email: email, displayName: displayName, photoURL:photoURL}))
                
            } else {
                dispatch(removeUser())
                
            }
        });

        return () => unsubscribe
    },[])


  return (
    <div >
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
