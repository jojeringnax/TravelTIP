import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import PointsIndex from './points/PointsIndex'
import PointCreate from './points/PointCreate'


class App extends Component {
    constructor() {
        super();
        this.state = {
            map: new google.maps.Map(document.getElementById('map'), {
                center: {lat: -34.397, lng: 150.644},
                zoom: 8
            })
        };
    }


    render () {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/points' component={PointsIndex} />
                        <Route path='/point/create' component={PointCreate} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));