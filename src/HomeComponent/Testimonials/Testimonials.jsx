import React from 'react';
import Title from '../../Component/Title';
import Carousel from './Carousel';

const Testimonials = () => {
    return (
        <div className='p-10 ml-7 mt-10'>
            <Title text={"Testimonials"} />
            <Carousel />
        </div>
    );
};

export default Testimonials;