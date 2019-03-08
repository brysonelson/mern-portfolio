import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
        <PortfolioHeader />
        <Row style={{marginLeft: "16vw", marginTop: "45vh"}}>
          <PortfolioProject />
          <PortfolioProject />
          <PortfolioProject />
          <PortfolioProject />
        </Row>
      </div>
    )
  }
}
