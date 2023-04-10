import React, { useContext } from 'react';
import Special from '../Special/Special';
import { RingContext } from '../Grandpa/Grandpa';

const MySelf = ({ring}) => {
    const angti = useContext(RingContext);
    return (
        <div>
            <h4>This is self me!!!</h4>
            <Special ring={angti}></Special>
        </div>
    );
};

export default MySelf;