import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';
const Friend = ({friend}) => {
    const {email,id,name,username,phone} = friend;
    return (
        <div className='friend'>
            <h3>{name}</h3>
            <h4>id : {id}</h4>
            <p>Email : {email}</p>
            <p>phone: {phone}</p>
            <p><Link to={`/friend/:${id}`}>Show me details</Link></p>
        </div>
    );
};

export default Friend;