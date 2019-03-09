import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Nav from "../components/Nav";


export default class AboutMe extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <Nav navItemColor="#eb774c"/>
        hello
      </div>
    )
  }
}
