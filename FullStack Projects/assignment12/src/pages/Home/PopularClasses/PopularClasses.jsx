import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PCard from './PCard';

const PopularClasses = ({ }) => {
    const [instructor, setInstructor] = useState([])
    useEffect(() => {
        fetch('https://server-assignment-12-xi.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                setInstructor(data);
            })
    }, [])
    return (
        <div>

            <Helmet>
                <title>Drawing-Instructor</title>
            </Helmet>

            <div className="grid md:grid-cols-4 gap-6 px-10 my-10">
                {
                    instructor.map(item => <PCard
                        key={item._id} item={item}
                    >
                    </PCard>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;