import React, { useContext } from 'react';
import loginlogo from '../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import SocialLogin from '../page/Shared/SocialLogin/SocialLogin';

const Login = () => {
    const { login } = useContext(AuthContext)

    const location = useLocation();

    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        login(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                navigate(from, { replace: true })
                // const loggedUser = {
                //     email: user.email
                // }
                // console.log(loggedUser);
                // fetch(`http://localhost:5000/jwt`, {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(loggedUser)

                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         console.log('jwt response', data);
                //         //! Warning : Local storage is the second best place to store to access token
                //         localStorage.setItem('car-access-token',data.token)
                //     })


            })
            .catch(error => {
                console.log(error);
            });


    }

    return (
        <div className="hero min-h-screen bg-base-200 mb-3">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">

                    <img src={loginlogo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl text-center">Login</h1>

                        <form onSubmit={handleLogin}>
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
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>

                        <SocialLogin/>

                        <p>New to Cars Doctor<Link to='/signUp' className='text-red-600'> Sign Up</Link></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;