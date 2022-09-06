import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components'
import {Link} from 'react-scroll'

function Navigation() {

  
    const [navb, setNavb] = useState(false)
    const handleClick = () => setNavb(!navb) 
    
  return (

  
     return (
      <Header>
        <Container>
        <a href="/">LOGO</a>
          
        <Nav className="desktop-nav">
          <ul className="desktop-navItems" >
            <li><a href ="">Home</a></li>
             <li><a href ="">About</a></li>
             <li><a href ="">Portfolio</a></li>
             <li><a href ="">Contact</a></li>
          </ul>
        </Nav> 
          <Nav className="mobile-nav">
          <button onclick = {handleClick}><img src="../src/assets/hamburger.svg"/></button>
  
          <ul className={!navb? 'mobile-navItems' : 'no-item'} >
            <li><a href ="">Home</a></li>
             <li><a href ="">About</a></li>
             <li><a href ="">Portfolio</a></li>
             <li><a href ="">Contact</a></li>
          </ul>
        </Nav>
      </Container>
      </Header>
  );
}

export default Navigation;

const Header = styled.header`

background-color: #703D85;
  
  `

const Container = styled.div`

  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
 position: relative;



  .desktop-nav {
    display: none;

    ul {

      li {

        a{

    color: #ffffff;
        }
      }
    }
  }

.mobile-nav {


  ul {
  
    li {
      padding: 10px 0;
    }
  }

}

  
  .mobile-navItems{

    display: block;
  }


  .no-item{
    display: none;
  }

@media (min-width: 800px){

  
  .desktop-nav {
    display: block;
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
      padding: 0 10px
    }
  }
  
  @media (min-width: 800)

    .mobile-nav {
    display: block;
  }

  
  `