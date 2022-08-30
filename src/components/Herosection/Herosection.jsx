import React from 'react'
import '../../styles/herosection.css'
import styled from 'styled-components'


function Herosection() {
  return (
      <div className="container">
            <Section>
            <div className="row">
                <div className="col-12">
                     <h1><span className = "small-text">Hi, my name is</span> <br /> EKEOPRE BEREDUGO<br/>  Front End <span className='purple-text'>Developer</span></h1>
              </div>
           </div>
      </Section>
  </div>
  )
}

export default Herosection

const Section = styled.div`

background-color: "#000000";

`