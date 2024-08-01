import React from 'react'
import MainPage from './Pages/MainPage'
import { Routes,Route } from 'react-router-dom'
import Products from './Components/AllProducts/Products'
const App = () => {
  return (
   <Routes>
 
    <Route path='/' element={<MainPage/>} />
    <Route path='/shop' element={<Products/>} />
   </Routes>
  )
}

export default App