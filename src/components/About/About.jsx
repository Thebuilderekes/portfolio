import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'


function About() {
  return (

    <div>
        <Section>
          <div className="container">
                <div className="row">
                  <Fade>
                     <div className="  col-sm-12 col-md-6" name = "about">
                            <h2 className= "text-left">About</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, vero, esse autem vel mollitia, quae ex natus veniam dolores itaque corrupti! Corporis, laudantium deleniti molestias delectus dolor quod maiores nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum non quidem dolor commodi nobis asperiores eum velit veritatis magni necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptates nesciunt earum in temporibus sapiente nemo, dicta at error blanditiis ad fugit necessitatibus corrupti nam est neque iusto ratione accusantium!</p>
                    </div>
                    </Fade>
                    <Fade>
                    <div className="about-img-container col-md-6 col-sm-12 position-relative">
                         <img  className= "position-absolute" src="/src/assets/img/angella.jpg"alt="developer's photo" />
                    </div>
                    </Fade>
              </div>
            </div>
       </Section>
    </div>
  )
}

export default About

const Section = styled.section`
width: 100vw;
background-color:  #262b33;
display: flex;
flex-direction: column;
align-items: center;
padding: 3rem 1rem;

@media (min-width:1500px){

  padding: 7rem 0;
}


h2{
color: #E8D1FF;
  overflow-y: hidden;

}

p{
  color: #ffffff;
  font-size: 1.2rem;
  font-family:Arial, Helvetica, sans-serif;
}




img {
  max-width: 500px;
  height: 300px;
  right: 0;
}




`

