import React from 'react'
// import { useState } from 'react';
import ContactCard from './ContactCard';

const data=[
    {
        id:1,
        name:"suraj",
        email:"suraj123@gmail.com",
        phone:"+91-9688987609",
        photo:"https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
    },
    {
        id:2,
        name:"Ashish",
        email:"ashish123@gmail.com",
        phone:"+91-9688987609",
        photo:"https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1cmV8ZW58MHx8MHx8&w=1000&q=80"
    },
    {
        id:3,
        name:"Perry",
        email:"perry123@gmail.com",
        phone:"+91-9688987609",
        photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVwugjq9eaZxWJMh33lE8JNnwjeTfxuc-4yNRlYdA1CgFHRUDEbRFIrWaAZgaJ5Yd2zVQ&usqp=CAU"
    },
    {
        id:4,
        name:"Natasha",
        email:"natasha123@gmail.com",
        phone:"+91-9688987609",
        photo:"https://media.istockphoto.com/photos/young-woman-portrait-in-the-city-picture-id1009749608?k=20&m=1009749608&s=612x612&w=0&h=3bnVp0Y1625uKkSwnp7Uh2_y_prWbgRBH6a_6jRew3g=",
    },
    {
        id:5,
        name:"Albert",
        email:"albert123@gmail.com",
        phone:"+91-9688987609",
        photo:"https://media.istockphoto.com/photos/m-here-to-make-it-happen-picture-id968943486?b=1&k=20&m=968943486&s=170667a&w=0&h=7QmayiGKuLfk-7FX19wg77duZtysOz4jeM2NHAHngYY=",
    },
    {
        id:6,
        name:"Wanda",
        email:"wanda123@gmail.com",
        phone:"+91-9688987609",
        photo:"https://i.pinimg.com/originals/31/94/d7/3194d7c2de116c908a50792ece3a54bd.jpg",
    },
]

const ContactList = () => {
    // const [data,setdata]=useState(contlist)
  return (
    <div>
        
      {
          data.map((elem)=>(
              <ContactCard name={elem.name} email={elem.email} phone={elem.phone} id={elem.id} photo={elem.photo}/>
          ))
      }
    </div>
  )
}

export default ContactList
