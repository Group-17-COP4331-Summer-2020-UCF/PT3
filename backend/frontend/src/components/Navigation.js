import React from 'react';
import '../css/general/Navigation.css'
import 'bootstrap/dist/css/bootstrap.css';

function Navigation()
{
    return(
        <nav className="navbar navbar-default">
            <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" id="branding" href="./">
                    Physical Test Training Tracker
                </a>
            </div>
                <ul className="nav">
                    <li><a href="/">Home</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;