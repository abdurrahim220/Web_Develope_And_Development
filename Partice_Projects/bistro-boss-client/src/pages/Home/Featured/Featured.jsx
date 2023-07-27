import React from 'react';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import './featured.css'
import featuredImg from '../../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className='pt-8 bg-fixed my-20 featuredItem text-white'>
            <SectionTitle subHeading="check it out" heading="Featured Item"/>
            <div className='md:flex justify-center items-center pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredImg} alt="" srcset="" />
                </div>
                <div className='md:ml-10 '>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam enim ex neque doloremque, sapiente incidunt deserunt omnis beatae quam cupiditate?</p>
                    <button className='btn btn-outline border-0 border-b-4'>Read More</button>
                </div>
            </div>
            
        </div>
    );
};

export default Featured;