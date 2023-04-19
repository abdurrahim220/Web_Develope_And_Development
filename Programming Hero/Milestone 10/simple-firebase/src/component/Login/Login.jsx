import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase.init';


const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const githubProvider = new GithubAuthProvider();

    const handleGoogleProvider = () => {
        // console.log('Google mama is coming');
        signInWithPopup(auth, provider)
            .then(result => {
                const userDetails = result.user;
                console.log(result);
                setUser(userDetails)
            })
            .catch(error => {
                console.log("Error ", error.message);
            })
    };
    // sign out button
    const handleSignOut = () => {
        signOut(auth)
            .then(result => {

                setUser(null)
            })
            .catch(error => {
                console.log(error);
            })
    };
    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const githubUser = result.user;
                console.log(githubUser);
                setUser(githubUser)
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            {/* user? logout : sign in */}

            {user ? <button onClick={handleSignOut}>Sign OUt</button> :
                <div>
                    <button onClick={handleGoogleProvider}>Google login</button>
                    <button onClick={handleGithubLogin}>Github Login</button>
                </div>}
            {
                user && <div><h1>Name:{user.displayName}</h1>
                    <p>{user.email}</p>
                    <img src={user.photoURL
                    } alt="" /></div>
            }
        </div>
    );
};

export default Login;