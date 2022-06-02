import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import style from './Products.module.css';

const Men = () => {
    const [data,setdata]=useState([])
    const [loading,setloading]=useState(true)
      useEffect(()=>{
    axios({
      method: 'GET',
    url: ' http://localhost:3000/men',
    
    })
    .then(res=>{
      setdata(res.data)
      setloading(false)
    })
    .catch(err=>{
      setloading(false)
    })
  },[])
  console.log(data)
  return (
    <div>
      <h1>men</h1>
      {loading && <h1>...Loading</h1>}
         
         <div className={style.container}>
             
               {
                   data.map((elem)=>
                  
                   <div className={style.card}>
                       <img className={style.container_pic} src={elem.pic} alt="logo"/>
                       <h3>{elem.brand}</h3>
                       <p>{elem.type}</p>
                       <h2>{elem.price}</h2>
                       <p>{elem.dis}</p>
                       </div> 
                   )
               }
              
            </div>
    </div>
  )
}

export default Men
