import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.config';
import { Result } from 'postcss';


const Login = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');
        setSuccess('');
        event.reset();
        const form = event.target;
        const email = form.email.value;
        const password = form.email.value;

    }

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

                        <div className="form-control mt-6">
                            <h4>Social login</h4>
                            {user ?
                                <button onClick={handleSignOut} className='btn btn-danger'>Sign Out</button> :

                                <button onClick={handleGoogle} className="btn btn-primary">Google</button>}
                        </div>

                        {user && <div>
                            <p>{user.displayName}</p>
                            <p>{user.email}</p>
                            <img src={user.photoURL}/>
                            </div>}


                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;