import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AllProducts from './pages/AllProducts';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import About from './pages/About'
import Contact from './pages/Contact'
import FandQ from './pages/FandQ'

function App() {

  return (
    <div className="App">
     <Navbar/>
     <Routes>
       <Route path='/' element={<AllProducts/>}/>
       <Route path='/men' element={<Men/>}/>
       <Route path='/women' element={<Women/>}/>
       <Route path='/kids' element={<Kids/>}/>
     </Routes>
     {/* <AllProducts/> */}
     <Footer />
     <Routes>
     <Route path='about_us' element={<About/>}/>
                <Route path='/faq' element={<FandQ/>}/>
                <Route path='/contact_us' element={<Contact/>}/>
     </Routes>
    </div>
  );
}

export default App;
