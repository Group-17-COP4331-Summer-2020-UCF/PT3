import './css/general/App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

// Page imports.
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage'
import DashboardPage from './pages/DashboardPage';
import HelpPage from './pages/HelpPage';
import VerifyPage from './pages/VerifyPage';

function App() {
  return (
    // Return the desired page based on the path.=
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact>
                <LoginPage/>
            </Route>
            <Route path="/dashboard" exact>
              <DashboardPage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/help" exact>
              <HelpPage />
            </Route>
            <Route path="/verify" exact>
              <VerifyPage />
            </Route>
              <Redirect to="/" />
          </Switch>  
        </Router>
      </div>
  );
}

export default App;
