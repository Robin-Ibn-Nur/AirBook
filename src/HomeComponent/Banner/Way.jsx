import React from 'react';

const Way = () => {
    return (
        <>
            <div className='flex gap-8'>
                <div className='bg-[#EBF0F5] text-black
                         p-[10px] flex items-center gap-2 rounded'><span className='h-[16px] w-[16px] border rounded-full bg-white border-gray-500'></span>One Way</div>
                <div className='bg-[#006CE4] text-white 
                        p-[10px] flex items-center gap-2 rounded' ><span className='h-[16px] w-[16px] border rounded-full outlined bg-white'></span>Round Trip</div>
            </div>
            <div className='flex gap-8'>
                <div className='bg-[#EBF0F5] text-[#006CE4]
                         p-[10px] flex items-center gap-2 rounded'>1 Traveler <svg width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7 10L12 15L17 10" stroke="#006CE4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>{' '}</g></svg></div>
                <div className='bg-[#EBF0F5] text-[#006CE4]
                         p-[10px] flex items-center gap-2 rounded'>Economy <svg width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7 10L12 15L17 10" stroke="#006CE4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>{' '}</g></svg>
                </div>
            </div>
        </>
    );
};

export default Way;