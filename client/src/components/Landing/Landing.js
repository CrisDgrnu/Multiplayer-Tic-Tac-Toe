import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="landing">
            <h1>Tic Tac Toe</h1>
            <h2>But with Friends!</h2>
            <p>Login or Sign up and start playing!</p>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        </div>
    );
};

export default Landing;
