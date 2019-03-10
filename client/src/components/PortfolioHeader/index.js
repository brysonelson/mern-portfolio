import React from 'react'
import "./style.css"

function PortfolioHeader(props) {
  return (
    <div className="container-fluid" id="portfolio-header-image">
        <div id="portfolio-header-img">
            <div>
                <h1 id="portfolio-header-text" className="animated zoomInDown">Portfolio</h1>
            </div>
        </div>
    </div>
  )
}

export default PortfolioHeader

