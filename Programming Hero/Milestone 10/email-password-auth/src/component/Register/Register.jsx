import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, updateCurrentUser, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';


const Register = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')
    const auth = getAuth(app);

    const handleSubmit = event => {
        //prevent page refresh
        event.preventDefault();
        setSuccess('');
        setError('');
        //collect form data
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        console.log(name,email, password);
        // password validation
        if (!/(?=.*[0-9])/.test(password)) {
            setError('Please Add a single Digit!');
            return;
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            setError("Please Add a UpperCase letter!")
            return;
        }
        else if (!/(?=.*\W)/.test(password)) {
            setError("Please Add a Special Letter!!!");
            return;
        }
        else if (password.length < 7) {
            setError("Password Must container 7 letters !");
            return;
        }
        // create user in firebase
        //create user in firebase
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                event.target.reset();
                setSuccess("user has created successfully");
                verifyEmail(result.user)
                updateUser(result.user,name)
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);

            });

    }
    const handleEmailChange = (event) => {
        // console.log(event.target.value);
        setEmail(event.target.value);
    }

    const handlePasswordBlur = (event) => {
        // console.log(event.target.value);
    }
    // verification email
    const verifyEmail = user => {
        sendEmailVerification(user)
            .then(result => {
                console.log(result);
                alert("Please verify your email");

            })

    };
    const updateUser=(user,name) =>{
        updateProfile(user,{
            displayName:name
        })
        .then(() =>console.log("Profile updated!"))
        .catch(error => setError(error.message))
    } 

    return (
        <div className='w-50 mx-auto'>
            <h5>This is register</h5>
            <form onSubmit={handleSubmit}>
                <input className='mb-3'  type="text" name="name" id="name" placeholder='Your Name' required />
                <br />
                <input className='mb-3' onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Your Email' required />
                <br />
                <input className='mb-3' onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder='Your Password' required />
                <br />
                <input type="submit" value="Register" />
                <p><small>If you already have an account ? please <Link to='/login'>Log in</Link></small></p>
                <p className='text-danger'>{error}</p>
                <p className='text-success'>{success}</p>
            </form>
        </div>
    );
};

export default Register;