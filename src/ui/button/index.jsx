import React from 'react'
import "./style/button.scss"
function Button(props) {
  return (
    <div className='button'>
        {props.text}
    </div>
  )
}

export default Button