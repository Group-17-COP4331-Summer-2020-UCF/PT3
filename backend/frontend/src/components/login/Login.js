
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/login/Login.css';
import React, { useState } from 'react';

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
            + loginPassword.value +'"}';

        try
        {    
            const response = await fetch(BASE_URL + 'users/loginUser',
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

            var res = JSON.parse(await response.text());

            console.log(response);
            if (res == null)
            {
                setMessage('User/Password incorrect');
                return;
            }
            if( res.id <= 0 )
            {
                setMessage('User/Password incorrect');
            }
            else
            {
                var user = {firstName:res.firstName,lastName:res.lastName,id:res.id}
                localStorage.setItem('user_data', JSON.stringify(user));

                setMessage('');
                // set cookies
                // saveCookie(loginUsername.value, loginPassword.value, "user");
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
            alert("Passwords do not match!");
            console.log('password1: ', registerPassword.value);
            console.log('password2: ', registerPasswordConfirm);
            return;
        }
        event.preventDefault();

        var js = '{"username":"'
            + registerUsername.value
            + '","password":"'
            + registerPassword.value
            + '","name":"'
            + registerName.value
            + '","email":"'
            + registerEmail.value +'"}';

        try
        {    
            const response = await fetch(BASE_URL + 'users/addUser',
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

            var res = JSON.parse(await response.text());

            if( res.id <= 0 )
            {
                setMessage('User/Password combination incorrect');
            }
            else
            {
                var user = {firstName:res.firstName,lastName:res.lastName,id:res.id}
                localStorage.setItem('user_data', JSON.stringify(user));

                setMessage('Registered successfully');
                // setup cookies
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

    return(
        <div className="col-sm-2 countainer-fluid full-height" id="loginField">
            <h1 id="loginHeader">
                PT3
            </h1>
            <div id="loginDiv">
                <span id="loginResult">{message}</span><br />
                <input type="text" className="form-control" id="loginUsername" placeholder="Username" ref={(c) => loginUsername = c} /><br />
                <input type="password" className="form-control" id="loginPassword" placeholder="Password" ref={(c) => loginPassword = c} /><br />
                <input type="button" id="loginButton" className="btn btn-light" value="Login" onClick={doLogin} />
                <input type="button" id="registerButton" className="btn btn-light" value="Register" onClick={setRegister} />
            </div>
            <div id="registerDiv">
                <span id="loginResult">{message}</span><br />
                <input type="text" className="form-control" id="loginName" placeholder="Name" ref={(c) => registerName = c} /><br />
                <input type="text" className="form-control" id="loginUsername" placeholder="Username" ref={(c) => registerUsername = c} /><br />
                <input type="password" className="form-control" id="loginPassword" placeholder="Password" ref={(c) => registerPassword = c} /><br />
                <input type="password" className="form-control" id="loginPasswordConfirm" placeholder="Confirm Password" ref={(c) => registerPasswordConfirm = c} /><br />
                <input type="email" className="form-control" id="loginEmail" placeholder="Email" ref={(c) => registerEmail = c} /><br />
                <input type="button" id="loginButton" className="btn btn-light" value="Login" onClick={setLogin} />
                <input type="button" id="registerButton" className="btn btn-light" value="Register" onClick={doRegister} />
            </div>
        </div>
    );
};

function setLogin() {
    document.getElementById("loginDiv").style.display = "inline-block";
    document.getElementById("registerDiv").style.display = "none";
    document.getElementById("loginField").style.paddingBottom = "22%";
}

function setRegister() {
    document.getElementById("loginDiv").style.display = "none";
    document.getElementById("registerDiv").style.display = "inline-block";
    document.getElementById("loginField").style.paddingBottom = "9.3%";
}

function saveCookie(username, password, name)
{
	var minutes = 20;
	var date = new Date();
	date.setTime(date.getTime()+(minutes*60*1000));
	document.cookie = "username=" + username + ";expires=" + date.toGMTString();
	document.cookie = "password=" + password + ";expires=" + date.toGMTString();
}

export default Login;