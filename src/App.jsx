// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'
import BarsMenu from './Components/BarsMenu/BarsMenu'


const App = () => {

  const [showLogin,setShowLogin] = useState(false);

  const [barsActive,setBarsActive] = useState(false);

  const handelToggleBars = () => {
    setBarsActive(!barsActive)
  }


  return (
    <>
    
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
     <div className='app'>
      <Navbar setShowLogin={setShowLogin} handelToggleBars={handelToggleBars} barsActive={barsActive}/>
      {barsActive? <BarsMenu/>:<></>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
   
  )
}

export default App
