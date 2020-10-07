import React from 'react'
import "./style.css"

function PortfolioHeader(props) {
  return (
    <>
      <div className="container-fluid" id="portfolio-header-img"></div>
      <div id="portfolio-header-image">
        <div>
          <h1 id="portfolio-header-text" className="animated fadeInUp">Portfolio</h1>
        </div>
      </div>
    </>
  )
}

export default PortfolioHeader

