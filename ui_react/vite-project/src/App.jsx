import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Weblayout from './layouts/Weblayout'
import Userlayout from './layouts/Userlayout' // Import the Userlayout component
import Events from './pages/Events'
import About from './pages/About'
import Courses from './pages/Courses'
import Blog from './pages/Blog'
import Profile from './pages/Profile'
import UserHome from './pages/UserHome'
import CourseEnroll from './pages/CourseEnroll'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      <Route element={<Weblayout />}>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/blog' element={<Blog />}/>
      </Route>
      <Route element={<Userlayout />}> 
        <Route path='/user' element={<UserHome />} /> 
        <Route path='/about' element={<About />}/>
        <Route path='/courses' element={<Courses />}/>
        <Route path='/Institutes' element={<Events />}/>
        <Route path='/enroll' element={<CourseEnroll />}/>
        <Route path='/user/profile' element={<Profile />} /> 
      </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
