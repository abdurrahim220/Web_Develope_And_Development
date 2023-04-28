import React from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';


const SignUp = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form>

                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="" required placeholder='email' />
                </div>

                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="" required placeholder='email' />
                </div>

                <div className="form-control">
                    <label htmlFor="">Conform Password</label>
                    <input type="password" name="conform" id="" required placeholder='email' />
                </div>

                <button className='btn-submit'>Sign Up</button>

            </form>
            <p><small>Already have an account ? <Link to='/login'>Login</Link></small></p>
        </div>
    );
};


export default SignUp;