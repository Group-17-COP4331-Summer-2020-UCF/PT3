import 'bootstrap/dist/css/bootstrap.css';
import '../../css/dashboard/Dashboard.css';
import React, { useState } from 'react';

const BASE_URL = 'https://large-project-2020.herokuapp.com/';

function Dashboard()
{
    
    const doLogout = async event => 
    {
        event.preventDefault();

        deleteCookie();
        window.location.href = window.location.hostname; 
    };

    return(
        <div class="dashboard">
            <h1 id="loginHeader">
                PT3
            </h1>
            <div id="logoutDiv">
                <input type="button" id="logoutButton" className="btn btn-light" value="Login" onClick={doLogout} />
            </div>
        </div>
    );
};

function deleteCookie(username, password, name)
{
	document.cookie = "cookiename= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
}
