
import { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { useState } from 'react';
import RestaurantDetails from './components/RestaurantDetails';

function App() {
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(false)
  const [data,setData]=useState([])
  const [page,setPage]=useState(1)
  const [ratingOrder,setRatingOrder]=useState("inc")
  const [costOrder,setCostOrder]=useState("inc")
  const [filterrating,setFilterRating]=useState(0)
  const [text,setText]=useState("")
  const [q,setQ]=useState("")
  const [cash,setCash]=useState(null)
  const [card,setCard]=useState(null)
  const [upi,setUpi]=useState(null)

  useEffect(()=>{
    fetchdata({page,ratingOrder,costOrder,filterrating,q,cash,card,upi})
  },[page,ratingOrder,costOrder,filterrating,q,cash,card,upi])

  const fetchdata=async({page,ratingOrder,costOrder,filterrating,q,cash,card,upi})=>{
    setLoading(true)
    const parmsforPayment={}
    if(cash!==null)parmsforPayment["paymentMethod.cash"]=cash;
    if(card!==null)parmsforPayment["paymentMethod.card"]=card;
    if(upi!==null)parmsforPayment["paymentMethod.upi"]=upi;
    axios({
       method:'get',
       url:"http://localhost:3000/foods",
       params:{
         _page:page,
         _limit:5,
         _sort:"rating,cost",
         _order:`${ratingOrder},${costOrder}`,
         rating_gte:filterrating,
         q:q,
         ...parmsforPayment
       }
    })
    .then(res=>{
      
      setData(res.data);
      setLoading(false);
    })
    .catch(err=>{
      setError(true);
      setLoading(false)
    })
  }
   console.log(data)
 
  return (
    <div className="App">
     <h1>Resturant Details</h1>
     {loading && <div>...loading</div>}
     <div>
       <h3>search</h3>
       <input value={text} onChange={(e)=>setText(e.target.value)}/>
       <button onClick={()=>setQ(text)}>search</button>
     </div>
     <div>
       <button disabled={costOrder==="dec"}  onClick={()=>setCostOrder("dec")}>COST SORT BY DEC </button>
       <button disabled={costOrder==="inc"}onClick={()=>setCostOrder("inc")}>COST SORT BY inc </button>
     </div>
     <div>
       <button disabled={ratingOrder==="dec"}  onClick={()=>setRatingOrder("dec")}>SORT BY DEC RATING</button>
       <button disabled={ratingOrder==="inc"}onClick={()=>setRatingOrder("inc")}>SORT BY inc RATING</button>
     </div>
     <br/>
     <div>
       <button  onClick={()=>setCash(!cash)}>cash - {cash?"TRUE":"FALSE"}</button>
       <button  onClick={()=>setCard(!card)}>card - {card?"TRUE":"FALSE"}</button>
       <button  onClick={()=>setUpi(!upi)}>upi - {upi?"TRUE":"FALSE"}</button>
       <button onClick={()=>{
            setCash(null);
            setCard(null);
            setUpi(null)}}>reset</button>
     </div>
     <div>
       <h4>Filter Rating</h4>
       <button   onClick={()=>setFilterRating(4)}>greater than 4</button>
       <button onClick={()=>setFilterRating(3)}>greater than 3</button>
       <button onClick={()=>setFilterRating(2)}>greater than 2</button>
       <button onClick={()=>setFilterRating(1)}>greater than 1</button>
     </div>
     <div>
       <button disabled={page===1} onClick={()=>setPage(page-1)}>prev</button>
       <Pagination  currPage={page} lastPage={5} onPageChange={setPage} />
       <button  onClick={()=>setPage(page+1)}>next</button>
     </div>
     <div>
       {
         data.map(elem=>
         <RestaurantDetails key={elem.id} {...elem} title1={"wow"}/>)
        
      }
     </div>
    </div>
  );
}

const Pagination=({currPage,lastPage,onPageChange})=>{
  const arr=new Array(lastPage).fill(0)
  return (
     <div>
       {
         arr.map((elem,page)=><button onClick={()=>onPageChange(page+1)} disabled={(page+1)===currPage}>{page+1}</button>)
       }
     </div>
  )
}

export default App;
