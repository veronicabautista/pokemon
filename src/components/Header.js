import React, { Component } from 'react';
import logo from "../images/logo.png";


class Header extends Component {

    render() {
        return (
            <div className="pokedex__tittle">
                <img className="title" src={logo} alt="logo" />
            </div>
        );
    }
}

export default Header;