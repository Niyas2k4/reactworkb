import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import Navsection from './components/Navsection'
import HeadSection from "./components/HeadSection";
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage';
import About from './components/About';
import Aboutpb from './components/Aboutpb';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Service from './components/Service';
import ServiceTop from './components/ServiceTop';
import PortfolioDetails from './components/PortfolioDetails';






function App() {
  
  

  return (
    <>
<Routes>
  <>
  <Route path='/' element={<Homepage></Homepage>}/>
  <Route path='/About' element={
    <>
    <Navsection></Navsection>
    <About></About>
    <Aboutpb></Aboutpb>
    <Footer></Footer>
    </>
    }/>


  <Route path='/Gallery' element={
    <>
    <Navsection></Navsection>
    <Gallery></Gallery>
    <Footer></Footer>
    </>
    }/>

 <Route path='/Contact' element={
    <>
    <Navsection></Navsection>
    <Contact></Contact>
    <Footer></Footer>
    </>
    }/>


 <Route path='/Service' element={
    <>
    <Navsection></Navsection>
    <ServiceTop></ServiceTop>
    <Service></Service>
    <Aboutpb></Aboutpb>
    <Footer></Footer>
    </>
    }/>


 <Route path='/GallerySingle' element={
    <>
    <Navsection></Navsection>
    <PortfolioDetails></PortfolioDetails>
    <Footer></Footer>
    </>
    }/>


  </>


  
</Routes>

  

</>
      
  )
}

export default App
