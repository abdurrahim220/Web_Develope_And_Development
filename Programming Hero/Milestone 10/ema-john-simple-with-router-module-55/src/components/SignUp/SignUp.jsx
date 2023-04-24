import React from 'react';

import './SignUp.css'
const SignUp = () => {
    return (
        <div className='form-container'>
           <h2 className='form-title'>Login</h2>
           <form>
            <div className="form-control">
                <label htmlFor="">Email</label>
                <input type="email" name="email" id="" required placeholder='email'/>
            </div>
           </form>
        </div>
    );
};

import './SignUp.css'
export default SignUp;