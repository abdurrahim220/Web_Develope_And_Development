import React from 'react';
import { Helmet } from 'react-helmet-async';
import cartMenu from '../../../hooks/cartMenu';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyCart = () => {
    const [cart, refetch] = cartMenu();
    const total = (cart.reduce((sum, item) => item.price + sum, 0))
    const handleDelete = (item) => {
        console.log(item);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className='w-full'>
            <Helmet>
                <title>
                    Bistro Boss | Dashboard
                </title>
            </Helmet>


            <div className='uppercase font-semibold h-[60px] items-center flex justify-evenly'>

                <h3 className='text-2xl'>Total Item : {cart.length}</h3>
                <h3 className='text-2xl'>Total Price : ${total}</h3>
                <button className="btn btn-warning btn-sm">Pay</button>

            </div>
            <div >
                <div className="overflow-x-auto w-full">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Food</th>
                                <th>Food Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {cart.map((item, index) =>
                                <tr key={item._id}>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>{item.price}</td>
                                    <th>

                                        <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-lg text-white bg-red-500"><FaTrashAlt></FaTrashAlt></button>

                                    </th>
                                </tr>
                            )}


                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;