import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Nav from "../components/Nav";
import PortfolioHeader from "../components/PortfolioHeader"
import PortfolioProject from "../components/PortfolioProject"
import { Row } from "react-materialize"

export default class Portfolio extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <Nav navItemColor="#eb774c"/>
        <PortfolioHeader />
        <Row className="container" style={{marginTop: "45vh"}}>
          <PortfolioProject />
          <PortfolioProject />
          <PortfolioProject />
          <PortfolioProject />
        </Row>
      </div>
    )
  }
}
