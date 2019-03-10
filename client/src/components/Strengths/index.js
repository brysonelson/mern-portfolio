import React from 'react'
import { Col, Card } from "react-materialize"
import InViewMonitor from "react-inview-monitor"
import "./style.css"

function Strengths(props) {
  return (
    <Col l={3}>
                <InViewMonitor
                    classNameNotInView='vis-hidden'
                    classNameInView='animated slideInUp'
                    intoViewMargin="5%"
                >
                    <Card className="hoverable about-strengths">
                        <h5><i className="fas fa-fist-raised strengths-logo"></i> Strengths</h5>
                        <hr />
                        <p>Although the full list of my skill is below, I tend to really like front end development at the moment. I love being able to see what I am building. A good clean design make a world of different in the entire experience of the app. I am familiar with many UI libraries including Material UI, Materialize, SemanticUI, and Bootstrap. However, I am like writing my own custom css animations and styling as well.</p>
                    </Card>
                </InViewMonitor>
            </Col>
  )
}

export default Strengths

