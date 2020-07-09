import React from 'react';
import Footer from '../components/general/Footer';
import Navigation from '../components/general/Navigation';

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