import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        const data = {
            username: username,
            password: password
        }
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/users`,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        );

        const userCredentials = await response.json();
        if (!userCredentials) {
            console.log('user not found');
        } else {
            navigate('/home')
        }
    };
    return (
        <div style={{ margin: "5em" }}>
            <h1>WELCOME</h1>
            <form onSubmit={(e) => handleLogin(e)}>
                <label htmlFor="username">Username:</label>
                <input //attributes below
                    type="text"
                    id="username"
                    autoComplete="off"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input //attributes below
                    type="password"
                    id="password"
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button>Sign In</button>
            </form>
        </div>
    )
}
export default Login;
