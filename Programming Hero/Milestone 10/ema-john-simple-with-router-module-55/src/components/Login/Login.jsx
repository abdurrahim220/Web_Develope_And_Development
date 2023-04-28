import React from 'react';
import './Login.css'

const Login = () => {
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
                    <button className='btn-submit'>Login</button>
                </form>
            </div>
           

    );
};

export default Login;