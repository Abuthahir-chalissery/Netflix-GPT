import React, { useEffect, useRef, useState } from 'react'
import { checkValidData } from '../utils/validate'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import Header from './Header';


const Login = () => {

    const [showsPasswordCheckList, setShowsPasswordCheckList ] = useState(false)
    const [signIn , setSignIn] = useState(true)
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const [errorMessage , setErrorMessage] = useState(null)
    const dispatch = useDispatch()

    // Check 
    const [passwordValue, setPasswordValue] = useState("");
    const checks = {
        length: passwordValue.length >= 8,
        special: /[^a-zA-Z0-9]/.test(passwordValue),
        number: /\d/.test(passwordValue),
        capital: /[A-Z]/.test(passwordValue),
    };
    const Item = ({ ok, text }) => (
        <div className={`flex gap-2 text-sm ${ok ? "text-green-600" : "text-red-600"}`}>
            {ok ? <img className='w-5' src="assets/checkmark.png" alt="" /> : <img className='w-5' src='assets/remove.png' /> } {text}
        </div>
    );
    




    const toggleSigninForm = () =>{
        setSignIn(!signIn)
    }


    // showsPasswordCheckList
    const showPasswordCheckList = () => {
        setShowsPasswordCheckList(true)
        
    }


    const handleButtonClick = (e) => {
        e.preventDefault()


        // Validate the form data
        const message = checkValidData( signIn, name.current?.value || "", email.current.value,password.current.value, )
        
        setErrorMessage(message)


        if(message) return;

        // Sign in / Signup logic
        if(!signIn){
            // Sign Up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            

            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, photoURL: AVATAR_URL
                }).then(() => {
                    // Profile updated!
                    const {uid,  email, displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({uid: uid,  email: email, displayName: displayName, photoURL:photoURL}))
                }).catch((error) => {
                    // An error occurred
                    setErrorMessage(error.message)
                });

                
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
                
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage)
            });
        }
        
    }


    // Clearn error message
    useEffect(() => {
        setErrorMessage(null)
    },[signIn])



  return (
    <div className='Netflix bg-[url(/assets/main_Bg.jpg)] bg-cover '>
        <div className='  bg-black/50 flex justify-center w-full min-h-screen bg-cover'>
            <div className='w-full h-full flex flex-col  gap-10 items-center '>
                {/* Header */}
                <Header signIn={signIn} />

                {/* Body */}
                <div className='w-100 h-auto rounded-md bg-black/80 text-white p-10 flex flex-col mt-40 gap-10'>
                    <h1  className='text-4xl font-extrabold'>{signIn? "Sign In": "Sign Up"}</h1>
                    <div >   
                        <form className='flex flex-col gap-5 w-full h-auto' action="">
                            {!signIn && <input ref={name} onClick={()=> {setShowsPasswordCheckList(false)}}  className='border border-gray-500 p-4 outline-none rounded-md bg-[#242834]/50 ' type="text" placeholder='Full Name' name="" id="" />}
                            <input ref={email} onClick={()=> {setShowsPasswordCheckList(false)}} className='border border-gray-500 p-4 outline-none rounded-md bg-[#242834]/50 '  type="email" placeholder='Email' name="" id="email" />
                            <input ref={password} onClick={showPasswordCheckList} onChange={(e) => setPasswordValue(e.target.value)} className='border border-gray-500 p-4 outline-none rounded-md bg-[#242834]/50 ' type="password" placeholder='Password' name="" id="password" />
                            <h1 className='text-red-500 w-full  text-sm font-semibold'>{errorMessage}</h1>
                            <button onClick={handleButtonClick} className='w-full  bg-[#E50914] p-2 rounded-md  text-lg cursor-pointer'>{signIn? "Sign In ": "Sign Up"}</button>
                            {!signIn && showsPasswordCheckList && <div className='flex flex-col gap-1 border border-gray-800 rounded-md' style={{ marginTop: "10px", background: "", padding: "10px" }}>
                                <Item ok={checks.length} text="Password has more than 8 characters." />
                                <Item ok={checks.special} text="Password has special characters." />
                                <Item ok={checks.capital} text="Password has a capital letter." />
                                <Item ok={checks.number} text="Password has a number." />
                            </div>}
                        </form>
                    </div>
                    <h1 className='text-gray-400 '>{signIn? "New to Netflix? ":"Already registered? "  } <span onClick={toggleSigninForm} className='text-white cursor-pointer hover:underline'>{signIn? "Sign up now.":"Sign In now"}</span></h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
