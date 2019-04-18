import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios/index'


class Routes extends Component {


    constructor () {
        super();
        this.state = {
            routes: [],
            filterChanged: false
        }

    }



    componentDidMount() {
        axios.get('/api/routes').then(
            response => {
                this.setState({routes: response.data});
            }
        )
    }

    renderInputDuration() {
        return (
            <div className="form-group">
                <label htmlFor="formControlRange">Example Range input</label>
                <input type="range" className="form-control-range" id="formControlRange" />
            </div>
        )
    }


    render() {
        const {routes} = this.state;
        return (
            <div className='container'>
                {
                    routes.map(route => (
                        this.renderInputDuration()
                    ))
                }
            </div>
        )
    }
}

export default Routes