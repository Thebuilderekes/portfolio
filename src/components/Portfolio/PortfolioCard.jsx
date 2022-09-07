import React from 'react'
import Fade from 'react-reveal/Fade'

const PortfolioCard = ({imgUrl, text, styling, language, framework}) => {
  return (
    <section>
        <Fade>
              <div className="card col col-12 col-sm-12 col-md-12">
                      <img src={imgUrl} alt="" />
                      <p>{text} </p> 
                      <ul>
                          <li>{styling}</li>
                          <li>{language}</li>
                          <li>{framework}</li>
                    </ul>
              </div>
        </Fade>
    </section>
  )
}

export default PortfolioCard