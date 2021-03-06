
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/login/Login.css';
import React, { useState } from 'react';
import Cookie from '../general/Cookie.js'
import Hasher from './Hasher'
import { Container, Row, Col } from 'react-bootstrap'

const BASE_URL = 'https://large-project-2020.herokuapp.com/';

function Login()
{
    var loginUsername;
    var loginPassword;

    var registerName;
    var registerUsername;
    var registerPassword;
    var registerPasswordConfirm;
    var registerEmail;
    
    const [message,setMessage] = useState('');

    const doLogin = async event => 
    {
        event.preventDefault();

        var js = '{"username":"'
            + loginUsername.value
            + '","password":"'
            + Hasher(loginPassword.value) +'"}';

        try
        {
            document.getElementById("loginResult").innerHTML = "Logging in...";
            const response = await fetch(BASE_URL + 'users/loginUser',
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

            var res = JSON.parse(await response.text());

            console.log(response);
            if (res == null || res.id <= 0)
            {
                document.getElementById("loginResult").innerHTML = 'User/Password incorrect';
                return;
            }
            else
            {
                var user = {firstName:res.firstName,lastName:res.lastName,id:res.id}
                localStorage.setItem('user_data', JSON.stringify(user));

                document.getElementById("loginResult").innerHTML = "Please wait";
                // set cookies
                Cookie.saveCookie("username", loginUsername.value);
                Cookie.saveCookie("password", Hasher(loginPassword.value));
                Cookie.saveCookie("login", "true");
                Cookie.saveCookie("name", res.name);
                Cookie.saveCookie("email", res.email);

                // redirect
                window.location.href = '/dashboard';
            }
        }
        catch(e)
        {
            alert(e.toString());
            return;
        }    
    };

    const doRegister = async event => 
    {
        console.log("Attempting to register");
        if (registerPassword.value !== registerPasswordConfirm.value)
        {
            setMessage("Passwords do not match!");
            console.log('password1: ', registerPassword.value);
            console.log('password2: ', registerPasswordConfirm.value);
            return;
        } else if (registerUsername.value === "") {
            setMessage("Enter a valid username!")
            return;
        }
        event.preventDefault();

        var js = '{"username":"'
            + registerUsername.value
            + '","password":"'
            + Hasher(registerPassword.value)
            + '","name":"'
            + registerName.value
            + '","email":"'
            + registerEmail.value +'"}';

        console.log(registerUsername);
        try
        {    
            setMessage('Registering...');
            const response = await fetch(BASE_URL + 'users/addUser',
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

            var res = JSON.parse(await response.text());

            if (res != null && res.error != null && res.error !== "") {
                setMessage('Registration failed: Server error');
                console.log(res.error);
            } else {
                setMessage('Registered successfully');
                // setup cookies
                console.log(registerUsername);
                Cookie.saveCookie("username", document.getElementById("registerUser").value);
                Cookie.saveCookie("password", Hasher(document.getElementById("registerPassword").value));
                Cookie.saveCookie("login", "true");
                Cookie.saveCookie("email", document.getElementById("registerEmail").value);
                Cookie.saveCookie("name", document.getElementById("registerName").value);
                // redirect
                window.location.href = '/verify';
            }
        }
        catch(e)
        {
            setMessage("Registration failed: Cached");
            // alert(e.toString());
            return;
        } 
    };

    return(
        <div className="col-sm-2 countainer-fluid full-height" id="loginField">
            <h1 id="loginHeader">
                PT3
            </h1>
            <div id="loginDiv">
                <span id="loginResult">{message}</span><br />
                <input type="text" className="form-control" placeholder="Username" ref={(c) => loginUsername = c} /><br />
                <input type="password" className="form-control" placeholder="Password" ref={(c) => loginPassword = c} /
                ><br />
                <div id="buttons">
                    <div className="button-gradient top-div">
                        <input type="button" id="loginButton" className="btn btn-light" value="Login" onClick={doLogin} />
                    </div>
                    <div className="button-gradient">
                        <input type="button" id="registerButton" className="btn btn-light" value="Register" onClick={setRegister} />
                    </div>
                </div>
            </div>
            <div id="registerDiv">
                <span id="loginResult">{message}</span><br />
                <input type="text" className="form-control" id="registerName" placeholder="Name" ref={(c) => registerName = c} /><br />
                <input type="text" className="form-control" id="registerUser" placeholder="Username" ref={(c) => registerUsername = c} /><br />
                <input type="password" className="form-control" id="registerPassword" placeholder="Password" ref={(c) => registerPassword = c} /><br />
                <input type="password" className="form-control" placeholder="Confirm Password" ref={(c) => registerPasswordConfirm = c} /><br />
                <input type="email" className="form-control" id="registerEmail" placeholder="Email" ref={(c) => registerEmail = c} /><br />
                
                <div className="button-gradient top-div">
                    <input type="button" id="loginButton" className="btn btn-light" value="Login" onClick={setLogin} />                
                </div>
                <div className="button-gradient">
                    <input type="button" id="registerButton" className="btn btn-light" value="Register" onClick={doRegister} />
                </div>
            </div>
        </div>
    );
};

function setLogin() {
    document.getElementById("loginDiv").style.display = "inline-block";
    document.getElementById("registerDiv").style.display = "none";
    // document.getElementById("loginField").style.paddingBottom = "22%";
}

function setRegister() {
    document.getElementById("loginDiv").style.display = "none";
    document.getElementById("registerDiv").style.display = "inline-block";
    // document.getElementById("loginField").style.paddingBottom = "9.3%";
}

export default Login;