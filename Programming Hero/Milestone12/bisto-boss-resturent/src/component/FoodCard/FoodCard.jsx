import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import cartMenu from '../../hooks/cartMenu';

const FoodCard = ({ item }) => {
    const { name, recipe, image, price, _id } = item;
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const [,refetch]=cartMenu();
    const navigate = useNavigate();

    const handleAddToCart = (item) => {
        // console.log(item);

        if (user && user.email) {
            const cartItem = { itemId: _id, name, image, price, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)

            }).then(res => res.json()).then(data => {
                 // refetch cart to update the number of cart
               
                if (data.insertedId) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your food added on the card',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        navigate('/login', { state: { from: location } })
                    )
                }
            })
        }

    }
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
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 mt-4">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;