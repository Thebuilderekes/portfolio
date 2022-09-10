import React from 'react'
import styled from 'styled-components'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Fade from 'react-reveal/Fade'



function Footer() {

const iconStyle = {fontSize: 40 , color:"#E8D1FF"}

  return (
    <Section name= "footer">
            <footer>
                <Fade>
                <p> Get in touch</p>
                </Fade>
                <Fade>
                <div className='container'>
            
                    <form>
                            <div className="form-group">
                                    <label for="exampleInputEmail1">Email </label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputText">Message</label>
                                <textarea type="text" className="form-control" id="exampleInputText" placeholder="Enter message"/>
                            </div>
                            <button type="submit" className="btn">Send email</button>
                    </form>

                    <div className="social">    
                        <p>You can reach me on social media</p>       
                        <div className="social-icons"> 
                                <a href=""><i className="bi bi-facebook" style={iconStyle}></i>
                                </a>
                                <a href=""><i className="bi bi-youtube" style={iconStyle}></i>
                                </a>
                                <a href=""><i className="bi bi-twitter" style={iconStyle}></i>
                                </a>
                              
                        </div>
                    </div>
                </div>
                </Fade>
        </footer>
</Section>
  )
}

export default Footer

const Section = styled.div`
background-color: #262b33;
padding: 0 1rem;

footer {
    
    p {
        color: #E8D1FF;
        font-size: 2rem;
        text-align: center;
        font-family: 'Archivo Black';
        padding: 1.5rem 0;
    }
}


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

form, label, input, {
    font-family:Arial, Helvetica, sans-serif; 
}

label, p {
    color: #E8D1FF;
}
label {
    margin: 0.6rem 0;
}

label{
    font-size: 1.2rem;
}

form {
    .btn {
        background-color: transparent;
        border: 1px solid #E8D1FF;
        margin: 1rem 0;
        color:  #E8D1FF;

        &:hover {
            background-color: #E8D1FF;
            color: #262b33;
        }
    }
}

input.form-control{
    margin: 5px 0;

}


.social {
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;

     .social-icons {
    
        a {
            padding: 0 10px;
        }
     }

    p {
        font-size: 1.825rem;
        font-family:Arial, Helvetica, sans-serif;  
   
    }
}

@media (min-width:1500px){

    padding: 2rem 0;
  }

.social {

    p {
        font-size: 1.3rem;
    }
}

}





`