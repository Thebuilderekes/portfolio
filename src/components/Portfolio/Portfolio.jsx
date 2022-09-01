import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import PortfolioCard from './PortfolioCard'

function Portfolio() {
  return (

    <div>
        <Section>
          <div className="container">
                <div className="row">
                     <div className="col-12 m-auto">
                         <Fade>
                                <h2 className= "text-left">Portfolio</h2>
                          </Fade>
                          <div className="card-container">
                                  <PortfolioCard imgUrl = "https://via.placeholder.com/300"  
                                    text = "This is about my project..." 
                                    layout = " CSS" 
                                    tech=" Bootstrap"
                                    language= "React" /> 
                                  <PortfolioCard 
                                    imgUrl = "https://via.placeholder.com/300" 
                                    text = "This is about my project..." 
                                    layout = " CSS"  tech=" Bootstrap" 
                                    language= "JavaScript" /> 
                                  <PortfolioCard
                                    imgUrl = "https://via.placeholder.com/300" 
                                    text = "This is about my project..." 
                                    layout = " CSS"  
                                    tech=" Bootstrap" 
                                    language= "JavaScript"/>          
                           </div>
                           <div className="card-container">
                           <PortfolioCard 
                                    imgUrl = "https://via.placeholder.com/300" 
                                    text = "This is about my project..." 
                                    layout = " CSS"  tech=" Bootstrap" 
                                    language= "JavaScript" /> 
                                  <PortfolioCard
                                    imgUrl = "https://via.placeholder.com/300" 
                                    text = "This is about my project..." 
                                    layout = " CSS"  
                                    tech=" Bootstrap" 
                                    language= "JavaScript"/>        
                                        <PortfolioCard 
                                    imgUrl = "https://via.placeholder.com/300" 
                                    text = "This is about my project..." 
                                    layout = " CSS"  tech=" Bootstrap" 
                                    language= "JavaScript" />     
                             </div>
                     </div>
                </div>
            </div>
       </Section>
    </div>
  )
}

export default Portfolio

const Section = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 3rem 0;
text-decoration: none;
list-syle: none;


h2{

  overflow-y: hidden;

}

ul {

  display: flex;

  li {
    font-size: 12px;
    border: 1px solid #703D85;
    margin : 0 5px;
    padding: 2px;
    font-family: Arial, Helvetica, sans-serif;
  }

}

p{

  font-size: 1rem;
  font-family:Arial, Helvetica, sans-serif;
}


.card-container{
  display: flex;
  margin: 50px 0;
 justify-content: space-between;
}



.card { 
  border: 1px solid #703D85;
  padding: 20px;

}

@media (max-width:990px){

  .card-container {
    flex-direction: column;
    margin: 20px 0;
  }
  
  .card{
    margin: 30px 0;
    width: 100%;
  }
  }


`

