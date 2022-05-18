import React from 'react';
import Styles from './Card.module.css'

const ContactCard = (props) => {
    const [name,email,phone]=props
  return (
    <div className={Styles.component}>
      <h3>{name}</h3>
      <h3>{email}</h3>
      <h3>{phone}</h3>
    </div>
  )
}

export default ContactCard
