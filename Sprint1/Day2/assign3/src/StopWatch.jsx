import React from 'react'
import { useState } from 'react'

const StopWatch = () => {
    const [time,setTime]=useState(0)
    const [watchRunning,setWatchRunning]=useState(false)
    const [id, setId]=useState(null)
    const [id2,setId2]=useState(null)
    const [minute,setMinute]=useState(0)

    const handleWatch=()=>{
        if(id!==null ) return;
       

        const _id = setInterval(()=>{
            if(time===60)
            {
                setTime(0)
            }
            else{
            setTime((prev)=>prev+1)
            }
        },1000)
        const _id2=setInterval(()=>{
            setMinute(minute=>minute+1)
        },60000)
        setId2(_id2)
        setId(_id)
        setWatchRunning(true)
        // if(time%60===0)
        //     {
        //         setMinute((minute)=>minute+1)
        //     }
    }

    const handleStop=()=>{
        clearInterval(id)
        clearInterval(id2)
        setWatchRunning(false)
        setId(null)
    }

    return (
        <>
        <h1>{minute}</h1>
        <h1>{time}</h1>
        {!watchRunning?(<button onClick={handleWatch}>START WATCH</button>)
        :
        (<button onClick={handleStop}>STOP</button>)}
        </>
    )
}


export default StopWatch
