import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class AboutUs extends Component {

    render() {
        return (
            <section className='main_section' id='about_us'>
                <Link to='/about_us'>
                    <div className='section_main_text'>
                        <h1 className='text-center'>About Us</h1>
                    </div>
                </Link>
            </section>
        )
    }
}

export default AboutUs