import React from 'react'
import { Card, CardTitle, Col } from "react-materialize"

function PortfolioProject(props) {
    return (
        <Col s={5}>
            <Card className='large'
                header={<CardTitle image='https://via.placeholder.com/150'>Card Title</CardTitle>}
                actions={[<a href='#'>This is a Link</a>]}>
                I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
            </Card>
        </Col>
    )
}

export default PortfolioProject

