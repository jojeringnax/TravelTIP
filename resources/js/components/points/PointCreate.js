import axios from 'axios'
import React, { Component } from 'react'
import './PointCreate.css';

class PointCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            description: '',
            status: 0,
            type: 0,
            x_pos: 0,
            y_pos: 0,
            errors: []
        };
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleCreateNewPoint = this.handleCreateNewPoint.bind(this);
        this.hasErrorFor = this.hasErrorFor.bind(this);
        this.renderErrorFor = this.renderErrorFor.bind(this);
    }

    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    handleCreateNewPoint(event) {
        event.preventDefault();

        const {history} = this.props;

        const point = {
            name: this.state.name,
            address: this.state.address,
            description: this.state.description,
            status: this.state.status,
            type: this.state.type,
            x_pos: this.state.x_pos,
            y_pos: this.state.y_pos,
        };

        axios.post('/api/point/create', point)
            .then(response => {
                history.push('/');
            })
            .catch(error => {
                this.setState({
                    error: error.response.data.errors
                });
            });
    }

    hasErrorFor(field) {
        return !!this.state.errors[field];
    }

    renderErrorFor(field) {
        if (this.hasErrorFor(field)) {
            return (
                <span className='invalid-feedback'>
                    <strong>{this.state.errors[field][0]}</strong>
                </span>
            )
        }
    }

    renderInput(type, name, step=1) {
        return (
            <div className='form-group'>
                <label htmlFor={name}> Point {name}</label>
                <input
                    id={name}
                    type={type}
                    className={`form-control ${this.hasErrorFor(name) ? 'is-invalid' : ''}`}
                    name={name}
                    step={type === 'number' ? step : ''}
                    value={this.state[name]}
                    onChange={this.handleFieldChange}
                />
                {this.renderErrorFor(name)}
            </div>
        )
    }

    createPoint = () => {
        console.log(this.props);
    };


    render() {
        return (
            <div className='container py-4 hide' id="pointCreateForm">
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>Create new point</div>
                            <div className='card-body'>
                                <form onSubmit={this.handleCreateNewPoint}>
                                    {this.renderInput('text', 'name')}
                                    {this.renderInput('text','address')}
                                    <div className='form-group'>
                                        <label htmlFor='description'>Point description</label>
                                        <textarea
                                            id='description'
                                            className={`form-control ${this.hasErrorFor('description') ? 'is-invalid' : ''}`}
                                            name='description'
                                            rows='4'
                                            value={this.state.description}
                                            onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor('description')}
                                    </div>
                                    {this.renderInput('number', 'status')}
                                    {this.renderInput('number', 'type')}
                                    {/*{this.renderInput('number','x_pos',0.1)}*/}
                                    {/*{this.renderInput('number','y_pos',0.1)}*/}
                                    <button onClick={this.createPoint} className='btn btn-outline-primary'>Create</button>
                                    <button onClick={()=>{document.getElementById('pointCreateForm').classList.add('hide')}} className='btn btn-outline-danger'>Close</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}



export default PointCreate;