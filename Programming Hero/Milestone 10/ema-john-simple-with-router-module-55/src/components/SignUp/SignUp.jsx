import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { handler } from 'daisyui';
import { AuthContext } from '../providers/AuthProvider';


const SignUp = () => {

    const [error, setError] = useState('');

    const { createUser } = useContext(AuthContext);

    const handlerSignUp = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        const conform = form.conform.value;
        console.log(email, password, conform);

        // password validation
        setError('')

        if (password !== conform) {
            setError("Your Password Did not match");
            return;
        }
        else if (password.length < 6) {
            setError("Your password length 6 character");
        }

        // login authentication

        createUser(email, password)
            .then(result => {
                const login = result.user;
                console.log(login);
            }
            )
            .catch(error => setError(error.message))

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>


                <form onSubmit={handlerSignUp} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Conform Password</span>
                            </label>
                            <input type="password" name='conform' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to='/login' className="label-text-alt link link-hover">Already Have an account</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-300">Sign UP</button>
                        </div>
                    </div>
                    <p className='text-error'>{error}</p>
                </form>


            </div>
        </div>
    );
};


export default SignUp;