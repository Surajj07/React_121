import React from 'react';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import AllProducts from './AllProducts';
import Home from './Home';
import Product from './Product';

const Navbar=()=>{
    return (
        <div>
            <nav>
          <Link to='/'>Home</Link>
          <Link to='/products'>products</Link>
      </nav>
        </div>
    )
}

const AllRoutes = () => {
  return (
    <div>
     <>
     <Navbar/>
     <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/products' element={<AllProducts/>}/>
         <Route path='/products/:id' element={<Product/>}/>
     </Routes>
     </>
    </div>
  )
}

export default AllRoutes
