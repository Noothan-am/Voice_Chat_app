import React from 'react'
import Card from '../components/Card'
function Username({ clicked }) {
     return (
          <>
               <Card heading={"Enter Your Username"} buttonText={"Verify"} clicked={clicked}>
                    <div className="register-OtpNumber">

                    </div>
               </Card>
          </>
     )
}

export default Username