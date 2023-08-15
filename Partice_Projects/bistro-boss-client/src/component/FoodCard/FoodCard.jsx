import React from 'react'

const FoodCard = ({ item }) => {
    const {image,price,recipe,name} =item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <p>{price}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline">Order now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCard