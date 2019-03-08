import React from 'react'
import { Row, Col } from "react-materialize"
import "./style.css"

function ContactMeHomeSection(props) {
    return (
        <div className="body-content container-fluid" id="body-content-three">
            <Row>
                <Col l={3}>
                    <div className="z-depth-2" id="content-3-shape"></div>
                    <a className="mt-5 mx-5 z-depth-2" id="content-3-diamond">
                        <h2 className="text-center" id="content-diamond-3-text">Contact</h2>
                    </a>
                </Col>
                <Col l={8} className="offset-l1">
                    <div className="h-100 body-content-text" id="content-3-text">
                        <h3><strong>Contact Me</strong></h3>
                        <h4>But Not Too Early.</h4><br />
                        <hr className="content-hr-3" /><br />
                        <p>Reach out with any inquiries, opportunities, or questions. I love talking to new people!</p>
                        <p>Click "Contact" on the left to get ahold of me.</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ContactMeHomeSection

