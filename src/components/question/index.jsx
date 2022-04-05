import React from 'react'
import "./style/question.scss"
import {Button} from "../../ui/"
function Question() {
  return (
    <div className='container'>
      <div className='question'>
        <div className='question_header'>
          <h1>Have Question in Mind? Let us help you</h1>
        </div>
        <div className='question_input'>
          <div className='inputArea'>
            <input type="text" placeholder='Enter your question' />
          </div>
            <div  className='btn_send'>
              <Button text={"Send"}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Question