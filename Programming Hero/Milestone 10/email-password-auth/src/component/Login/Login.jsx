import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';

const Login = () => {
    const auth = getAuth(app)

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef();

    const handleSubmit = event =>{
        event.preventDefault();
        setError('');
        setSuccess('');
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email,password);
         // password validation
         if (!/(?=.*[0-9])/.test(password)) {
            setError('Please Add a single Digit!');
            return;
        }
        else if(!/(?=.*[A-Z])/.test(password)){
            setError("Please Add a UpperCase letter!")
            return;
        }
        else if(!/(?=.*\W)/.test(password)){
            setError("Please Add a Special Letter!!!");
            return;
        }
        else if(password.length <7){
            setError("Password Must container 7 letters !");
            return;
        }
        // firebase
        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
            const usserLogin = result.user;
            console.log(usserLogin);
            setSuccess("You log in successfull");
            setError('')
            
        })
        .catch(error =>{
            console.log(error.message);
            setError(error.message);
        });
        signInWithEmailAndPassword(auth,email,password)
            .then(result => {
                const logginedUser = result.user;
                setSuccess('Log in successfull');
                setError("")
            })
            .catch(error =>{
                setError(error.message)
            });
           
    }
    const handleResetPassword = event =>{
        const email = (emailRef.current.value);
        console.log(emailRef.current.value);
        if(!email)
        {   
            alert("Pleaser provide your email to reset password!!");
            return;
           
        }
        sendPasswordResetEmail(auth,email)
        .then(() =>{
            alert("Please check your email")
            

        })
        .catch( error =>{
            console.log(error.message);
            setError(error.message)
        })
    }
    return (
        <div>
            <h2>Please login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" ref={emailRef} name='email' id="username" placeholder="Enter username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name='password' id="password" placeholder="Password" required />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <p><small>If you are new? please <Link to='/register'>register</Link></small></p>
            <p>Forget Password ? please<button onClick={handleResetPassword} className='btn btn-link'>Reset Password</button></p>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Login;