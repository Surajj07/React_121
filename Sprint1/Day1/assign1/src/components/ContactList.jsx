import React from 'react'
import { useState } from 'react';
import ContactCard from './ContactCard';

const contlist=[
    {
        id:1,
        name:"suraj",
        email:"suraj123@gmail.com",
        phone:"+91-9688987609"
    },
    {
        id:2,
        name:"Ashish",
        email:"ashish123@gmail.com",
        phone:"+91-9688987609"
    },
    {
        id:3,
        name:"Abhishek",
        email:"abhishek123@gmail.com",
        phone:"+91-9688987609"
    },
    {
        id:4,
        name:"Aman",
        email:"aman123@gmail.com",
        phone:"+91-9688987609"
    },
]

const ContactList = () => {
    const [data,setdata]=useState(contlist)
  return (
    <div>
      {
          data.map((elem)=>(
              <ContactCard name={elem.name} email={elem.email} phone={elem.phone} id={elem.id}/>
          ))
      }
    </div>
  )
}

export default ContactList
