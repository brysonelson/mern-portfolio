import React from 'react'
// import PropTypes from 'prop-types'
import "./style.css";
import ContactModal from "../ContactModal"
import { Navbar, NavItem } from "react-materialize"
import { Link } from "react-router-dom"
import logo from "../../images/logo.png"

function Nav(props) {
    const brandColor = <span style={{marginLeft: "5vw"}}><img className="nav-logo" src={logo}></img><span className="nav-brand-name" style={{color: props.navItemColor}}>  Bryson Nelson</span></span>;

    return (
        <Navbar className="navbar" fixed={true} brand={brandColor} right>
            <NavItem><Link className="portfolio-link" to="/about"><div className="navbar-item">About Me</div></Link></NavItem>
            <NavItem><div className="navbar-item"><ContactModal /></div></NavItem>
            <NavItem className="right-nav-item"><Link className="portfolio-link" to="/portfolio"><div className="navbar-item">Portfolio</div></Link></NavItem>
        </Navbar>
    )
}

export default Nav

