import React from 'react';

const DeviceDetails = (props) => {
    return (
        <div>
            <p>The price of this phone is : {props.price}</p>
        </div>
    );
};

export default DeviceDetails;