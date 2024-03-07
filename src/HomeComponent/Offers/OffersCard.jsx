import React from 'react';

import img1 from "/Offer/img1.png"
import img2 from "/Offer/img2.png"
import img3 from "/Offer/img3.png"

const OffersCard = () => {
    return (
        <>
            <div className='flex items-center gap-2 max-w-[358px] shadow-lg rounded-md bg-white'>
                <img src={img1} alt="" />
                <div className='flex flex-col'>
                    <p className='text-black text-sm font-bold'>With Bkash Payment only</p>
                    <h3 className='text-[#006CE4] font-bold text-wrap'>up to 14% discount on the base fare of domestic flights</h3>
                </div>
            </div>
            <div className='flex items-center gap-2 max-w-[358px] shadow-lg rounded-md bg-white'>
                <img src={img2} alt="" />
                <div className='flex flex-col'>
                    <p className='text-black text-sm font-bold'>With Bkash Payment only</p>
                    <h3 className='text-[#006CE4] font-bold text-wrap'>up to 14% discount on the base fare of domestic flights</h3>
                </div>
            </div>
            <div className='flex items-center gap-2 max-w-[358px] shadow-lg rounded-md bg-white'>
                <img src={img3} alt="" />
                <div className='flex flex-col'>
                    <p className='text-black text-sm font-bold'>With Bkash Payment only</p>
                    <h3 className='text-[#006CE4] font-bold text-wrap'>up to 14% discount on the base fare of domestic flights</h3>
                </div>
            </div>
        </>
    );
};

export default OffersCard;