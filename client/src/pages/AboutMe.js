import React, { Component } from 'react'
import Nav from "../components/Nav";
// import AboutBodyCover from "../components/AboutBodyCover"
import AboutBody from "../components/AboutBody"
import ActionButton from "../components/ActionButton"
import $ from "jquery"
import "./AboutMe.css"

export default class AboutMe extends Component {

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }
  
  componentDidMount() {
    $(".navbar").addClass("scroll-color");
    $(".navbar-item").addClass("nav-item-scroll");

  
    window.addEventListener('scroll', this.handleScroll);
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

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll(event) {
    console.log("scrolling")
    var scroll = $(window).scrollTop(); // how many pixels you've scrolled
    var os = $('.about-head').offset().top; // pixels to the top of div1
    var ht = $('.about-head').height(); // height of div1 in pixels
    // if you've scrolled further than the top of div1 plus it's height
    // change the color. either by adding a class or setting a css property
    if (scroll > os + ht - 100) {
      $('.profile-pic').addClass('profile-pic-scroll');
      
    } else {
      $('.profile-pic').removeClass('profile-pic-scroll');

    }
  };


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
