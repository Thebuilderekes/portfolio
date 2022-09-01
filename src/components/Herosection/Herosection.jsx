import React from 'react'
import '../../styles/herosection.css'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'


function Herosection() {
  return (
      <div className="container">
            <Section>
            <div className="row">
                <div className="col-12">
                  <Fade bottom>
                        <h1><span className = "small-text">Hi, my name is</span> <br /> ANGELA BRIDAR<br/>  Front End <span className='purple-text'>Developer</span></h1>
                  </Fade>
              </div>
           </div>
      </Section>
  </div>
  )
}

export default Herosection

const Section = styled.div`

height: 100vh;

@media (min-width:1500px){

      height: 60vh;

}

@media (max-width:900px){

      height: 60vh;

}

h1.react-reveal{
      overflow: hidden;
}


`
