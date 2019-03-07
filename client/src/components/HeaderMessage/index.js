import React from 'react'
import { Row, Col } from "react-materialize";
import "./style.css";

function HeaderMessage(props) {
    return (
        <div id="header-text">
        <Row>
            <Col l={7} className="offset-l4">
                <h1 className="header-message">Full Stack<br /> Web Developer</h1>
            </Col>
        </Row>
        </div>
    )
}

export default HeaderMessage

