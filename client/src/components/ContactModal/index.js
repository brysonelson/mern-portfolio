import React, { Component } from 'react'
import { Modal, Row, Input, Button, Col, Table } from "react-materialize"
import axios from "axios"
import Swal from "sweetalert2"
import "./style.css"

class ContactModal extends Component {

    constructor() {
        super()
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            message: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.submitContact = this.submitContact.bind(this)
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    submitContact(event) {
        event.preventDefault()
        console.log("submitting")
        axios.post("/api/contact", {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            message: this.state.message
        }).then((response) => {
            if (response) {
                Swal.fire({
                    title: 'Submitted',
                    type: 'success',
                    showConfirmButton: false,
                    showCancelButton: false,
                    backdrop: true,
                    // toast: true,
                    timer: 1100,
                    // position: "top-end",
                    // customClass: "success-toast"
                    // confirmButtonText: 'Ok'
                });
            }
        })
    }

    render() {

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
                        <Input s={12} label="First Name" name="first_name" value={this.state.first_name} onChange={this.handleChange}/>
                        <Input s={12} label="Last Name" name="last_name" value={this.state.last_name} onChange={this.handleChange}/>
                        <Input type="email" label="Email" s={12}  name="email" value={this.state.email} onChange={this.handleChange}/>
                        <Input type="textarea" label="Message" s={12} name="message" value={this.state.message} onChange={this.handleChange}/>
                        <Button className="modal-action modal-close" type="submit" onClick={this.submitContact}>Submit</Button>
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
                                    <td><a href="www.linkedin.com/in/bryson-nelson-7779a411a" target="_blank"><b>CLICK HERE TO VISIT LINKEDIN IN A NEW TAB</b></a></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Row>
        </Modal>
    )
}
}

export default ContactModal

