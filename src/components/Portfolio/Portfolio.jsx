import React from 'react'
import styled from 'styled-components'


function Portfolio() {
  return (

    <div>
        <Section>
          <div className="container">
                <div className="row">
                     <div className="col-12 m-auto">
                            <h2 className= "text-left">Portfolio</h2>
                            <div className="card-container">
                                  <div className="card "><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dignissimos! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo repellat eos reiciendis odio ipsa odit, autem dicta distinctio neque perspiciatis ea aliquam corporis labore esse quisquam? Illum incidunt suscipit voluptates.
                                    </p> 
                                  <ul>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>Bootstrap</li>
                                        </ul></div>
                                  <div className="card ">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dignissimos! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo repellat eos reiciendis odio ipsa odit, autem dicta distinctio neque perspiciatis ea aliquam corporis labore esse quisquam? Illum incidunt suscipit voluptates.</p>  
                                    <ul>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>Bootstrap</li>
                                    </ul></div>
                             </div>
                             <div className="card-container">
                                      <div className="card col col-12 col-sm-12 col-md-5"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dignissimos! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo repellat eos reiciendis odio ipsa odit, autem dicta distinctio neque perspiciatis ea aliquam corporis labore esse quisquam? Illum incidunt suscipit voluptates.</p>
                                       <ul>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>Bootstrap</li>
                                        </ul></div>
                                      <div className="card col col-12 col-sm-12 col-md-5"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dignissimos! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo repellat eos reiciendis odio ipsa odit, autem dicta distinctio neque perspiciatis ea aliquam corporis labore esse quisquam? Illum incidunt suscipit voluptates.</p> 
                                      <ul>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>Bootstrap</li>
                                        </ul></div>
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
  margin: 30px 0;
 justify-content: space-between;
}



.card { 
  border: 1px solid #703D85;
  width: 45%;

  padding: 20px;

}

@media (max-width:400px){

  .card-container {
    flex-direction: column;
  }
  
  .card{
    width: 100%;
  }
  }


`

