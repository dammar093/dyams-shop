import React from 'react'
import { Link } from 'react-router-dom'
import './TopNav.css'


const TopNav = () => {
  return (
    <div className='top-nav'>
       <div className="top-nav-left">
          <span>Best seller</span>
       </div>
       <div className="top-nav-right">
           <Link to="checkout">checkout</Link>
           <Link to="register">register</Link>
           <Link to="login">login</Link>
       </div>
    </div>
  )
}

export default TopNav