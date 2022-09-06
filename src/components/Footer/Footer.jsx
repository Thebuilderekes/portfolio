import React from 'react'
import styled from 'styled-components'
import 'bootstrap-icons/font/bootstrap-icons.css';


function Footer() {
  return (
    <Section>
        <footer>
   <div className='container'>
           <form>
                <div className="form-group">
                        <label for="exampleInputEmail1">Email </label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button type="submit" className="btn">Send email</button>
        </form>

        <div className="social">    
            <p>You can reach me on social media</p>       
            <div className="social-icons">    <a href=""><i className="bi bi-facebook" style={{ fontSize: 50 , color:"#703D85"}}></i></a>
             <a href=""><i className="bi bi-twitter" style={{ fontSize: 50, color:" #703D85" }}></i></a>
             <a href=""><i className="bi bi-facebook" style={{ fontSize: 50,  color:" #703D85"}}></i></a></div>
         
        </div>
     </div>
</footer>
</Section>
  )
}

export default Footer

const Section = styled.div`
background-color:#efefef;


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

form, label, input {
    
    font-family:Arial, Helvetica, sans-serif;
}


form {

    .btn {
        background-color: #703D85 ;
        margin-top: 10px;
        color: #ffffff;
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

    padding: 7rem 0;
  }





.social {

    p {
        font-size: 1.3rem;
    }
}


}





`