import React from 'react'
import { Row, Col } from "react-materialize";
import "./style.css";

function index(props) {
    return (
        <div className="container" id="home-top-space">
            <div className="sequenced socials">
                <Row>
                    <Col l={6} s={12} className="offset-l3" id="socials">
                        {/* <a href="https://www.linkedin.com/in/bryson-nelson-7779a411a" className="social hoverable btn-floating btn-large waves-effect waves-light blue darken-4 transition hidden" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/brysonelson" className="social hoverable social-icon btn-floating btn-large waves-effect waves-light black transition hidden" target="_blank"><i className="fab fa-github" ></i></a>
                        <a href="https://www.instagram.com/brysonelson/" className="social hoverable social-icon-2 btn-floating btn-large waves-effect waves-light pink darken-1 transition hidden" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="https://twitter.com/brysonelson" className="social hoverable  btn-floating btn-large waves-effect waves-light blue lighten-1 transition hidden" target="_blank"><i className="fab fa-twitter"></i></a> */}
                        {/* <a class="social social-icon"><i class="fab fa-linkedin-in"></i></a> */}
                        <a href="https://www.linkedin.com/in/bryson-nelson-7779a411a" className="social-icon-1 waves-effect waves-light transition" target="_blank"><img src={require("../../images/linkedin_PNG16.png")} width="100"></img></a>
                        <a href="https://github.com/brysonelson" className="social-icon waves-effect waves-light transition" target="_blank"><img src={require("../../images/github_PNG15.png")} width="100"></img></a>
                        <a href="https://twitter.com/brysonelson" className="social waves-effect waves-light transition" target="_blank"><img src={require("../../images/twitter_PNG17.png")} width="100"></img></a>
                        {/* <a href="https://twitter.com/brysonelson" className="social hoverable  btn-floating btn-large waves-effect waves-light blue lighten-1 transition hidden" target="_blank"><i className="fab fa-twitter"></i></a> */}
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default index

