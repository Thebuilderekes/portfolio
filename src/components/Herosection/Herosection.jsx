import React from 'react'
import '../Herosection/herosection.css'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'


function Herosection() {
  return (
      <div className="container">
       <Fade>
            <Section>
                  <div className="row">
                        <div className="col-12">
                                    <h1><span className = "small-text">Hi, my name is</span> <br /> ANGELA BRIDAR<br/>  Front End <span className='purple-text'>Developer</span></h1>
                        </div>
               </div>
         </Section>
      </Fade>
  </div>
  )
}

export default Herosection

const Section = styled.div`
height: 100vh;

h1.react-reveal{
      overflow-y: hidden;
}


@media (min-width:1500px){
     padding-top: 15%;
      height: 90vh;

      h1 {
          font-size: 4rem;  
      }

}

@media (min-width:1000px){
      padding-top: 10%;
}

@media (max-width:900px){

      height: 60vh;

}



`
