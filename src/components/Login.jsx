import React, { useRef, useState } from 'react'
import { checkValidData } from '../utils/validate'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {

    const [signIn , setSignIn] = useState(true)
    const email = useRef(null)
    const password = useRef(null)
    const [errorMessage , setErrorMessage] = useState(null)



    const toggleSigninForm = () =>{
        setSignIn(!signIn)
    }


    const handleButtonClick = () => {
        // Validate the form data
        const message = checkValidData(email.current.value,password.current.value)
        setErrorMessage(message)

        if(message) return;

        // Sign in / Signup logic
        if(!signIn){
            // Sign Up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)

            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                setErrorMessage(errorCode +"-"+ errorMessage)
            }); 


        }else{
            // Sign In
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage)
            });
        }
        
    }



  return (
    <div className='  bg-black/50 flex justify-center w-full min-h-screen bg-cover'>
        <div className='w-full h-full flex flex-col gap-10 items-center max-w-300'>
            {/* Header */}
            <div className='w-full h-auto'>
                {/* Logo */}
                <img className='h-20' src="/assets/Netflix_Logo.png" alt="" />
            </div>

            {/* Body */}
            <div className='w-100 h-auto rounded-md bg-black/80 text-white p-10 flex flex-col gap-10'>
                <h1  className='text-4xl font-extrabold'>{signIn? "Sign In": "Sign Up"}</h1>
                <div className='flex flex-col gap-5 w-full h-auto'>   
                    {!signIn && <input className='border border-gray-500 p-4 outline-none rounded-md bg-[#242834]/50 ' type="text" placeholder='Full Name' name="" id="" />}
                    <input ref={email} className='border border-gray-500 p-4 outline-none rounded-md bg-[#242834]/50 ' type="email" placeholder='Email' name="" id="" />
                    <input ref={password} className='border border-gray-500 p-4 outline-none rounded-md bg-[#242834]/50 ' type="password" placeholder='Password' name="" id="" />
                    <h1 className='text-red-500 text-sm font-semibold'>{errorMessage}</h1>
                    <button onClick={handleButtonClick} className='w-full bg-[#E50914] p-2 rounded-md  text-lg cursor-pointer'>{signIn? "Sign In ": "Sign Up"}</button>
                </div>
                <h1 className='text-gray-400 mt-20'>{signIn? "New to Netflix? ":"Already registered? "} <span onClick={toggleSigninForm} className='text-white cursor-pointer hover:underline'>{signIn? "Sign up now.":"Sign In now"}</span></h1>
            </div>
        </div>
    </div>
  )
}

export default Login
