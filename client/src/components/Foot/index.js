import React from 'react'
import { Footer } from "react-materialize";
import "./style.css";

function Foot(props) {
    return (
        <Footer copyrights="&copy; 2019 Bryson Nelson"
            moreLinks={
                <p className="logo-credit">Logo made with <a href="https://www.designevo.com/en/" title="Free Online Logo Maker">DesignEvo</a></p>
            }
            links={
                <ul>
                    <li><a className="grey-text text-lighten-3" href="https://github.com/brysonelson" target="_blank">Github</a></li>
                    <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/bryson-nelson-7779a411a/" target="_blank">LinkedIn</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!" target="_blank">Email</a></li>
                </ul>
            }
            className='example'
        >
            <h5 className="white-text">Thanks For Visiting</h5>
            <p className="grey-text text-lighten-4">This site was hand-built without the use of any pre-made theme. It was built on the MERN stack including MongoDB, ExpressJS, ReactJS, and NodeJS.</p>
            
        </Footer>
    )
}

export default Foot

