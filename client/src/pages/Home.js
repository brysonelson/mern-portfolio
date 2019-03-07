import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HomeJumbotron from "../components/HomeJumbotron";

export default class Home extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <HomeJumbotron />
        {/* <SocialIcons />
        <AboutMeHomeSection />
        <HomeSecondImage />
        <PortfolioHomeSection />
        <HomeThirdImage />
        <ContactMeHomeSection />
        <HomeThirdImage />
        <Footer /> */}
      </div>
    )
  }
}
