import React from 'react'
import "./Home.css"
import Navbar from '../Navbar/Navbar'
import {FaArrowRight} from 'react-icons/fa'
const Home = () => {
    
  return (
    <div className='home' style={{ 
        backgroundImage: `url("https://www.rschrono.com/cdn/shop/files/rsz_rs-chrono_exploded1_1_99ba91c0-4e6d-46db-aea4-ad8831263a5b1_1.webp?v=1695923279&width=2000")` 
      }}>
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