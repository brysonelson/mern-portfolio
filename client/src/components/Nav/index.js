import React from 'react'
// import PropTypes from 'prop-types'
import "./style.css";
import ContactModal from "../ContactModal"
import { Navbar, NavItem } from "react-materialize"
import { Link } from "react-router-dom"
import logo from "../../images/logo.png"

function Nav(props) {
    const brandColor = <Link to="/"><span className="nav-logo-span" style={{marginLeft: "5vw"}}><img className="nav-logo" src={logo}></img><span className="nav-brand-name" style={{color: props.navItemColor}}>  Bryson Nelson</span></span></Link>;

    return (
        <Navbar className="navbar animated delay-5s slow" fixed={true} brand={brandColor} right>
            <NavItem><Link className="about-link" to="/about"><div className="navbar-item nav-bar-item-link">About Me</div></Link></NavItem>
            <NavItem><div className="navbar-item navbar-contact"><ContactModal /></div></NavItem>
            <NavItem className="right-nav-item"><Link className="portfolio-link" to="/portfolio"><div className="navbar-item">Portfolio</div></Link></NavItem>
        </Navbar>
    )
}

export default Nav

