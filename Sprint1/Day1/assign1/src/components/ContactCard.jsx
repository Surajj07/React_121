import React from 'react';
import { useState } from 'react';
import Styles from './Card.module.css'

const ContactCard = (props) => {
    const {name,email,phone, photo}=props;
    const [isactive,setIsactive]=useState(true)
   
    // if(isactive){
    //     return <div onClick={()=>setIsactive(false)}>{phone}</div>
    // }

  return (
    <div  className={Styles.component}>
      <div className={Styles.imageContainer}>
        <img src={photo} alt="logo" className={Styles.image}></img>
      </div>
      <div className={Styles.details}>
      <h3>Name: {name}</h3>
      <h3>Email: {email}</h3>
     {/* {isactive && <h3>Phone: {phone}</h3>} */}
     {isactive ? (
       <h3 className={Styles.phoneNumber} onClick={()=>setIsactive(!isactive)} >Click to show more</h3>
     ):(<h3 className={Styles.phoneNumber} onClick={()=>setIsactive(!isactive)}>Phone: {phone}</h3>)
    }
     </div>
    </div>
  )
}

export default ContactCard
