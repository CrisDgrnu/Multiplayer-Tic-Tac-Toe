import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [user, setUser] = useState(null);

    const signUp = () => {
        console.log('Signed up');
    };

    return (
        <div className="sign-up">
            <p>Sign Up</p>

            <input
                type="text"
                placeholder="First Name"
                onChange={(event) => {
                    setUser({ ...user, firsName: event.target.value });
                }}
            />

            <input
                type="text"
                placeholder="Last Name"
                onChange={(event) => {
                    setUser({ ...user, lastName: event.target.value });
                }}
            />

            <input
                type="text"
                placeholder="Username"
                onChange={(event) => {
                    setUser({ ...user, userName: event.target.value });
                }}
            />

            <input
                type="email"
                placeholder="Email"
                onChange={(event) => {
                    setUser({ ...user, email: event.target.value });
                }}
            />

            <input
                type="password"
                placeholder="Password"
                onChange={(event) => {
                    setUser({ ...user, password: event.target.value });
                }}
            />

            <Link to="/signup" onClick={signUp}>
                Signup
            </Link>
        </div>
    );
};

export default SignUp;
