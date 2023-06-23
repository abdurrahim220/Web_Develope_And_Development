import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from 'axios';



export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth, createUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const LogOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, createUser => {
            setUser(createUser);
            // console.log(createUser);

            // get and set token
            if (createUser) {
                axios.post(`http://localhost:5000/jwt`, { email: createUser.email })
                .then(data =>{
                    console.log(data.data.token)
                    localStorage.setItem('access-token',data.data.token);
                    setLoading(false);
                })
            }
            else{
                localStorage.removeItem('access-token')
            }

           
        });
        return () => {
            return unsubscribe();
        }
    }, []);



    const authInfo = {
        user, loading, createUser, signIn, LogOut, updateUserProfile, googleSignIn

    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;