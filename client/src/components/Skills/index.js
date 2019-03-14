import React from 'react'
import { Row, Col, Card, Collection, CollectionItem } from "react-materialize"
import InViewMonitor from "react-inview-monitor"
import "./style.css"

function Skills(props) {

    return (
        <Row>
            <Col l={8} className="offset-l2">
                <InViewMonitor
                    classNameNotInView='vis-hidden'
                    classNameInView='animated slideInRight'
                    intoViewMargin="5%"
                >
                    <Card className="hoverable about-skills">
                        <h5><i className="fas fa-tools skills-logo"></i> Top Skills</h5>
                        <hr />
                        <Row>
                            <Col l={6} s={12}>
                                <Collection>
                                    <CollectionItem><b>Browser-Based</b></CollectionItem>
                                    <CollectionItem><i className="fas fa-chevron-right skills-bullet"></i><i className="fas fa-chevron-right skills-bullet"></i> HTML</CollectionItem>
                                    <CollectionItem><i className="fas fa-chevron-right skills-bullet"></i><i className="fas fa-chevron-right skills-bullet"></i>  CSS</CollectionItem>
                                    <CollectionItem><i className="fas fa-chevron-right skills-bullet"></i><i className="fas fa-chevron-right skills-bullet"></i>  Bootstrap</CollectionItem>
                                    <CollectionItem><i className="fas fa-chevron-right skills-bullet"></i><i className="fas fa-chevron-right skills-bullet"></i>  Javascript</CollectionItem>
                                    <CollectionItem><i className="fas fa-chevron-right skills-bullet"></i><i className="fas fa-chevron-right skills-bullet"></i>  jQuery</CollectionItem>
                                    <CollectionItem><i className="fas fa-chevron-right skills-bullet"></i><i className="fas fa-chevron-right skills-bullet"></i>  Handlebars</CollectionItem>
                                    <CollectionItem><i className="fas fa-chevron-right skills-bullet"></i><i className="fas fa-chevron-right skills-bullet"></i>  Firebase</CollectionItem>
                                    <CollectionItem><i className="fas fa-chevron-right skills-bullet"></i><i className="fas fa-chevron-right skills-bullet"></i>  ReactJS</CollectionItem>
                                    <CollectionItem><i className="fas fa-chevron-right skills-bullet"></i><i className="fas fa-chevron-right skills-bullet"></i>  Material Design</CollectionItem>
                                </Collection>
                            </Col>
                            <Col l={6} s={12}>
                                <Collection>
                                    <CollectionItem><b>Deployment</b></CollectionItem>
                                    <CollectionItem><i className="fas fa-chevron-right skills-bullet"></i><i className="fas fa-chevron-right skills-bullet"></i>  Heroku</CollectionItem>
                                    <CollectionItem><i className="fas fa-chevron-right skills-bullet"></i><i className="fas fa-chevron-right skills-bullet"></i>  Git</CollectionItem>
                                    <CollectionItem><b>Databases</b></CollectionItem>
                                    <CollectionItem><i className="fas fa-chevron-right skills-bullet"></i><i className="fas fa-chevron-right skills-bullet"></i>  MySQL</CollectionItem>
                                    <CollectionItem><i className="fas fa-chevron-right skills-bullet"></i><i className="fas fa-chevron-right skills-bullet"></i>  MongoDB</CollectionItem>
                                    <CollectionItem><b>NodeJS (Server Side Development)</b></CollectionItem>
                                    <CollectionItem><i className="fas fa-chevron-right skills-bullet"></i><i className="fas fa-chevron-right skills-bullet"></i>  Express</CollectionItem>
                                    <CollectionItem><i className="fas fa-chevron-right skills-bullet"></i><i className="fas fa-chevron-right skills-bullet"></i>  Security and Session Storage</CollectionItem>
                                    <CollectionItem><i className="fas fa-chevron-right skills-bullet"></i><i className="fas fa-chevron-right skills-bullet"></i>  User Authentication</CollectionItem>
                                </Collection>
                            </Col>
                        </Row>
                    </Card>
                </InViewMonitor>
            </Col>
        </Row>
    )
}

export default Skills

