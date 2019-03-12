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

  
    
  //   setTimeout(function() {
  //     let top = $(".background-wrapper-top")
  //       top.addClass("animated")
  //       top.addClass("slideOutRight")

  //     let bottom = $(".background-wrapper-bottom")
  //       bottom.addClass("animated")
  //       bottom.addClass("slideOutLeft")
  //   }, 1000)
    
  //   setTimeout(function() {
  //     $(".body-wrapper").addClass("remove-body-wrapper")
  //   }, 2000)
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
