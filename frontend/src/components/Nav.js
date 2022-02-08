import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navMainMenu" className="navbar-collapse collapse">
            <div className="navbar-nav ml-auto">
            <Link to='/' className="nav-item nav-link active">Home</Link>
            <Link to='/level' className="nav-item nav-link">CO2 Level</Link>
            <Link to='/weather' className="nav-item nav-link">Weather</Link>
            </div>
        </div>
    </nav>
  )
};

export default Nav;
