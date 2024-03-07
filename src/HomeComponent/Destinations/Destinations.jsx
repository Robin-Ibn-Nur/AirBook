import React from 'react';
import Title from '../../Component/Title';
import DestinationCard from './DestinationCard';

const Destinations = () => {
    return (
        <div className='container mx-auto p-10 mt-10'>
            <Title text={"Featured Destinations"} />
            <div className='container mx-auto flex flex-wrap justify-around gap-5'>
                <DestinationCard />
            </div>
        </div>
    );
};

export default Destinations;