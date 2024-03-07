import React from 'react';

const Place = () => {
    return (
        <div className='mt-5 flex justify-around gap-10 items-center  w-100'>
            <div className='rounded border flex items-center gap-2 h-[55px] p-1.5 w-auto  text-sm'>
                <h1 className='font-bold'>Dac</h1>
                <span className='p-[1px] h-[33px] border-l-2  opacity-[40%] border-[#09182E]'></span>
                <div className='flex flex-col'>
                    <h1 className='font-bold'>Dhaka</h1>
                    <p>Hazrat Shahjalal Internatio</p>
                </div>
            </div>
            <div className='rounded border flex items-center gap-2 h-[55px] p-1.5 w-auto text-sm'>
                <h1 className='font-bold'>Cxb</h1>
                <span className='p-[1px] h-[33px] border-l-2  opacity-[40%] border-[#09182E]'></span>
                <div className='flex flex-col '>
                    <h1 className='font-bold'>Cox’s Bazar</h1>
                    <p>Cox’s Bazar international</p>
                </div>
            </div>
            <div className='rounded border flex items-center gap-2 h-[55px] p-1.5 w-auto text-sm'>
                <h1 className='font-bold'>03</h1>
                <span className='p-[1px] h-[33px] border-l-2  opacity-[40%] border-[#09182E]'></span>
                <div className='flex flex-col '>
                    <h1 className='font-bold'>October</h1>
                    <p>tuesday, 2023</p>
                </div>
            </div>
            <div className='rounded border flex items-center gap-2 h-[55px] p-1.5 w-auto text-sm'>
                <h1 className='font-bold'>05</h1>
                <span className='p-[1px] h-[33px] border-l-2  opacity-[40%] border-[#09182E]'></span>
                <div className='flex flex-col '>
                    <h1 className='font-bold'>October</h1>
                    <p>tuesday, 2023</p>
                </div>
            </div>
            <div className='bg-[#FFB700] rounded p-3 text-xl'>
                🔍
            </div>
        </div>
    );
};

export default Place;