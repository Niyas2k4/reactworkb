import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import Navsection from './components/Navsection'
import HeadSection from "./components/Headsection";
import Footer from './components/Footer';
import { HashRouter, Route, Routes } from 'react-router-dom'
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
    <HashRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />

        <Route path='/About' element={
          <>
            <Navsection />
            <About />
            <Aboutpb />
            <Footer />
          </>
        }/>

        <Route path='/Gallery' element={
          <>
            <Navsection />
            <Gallery />
            <Footer />
          </>
        }/>

        <Route path='/Contact' element={
          <>
            <Navsection />
            <Contact />
            <Footer />
          </>
        }/>

        <Route path='/Service' element={
          <>
            <Navsection />
            <ServiceTop />
            <Service />
            <Aboutpb />
            <Footer />
          </>
        }/>

        <Route path='/GallerySingle' element={
          <>
            <Navsection />
            <PortfolioDetails />
            <Footer />
          </>
        }/>
      </Routes>
    </HashRouter>
  )
}

export default App
