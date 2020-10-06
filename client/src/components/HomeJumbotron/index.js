import React from 'react'
import HeaderMessage from "../HeaderMessage";
import DownChevron from "../DownChevron";
import "./style.css";

function HomeJumbotron(props) {
  return (
    <div className="header-img">
      <HeaderMessage />
      <DownChevron className="down-chevron" smoothScrollChevron={props.smoothScrollChevron}/>
    </div>
  )
}

export default HomeJumbotron

