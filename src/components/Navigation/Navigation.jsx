import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import '../../styles/navigation.css'


function Navigation(){
    return (
        <Header>
                <Fade top>
                    <a className= "logo" href="/">EB</a>
               </Fade>
                <nav>
                    <Fade top>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Porfolio</a></li>
                        <li><a href="">Contact</a></li>
                    </ul> 
                    </Fade>   
                    </nav>
        </Header>

    )
  };

export default Navigation

const Header = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
    background-color: #703D85;

a{

    color: #ffffff;
}

nav {

    ul{
        li{
            
         a{

            color: #ffffff;
         }

        }
    }
}

`;