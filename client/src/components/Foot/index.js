import React from 'react'
import { Footer } from "react-materialize";
import "./style.css";

function Foot(props) {
    return (
        <Footer copyrights="&copy; 2015 Copyright Text"
            moreLinks={
                <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            }
            links={
                <ul>
                    <li><a className="grey-text text-lighten-3" href="#!">Github</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">LinkedIn</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">Email</a></li>
                </ul>
            }
            className='example'
        >
            <h5 className="white-text">Thanks For Visiting</h5>
            <p className="grey-text text-lighten-4">This site was built by me without the use of any pre-made theme. This portfolio is a MERN based application.</p>
        </Footer>
    )
}

export default Foot

