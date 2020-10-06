import React from 'react'
import { Row, Col } from "react-materialize";
import "./style.css";

function HeaderMessage(props) {
    return (
        <div id="header-text">
        <Row>
            <Col l={8} s={12} className="offset-l4">
                <h1 className="header-message animated flipInX">Full Stack<br /> Web Developer</h1>
                <p className="header-sub-message">I build web apps to help solve everyday problems with simple, elegant design and the user at top of mind.</p>
            </Col>
        </Row>
        </div>
    )
}

export default HeaderMessage

