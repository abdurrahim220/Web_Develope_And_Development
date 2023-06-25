import React from 'react';

const PCard = ({item}) => {

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={item.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Teacher Name:{item.instructor_name}</h2>
                <h2 className="card-title">Subject:{item.category}</h2>
                <h3>Email:{item.instructor_email}</h3>
                
            </div>
        </div>
    );
};

export default PCard;