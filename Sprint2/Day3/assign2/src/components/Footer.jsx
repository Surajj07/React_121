import React from 'react'
import { Link } from 'react-router-dom'
// import About from '../pages/About'
// import Contact from '../pages/Contact'
// import FandQ from '../pages/FandQ'
import style from './Footer.module.css'
const Footer = () => {
  return (
    <div>
      <div className={style.footer}>
                <Link to='about_us'><h1>About Us</h1></Link>
                <Link to='/faq'><h1>F & Q</h1></Link>
                <Link to='/contact_us'><h1>Contact Us</h1></Link>
      </div>
    </div>
  )
}

export default Footer
