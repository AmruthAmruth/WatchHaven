import React from 'react'
import "./Product.css"
import {FaArrowRight,FaAngleRight} from 'react-icons/fa'
const Product = () => {
  return (
    <div className='pro-main'>
        <div className="pro-text">
        <h2>Explore Our Collection</h2>
        <p>Discover our best-selling watches curated by thousands of enthusiasts like you. Join the club of those who <br /> appreciate style and performance.</p>
        <button>Shop Now <i class="fa-solid fa-arrow-right"></i> </button>
        </div>
       
          <div className="products">
            <div className="product">
             
              <div className="box">
                <p className='pro-off'>60%OFF</p>
                <img src="https://www.rschrono.com/cdn/shop/files/RS-Chrono-Petronas-63S-Blue-Metal-Strap-Front.webp?v=1706786890&width=800" alt="" />
                <h3>Watch Name</h3>
                <div className='box-price'>
                <p>RS : 4900</p> 
                <p className='cprice'>RS : 4900</p> 
                </div>
                <div className='box-button'>
                  <button>Buy Now</button>
                  <button>Add To Cart</button>
                </div>
              </div>

              <div className="box">
                <p className='pro-off'>60%OFF</p>
                <img src="https://www.rschrono.com/cdn/shop/files/RS-Chrono-Nismo-R35-Metal-Strap-Front.webp?v=1706781984&width=800" alt="" />
                <h3>Watch Name</h3>
                <div className='box-price'>
                <p>RS : 4900</p> 
                <p className='cprice'>RS : 4900</p> 
                </div>
                <div className='box-button'>
                  <button>Buy Now</button>
                  <button>Add To Cart</button>
                </div>
              </div>


              <div className="box">
                <p className='pro-off'>60%OFF</p>
                <img src="https://www.rschrono.com/cdn/shop/files/RS-Chrono-Petronas-63S-Blue-Metal-Strap-Front.webp?v=1706786890&width=800" alt="" />
                <h3>Watch Name</h3>
                <div className='box-price'>
                <p>RS : 4900</p> 
                <p className='cprice'>RS : 4900</p> 
                </div>
                <div className='box-button'>
                  <button>Buy Now</button>
                  <button>Add To Cart</button>
                </div>
              </div>


              <div className="box">
                <p className='pro-off'>60%OFF</p>
                <img src="https://www.rschrono.com/cdn/shop/files/RS-Chrono-Speedtail-765-White-Metal-Strap-Front.webp?v=1706782725&width=800" alt="" />
                <h3>Watch Name</h3>
                <div className='box-price'>
                <p>RS : 4900</p> 
                <p className='cprice'>RS : 4900</p> 
                </div>
                <div className='box-button'>
                  <button>Buy Now</button>
                  <button>Add To Cart</button>
                </div>
              </div>



            </div>
          </div>


    </div>
  )
}

export default Product