import React, { useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "firebase/auth";
import app from './firebase.config';
import { Link } from 'react-router-dom';


const Register = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleRegister = event => {
        event.preventDefault();

        // event.reset();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setError('')
        setSuccess('')


        // password validation

        if (!/(?=.*[A-Z])/.test(password)) {
            setError("Please add one upper case letter !!");
            return;
        }
        else if (!/(?=.*[!@#$&*])/.test(password)) {
            setError("Please add one special character!");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loginUser = result.user;
                console.log(loginUser);
                setSuccess("Successfully Register!!");
                form.reset();
                emailVerify(result.user)

            })
            .catch(error => {
                setError(error.message);
                console.log(error.message);
            })


    };
    const emailVerify = (email) => {
        sendEmailVerification(email)
            .then(result => {
                console.log(result);
                alert("Please Verify");
            })

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to="/login" className="label-text-alt link link-hover">If you already have an account?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <div className='mx-auto'>
                            <p className='text-red-400'>{error}</p>
                            <p className='text-success'>{success}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;