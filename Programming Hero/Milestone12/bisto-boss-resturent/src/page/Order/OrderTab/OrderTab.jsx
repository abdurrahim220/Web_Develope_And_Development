import React from 'react';
import FoodCard from '../../../component/FoodCard/FoodCard';

//todo implement pagination here?

const OrderTab = ({item}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5">
            {
               item.map(item => <FoodCard
                    key={item._id}
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;