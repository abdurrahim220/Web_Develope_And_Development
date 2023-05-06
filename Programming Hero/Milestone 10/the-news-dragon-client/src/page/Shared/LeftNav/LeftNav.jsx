import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [catagories, setCatagories] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/catagories`)
            .then(res => res.json())
            .then(data => setCatagories(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h5>All Caterogy</h5>

           <div className="ps-4">
           {
                catagories.map( category => <p key={category.id}>
                    <Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link>
                </p>)
            }
           </div>
        </div>
    );
};

export default LeftNav;