import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllProducts = () => {
  const [data,setData]=useState([])
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
       setLoading(true)

       axios({
         url: "http://localhost:3000/products",
         method:'GET'
       })
       .then(res=>{
         setLoading(false)
         setData(res.data)
       })
       .catch(err=>{
         setLoading(false)
       })
  },[])
  return (
    <div>
      <h1>all products</h1>
      {loading && <div>...loading</div>}
      {
        data.map((elem)=>(
          <>
            <h1>{elem.name}</h1>
            <h3>{elem.price}</h3>
            <Link to={`/products/${elem.id}`}>see more</Link>
          </>
        ))
      }
    </div>
  )
}

export default AllProducts
