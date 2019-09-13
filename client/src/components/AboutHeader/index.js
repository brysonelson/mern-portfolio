import React from 'react'
import { Row, Col } from "react-materialize"
import InViewMonitor from "react-inview-monitor"
// import $ from "jquery"
import "./style.css"

function AboutHeader(props) {
    return (
        <div>

            <Row className="about-head">
                <Col l={4} s={12} className="offset-l1">
                <InViewMonitor
                    classNameNotInView='vis-hidden'
                    classNameInView='animated'
                    intoViewMargin="5%"
                >
                    <div className="z-depth-2 circle profile-pic">
                    </div>
                    </InViewMonitor>
                </Col>
                <Col l={4} className="offset-l1">
                    <h1 className="about-head-text animated fadeInUp">About Me</h1>
                </Col>
            </Row>
            <Row>
                <Col l={6} className="offset-l3 about-page-quote">
                    <h5><em>"A good programmer looks both ways before crossing a one-way street."</em></h5>
                    <h6><b>- Unknown</b></h6>
                </Col>
            </Row>
        </div>
    )
}

export default AboutHeader

