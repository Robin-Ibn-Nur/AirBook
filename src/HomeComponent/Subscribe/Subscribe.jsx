import React from 'react';

import NewsLetter from "/NewsLetter/Isolation_Mode.png"
const Subscribe = () => {
    return (
        <div className="flex flex-wrap sm:space-y-10 items-center justify-around my-10 p-6 md:p-0">
            <img src={NewsLetter} alt="" />
            <div className='space-y-5'>
                <h1 className='text-black font-bold text-4xl'>Subscribe to our
                    Newsletter!</h1>
                <p className='text-[#006CE4]'>Subscribe to our newsletter and stay
                    updated.</p>
                <input className="w-[80%] rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 sm:w-full md:w-[100%]" type="email" placeholder="Your Email" />
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full bg-[#FFB700] text-black">
                    Subscribe
                </button>

            </div>
        </div>
    );
};

export default Subscribe;