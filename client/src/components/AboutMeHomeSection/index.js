import React from 'react'
import { Row, Col } from "react-materialize";
import "./style.css"

function AboutMeHomeSection(props) {
  return (
    <div className="body-content container-fluid" id="body-content-one">
            <Row>
                <Col l={3}>
                    <div className="z-depth-2" id="content-1-shape"></div>
                    <a className="mt-5 z-depth-3" id="content-1-diamond">
                        <h2 className="text-center" id="content-diamond-1-text">About Me</h2>
                    </a>
                </Col>
                <Col l={8} className="offset-l1">
                    <div className="h-100 body-content-text" id="content-1-text">
                        <div id="content-1-text-background">
                            <h3><strong>About Me</strong></h3>
                            <h4>Code. Travel. Sleep. Repeat.</h4><br />
                            <hr className="content-1-hr" /><br />
                            <p>I love to explore new ideas, places, and things! Coding has been a gateway into more than I could have imagined. I'm here to share my passion with the world!</p>
                            <p>Click "About Me" on the left to learn more.</p>
                        </div>
                    </div>
                </Col>
            </Row>
    </div>
  )
}

export default AboutMeHomeSection

