import React from 'react'

const extra = () => {
    return (
        <>
            <div >
                <Helmet>
                    <title>
                        Bistro Boss | Dashboard
                    </title>
                </Helmet>


                <div className='uppercase font-semibold h-10 flex justify-evenly'>
                    <h3 className='text-3xl'>Total Item : {cart.length}</h3>
                    <h3 className='text-3xl'>Total Price : ${total}</h3>
                    <div className="btn btn-warning">Pay</div>
                </div>
                <div >
                    <div className="overflow-x-auto">
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

            {/* dashboard */}

            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">

                {
                    isAdmin ? <>
                        <li><NavLink to="/dashboard/home"><FaHome></FaHome> Admin Home</NavLink></li>
                        <li><NavLink to="/dashboard/addItem"> <FaUtensils></FaUtensils> Add Items</NavLink></li>
                        <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Manage Items</NavLink></li>
                        <li><NavLink to="/dashboard/history"><FaBook></FaBook> Manage Bookings</NavLink></li>
                        <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>

                    </> : <>

                        <li><NavLink to='/'><FaShoppingCart></FaShoppingCart>MyCart
                            <div class="badge badge-secondary">+{cart?.length}</div>
                        </NavLink></li>
                        <li><NavLink to='/dashboard/reservation'><FaWallet></FaWallet>Payment History</NavLink></li>
                        <li><NavLink to='/dashboard/history'><FaCalendarAlt></FaCalendarAlt></NavLink>Reservation</li>
                        <li><NavLink to='/dashboard/myCart'><FaHome></FaHome></NavLink>User Home</li>
                    </>
                }
                {/* Sidebar content here */}

                <div className="divider"></div>

                <li><NavLink to='/'><FaHome></FaHome></NavLink>Home</li>
                <li><NavLink to='/menu'></NavLink>Our menu</li>
                <li><NavLink to='/order/salad'></NavLink>Order Food</li>

            </ul>
        </>




    )
}

export default extra