import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleDelete = (user) => {


    }

    const handleMakeAdminUpdate = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH',
        })
            .then(
                res => res.json()
            )
            .then(data => {
               // console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | All Users</title>
            </Helmet>
            <h3 className='text-3xl font-semibold '> total user : {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr

                                key={user._id}>

                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{
                                    user.role == 'admin' ? 'admin' :
                                        <button onClick={() => handleMakeAdminUpdate(user)} className="btn btn-ghost btn-lg text-white bg-orange-300"><FaUserShield></FaUserShield></button>

                                }</td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-ghost btn-lg text-white bg-red-500"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;