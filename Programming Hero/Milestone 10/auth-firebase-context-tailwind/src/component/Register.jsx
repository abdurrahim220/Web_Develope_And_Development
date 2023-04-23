import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProvider';

const Register = () => {
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');
  
    const {user,createUser,signIn} = useContext(AuthContext);
    console.log(user,createUser,signIn);

    const handleRegister=(event)=>{
        event.preventDefault();
        setError('');
        setSuccess('')
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        console.log(name,email,password);

        createUser(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            setSuccess("Account created successfully");
            setError('')
        })
        .catch(error =>{
            setError(error.message);
        })     
    };

   


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                </div>
                <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <p>{error}</p>
                        <p>{success}</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
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
                            <label className="label">
                                <Link to="/login" className="label-text-alt text-primary link link-hover">Already have an account</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                       
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;