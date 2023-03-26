import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';


const Cosmetics = () => {
    // const cosmetics = [
    //     { id: 1, name: 'Alita', price: 100 },
    //     { id: 2, name: 'palis', price: 200 },
    //     { id: 3, name: 'malis', price: 300 },
    //     { id: 4, name: 'nalis', price: 400 },
    //     { id: 5, name: 'galis', price: 500 },
        
    // ]


    // using json file 

    const [cosmetics,setCosmetics] = useState([]);
    useEffect(()=>{
        fetch('data.json').then(res => res.json()).then(data=>setCosmetics(data))
    },[]);
    return (
        <div>
            <h1>Welcome to my Cosmetics store</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
                // cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} name={cosmetic.name} price={cosmetic.price}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;