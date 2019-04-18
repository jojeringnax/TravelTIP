import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios/index'


class Routes extends Component {


    constructor () {
        super();
        this.state = {
            routes: []}

    }



    componentDidMount() {
        axios.get('/api/routes').then(
            response => {
                this.setState({routes: response.data});
            }
        )
    }


    render() {
        const {routes} = this.state;
        return (
            <div className='container'>
                {
                    routes.map(route => (
                        <div className='row d-flex justify-content-around' key={route.route.id}>
                            <Link to={'route/' + route.route.id} className='col-xl-12 card-item'
                               style={{width: '100%', height: '200px', border: '1px solid black'}}>
                                <div id="card-1"
                                     className="card-top"
                                     style={{
                                         backgroundImage: 'url(http://pratoverdehotel.it/storage/news/16_index.jpg)',
                                         height: 100,
                                         backgroundRepeat: 'no-repeat'
                                     }} />
                                <div className='card-body'>
                                    <div className='title-card-body'>
                                        <span>{route.route.name}</span>
                                    </div>
                                    <div className='text-card-body'>
                                        <span>{route.route.description}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Routes