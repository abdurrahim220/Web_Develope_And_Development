import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {

    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h4>Uncle</h4>
            <p><small>Grandpa money: {money}</small></p>
            <button onClick={() => setMoney(money + 1000)}>Send 1000tk</button>
            <section className='flex'>
                <Cousin>abir</Cousin>
                <Cousin>nibir</Cousin>
                <Cousin>goat</Cousin>
            </section>
        </div>
    );
};

export default Uncle;