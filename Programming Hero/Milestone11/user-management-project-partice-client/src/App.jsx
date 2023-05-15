import { useState } from 'react'

import './App.css'
import { Link, useLoaderData } from 'react-router-dom'
import UserTable from './component/UserTable';

function App() {

  const loaded = useLoaderData();
  const [userInfo, setUserInfo] = useState(loaded)


  return (
    <>
      <h1>Home file Read File {loaded.length}</h1>

      <Link to='/userInfo'><button className='btn btn-info'>Add User</button></Link>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              {/* <th>Id</th> */}
              <th>Name</th>
              <th>Gender</th>
              <th>Status</th>
            </tr>
          </thead>
        </table>
      </div>
      
      <div>
        {
          userInfo.map(user => <UserTable
            key={user._id} user={user} userInfo={userInfo} setUserInfo={setUserInfo}
          ></UserTable>)
        }
      </div>

    </>
  )
}

export default App
