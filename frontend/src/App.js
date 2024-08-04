import React from 'react'
import MainPage from './Pages/MainPage'
import { Routes,Route } from 'react-router-dom'
import Products from './Components/AllProducts/Products'
import Cart from './Components/Cart/Cart'
import About from './Components/About/About'
import Singup from './Components/Singup/Singup'
import Login from './Components/Login/Login'
const App = () => {
  return (
   <Routes>
 
    <Route path='/' element={<MainPage/>} />
    <Route path='/shop' element={<Products/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/signup' element={<Singup/>} />
    <Route path='/login' element={<Login/>} />
   </Routes>
  )
}

export default App