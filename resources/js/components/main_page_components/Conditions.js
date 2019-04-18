import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Conditions extends Component {

    render() {
        return (
            <section className='main_section' id='conditions'>
                <Link to='/conditions'>
                    <div className='section_main_text'>
                        <h1 className='text-center'>Conditions</h1>
                    </div>
                </Link>
            </section>
        )
    }
}

export default Conditions