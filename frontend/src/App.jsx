import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Toaster } from './components/ui/sonner'

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Toaster/>
    </>
  )
}

export default App