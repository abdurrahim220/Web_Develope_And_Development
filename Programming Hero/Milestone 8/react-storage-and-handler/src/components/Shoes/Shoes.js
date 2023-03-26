import React from 'react';
import { add, multiply } from '../../utilities/calculate';

const Shoes = () => {
    const result = multiply(11,12);
    const sum = add(15,20);
    return (
        <div>
            <h3>This is shoes Compo</h3>
            <p>Total Multiply Result : {result} & Sum Result : {sum}</p>
        </div>
    );
};

export default Shoes;