import axios from 'axios/index'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PointsIndex extends Component {
    constructor () {
        super();
        this.state = {
            points: []
        }
    }

    componentDidMount () {
        axios.get('/api/points').then(response => {
            this.setState({
                points: response.data
            });
        });
    }


    render () {
        const { points } = this.state;
        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'>All points</div>
                            <div className='card-body'>
                                <Link className='btn btn-primary btn-sm mb-3' to='/create'>
                                    Create new point
                                </Link>
                                <ul className='list-group list-group-flush'>
                                    {points.map(point => (
                                        <div
                                            className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                                            onClick={() => console.log(point.x_pos)}
                                            key={point.id}
                                        >
                                            {point.name}
                                            <div><span className='badge badge-primary badge-pill'>{point.x_pos}</span>
                                            <span className='badge badge-primary badge-pill'>{point.y_pos}</span></div>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PointsIndex