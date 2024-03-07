import React, { useState } from 'react';

import heroImage from "/HeroImage/Hero.png"
import Way from './Way';
import Place from './Place';

const Banner = () => {

    return (
        <section style={{ backgroundImage: `url(${heroImage})` }} className="bg-fixed bg-cover bg-no-repeat bg-center w-full py-12 md:py-24 flex justify-center items-start flex-col lg:py-32">
            <div className='container mx-auto w-[75%]'>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-[40px] text-white">
                    Welcome to <span className='text-[#006CE4]'>AirBook</span>
                </h1>
                <div className=" h-auto px-10 py-5 rounded-lg mt-5 flex flex-wrap justify-center items-center  bg-white">

                    <div className='flex items-center w-full justify-between  mt-5 '>
                        <Way />
                    </div>
                    <Place />
                </div>
            </div>
        </section>
    );
};

export default Banner;