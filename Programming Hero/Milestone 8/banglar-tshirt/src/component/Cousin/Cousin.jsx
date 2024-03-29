import React, { Children } from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({children,hasFriend,ring}) => {
    return (
        <div>
            <h4>Cousin</h4>
            <p><small>{children}</small></p>
            {hasFriend && <Friend ring={ring}></Friend>}
        </div>
    );
};

export default Cousin;