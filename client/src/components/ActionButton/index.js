import React from 'react'
import { Button } from "react-materialize"

function ActionButton(props) {

    return (
        <Button floating fab='vertical' icon={<i class="far fa-address-book"></i>} className='deep-orange floatingButton animated delay-5s slow' large style={{ bottom: '45px', right: '24px' }}>
            <Button floating className="blue darken-4"><a href="https://www.linkedin.com/in/bryson-nelson-7779a411a" className=" transition hidden" target="_blank"><i className="fab fa-linkedin-in"></i></a></Button>
            <Button floating className='black'><a href="https://github.com/brysonelson" className="transition hidden" target="_blank"><i className="fab fa-github" ></i></a></Button>
            <Button floating className='pink darken-1'><a href="https://www.instagram.com/brysonelson/" className="transition hidden" target="_blank"><i class="fab fa-instagram"></i></a></Button>
            <Button floating className='blue lighten-1'><a href="https://twitter.com/brysonelson" className="transition hidden" target="_blank"><i className="fab fa-twitter"></i></a></Button>
        </Button>
    )
}

export default ActionButton


