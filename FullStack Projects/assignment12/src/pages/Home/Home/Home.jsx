import React from 'react';
import Banner from '../Banner/Banner';
import PopularInstructors from '../PopularInstructors.jsx/PopularInstructors';
import ExtraSection from '../ExtraSection.jsx/ExtraSection';

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <ExtraSection></ExtraSection>
           <PopularInstructors></PopularInstructors>
           
        </div>
    );
};

export default Home;