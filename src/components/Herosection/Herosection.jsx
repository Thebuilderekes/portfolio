import React from 'react'
import '../Herosection/herosection.css'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'


function Herosection() {
  return (
            <Section>
            <div className="container">
                  <div className="row">
                        <div className="col-12">
                        <Fade>
                                    <h1><span className = "small-text">Hi, my name is</span> <br /> ANGELA BRIDAR<br/>  Front End <span className='gray-text'>Developer</span></h1>
                         </Fade>
                        </div>
               </div>
            </div>
         </Section>


  )
}

export default Herosection

const Section = styled.div`
background-color: #262b33;
padding: 0 1rem;
height: 100vh;

h1.react-reveal{
      overflow-y: hidden;
}


@media (min-width:1500px){
     padding-top: 10%;
      height: 90vh;

      h1 {
          font-size: 4rem;  
      }

}

@media (min-width:1000px){
      padding-top: 5%;
}

@media (max-width:900px){
      padding-top: 15%;
      height: 80vh;

}



`
