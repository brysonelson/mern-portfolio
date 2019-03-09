import React from 'react'
import "./style.css"
import { Row, Col } from "react-materialize"
import { Link } from "react-router-dom"

function PortfolioHomeSection(props) {
  return (
    <div className="body-content container-fluid" id="body-content-two">
            <Row>
                <Col l={8} className="offset-l1">
                    <div className="h-100 body-content-text" id="content-2-text">
                            <h3><strong>My Portfolio</strong></h3>
                            <h4>Ideas in Action. Code in Progress.</h4><br/>
                            <hr className="content-hr-2" /><br />
                            <p>My favorite part of coding is getting to convert my ideas into functioning applications.</p>
                            <p>Click "Portfilio" on the right to see my body of work.</p>
                    </div>
                </Col>
                <Col l={3}>
                    <div className="z-depth-2" id="content-2-shape"></div>
                    <a onMouseOver={props.shapeTwoHover} className="mt-5 mx-5 z-depth-2" id="content-2-diamond">
                        <Link to="/portfolio"><h2 className="text-center" id="content-diamond-2-text">Portfolio</h2></Link>
                    </a>
                </Col>
            </Row>
        </div>
  )
}

export default PortfolioHomeSection

