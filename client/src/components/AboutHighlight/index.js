import React from 'react'
import { Row, Col, Card } from "react-materialize"
import InViewMonitor from "react-inview-monitor"
import "./style.css"


function AboutHighlight(props) {
    return (
        <Row>
            <Col l={8} s={12} className="offset-l2 highlights">
                <Row>
                    <div className="rounded-corners">
                        <InViewMonitor
                            classNameNotInView='vis-hidden'
                            classNameInView='animated fadeInLeftBig'
                            intoViewMargin="5%"
                        >
                            <Col l={4} m={4} s={12}>
                                <Card className="highlight-area hoverable">
                                    <h2 id="ideas-highlight"><i className="far fa-lightbulb"></i></h2>
                                    <h5 className="idea-highlight-title">Ideas</h5>
                                    <hr />
                                    <p className="highlight-text">I love realizing new ideas that can actually help people and make a difference. Whether those are big picture ideas, or more minute details.</p>
                                </Card>

                            </Col>
                        </InViewMonitor>

                        <InViewMonitor
                            classNameNotInView='vis-hidden'
                            classNameInView='animated fadeInUpBig'
                            intoViewMargin="5%"
                        >
                            <Col l={4} m={4} s={12}>
                                <Card className="highlight-area hoverable">
                                    <h2 id="team-highlight"><i class="fas fa-users"></i></h2>
                                    <h5 className="team-highlight-title">Teamwork</h5>
                                    <hr />
                                    <p className="highlight-text">Thinking creatively and cooperatively in teams is paramount to success in the rapidly changing world of tech. I strongly believe that working together will get us to our goals faster.</p>
                                </Card>
                            </Col>
                        </InViewMonitor>

                        <InViewMonitor
                            classNameNotInView='vis-hidden'
                            classNameInView='animated fadeInRightBig'
                            intoViewMargin="5%"
                        >
                            <Col l={4} m={4} s={12}>
                                <Card className="highlight-area hoverable">
                                    <h2 id="code-highlight"><i class="fas fa-laptop-code"></i></h2>
                                    <h5 className="code-highlight-title">Code</h5>
                                    <hr />
                                    <p className="highlight-text">Undoubledly, my favorite part of the whole development process is actually putting my fingers to the keyboard. I love learning, reading, and writing code, and am always learning.</p>
                                </Card>
                            </Col>
                        </InViewMonitor>
                    </div>
                </Row>
            </Col>

        </Row>
    )
}

export default AboutHighlight

