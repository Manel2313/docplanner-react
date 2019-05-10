import React, { Component } from 'react';
import './header.css'
class Header extends Component {
    state = {}
    render() {
        return (
            <header>
                <nav className="nav-menu shadow">
                    <div className="container">
                        <img className="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="logo" />
                        <ul id="ul-menu">
                            <li className="li-menu"><a id="active-link" href="index.html">About us</a></li>
                            <li className="li-menu"><a href="https://www.docplanner.com/career">Career</a></li>
                            <li className="li-menu"><a href="https://www.docplanner.com/departement">Department</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;