import { FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import cartMenu from "../hooks/cartMenu";

const Dashboard = () => {
    const [cart] = cartMenu();

    //todo:load data from the server to have dynamic isAdmin based on data

    const isAdmin = true;

    return (
        <div className="drawer lg:drawer-open">

            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">


                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
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
            </div>
        </div>
    );
};

export default Dashboard;