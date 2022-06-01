import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const Product = () => {
    const [data,setdata]=useState([])
    const [loading,setLoading]=useState(true)
    const params=useParams()

    useEffect(()=>{
        setLoading(true)
        const {id}=params
        axios({
            url:`http://localhost:3000/products/${id}`,
            method:'GET'
        })
        .then(res=>{
            setLoading(false)
            setdata(res.data)
        })
        .catch(error=>{
            setLoading(false)
        })
    },[params])
  return (
    <div>
      <h1>singal product</h1>
      {loading && <div>...loading</div>}
            <h1>{data.name}</h1>
            <h3>{data.price}</h3>
       
    </div>
  )
}

export default Product
