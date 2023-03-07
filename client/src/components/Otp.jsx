import React from 'react'
import Card from './Card'
function Otp({ clicked }) {
     return (
          <>
               <Card heading={"Enter Your Otp"} buttonText={"Verify"} clicked={clicked}>
                    <div className="register-OtpNumber">

                    </div>
               </Card>
          </>
     )
}

export default Otp