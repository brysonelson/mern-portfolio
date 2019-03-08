import React from 'react'
import { Modal, Row, Input, Button } from "react-materialize"
import "./style.css"

function ContactModal(props) {

    const contactModalTrigger = <span style={{ border: "none" }}>Contact Me</span>
    const contactModalHeader = <span style={{color: "#eb774c", marginLeft: "5vw"}}>Contact Me</span>
    return (
        <Modal
            className="contact-modal"
            header={contactModalHeader}
            bottomSheet
            trigger={contactModalTrigger}>
            <h6 style={{marginLeft: "5vw"}}>Please fill out the info below to get in touch about any possible opportunities, questions, or just to say hi!</h6>
            <Row className="contact-form">
                <Input s={6} label="First Name" />
                <Input s={6} label="Last Name" />
                <Input type="email" label="Email" s={12} />
                <Input type="textarea" label="Message" s={12} />
                <Button>Submit</Button>
            </Row>
        </Modal>
    )
}

export default ContactModal

