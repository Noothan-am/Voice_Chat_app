import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './css/home.css'
import Navbar from '../components/Navbar'
function Home() {
     const navigate = useNavigate();
     const homeClicke = () => {
          navigate('/register')
     }
     return (
          <>
               <div className='home-section'>
                    <Navbar />
                    <div className="home_content">
                         <h1 className='home_head'>
                              Welcome to VoiceChatt
                         </h1>
                         <p>We're excited to have you join us for instant conversations with
                              people from all around the world. With our easy-to-use platform,
                              you can start chatting with others in just a few clicks. So, come and
                              join the conversation today
                         </p>
                         <div className="btn">
                              <button onClick={homeClicke}>Get Your Username</button>
                         </div>
                         <div className="register">
                              <Link to="/register">Don't have account? SignUp</Link>
                         </div>
                    </div>
               </div>
          </>
     )
}


export default Home