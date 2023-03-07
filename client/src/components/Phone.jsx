import React from 'react'
import Card from './Card'
import './css/phone.css'
function Phone({ clicked }) {
     return (
          <>
               <Card heading={"Enter Phone Number"} buttonText={"Verify"} clicked={clicked}>
                    <div className="register_phoneNumber">
                         <input type="number" name="phoneNumber" id="phone" />
                         <p>By tapping Verify, an SMS may be sent. Message & data
                              rates may apply.</p>
                    </div>
               </Card>
          </>
     )
}

export default Phone