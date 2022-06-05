import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContextProvider'
import style from './Navbar.module.css'
import axios from "axios"

const Navbar = () => {
    const [state,dispatch]=useContext(AuthContext);

    const loginUser=async()=>{
        axios({
            url:"https://reqres.in/api/login",
            method:"POST",
            data:{
                email:"eve.holt@reqres.in",
                password:"cityslicka"
            }
        })
        .then((res)=>{
            alert("success")
            dispatch({
                type:"LoginSuccess",
                paylosd:res.data.token
            })
        })
        .catch((err)=>{
            alert("failure")
        })
    }
  return (
    <div>
      <div className={style.navbar}>
          <button onClick={loginUser}>login</button>
      </div>
    </div>
  )
}

export default Navbar
