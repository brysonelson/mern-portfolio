import React, { Component } from 'react'
import AboutHeader from "../AboutHeader"
import AboutHighlight from "../AboutHighlight"
import Background from "../Background"
import Strengths from "../Strengths"
import Skills from "../Skills"
import Foot from "../Foot"
import { Row } from "react-materialize"
import $ from "jquery"
import "./style.css"


class AboutBody extends Component {

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll(event) {
    console.log("scrolling")
    var scroll = $(window).scrollTop(); // how many pixels you've scrolled
    var os = $('.about-page-quote').offset().top; // pixels to the top of div1
    var ht = $('.about-page-quote').height(); // height of div1 in pixels
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
      <div className="about-background">

        <AboutHeader />
        <AboutHighlight />
        <Row>
          <Background />
          <Strengths />
        </Row>
        <Skills />
        <Foot />
      </div>
    )
  }
}

export default AboutBody

