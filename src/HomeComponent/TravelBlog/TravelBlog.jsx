import React from 'react';
import Title from '../../Component/Title';
import { Carousel2 } from './Carousel2';

const TravelBlog = () => {
    return (
        <div className='container mx-auto p-10 mt-4'>
            <Title text={"Travel Blog"} />
            <Carousel2 />
        </div>
    );
};

export default TravelBlog;