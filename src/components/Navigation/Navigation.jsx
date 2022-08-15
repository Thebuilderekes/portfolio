import React from 'react'
import '../../styles/navigation.css'

function Navigation(){
    return (
      <div>
        <header>
        <nav className='color-gold'>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact us</a></li>
            </ul>    
        </nav>
        </header>
      </div>
    )
  }

export default Navigation