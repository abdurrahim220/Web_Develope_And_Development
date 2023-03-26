import React from 'react';

const Knob = (props) => {
    return (
        <div style={{border:'2px solid green' ,margin:'20px'}}>
            <h3>This is Knob Component</h3>
            <p>Steps here : {props.steps}</p>
        </div>
    );
};

export default Knob;