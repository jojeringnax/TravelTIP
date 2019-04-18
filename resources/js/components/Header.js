import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <nav className='navbar navbar-expand-md navbar-light navbar-laravel' id='navigation'>
        <Link className='navbar-brand' to='/'>traveltip</Link>
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="/routes">Routes</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/generator">Generator</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/about_us">About us</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/conditions">Conditions</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/reviews">Reviews</a>
            </li>
        </ul>
    </nav>
);

export default Header