import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import defaultImg from '../../../assets/placeholder.jpg'

const ProfilePic = () => {
    const { user } = useContext(AuthContext)
    return (
        <img
            className='rounded-full'
            src={user && user.photoURL ? user.photoURL : defaultImg}
            alt='profile'
            height='30'
            width='30'
        />
    )
};

export default ProfilePic;