import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import PointsIndex from './points/PointsIndex'
import PointCreate from './points/PointCreate'







class App extends Component {


    render () {
        return (
            <BrowserRouter>
                <div id="main_wrapper">
                    <Header />
                    <Switch>
                        <Route exact path='/points' component={PointsIndex} />
                        <Route exact path='/point/create' component={PointCreate} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));