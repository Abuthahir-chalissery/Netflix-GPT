import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browse/>
        }
    ])

  return (
    <div className='bg-[url(/public/assets/main_Bg.jpg)] '>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
