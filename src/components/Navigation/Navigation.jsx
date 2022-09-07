import React from 'react';
import { useState } from 'react';
import styled from 'styled-components'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/Ai'
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade'


function Navigation() {

  
    const [navb, setNavb] = useState(true);
    const handleClick = () => setNavb(!navb) ;
    const iconStyle = {width: "30px" , height:"30px", color: "#ffffff", }
    const linkStyleDesktop = { color: "#ffffff", padding: "0 10px ", cursor: "pointer"}
    const linkStyleMobile = { color: "#ffffff", padding: "30px 0", fontSize: "1.5rem", cursor: "pointer"}



     return (
      <Header>
        <Container>
              <a href="#">LOGO</a>
              <Nav className="desktop-nav">
                    <div className="desktop-navItems" >
                          <Link  style = {linkStyleDesktop}   to="app" smooth={true}  duration={500}>
                              Home
                         </Link>
                        <Link style = {linkStyleDesktop}  to="about" smooth={true}  duration={500}>
                              About
                        </Link>
                        <Link  style = {linkStyleDesktop} to="portfolio" smooth={true}  duration={500}>
                              Portfolio
                        </Link>
                        <Link  style = {linkStyleDesktop} to="footer" smooth={true}  duration={500}>
                             Contact
                        </Link>
                    </div>
              </Nav> 
              <Fade>
              <button className = "btn" onClick = {handleClick}> {!navb ? <Fade><AiOutlineClose style={iconStyle}/></Fade>: <Fade> <AiOutlineMenu  style={iconStyle} /> </Fade> } 
              </button>
              </Fade>
        </Container>

          <Nav className="mobile-nav">
            <Fade>
                <div className={!navb ? 'display-mobile-nav' : 'display-none'} >
                          <Link className= "link-padding"  style = {linkStyleMobile} to="app" smooth={true}  duration={500}>
                              Home
                        </Link>
                        <Link className= "link-padding"style = {linkStyleMobile}to="about" smooth={true}  duration={500}>
                              About
                        </Link>
                        <Link  className= "link-padding" style = {linkStyleMobile} to="portfolio" smooth={true}  duration={500}>
                              Portfolio
                        </Link>
                        <Link  className= "link-padding"style = {linkStyleMobile} to="footer" smooth={true}  duration={500}>
                             Contact
                        </Link>
                </div>
                </Fade>
        </Nav>
  </Header>
  )
}

export default Navigation;

const Header = styled.header`
  background-color: #262b33;
  padding: 1.2rem 0;
  width: 100vw;
  position:fixed;
  z-index: 999;

.display-mobile-nav {
  display: block;
}

.display-none{
  display: none;
}

  .desktop-nav {
    display: none;
  }

  .mobile-navItems{
    display: flex;
  }

.mobile-nav {

  .display-mobile-nav {
    display:flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 10px 10px 5px 0px rgba(189,189,189,0.75);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(189,189,189,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(189,189,189,0.75);
    transition: opacity 5s ease-in;
  

  }

`;

//container for desktop nav
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 12rem;
  font-family:Arial, Helvetica, sans-serif;

@media (max-width: 400px){

  padding: 1rem 1rem;
}




a  {

  color: #ffffff;

}

button {
  background-color: transparent;
  border: none;
 }

  ul {

    margin: 20px 0;
    li {
      padding: 10px 0;
      
      a {
        color: #ffffff;
      }
    }
  }

}


@media (min-width: 800px){
  .desktop-nav {
    display: block;
  }

  .btn { 
    
    display: none
  
  }
  
  .mobile-nav {
    display: none;
  }

}
  `

const Nav = styled.div`
  .desktop-navItems {
    display: flex;

    li {
      padding: 0 10px;
    }
  }

  @media (min-width: 800px){
  
  .mobile-nav {
    display: block;
  }
`;