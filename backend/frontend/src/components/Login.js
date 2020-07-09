
import 'bootstrap/dist/css/bootstrap.css';
import '../css/login/Login.css';
import React, { useState } from 'react';

const BASE_URL = 'https://large-project-2020.herokuapp.com/';

function Login()
{
    var loginName;
    var loginPassword;

    const [message,setMessage] = useState('');

    const doLogin = async event => 
    {
        event.preventDefault();

        var js = '{"login":"'
            + loginName.value
            + '","password":"'
            + loginPassword.value +'"}';

        try
        {    
            const response = await fetch(BASE_URL + 'api/login',
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

                setMessage('');
                window.location.href = '/cards';
            }
        }
        catch(e)
        {
            alert(e.toString());
            return;
        }    
    };

    const doRegister = async event => {};

    return(
        <div className="col-sm-2 countainer-fluid full-height" id="loginField">
            <h1 id="loginHeader">
                PT3
            </h1>
            <div id="loginDiv">
                <input type="text" className="form-control" id="loginName" placeholder="Username" ref={(c) => loginName = c} /><br />
                <input type="password" className="form-control" id="loginPassword" placeholder="Password" ref={(c) => loginPassword = c} /><br />
                <input type="button" id="loginButton" className="btn btn-light" value="Login" onClick={doLogin} />
                <input type="button" id="registerButton" className="btn btn-light" value="Register" onClick={setRegister} />
            </div>
            <div id="registerDiv">
                <input type="text" className="form-control" id="loginName" placeholder="Name" ref={(c) => loginName = c} /><br />
                <input type="text" className="form-control" id="loginName" placeholder="Username" ref={(c) => loginName = c} /><br />
                <input type="password" className="form-control" id="loginPassword" placeholder="Password" ref={(c) => loginPassword = c} /><br />
                <input type="password" className="form-control" id="loginPassword" placeholder="Confirm Password" ref={(c) => loginPassword = c} /><br />
                <input type="email" className="form-control" id="loginPassword" placeholder="Email" ref={(c) => loginPassword = c} /><br />
                <input type="button" id="loginButton" className="btn btn-light" value="Login" onClick={setLogin} />
                <input type="button" id="registerButton" className="btn btn-light" value="Register" onClick={doRegister} />
            </div>
            <span id="loginResult">{message}</span>
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

export default Login;