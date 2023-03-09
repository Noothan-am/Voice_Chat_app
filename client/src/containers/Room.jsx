import React from 'react'
import Card from '../components/Card'
function Room({ clicked }) {
     return (
          <>
               <Card heading={"Enter Your Otp"} buttonText={"Verify"} clicked={clicked}>
                    <div className="register-Room">
                         this is room
                    </div>
               </Card>
          </>
     )
}

export default Room