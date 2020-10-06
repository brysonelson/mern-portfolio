import React from 'react'
import "./style.css"
// import { Row, Col } from "react-materialize"

function PortfolioProject(props) {

    return (

        <div className="card hoverable z-depth-1">
            <div className="card-image">
                <img src={props.projectData.image} />
                <a href={props.projectData.github} className="btn-floating halfway-fab waves-effect waves-light black btn-flat btn-large" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
            </div>
            <div className="card-content">
                <span className="card-title">{props.projectData.title}</span>
                <hr></hr>
                <b><i class="fas fa-pencil-alt"></i>  Description:</b>
                <p className="project-description">{props.projectData.description}</p>
                <br/>
                <b><i class="fas fa-code"></i>  Technologies:</b>
                <p>{props.projectData.technologies}</p>
            </div>
        </div>
    )
}

export default PortfolioProject

