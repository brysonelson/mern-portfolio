import React from 'react'
import { Modal, Row, Input, Button, Col, Table } from "react-materialize"
import "./style.css"

function ContactModal(props) {

    const contactModalTrigger = <span style={{ border: "none" }}>Contact</span>
    const contactModalHeader = <span style={{ color: "#eb774c", marginLeft: "5vw" }}>Contact Me</span>
    return (
        <Modal
            className="contact-modal"
            header={contactModalHeader}
            bottomSheet
            trigger={contactModalTrigger}>
            <h6 style={{ marginLeft: "5vw" }}>Please fill out the info below to get in touch about any possible opportunities, questions, or just to say hi! You may also reach me with the contact info provided</h6>
            <Row className="contact-form">
                <Row>
                    <Col s={6} style={{borderRight: "solid 1px #848484"}}>
                        <Input s={12} label="First Name" />
                        <Input s={12} label="Last Name" />
                        <Input type="email" label="Email" s={12} />
                        <Input type="textarea" label="Message" s={12} />
                        <Button>Submit</Button>
                    </Col>
                    <Col s={6}>
                        <h4>Contact Info</h4>
                        <Table bordered={true}>
                            <tbody>
                                <tr>
                                    <td><b>Email:</b></td>
                                    <td>bryson.nelson1@gmail.com</td>
                                </tr>
                                <tr>
                                    <td><b>Phone:</b></td>
                                    <td>111-000-9999</td>
                                </tr>
                                <tr>
                                    <td><b>LinkedIn:</b></td>
                                    <td>www.linkedin.com/in/bryson-nelson-7779a411a</td>
                                </tr>
                            </tbody>
                        </Table>

                    </Col>
                </Row>
            </Row>
        </Modal>
    )
}

export default ContactModal

