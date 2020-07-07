import React from 'react';
import Tour from '../components/Tour'
import Login from '../components/Login';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

function LoginPage() {
    return(
        <div id='login'>
            <Navigation />
            <div id='loginContainer' className='row align-items-center'>
                <Login />
                <Tour />
            </div>
            <Footer />
        </div>
    );
}

export default LoginPage;