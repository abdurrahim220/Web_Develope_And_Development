import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../../providers/AuthProvider"


const NavBar = () => {
    const { user } = useContext(AuthContext)
    return (

        <div className='border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>
            <div className='flex flex-row items-center justify-between'>
                <Link to='/'><p className='text-sm font-semibold px-6'> Home</p></Link>

                <Link to='/sss'> <p className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
                    Instructors
                </p></Link>
                <Link to='/classes'><div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
                    Classes
                </div></Link>

                {user && <Link to='/dashboard'><div className='text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3'>
                    <div className='hidden sm:block'>Dashboard</div></div></Link>}
            </div>
        </div>
    )
}

export default NavBar