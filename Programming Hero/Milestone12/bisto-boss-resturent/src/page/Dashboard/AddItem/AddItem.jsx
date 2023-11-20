import React from 'react';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const imageHosting = import.meta.env.VITE_Image_Upload_Token;
const AddItem = () => {
    const {axiosSecure} = useAxiosSecure();

    const { register, handleSubmit, reset } = useForm();
    const hostingUrl = `https://api.imgbb.com/1/upload?key=${imageHosting}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(hostingUrl, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                // console.log(imgResponse)
                if(imgResponse.success){
                    const imgUrl = imgResponse.data.display_url;
                    const {name,price,category,recipe}=data;
                    const newItem = {name,price:parseFloat(price),category,recipe,imgUrl};

                    // console.log(newItem)


                   fetch('http://localhost:5000/menu',{
                    method:"POST",
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(newItem)
                   })
                   .then(res => res.json())
                    .then(data => {
                        console.log('adfkad',data.data)
                    })
                }
            })
    }
    // console.log(imageHosting)
    return (
        <div className='w-full px-10'>

            <SectionTitle subHeading={`What's new`} heading={`Add an item`} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">What is your name?</span>

                    </label>
                    <input  {...register("name", { required: true, maxLength: 120 })} type="text" placeholder="Type here" className="input input-bordered w-full " />

                </div>

                <div className='flex gap-2'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category*</span>

                        </label>
                        <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                            <option disabled >Pick One</option>
                            <option>Pizza</option>
                            <option>Salad</option>
                            <option>Soup</option>
                            <option>Drinks</option>
                            <option>Dessert</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your recipe details</span>
                    </label>
                    <textarea  {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Pick a file</span>

                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>

                <input type="submit" className='btn mt-4 btn-sm' value="Add item" />
            </form>

        </div>
    );
};

export default AddItem;