import React from "react";
import { Col, Row } from "react-materialize"
// import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav"

function NoMatch() {
    return (
        <div>
            <Nav navItemColor="#eb774c" />
            <Row>
                <Col l={8} className="offset-l2" style={{ textAlign: "center", marginTop: "15vh" }}>
                    
                    <h1>This Is Not The Page You're Looking For</h1>
                    <h1>
                        <span role="img" aria-label="Face With Rolling Eyes Emoji">
                            🙄
                        </span>
                    </h1>
                    <h3>404 Error - Not Found</h3>
                </Col>
            </Row>
        </div>
    );
}

export default NoMatch;
