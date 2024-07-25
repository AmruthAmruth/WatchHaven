import React from 'react'
import './Service.css'
import {FaCar,FaCalendar,FaArrowAltCircleLeft,FaHeadphones} from 'react-icons/fa'
const Service = () => {
  return (
    <div className='service-main'>
            <div className="service-body">
                <div className="service">
                    <FaCar className='icon'/>
                    <h3>Order Today, Shipped Tomorrow</h3>
                    <p>We offer free express shipping worldwide. All packages are fully tracked and insured.</p>
                </div>

                <div className="service">
                    <FaCalendar className='icon'/>
                    <h3>2-Year Warranty</h3>
                    <p>We stand by the durability and craftsmanship of our watches with a 2-year warranty.</p>
                </div>

                <div className="service">
                    <FaArrowAltCircleLeft className='icon'/>
                    <h3>30-Day Return Policy</h3>
                    <p>We offer a 30-day return or exchange policy if you are not satisfied with your order for any reason.</p>
                </div>


                <div className="service">
                    <FaHeadphones className='icon'/>
                    <h3>24/7 Customer Support</h3>
                    <p>Whatever your need, our dedicated customer service team are always here to help.</p>
                </div>

            </div>
    </div>
  )
}

export default Service