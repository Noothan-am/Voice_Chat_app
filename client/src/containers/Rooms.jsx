import React from 'react'
import Card from '../components/Card'
function Rooms({ clicked }) {
     return (
          <>
               <Card heading={"Enter Your Otp"} buttonText={"Verify"} clicked={clicked}>
                    <div className="register-OtpNumber">

                    </div>
               </Card>
          </>
     )
}

export default Rooms