import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-dark shadow">
                <a className="navbar-brand" href="#"><h3 className="text-center text-light">R O L Ê 🍺</h3></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/"><h4 className="text-center text-light">bares</h4> <span className="sr-only">(current)</span></Link>
                        </li>
                         <li className="nav-item">
                            <Link className="nav-link" to="/restaurantes"><h4 className="text-center text-light">restaurantes</h4></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/baladas"><h4 className="text-center text-light">baladas</h4></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;