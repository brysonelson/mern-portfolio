import React, { Component } from 'react'
import Nav from "../components/Nav";
import PortfolioHeader from "../components/PortfolioHeader"
import PortfolioProject from "../components/PortfolioProject"
import { Row, Col } from "react-materialize"
import Projects from "../utils/projects.js"
import Foot from "../components/Foot"
import Masonry from 'react-masonry-component';
import InViewMonitor from "react-inview-monitor"
import ActionButton from "../components/ActionButton"
import $ from "jquery"
import "./Portfolio.css"

var masonryOptions = {
  transitionDuration: 0
};

export default class Portfolio extends Component {

  state = {
    projectArr: [],
    navcolor: "#eb774c"
  }

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    // let myProjects = JSON.stringify(Projects)
    $("body").css({ 'overflow': 'auto', 'height': 'auto' })
    this.setState({
      projectArr: Projects
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll(event) {

    var scroll = $(window).scrollTop(); // how many pixels you've scrolled
    var os = $('#portfolio-header-img').offset().top; // pixels to the top of div1
    var ht = $('#portfolio-header-img').height(); // height of div1 in pixels
    // if you've scrolled further than the top of div1 plus it's height
    // change the color. either by adding a class or setting a css property
    if (scroll > os + ht - 100) {
      $('.navbar').addClass('scroll-color');
      $('.navbar-item').addClass('nav-item-scroll');
      $('.button-collapse').addClass('button-collapse-white')
      $('.navbar-item').addClass('navbar-item-scroll')
      this.setState({
        navcolor: "white"
      })
    } else {
      $('.navbar').removeClass('scroll-color');
      $('.navbar-item').removeClass('nav-item-scroll');
      $('.button-collapse').removeClass('button-collapse-white')
      $('.navbar-item').removeClass('navbar-item-scroll')
      this.setState({
        navcolor: "#eb774c"
      })
    }

    var scrollText = $(window).scrollTop(); // how many pixels you've scrolled
    var osText = $('#portfolio-header-text').offset().top; // pixels to the top of div1
    //var ht = $('#header-text').height(); // height of div1 in pixels
    // if you've scrolled further than the top of div1 plus it's height
    // change the color. either by adding a class or setting a css property
    if (scrollText > osText - (osText - 20)) {
      $('#portfolio-header-text').addClass('fadeOutDown');
    } else {
      $('#portfolio-header-text').removeClass('fadeOutDown');
      $('#portfolio-header-text').addClass('fadeInUp');
    }
  };





  render() {
    let childElements = this.state.projectArr.map(project => (
      <Col s={12} m={6} l={4}>
        <InViewMonitor
          classNameNotInView='vis-hidden'
          classNameInView='animated fadeInUp'
          intoViewMargin="15%"
        >
          <PortfolioProject projectData={project} />
        </InViewMonitor>
      </Col>
    ))

    return (

      <div className="portfolio-container">
        <Nav navItemColor={this.state.navcolor} />
        <PortfolioHeader className="portfolio-head-area" />
        <Row className="project-area">
          <div className="svg-wave-portfolio">
            <svg className="svg-element-port" viewBox="0 0 100 15" width="100%">
              <path fill="#e9e9e9ee" opacity="0.6" d="M0 30 V15 Q30 3 60 15 V30z" />
              <path fill="#e9e9e9ee" d="M0 30 V12 Q30 17 55 12 T100 11 V30z" />
            </svg>
          </div>
          <div className="project-body">
            <div className="animated slideInUp">
              <h4 className="portfolio-quote"><em>"Talk is cheap. Show me the code."</em></h4>
              <h5 className="portfolio-quote-1"><b>- Linus Torvalds</b></h5>
            </div>
            <Col l={10} s={12} m={10} className="offset-l1 offset-m1 project-display-area">
              <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
              >
                {childElements}
              </Masonry>
            </Col>
          </div>
        </Row>
        <ActionButton />
        <Foot />
      </div>
    )
  }
}
