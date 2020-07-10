import React from 'react';
import Footer from '../components/general/Footer';
import Navigation from '../components/general/Navigation';
import Dashboard from '../components/dashboard/Dashboard';

function DashboardPage() {
    return(
        <div id='dashboard'>
            <Navigation />
            <h1>
                You are logged in!
            </h1>
            <Footer />
        </div>
    );
}

export default DashboardPage;
