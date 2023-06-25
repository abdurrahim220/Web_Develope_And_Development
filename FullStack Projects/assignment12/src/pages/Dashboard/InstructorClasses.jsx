import React, { useContext } from 'react';



import { useEffect, useState } from 'react'



import ClassDataRow from '../../component/Dashboard/ClassDataRow';

import { AuthContext } from '../../providers/AuthProvider';

const InstructorClasses = () => {
  const { user } = useContext(AuthContext)
  // console.log(user);
  const [classes, setClasses] = useState([])


  // console.log(classes);

  useEffect(() => {
    fetch('https://server-assignment-12-xi.vercel.app/classes')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setClasses(data)
      })
  }, [user])
  return (
    <div className='container mx-auto px-4 sm:px-8'>
      <div className='py-8'>
        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
          <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
            <table className='min-w-full leading-normal'>
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    ClassName
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    InstructorName
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    InstructorEmail
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Available Sit
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Price
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Delete
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Update
                  </th>
                </tr>
              </thead>
              <tbody>

                {
                  classes.map(cla => {
                    <ClassDataRow key={cla._id}
                    
                    cla={cla}>

                    </ClassDataRow>

                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstructorClasses
