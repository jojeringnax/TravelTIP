import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Routes extends Component {

    render() {
        return (
            <section className='main_section' id='routes'>
                <Link to='routes'>
                    <div className='section_main_text'>
                        <h1 className='text-center'>Routes</h1>
                    </div>
                </Link>
            </section>
        )
    }
}

export default Routes