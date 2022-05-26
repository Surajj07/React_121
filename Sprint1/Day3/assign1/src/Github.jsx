import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const getGithubUsers=(q = "Surajj07", page=1)=>{
   return ( axios("https://api.github.com/search/users",{
      method:'GET',
        params:{
            q:q,
            per_page:5,
            page
        }
    })
   )
}

const Github = () => {
const [loading, setLoading]=useState(true)
const [data,setData]=useState([])
const [error,setError]=useState(false)
const [query,setQuery]=useState('masai')
const [page,setpage]=useState(1)

useEffect(()=>{
    
   getGithubUsers(query,page)
    .then(res=>{
        setLoading(false)
        setData(res.data)
        
    })
    .catch(error=>{
        setLoading(false)   
          setError(true)
          console.log(error)
    })
},[query,page])
const handleClick=(query)=>{
    setQuery(query)
}

console.log(data)
console.log(query)
  return (
    <div>
      <h1>Github Users</h1>
      {loading && <div>...loading</div>}
      {error && <div>...error</div>}
      <SearchBox handleClick={handleClick}/>
     {
         data?.items?.map((elem)=>(
            //  console.log(elem)
             <GithubCard key={elem.id} {...elem} />
         ))
     }
     <div>
         <button disabled={page===1} onClick={()=>setpage(page-1)}>PREV</button>
         <button onClick={()=>setpage(page+1)}>NEXT</button>
     </div>
    </div>
  )
}

const SearchBox=({handleClick})=>{
const [text,setText]=useState("")
return (
    <div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        <button onClick={()=>handleClick(text)}>SEARCH</button>
    </div>
)
}

const GithubCard=({avatar_url, login})=>{
    return (
    <div style={{height:"100px", border:"1px solid black", width:"300px",display:"flex"}}>
      <img src={avatar_url} alt={login}/>
      <div>{login}</div>
      
    </div>
    )
}

export default Github
