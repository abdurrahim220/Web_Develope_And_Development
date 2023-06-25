import React from 'react';

const InstructorCard = ({ item }) => {

    const {image,instructor_name,instructor_email,available_seats,price } = item
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            Name:{instructor_name}
          </h2>
          <p>Email:{instructor_email}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Available Seats:{available_seats}</div> 
            <div className="badge badge-outline">Price:{price}</div>
          </div>
        </div>
      </div>
    );
};

export default InstructorCard;