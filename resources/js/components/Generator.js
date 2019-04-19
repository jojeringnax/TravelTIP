import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios/index'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';


const Range = Slider.Range;


class Generator extends Component {


    constructor () {
        super();
        this.state = {
            routes: [],
            durationInputValue: 0,
            defaultValueForDuration: [0,200],
            typeSelectValue: 0,
            routeTypes: [],
            renderedRoutes: []
        };
    }


    componentDidMount() {
         axios.get('/api/routes').then(
            async response => {
                this.setState({routes: response.data});
                this.setState({renderedRoutes: response.data});
                let maxDuration=0, minDuration=Infinity;
                await response.data.forEach(route => {
                    if (route.route.duration > maxDuration) {
                        maxDuration = route.route.duration;
                    }
                    if (route.route.duration < minDuration) {
                        minDuration = route.route.duration;
                    }
                });
                this.setState({defaultValueForDuration: [minDuration, maxDuration]})
            }
        );
        axios.get('/api/route_types').then(
            response => {
                this.setState({routeTypes: response.data})
            }
        );

    }

    handleOnInputDurationChange = async (value) => {
        await this.setState({durationInputValue: value});
        this.handleFilter();
    };

    handleOnSelectType = async (e) => {
        await this.setState({typeSelectValue: e.target.value});
        this.handleFilter();
    };

    handleFilter = async () => {
        let result = [];
        await this.state.routes.forEach(route => {
            if (route.route.duration >= this.state.durationInputValue[0] && route.route.duration <= this.state.durationInputValue[1]) {
                if (this.state.typeSelectValue == 0 || route.route.type_id == this.state.typeSelectValue) {
                    result.push(route);
                }
            }
        });
        this.setState({renderedRoutes: result});
    };

    renderInputDuration() {
        const defValue = this.state.defaultValueForDuration;
        const marks = {};
        const half = (this.state.defaultValueForDuration[1]+this.state.defaultValueForDuration[0])/2;
        marks[this.state.defaultValueForDuration[0]] = this.state.defaultValueForDuration[0];
        marks[this.state.defaultValueForDuration[1]] = this.state.defaultValueForDuration[1];
        marks[Math.round(half)] = Math.round(half);
        return (
            <div style={{ width: 400, marginBottom: 50 }}>
                <p>Duration</p>
                <Range
                    step={1}
                    min={this.state.defaultValueForDuration[0]}
                    max={this.state.defaultValueForDuration[1]}
                    defaultValue={defValue}
                    onChange={this.handleOnInputDurationChange}
                    allowCross={false}
                    marks={marks}
                />
            </div>
        )
    }

    renderSelectType() {
        return (
            <div className="form-group col-md-4">
                <label htmlFor="inputType">Route Type</label>
                <select
                    id="inputType"
                    className="form-control"
                    onChange={this.handleOnSelectType}
                    value={this.state.typeSelectValue}
                >
                    <option key={0} value={0}>All types</option>
                    {this.state.routeTypes.map(type => (
                        <option key={type.id} value={type.id}>{type.name}</option>
                    ))}
                </select>
            </div>
        )
    }


    render() {
        const {renderedRoutes} = this.state;
        return (
            <>
                <div className='container'>
                    {this.renderInputDuration()}
                    {this.renderSelectType()}
                </div>
                {renderedRoutes.map(route => (
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
                ))}
            </>
        )
    }
}

export default Generator