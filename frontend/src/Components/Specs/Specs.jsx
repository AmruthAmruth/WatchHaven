import React from 'react'
import './Specs.css'
import one from '../../asstes/Images/one.jpg'
import second from '../../asstes/Images/second.jpg'
import thired  from '../../asstes/Images/thired.jpg'
import forth  from '../../asstes/Images/forth.jpg'
const Specs = () => {
  return (
    <div className='spec-main'>
          <div className="spec-body">
         
            <div className="spec">
                <div className="spec-img">
                    <img src={one} alt=""/>
                </div>
                <div className="spec-text">
                    <h2>Titanium Carbide Case</h2>
                    <p>Constructed from durable titanium carbide, this 43mm case blends unparalleled strength with aesthetics. Ideal in size, it promises presence, comfort, and a sleek timepiece housing.</p>
                      </div>
            </div>


            <div className="spec">
                
                <div className="spec-text">
               
                    <h2>3 ATM Water Resistant</h2>
                    <p>Built to endure, 3ATM water resistance is a standout feature, ensuring your watch can handle everyday exposure to water without skipping a beat.</p>
                      </div>
                      <div className="spec-img">
                    <img src={second} alt="" />
                </div>
            </div>



            <div className="spec">
                <div className="spec-img">
                    <img src={thired} alt="" />
                </div>
                <div className="spec-text">
                    <h2>Custom Engraved Backplate</h2>
                    <p>Every watch in our collection boasts a meticulously detailed engraved backplate, each with a unique ID that directly links it to its 2-year warranty.</p>
                      </div>
            </div>


            <div className="spec">
               
                <div className="spec-text">
                    <h2>Interchangeable Straps</h2>
                    <p>Use our adjustment tool to easily swap out your strap at home for a fresh new look, whenever you like!</p>
                      </div>
                      <div className="spec-img">
                    <img src={forth} alt="" />
                </div>
            </div>



          </div>
    </div>
  )
}

export default Specs