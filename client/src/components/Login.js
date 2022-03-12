import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        console.log('Logged in');
    };
    return (
        <div className="login">
            <p>Login</p>
            <input
                type="text"
                placeholder="Username"
                onChange={(event) => {
                    setUsername(event.target.value);
                }}
            />
            <input
                type="password"
                placeholder="Password"
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
            />

            <Link to="/" onClick={login}>
                Login
            </Link>
        </div>
    );
};

export default Login;
