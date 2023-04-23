import React, { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, applyActionCode, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn =(email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    // social sign in with google
    const googleSignIn = () =>{
        return signInWithPopup(auth,googleProvider);
    }

    const logOut=()=>{
        return signOut(auth);
    }
    //! observe auth state change!!
    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log("auth stage change ",currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            unSubscribe();
        }
    },[])


    const authInfo = {
        user,createUser,signIn,logOut,loading,googleSignIn
    }
    // const user = {displayName : 'Sagor Nodi'}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;