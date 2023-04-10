import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({ring}) => {
    return (
        <div>
            <h4>Aunty</h4>
            <section className='flex'>
            <Cousin>rahima</Cousin>
            <Cousin>rabeya</Cousin>
            <Cousin hasFriend={true} ring={ring}>sania</Cousin>
            </section>
        </div>
    );
};

export default Aunty;