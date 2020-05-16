import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <div className="nav flex-column nav-pills margin-top" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <Link to="/" className="nav-link text-dark"><h5>Eventos</h5></Link>
                <Link to="/excursao" className="nav-link text-dark"><h5>Excursão</h5></Link>
            </div>
        )
    }
}

export default Menu;