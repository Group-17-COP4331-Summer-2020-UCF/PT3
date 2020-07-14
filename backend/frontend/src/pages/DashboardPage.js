import React from 'react';
import Footer from '../components/general/Footer';
import Navigation from '../components/general/Navigation';
import Dashboard from '../components/dashboard/Dashboard';
import Cookie from '../components/general/Cookie'

function DashboardPage() {
    console.log("checking status");
    // eslint-disable-next-line
    if (Cookie.getCookie("login") == null || Cookie.getCookie("login") == "false") {
        window.location.href = '/';
    }
    else {
        console.log("no redirecting required");
    }
    return(
        <div id='dashboard'>
            <Navigation />
            <Dashboard />
            <Footer />
        </div>
    );
}

export default DashboardPage;
