import React from 'react'
import './Login.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
const Login = () => {
  return (
    <div className="login-body" >
        <Navbar/>
    <div className='login-main'>
                    
                  <div className="login-section">

                    <form action="">
                      <p>Welcome to the world of Watch Haven.!, let's Login your own Account for the better experiance.!</p>
                      <h2>Login Your Account</h2>
                    <label htmlFor="">Email Address</label> <br />
                    <input type="email" /> <br />
                    <label htmlFor="">Password</label> <br />
                    <input type="password" /> <br />
                    <button type="submit">Login</button>
                    <p>Don't Have an account..? just <a href="/signup">SignUp</a></p>
                    </form>
                  </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Login