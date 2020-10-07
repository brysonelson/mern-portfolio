import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import "./Home.css"
import Nav from "../components/Nav";
import HomeJumbotron from "../components/HomeJumbotron"
import SocialIcons from "../components/SocialIcons"
import AboutMeHomeSection from "../components/AboutMeHomeSection"
import HomeSecondImage from "../components/HomeSecondImage"
import PortfolioHomeSection from "../components/PortfolioHomeSection"
import HomeThirdImage from "../components/HomeThirdImage"
import ContactMeHomeSection from "../components/ContactMeHomeSection"
import HomeFourthImage from "../components/HomeFourthImage"
import ActionButton from "../components/ActionButton"
import Foot from "../components/Foot"
import InViewMonitor from "react-inview-monitor"
import $ from "jquery"

export default class Home extends Component {

  //state of the home page
  state = {
    navcolor: "#eb774c",
    loaded: false
  }

  //handle the scroll event for the nav bar
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  //when the page loads, listen for the scroll event
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({
      loaded: this.props.loaded
    })
  };

  //when you leave the page, remove the scroll listner
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  //scroll event for the navbar
  handleScroll(event) {

    
    var scroll = $(window).scrollTop(); // how many pixels you've scrolled
    var os = $('.header-img').offset().top; // pixels to the top of div1
    var ht = $('.header-img').height(); // height of div1 in pixels
    // if you've scrolled further than the top of div1 plus it's height
    // change the color. either by adding a class or setting a css property
    if (scroll > os + ht - 100) {
      $('.navbar').addClass('scroll-color');
      $('.navbar-item').addClass('nav-item-scroll');
      $('.button-collapse').addClass('button-collapse-blue-nav');
      $('.button-collapse').addClass("button-collapse-white");
      this.setState({
        navcolor: "white"
      })
    } else {
      $('.navbar').removeClass('scroll-color');
      $('.navbar-item').removeClass('nav-item-scroll');
      $('.button-collapse').removeClass('button-collapse-blue-nav');
      $('.button-collapse').removeClass("button-collapse-white");
      this.setState({
        navcolor: "#eb774c"
      })
    }

    var scrollText = $(window).scrollTop(); // how many pixels you've scrolled
    var osText = $('#header-text').offset().top; // pixels to the top of div1
    //var ht = $('#header-text').height(); // height of div1 in pixels
    // if you've scrolled further than the top of div1 plus it's height
    // change the color. either by adding a class or setting a css property
    if (scrollText > osText - (osText - 40)) {
      $('#header-text').addClass('scroll-disappear');
      // $("footer").addClass("footer-scroll");
      $("#down-arrow").addClass('scroll-disappear');
      // $("#footer-text-div").css("display", "block");
    } else {
      $('#header-text').removeClass('scroll-disappear');
      // $("footer").removeClass("footer-scroll");
      $("#down-arrow").removeClass('scroll-disappear');
      // $("#footer-text-div").css("display", "block");
    }
  };

  //smooth scrooling when you click the down arrow on the home page
  smoothScrollChevron = (event) => {
    event.preventDefault();
    var aTag = $("#down-arrow").attr("href")
    var offset = $(aTag).offset();
    console.log(offset);
    //.offset().top;
    $("html, body").animate({ scrollTop: offset.top - 150 }, 700);
  }

  //animations for the shapes on the home page
  // shapeOneHover = (event) => {
  //   $("#content-1-diamond").hover(function () {
  //     $("#content-1-shape").addClass("content-1-shape-hover");
  //   }, function () {
  //     $("#content-1-shape").removeClass("content-1-shape-hover");
  //   });
  // }

  // shapeTwoHover = (event) => {
  //   $("#content-2-diamond").on("mouseenter", function () {
  //     $("#content-2-shape").addClass("content-2-shape-hover");
  //   }).on("mouseleave", function () {
  //     $("#content-2-shape").removeClass("content-2-shape-hover");
  //   });
  // }

  // shapeThreeHover = (event) => {
  //   $("#content-3-diamond").hover(function () {
  //     $("#content-3-shape").addClass("content-3-shape-hover");
  //   }, function () {
  //     $("#content-3-shape").removeClass("content-3-shape-hover");
  //   });
  // }

  render() {
    if(this.props.loaded === false) {
      $("body").css({ 'overflow': 'hidden', 'height': '100%' })
    } else if (this.props.loaded === true) {
      $("body").css({ 'overflow': 'auto', 'height': 'auto' })
    }
    if(this.state.loaded === false) {
      $(".navbar").addClass("fadeInDownBig");
      $(".floatingButton").addClass("fadeInUpBig");
      $(".down-chevron").addClass("fadeInUpBig");
      $(".svg-logo").addClass("flipOutX");
      $(".header-sub-message-anim").addClass("flipInX");
      $(".header-message").addClass("flipInX");
    } else {
      $(".svg-logo").css("display", "none");
      $(".header-message").css("animation-delay", "0s")
    }
    return (
      <div >
        
        <Nav navItemColor={this.state.navcolor} />

        <HomeJumbotron smoothScrollChevron={this.smoothScrollChevron} />

        <div className="svg-wave">
          <svg viewBox="0 0 100 15" width="100%">
            <path fill="#e9e9e9d8" opacity="0.6" d="M0 30 V15 Q30 3 60 15 V30z" />
            <path fill="#e9e9e9ee" d="M0 30 V12 Q30 17 55 12 T100 11 V30z" />
          </svg>
        </div>

        <div className="body">
          <InViewMonitor
            classNameNotInView='vis-hidden'
            classNameInView='animated fadeIn slow home-top-space'
            intoViewMargin="10%"
          >
            <SocialIcons />
          </InViewMonitor>

          <div className="body-container z-depth-1">
        
            <AboutMeHomeSection shapeOneHover={this.shapeOneHover} />

            <HomeSecondImage />
          
            <PortfolioHomeSection shapeTwoHover={this.shapeTwoHover} />
          
            <HomeThirdImage />
          
            <ContactMeHomeSection shapeThreeHover={this.shapeThreeHover} />
        
            <HomeFourthImage />

            <ActionButton/>
          </div>
        </div>
        <Foot />
      </div>
    )
  }
}
