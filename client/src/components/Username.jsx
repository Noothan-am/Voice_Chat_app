import React from 'react'
import Card from '../components/Card'
import './css/username.css'
function Username({ clicked }) {
     return (
          <>
               <Card heading={"Enter Your Username"} buttonText={"Set User Name"} clicked={clicked}>
                    <div className="register-username">
                         <input type="text" name="username" id="name" placeholder="User Name" />
                         <p>Enter your yousername to setup your Account</p>
                    </div>
               </Card>
          </>
     )
}

export default Username