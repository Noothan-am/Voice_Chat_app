import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Phone from '../components/Phone'
import Username from '../components/Username'
import Otp from '../components/Otp'
import './css/register.css'

function Register() {
     const navigate = useNavigate();
     var [count, setcount] = useState(0);
     const process = {
          0: Username,
          1: Phone,
     }
     const clicked = () => {
          setcount(++count);
     }
     const Page = process[count];
     return (
          <>
               <div className="register">
                    <Page clicked={clicked} />
               </div>
          </>
     )
}

export default Register