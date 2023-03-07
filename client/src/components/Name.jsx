import React from 'react'
import Card from './Card'
function Name({ clicked }) {
     return (
          <>
               <Card heading={"Enter Your Name"} buttonText={"Verify"} clicked={clicked}>
                    <div className="register-OtpNumber">

                    </div>
               </Card>
          </>
     )
}

export default Name