import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Routes from './main_page_components/Routes'
import Generator from './main_page_components/Generator'
import AboutUs from './main_page_components/AboutUs'
import Conditions from './main_page_components/Conditions'
import Reviews from './main_page_components/Reviews'

class Main extends Component {
    render() {
        return (
            <>
                <Routes/>
                <Generator/>
                <AboutUs/>
                <Conditions/>
                <Reviews/>
            </>
        );
    }
}

export default Main
