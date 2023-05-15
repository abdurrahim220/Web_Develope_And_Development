import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const UserTable = ({ user, userInfo, setUserInfo }) => {
    const { _id, name, email, gender, status } = user;
    const handleDelete = (_id) => {
        console.log(_id);
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

                fetch(`http://localhost:5000/userInfo/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = userInfo.filter(user => user._id !== _id)
                            setUserInfo(remaining);
                        }
                    })

            }
        });
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <tbody>
                    {/* row 1 */}
                    <tr>

                        <td>{name}</td>
                        <td>{gender}</td>
                        <td>{status}</td>
                        <Link to={`/updateInfo/${_id}`}> <td><button className='btn btn-primary'>edit</button></td></Link>
                        <td><button onClick={() => handleDelete(_id)} className='btn btn-danger'>X</button></td>

                    </tr>
                </tbody>
            </table>
        </div>
    );
};


export default UserTable;