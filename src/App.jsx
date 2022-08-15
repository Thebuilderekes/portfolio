import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import './App.css'
import Cards from "./components/Cards/Cards"
import Navigation from './components/Navigation/Navigation'
import Herosection from './components/Herosection/Herosection'

function App() {

  return (
  <div className =  "App ">
        <Navigation/>
         <Herosection/>
  </div>
   
  )
}

export default App
