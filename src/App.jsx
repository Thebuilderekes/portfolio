import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import * as Icon from 'react-bootstrap'
import '../src/index.css'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Herosection from './components/Herosection/Herosection'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Footer from './components/Footer/Footer'

function App() {

  return (
  <div className = "App " name="home">
        <Navigation/>
         <Herosection/>
         <About/>
         <Portfolio/>
         <Footer/>
  </div>
   
  )
};

export default App
