import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './style.css'
import Dashboard from './components/Dashboard'

const App = () => {

  const myRouter = createBrowserRouter([
    {path:'/',Component:Login},
    {path:'/signup',Component:Signup},
    {path:'/login',Component:Login},
    {path:'/dashboard',Component:Dashboard}
  ])
  return (
    <div>
      <RouterProvider router={myRouter}></RouterProvider>
    </div>
  )
}

export default App
