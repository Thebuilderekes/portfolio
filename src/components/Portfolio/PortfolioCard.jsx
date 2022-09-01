import React from 'react'
import Fade from 'react-reveal/Fade'

const PortfolioCard = ({imgUrl, text, layout, language, tech}) => {
  return (

    <div>
    <Fade>
    <div className="card col col-12 col-sm-12 col-md-12">
            <img src={imgUrl} alt="" />
            <p>{text}
            </p> 
            <ul>
                <li>{layout}</li>
                <li>{language}</li>
                <li>{tech}</li>
        </ul>
    </div>
    </Fade>
    </div>
  )
}

export default PortfolioCard