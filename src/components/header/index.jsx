import React from 'react'
import './style/header.scss'
import {Button} from '../../ui'

function Header() {
  const menuItems =["Home","Product","Pricing","Testimonials","Contact Us"]
  return (
   
      <div className='header'>
      <div className='logo'>
      <img src="images/images-removebg-preview 1.png" alt="" />
      </div>
      <div className='navigation'>
        <ul>
        {menuItems.map((menuItems,index)=>{
            return(
              <li key={index}>{menuItems} </li>
            )
        })}
        </ul>
      </div>
      <div className='btn'>
         <Button text={"buy now"}/>
        </div>
        </div>
    
  )
}

export default Header