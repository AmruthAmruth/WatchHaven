import React from 'react'
import './Singup.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
const Singup = () => {
  return (
    <div className="signp-body" >
        <Navbar/>
    <div className='signup-main'>
                    
                  <div className="signup-section">

                    <form action="">
                      <p>Welcome to the world of Watch Haven.!, let's create your own Account for the better experiance.!</p>
                      <h2>Create Your Account</h2>
                    <label htmlFor="">Full Name</label> <br />
                    <input type="text" /> <br />
                    <label htmlFor="">Phone Number</label> <br />
                    <input type="number" /> <br />
                    <label htmlFor="">Email Address</label> <br />
                    <input type="email" /> <br />
                    <label htmlFor="">Password</label> <br />
                    <input type="password" /> <br />
                    <button type="submit">SignUp</button>
                    <p>Already Have an account..? just <a href="/login">Login</a></p>
                    </form>
                  </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Singup