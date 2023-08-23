import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                // console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }

                fetch(`http://localhost:5000/users`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })
                    })


            })
    }
    return (
        <div className='w-full text-center mb-4'>
            <div className="divider"></div>
            <button onClick={handleGoogleLogin} className='btn btn-circle btn-outline text-yellow-300'>
                <FaGoogle></FaGoogle>
            </button>
        </div>
    );
};

export default SocialLogin;