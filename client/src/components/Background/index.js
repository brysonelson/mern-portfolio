import React from 'react'
import { Col, Card } from "react-materialize"
import InViewMonitor from "react-inview-monitor"
import "./style.css"

function Background(props) {
    return (
            <Col l={5} className="offset-l2">
                <InViewMonitor
                    classNameNotInView='vis-hidden'
                    classNameInView='animated slideInLeft'
                    intoViewMargin="5%"
                >
                    <Card className="hoverable about-me-background">
                        <h5><i className="fas fa-globe background-logo"></i> Background</h5>
                        <hr />
                        <p>I've always loved problem solving and puzzle. That was the first clue that I would end up in the tech field. Development is nothing more than breaking a problem down into its smallest components, and then figuring out how to make it all work together. I have had the opportunity to complete a coding bootcamp through University of California San Diego, and it truly made me realize how passionate I am about coding.</p>
                        <p>Through out that experience I had the opportunity to learn from some very talented programmers. Not only those teaching, but my classmates as well. Teamwork is so important when it comes to building a product that is actually useful. The collaboration of ideas, opinions, and knowledge is one of my favorite parts of building software.</p>
                    </Card>
                </InViewMonitor>
            </Col>
    )
}

export default Background

