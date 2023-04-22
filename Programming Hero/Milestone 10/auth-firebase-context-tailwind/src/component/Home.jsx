import React, { useContext } from 'react';
import { AuthContext } from './Provider/AuthProvider';

const Home = () => {

    const {user} = useContext(AuthContext);
    console.log(user);

    
    return (
        <div>
            <h3>Display Name : {user && <span>{user.displayName}</span>}</h3>
        </div>
    );
};

export default Home;