import React from 'react'
// import PropTypes from 'prop-types'
import "./style.css";
import { Navbar, NavItem } from "react-materialize"

function Nav(props) {
    const brandColor = <span style={{color: "#eb774c", marginLeft: "5vw"}}>Bryson Nelson</span>;

    return (
        <Navbar className="navbar" fixed={true} brand={brandColor} right>
            <NavItem href='get-started.html'><div className="navbar-item">About Me</div></NavItem>
            <NavItem href='get-started.html'><div className="navbar-item">Contact Me</div></NavItem>
            <NavItem className="right-nav-item" href='get-started.html'><div className="navbar-item">Portfolio</div></NavItem>
        </Navbar>
    )
}

export default Nav

