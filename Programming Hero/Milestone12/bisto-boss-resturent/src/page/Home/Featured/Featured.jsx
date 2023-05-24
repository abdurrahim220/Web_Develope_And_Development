import React from 'react';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'

import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed pt-8 my-20'>
            <SectionTitle>
                subHeading="Check it out"
                heading="Featured item"
            </SectionTitle>
            <div className='md:flex justify-center bg-fixed bg-opacity-30 items-center pb-20 pt12 px-36 text-white'>
                <div>
                    <img src={featuredImg} alt="" srcset="" />
                </div>
                <div className='md:ml-10'>
                    <p>
                        March 20, 2023
                    </p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='btn btn-outline border-0 border-b-4'>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;