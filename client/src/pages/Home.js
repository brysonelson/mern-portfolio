import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import HomeJumbotron from "../components/HomeJumbotron"
import SocialIcons from "../components/SocialIcons";
import Foot from "../components/Foot"

export default class Home extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
    return (
      <div>
        <HomeJumbotron />
        <SocialIcons />
        {/* <AboutMeHomeSection /> */}
        {/* <HomeSecondImage /> */}
        {/* <PortfolioHomeSection /> */}
        {/* <HomeThirdImage /> */}
        {/* <ContactMeHomeSection /> */}
        {/* <HomeThirdImage /> */}
        <Foot />
      </div>
    )
  }
}
