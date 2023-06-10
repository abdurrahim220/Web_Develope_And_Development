import React from 'react';

const FoodCard = ({ item }) => {
    const { name, recipe, image, price } = item;
    

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <p className='absolute right-0 bg-slate-900 mr-4 mt-4 text-white px-4'>${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;