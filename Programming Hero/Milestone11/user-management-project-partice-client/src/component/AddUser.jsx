import React from 'react';

const AddUser = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const gender = form.gender.value;
        const status = form.status.value;

        const userInfo = {name,email,gender,status}
        console.log(userInfo);

        // send userInfo to server 
        fetch(`http://localhost:5000/userInfo`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(userInfo)
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
        })

    }
    return (
        <div className='m-auto text-center'>
            <h1 className='text-3xl font-extrabold'>New User</h1>


            <form className='m-auto items-center' onSubmit={handleSubmit}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Enter Your Name</span>
                    </label>
                    <input type="text" placeholder="Your name" name='name' className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Enter your Email</span>
                    </label>
                    <input type="email" placeholder="Your Email" name='email' className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Gender</span>
                    </label>
                    <input type="text" placeholder="Your gender" name='gender' className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Status</span>
                    </label>
                    <input type="text" placeholder="Your status" name='status' className="input input-bordered w-full max-w-xs" />
                </div>
                <input type="submit" value="Add user" className='btn btn-block'/>

            </form>
        </div>
    );
};

export default AddUser;