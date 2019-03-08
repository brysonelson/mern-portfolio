import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import HomeJumbotron from "../components/HomeJumbotron"
import SocialIcons from "../components/SocialIcons"
import AboutMeHomeSection from "../components/AboutMeHomeSection"
import HomeSecondImage from "../components/HomeSecondImage"
import PortfolioHomeSection from "../components/PortfolioHomeSection"
import HomeThirdImage from "../components/HomeThirdImage"
import ContactMeHomeSection from "../components/ContactMeHomeSection"
import HomeFourthImage from "../components/HomeFourthImage"
import Foot from "../components/Foot"

export default class Home extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
    return (
      <div >
        <HomeJumbotron />
        <SocialIcons />
        <AboutMeHomeSection />
        <HomeSecondImage />
        <PortfolioHomeSection />
        <HomeThirdImage />
        <ContactMeHomeSection />
        <HomeFourthImage />
        <Foot />
      </div>
    )
  }
}
