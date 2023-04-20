import React, { useState } from 'react';

const Login = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = event =>{
        event.preventDefault();
        setError('');
        setSuccess('');
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email,password);
        
    }
    return (
        <div>
            <h2>Please login</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" name='email' id="username" placeholder="Enter username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name='password' id="password" placeholder="Password" required />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default Login;