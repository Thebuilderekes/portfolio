import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import '../src/index.css'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Herosection from './components/Herosection/Herosection'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'

function App() {

  return (
  <div className = "App ">
        <Navigation/>
         <Herosection/>
         <About/>
         <Portfolio/>
  </div>
   
  )
};

export default App
