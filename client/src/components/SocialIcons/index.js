import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from "react-materialize";
import "./style.css";

function index(props) {
    return (
        <div className="container" id="home-top-space">
            <div className="sequenced socials">
                <Row>
                    <Col l={6} className="offset-l3">
                        <a className="social hoverable  btn-floating btn-large waves-effect waves-light blue transition hidden"><i class="fab fa-linkedin-in"></i></a>
                        <a className="social hoverable social-icon btn-floating btn-large waves-effect waves-light black transition hidden"><i class="fab fa-github"></i></a>
                        <a className="social hoverable social-icon-2 btn-floating btn-large waves-effect waves-light blue darken-4 transition hidden"><i class="fab fa-facebook-f"></i></a>
                        <a className="social hoverable  btn-floating btn-large waves-effect waves-light red transition hidden"><i class="fab fa-twitter"></i></a>
                        {/* <a class="social social-icon"><i class="fab fa-linkedin-in"></i></a> */}
                </Col>
                </Row>
            </div>

        </div>
    )
}

index.propTypes = {

}

export default index

