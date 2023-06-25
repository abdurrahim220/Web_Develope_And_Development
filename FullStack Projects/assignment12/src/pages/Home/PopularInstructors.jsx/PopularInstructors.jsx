import React, { useEffect, useState } from 'react';
import InstructorCard from './InstructorCard';
import InfoTitle from '../../../component/InfoTitle/InfoTitle';
import { getAllClasses } from '../../../hooks/Classes';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PopularInstructors = () => {
    const [instructor, setInstructor] = useState([])
    useEffect(() => {
        fetch('https://server-assignment-12-xi.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                setInstructor(data);
            })
    }, [])

 



    return (
        <section className="mb-12 mt-10 container mx-auto">
           
            <InfoTitle
                heading="From Our Instructor"
                subHeading="Popular Instructor"
            ></InfoTitle>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
                {
                    instructor.slice(0,6).map(item => <InstructorCard
                        key={item.id}
                        item={item}
                    ></InstructorCard>)
                }
            </div>
            <Link to='/classes'><button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button></Link>
        </section>
    );
};

export default PopularInstructors;