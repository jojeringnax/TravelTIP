import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import PointsIndex from './points/PointsIndex'
import PointCreate from './points/PointCreate'
import Main from './Main'
import Routes from './Routes'
import RouteShow from './RouteShow'
import Generator from './Generator'


const RouteToShow = ({ match }) => (
    <RouteShow id={match.params.id} />
);



class App extends Component {


    render () {
        return (
            <BrowserRouter>
                <div id="main_wrapper">
                    <Header />
                    <Switch>
                        <Route exact path='/' component={Main} />
                        <Route path='/admin/points' component={PointsIndex} />
                        <Route exact path='/admin/point/create' component={PointCreate} />
                        <Route path='/routes' component={Routes} />
                        <Route path='/route/:id' component={RouteToShow} />
                        <Route path='/generator' component={Generator} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));