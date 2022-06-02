import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import style from './Products.module.css';

const AllProducts = () => {
      const [data,setdata]=useState([])
  const [loading,setloading]=useState(true)
    useEffect(()=>{
  axios({
    method: 'GET',
  url: ' http://localhost:3000/allProducts',
  
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
        {loading && <h1>...Loading</h1>}
         <img className={style.offerLogo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwnLJ-FyrpHX6jQfumViPVvNr_-aT3U8qFw&usqp=CAU' alt='offer'/>
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

export default AllProducts
