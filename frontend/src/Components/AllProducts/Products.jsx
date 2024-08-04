import React, { useEffect, useState } from 'react'
import './Product.css'
import Navbar from '../Navbar/Navbar'
import Service from '../Service/Service'
import Footer from '../Footer/Footer'
import { getAllProducts } from '../../Services/Services'
const Products = () => {
 const [products, setProducts] = useState([])
  useEffect(()=>{
    getAllProducts()
    .then((data) => {
        setProducts(data);
    })
    .catch((error) => {
        console.error("Error fetching products:", error);
    });
  },[])

  console.log(products);
  



  
  
  return (
   <div>
    <Navbar/>
    <div className="products-body">
      <div className="products-text">

      <h2>DISCOVER THE WATCH HEVEN UNIVERSE</h2>
      <p>WATCH HAVEN combines the beauty of contemporary design with the savoir faire and tradition of Swiss watchmaking, bringing you a star-studded universe of iconic timepieces, precision-engineered to suit the lifestyle and aspirations of the modern-day wearer.</p>
    
      </div>
       
      <div className="products">
            <div className="product">
             
            {products.map((product) => {
                return (
              <div className="box">
                <p className='pro-off'>{product.offer}%OFF</p>
                <img src={`http://localhost:5000/${product.image}`} alt="" />
                <h3>{product.title}</h3>
                <div className='box-price'>
                <p>RS : {product.offprice}</p> 
                <p className='cprice'>RS : {product.price}</p> 
                </div>
                <div className='box-button'>
                  <button>Buy Now</button>
                  <button>Add To Cart</button>
                </div>
              </div>
            );
          })}



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
        

    <Service/>
<Footer/>


    </div>
   </div>
  )
}

export default Products 