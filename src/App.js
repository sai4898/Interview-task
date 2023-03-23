import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import Header from './pages/Header'
import Signup from './pages/Signup'
import Login from './pages/Login'
import SocialMedia from './pages/SocialMedia'
import ForgetPage from './pages/ForgetPage'

const App = () => {
  return (
    <div className='Apps'>
     <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-page' element={<ForgetPage />} />

      </Routes>
      <SocialMedia />

     </BrowserRouter>
     

    </div>
  )
}

export default App