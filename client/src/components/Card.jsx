import React from 'react'
import './css/card.css'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
function Card({ heading, buttonText, children, clicked }) {
     return (
          <>
               <div className="card">
                    <Navbar />
                    <div className="card_content">
                         <div className="card_content-heading">
                              <h3>{heading}</h3>
                         </div>
                         <p>{children}</p>
                         {/* we are passing clicked to next instead of direclty writing clicked function here
                          because here button is a component not normal element */}
                         <Button buttonText={buttonText} onclick={clicked} />
                    </div>
               </div>
          </>
     )
}

export default Card