import { NavLink } from 'react-router-dom'



import { FaAddressBook } from 'react-icons/fa';
import { AiFillFileAdd } from 'react-icons/ai';
import { Bounce, Fade } from 'react-awesome-reveal';

const InstructorMenu = () => {

  return (
    <>
      <Fade>
        <NavLink
          to='add-Classes'
          className={({ isActive }) =>
            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
            }`
          }
        >
          <FaAddressBook className='w-5 h-5' />

          <span className='mx-4 font-medium'>Add Classes</span>
        </NavLink></Fade>

      <Bounce>
        <NavLink
          to='my-listings'
          className={({ isActive }) =>
            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
            }`
          }
        >
          <AiFillFileAdd className='w-5 h-5' />

          <span className='mx-4 font-medium'>My Listings</span>
        </NavLink></Bounce>
    </>
  )

};

export default InstructorMenu;