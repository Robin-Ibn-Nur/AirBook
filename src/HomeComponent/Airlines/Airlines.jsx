import React from 'react';
import AirlinesCard from './AirlinesCard';
import Title from '../../Component/Title';

const Airlines = () => {
    return (
        <div className='container mx-auto p-10 mt-10'>
            <Title text={"Popular Airlines"} />
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                <AirlinesCard />
            </div>
        </div>
    );
};

export default Airlines;