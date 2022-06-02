import React from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <div>
      <div className={style.navbar}>
          <div className={style.siteLogo1}>
        <Link to='/'> <img className={style.siteLogo} src="https://image.shutterstock.com/z/stock-vector-shop-logo-good-shop-logo-1290022027.jpg" alt='logo'></img></Link>
         </div>
         <div className={style.categories}>
           <Link to='/men'>  <h1>Men</h1></Link>
           <Link to='/women'> <h1>Women</h1></Link>
           <Link to='/kids'> <h1>kids</h1></Link>
         </div>
         <div className={style.cartLogo1}>
             <img  className={style.cartLogo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8luXTJBnFZWsNFOX2tveLKRkkVfUOOF4Ltw&usqp=CAU' alt="cart"/>
         </div>
      </div>
    </div>
  )
}

export default Navbar
