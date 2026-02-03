import React, { useEffect } from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Toaster } from './components/ui/sonner'
import LoadingPage from './components/LoadingPage'
import { useSelector } from 'react-redux'
import { socket } from './utils/socket'
import UserProfile from './components/UserProfile'
import UserOrder from './components/UserOrder'

function App() {
  const {isAuthenticated} = useSelector(state => state.auth)

  // socket connection
  //  useEffect(()=>{
  //   socket.connect();

  //   socket.on('connect' ,() =>{
  //     console.log("Socket connected :-",socket.id);
  //   })

  // // disconnecting socket
  //   socket.on("disconnect" ,() =>{
  //     console.log("Sockect disconnected");
  //   });

  //   return () => {
  //     socket.off("connect");
  //     socket.off("disconnect");
  //     socket.disconnect();
  //   };
    
  //  },[])

  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={ <Login /> }/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/cart' element={ <Cart />} />
        
        <Route path='/user-profile' element={!isAuthenticated ? <Navigate to={'/signin'} /> : <UserProfile /> } />
        <Route path='/my-orders' element={! isAuthenticated ? <Navigate to={'/signin'}/> :   <UserOrder /> } />

        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
      <Toaster/>
    </>
  )
}

export default App