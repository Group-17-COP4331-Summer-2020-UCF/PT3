import React from 'react';
import Footer from '../components/general/Footer';
import Navigation from '../components/general/Navigation';
import Help from '../components/general/Help';
import Cookie from '../components/general/Cookie'

function HelpPage() {
    return(
        <div id='dashboard'>
            <Navigation />
            <Help />
            <Footer />
        </div>
    );
}

export default HelpPage;
