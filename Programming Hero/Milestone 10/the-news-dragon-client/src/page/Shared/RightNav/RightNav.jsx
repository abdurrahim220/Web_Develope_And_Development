import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub ,FaFacebookSquare,FaTwitter, FaInstagram} from 'react-icons/fa';
import QZone from '../QZone/QZone';

import bg from '../../../assets/bg.png';


const RightNav = () => {
    return (
        <div>
            <div className='mb-5'>
                <h5 className='mb-2'>Login With</h5>

                <Button className='mb-2 text-center' variant="primary"><FaGoogle /> Login With Google</Button>
                <Button className='text-center' variant="secondary"><FaGithub /> Login With Github</Button>
            </div>

            <div className='mb-4'>
                <h5 className='mb-3'>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item>< FaFacebookSquare/>FaceBook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/>Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/>Instagram</ListGroup.Item>
                    
                </ListGroup>
            </div>

            <QZone></QZone>

            <div className='my-4 text-center'>
                <img src={bg} alt="" />
            </div>

        </div>
    );
};

export default RightNav;