import React from 'react';
import Tour from '../components/login/Tour'
import Login from '../components/login/Login';
import Footer from '../components/general/Footer';
import Navigation from '../components/general/Navigation';

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