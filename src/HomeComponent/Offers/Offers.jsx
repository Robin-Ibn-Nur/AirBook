import React from 'react';
import Title from '../../Component/Title';
import OffersCard from './OffersCard';

const Offers = () => {
    return (
        <div className='container mx-auto p-10 mt-10'>
            <Title text={"Deals and Offers"} />
            <div className='container mx-auto flex flex-wrap justify-around gap-5'>
                <OffersCard />
            </div>
        </div>
    );
};

export default Offers;