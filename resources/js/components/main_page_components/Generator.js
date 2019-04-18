import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Generator extends Component {

    render() {
        return (
            <section className='main_section' id='generator'>
                <Link to='/generator'>
                    <div className='section_main_text'>
                        <h1 className='text-center'>Generator</h1>
                    </div>
                </Link>
            </section>
        )
    }
}

export default Generator