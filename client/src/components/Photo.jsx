import React from 'react'
import Card from '../components/Card'
function Photo({ clicked }) {
     return (
          <>
               <Card heading={"Enter Your Photo"} buttonText={"Verify"} clicked={clicked}>
                    <div className="register-OtpNumber">

                    </div>
               </Card>
          </>
     )
}

export default Photo