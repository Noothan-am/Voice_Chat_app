import React from 'react'
import './css/button.css'
function Button({ buttonText, onclick }) {
     return (
          <button onClick={onclick}>{buttonText}</button>
     )
}

export default Button