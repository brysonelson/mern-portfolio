import React from 'react'
import HeaderMessage from "../HeaderMessage";
import DownChevron from "../DownChevron";
import "./style.css";

function HomeJumbotron(props) {
  return (
    <div className="header-img">
      <HeaderMessage />
      <DownChevron />
    </div>
  )
}

export default HomeJumbotron

