import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Name from '../components/Name'
import Phone from '../components/Phone'
import Username from '../components/Username'
import Photo from '../components/Photo'
import Otp from '../components/Otp'
import './css/register.css'

function Register() {
     const navigate = useNavigate();
     var [count, setcount] = useState(0);
     const process = {
          0: Phone,
          1: Otp,
          2: Name,
          3: Photo,
          4: Username,
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