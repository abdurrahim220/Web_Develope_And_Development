import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.config';
import { Result } from 'postcss';
import { Link } from 'react-router-dom';


const Login = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null)
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // email login section
    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');
        setSuccess('');
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailAndPassword(auth,email,password)
        .then(result =>{
            const loginEP = result.user;
            // setUser(loginEP)
            console.log(loginEP);
            // form.reset();
            setError('');
            setSuccess("Successfully log In")
        })
        .catch(error =>{
            setError(error.message)
        })

    }

    // social login
    const handleGoogle = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const login = result.user;
                console.log(login);
                setUser(login);


            })
            .catch(error => {
                console.log(error.message);
            })
    };

    const handleGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loginGit = result.user;
                console.log(loginGit);
                setUser(loginGit)
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                                <label className="label grid">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    <br />
                                    <Link to='/register' className="label-text-alt link link-hover">If new please ? Register</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>



                        <div className="form-control mt-6 mx-auto text-center mb-2">
                            <h4>Social login</h4>
                            {user ?
                                <button onClick={handleSignOut} className='btn btn-danger'>Sign Out</button> :

                                <div className='mx-auto'>
                                    <button onClick={handleGoogle} className="btn btn-primary mr-2">Google</button>
                                    <button onClick={handleGithub} className="btn btn-primary">GitHub</button>
                                </div>
                            }
                        </div>

                        {user && <div>
                            <p>{user.displayName}</p>
                            <p>{user.email}</p>
                            <img src={user.photoURL} />
                        </div>}


                    </form>
                    <div className='mx-auto'>
                        <p className='text-red-400'>{error}</p>
                        <p className='text-success'>{success}</p>
                        </div>
                </div >
            </div >
        </div >
    );
};

export default Login;