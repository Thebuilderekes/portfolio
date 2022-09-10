import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import '../../index.css'


function About() {
  return (
        <Section>
                      <div className="container">
                     <div className="about" name = "about">
                     <Fade>
                            <h2 className= "text-left">About</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, vero, esse autem vel mollitia, quae ex natus veniam dolores itaque corrupti! Corporis, laudantium deleniti molestias delectus dolor quod maiores nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum non quidem dolor commodi nobis asperiores eum velit veritatis magni necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptates nesciunt earum in temporibus sapiente nemo, dicta at error blanditiis ad fugit necessitatibus corrupti nam est neque iusto ratione accusantium!
                            </p>
                    </Fade>
                    </div>
             
                    <div className="about-img-container">
                    <Fade>
                         <img src="/src/assets/img/angella.jpg"alt="developer's photo" />
                  </Fade>
                    </div>
              </div>
       </Section>

  )
}

export default About

const Section = styled.section`
background-color:  #262b33;
padding: 3rem 1rem;


.container {
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 20%;
grid-row-gap: 0px;


@media (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;         
}

}

@media (min-width:1500px){
  padding: 7rem 0;
}


h2{
color: #E8D1FF;
  overflow-y: hidden;

}

p{
  color: #ffffff;
  font-size: 1rem;
  font-family:Arial, Helvetica, sans-serif;
}

`

