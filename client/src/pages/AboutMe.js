import React, { Component } from 'react'
import Nav from "../components/Nav";
// import AboutBodyCover from "../components/AboutBodyCover"
import AboutBody from "../components/AboutBody"
import ActionButton from "../components/ActionButton"
import $ from "jquery"
import "./AboutMe.css"

export default class AboutMe extends Component {

  componentDidMount() {
    $(".navbar").addClass("scroll-color");
    $(".navbar-item").addClass("nav-item-scroll");
    $(".button-collapse").css("color", "white");
  }

  render() {

    

    return (
      <div>
        {/* <AboutBodyCover /> */}
        <Nav navItemColor="#fff"/>
        <AboutBody />
        <ActionButton />
        
      </div>
    )
  }
}
