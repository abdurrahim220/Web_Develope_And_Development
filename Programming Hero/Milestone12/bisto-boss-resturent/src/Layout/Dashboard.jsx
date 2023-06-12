import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import cartMenu from "../hooks/cartMenu";

const Dashboard = () => {
    const [cart] = cartMenu();
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
                    {/* Sidebar content here */}
                    <li><NavLink to='/'><FaShoppingCart></FaShoppingCart>MyCart
                        <div class="badge badge-secondary">+{cart?.length}</div>
                    </NavLink></li>
                    <li><NavLink to='/dashboard/reservation'><FaWallet></FaWallet>Payment History</NavLink></li>
                    <li><NavLink to='/dashboard/history'><FaCalendarAlt></FaCalendarAlt></NavLink>Reservation</li>
                    <li><NavLink to='/dashboard/myCart'><FaHome></FaHome></NavLink>User Home</li>
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