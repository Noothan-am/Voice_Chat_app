import React from 'react'
import Card from './Card'
import './css/otp.css'
function Otp({ clicked }) {
     return (
          <>
               <Card heading={"Enter Otp"} buttonText={"Verify"} clicked={clicked}>
                    <div className="register-otp">
                         <div className="otp_input">
                              <input type="text" name="otp" id="otp" />
                              <input type="text" name="otp" id="otp" />
                              <input type="text" name="otp" id="otp" />
                              <input type="text" name="otp" id="otp" />
                              <input type="text" name="otp" id="otp" />
                         </div>
                         <p>Enter otp and you will be register to is site</p>
                    </div>
               </Card>
          </>
     )
}

export default Otp