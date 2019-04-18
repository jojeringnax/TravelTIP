import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios/index'


class RouteShow extends Component {


    constructor () {
        super();
        this.state = {
            route: {},
            points: []
        }
    }

    componentDidMount() {
        axios.get('/api/route/' + this.props.id).then(
            response => {
                this.setState({route: response.data.route, points: response.data.points});
            }
        )
    }


    render() {
        const {route} = this.state;
        const {points} = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="route-title"><h3>{route.name}</h3></div>
                    <div className="route-description"><span>{route.description}</span></div>
                    <div className="points">
                        {points.map( point => (
                            <div key={point.number}>
                                <div className="point-number">{point.number}</div>
                                <div className="point-name">{point.point.name}</div>
                                <div className="point-description">{point.point.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default RouteShow