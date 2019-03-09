import React from 'react'
import "./style.css";

function DownChevron(props) {
  return (
    <div>
      <a onClick={props.smoothScrollChevron} href="#body-content-one" id="down-arrow"><i className="fas fa-chevron-down"></i></a>
    </div>
  )
}

export default DownChevron

