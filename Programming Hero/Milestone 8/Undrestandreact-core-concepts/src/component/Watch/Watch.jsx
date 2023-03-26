import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {
    const [steps,setSteps] = useState(0);

    

    const increaseSteps =()=>{
        const newSteps = steps + 1;
        setSteps(newSteps);
    };

    useEffect(()=>{
        console.log("Hello");
    },[steps]);


    return (
        <div style={{border:'2px solid red',margin:'20px'}}> 
            <h2>I have a Smart Watch!</h2>
            <p>Steps: {steps}</p>
            <button onClick={increaseSteps}>De dour ....</button>
            <Dial steps={steps}></Dial>
        </div>
    );
};

export default Watch;