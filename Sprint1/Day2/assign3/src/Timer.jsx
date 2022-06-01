import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Timer = () => {
    const [timer,setTimer]=useState(null)
    const [isTimerRunning,setTimerRunning]=useState(false)
    const [id, setId]=useState(null)
    

    useEffect(()=>{
         if(timer===0){
             clearInterval(id)
         }
    },[timer,id])

    const handleUpdate=(timer)=>{
          setTimer(timer)
          setTimerRunning(true)
          handleStart();
    }

    const handleStart=()=>{
      if(id!==null || isTimerRunning) return;

       const _id = setInterval(()=>{
           setTimer(timer=>timer-1)
       },1000)
       setId(_id)
       setTimerRunning(true)
    }

    const handleStop=()=>{
        clearInterval(id)
        setTimerRunning(false)
        setId(null)
    }

    const handleReset=()=>{
        handleStop()
        setTimer(0)
    }
  return (
    <div>
      {timer===null?(<TimerInput handleUpdate={handleUpdate}/>):
      (
      <>
        <div>Timer:{timer}</div>
        {isTimerRunning?(<button onClick={handleStop}>PAUSE</button>):
        (<button onClick={handleStart}>START AGAIN</button>)}
        <button onClick={handleReset}>RESET</button>
        
      </>
      )}
    </div>
  )
}

const TimerInput=({handleUpdate})=>{
    const [timer,setTimer]=useState(0)

    const handleTimeUpdate=(value)=>{
        console.log("oops",value)
        if(Number.isNaN(value)){
            alert("please input number")
            return
        } 
        setTimer(Number(value))
    }

    return (
        <div>
        <input value={timer} onChange={(e)=>handleTimeUpdate(e.target.value)}/>
        <button onClick={()=>handleUpdate(timer)}>START TIMER</button>
        </div>
    )
}   

export default Timer
