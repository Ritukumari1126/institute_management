import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './style.css'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import MyCourses from './components/MyCourses'
import AddCourses from './components/AddCourses'

const App = () => {

  const myRouter = createBrowserRouter([
    {path:'/',Component:Login},
    {path:'/signup',Component:Signup},
    {path:'/login',Component:Login},
    {path:'/dashboard',Component:Dashboard,children : [
      {path:'home',Component:Home},
      {path:'mycourses',Component:MyCourses},
      {path:'addcourses',Component:AddCourses}
    ]}
  ])
  return (
    <div>
      <RouterProvider router={myRouter}></RouterProvider>
    </div>
  )
}

export default App
