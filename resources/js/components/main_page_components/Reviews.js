import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Reviews extends Component {

    render() {
        return (
            <section className='main_section' id='reviews'>
                <Link to='/reviews'>
                    <div className='section_main_text'>
                        <h1 className='text-center'>Reviews</h1>
                    </div>
                </Link>
            </section>
        )
    }
}

export default Reviews