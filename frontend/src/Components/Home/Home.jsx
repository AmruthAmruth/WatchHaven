import React from 'react'
import "./Home.css"
import Navbar from '../Navbar/Navbar'
import background from '../../asstes/Images/background.jpg'
import {FaArrowRight} from 'react-icons/fa'
const Home = () => {
    
  return (
    <div className='home' style={{ backgroundImage: `url(${background})` }}>
        <Navbar/>
        <div className='home-text'>
        <h3>Watch Haven</h3>
        <p>Explore Our Collections For You.!</p>
        <button>Shop Now  <FaArrowRight/> </button>
        </div>
        
    </div>
  )
}

export default Home




//https://www.rschrono.com/cdn/shop/files/RS-Chrono-Luminous-Watches-Collection.webp?v=1707241366&width=5760