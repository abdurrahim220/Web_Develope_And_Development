import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';


const RegisterBS = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const auth = getAuth(app);

    const handleSubmit = event => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        // password validation
        if(!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*_)(?!.*\W)(?!.* ).{8,16}$/.test(password)){
            setError('Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one underscore but no other special character, no space and it must be 8-16 characters long.');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const userPass = result.user;
                console.log(userPass);
                setSuccess("You logged in successfully")
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message);
            })
    }


    const handleEmailChange = (event) => {
        console.log(event.target.value);
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event) => {
        console.log(event.target.value);
    }


    return (
        <div>
            <h3>This is Bootstrap form</h3>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input onClick={handleEmailChange} type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input onClick={handlePasswordChange} type="password" name='password' class="form-control" id="exampleInputPassword1" required />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                <p>{error}</p>
                <p>{success}</p>
            </form>
        </div>
    );
};

export default RegisterBS;