import React from 'react';
import img1 from "/Thumbnail/destination1.png"
import img2 from "/Thumbnail/destination2.png"
import img3 from "/Thumbnail/destination3.png"

const DestinationCard = () => {
    return (
        <>
            <div className="px-4 py-8 shadow-lg max-w-[360px] font-sans rounded-xl space-y-6  mx-auto bg-white">
                <div className="flex justify-center w-full h-48 lg:h-[280px] ">

                    <img className="rounded-lg bg-black/40 w-full h-full" src={img1} alt="card navigate ui" />
                </div>
                <div className="text-start w-[85%] mx-auto font-semibold space-y-2">
                    <h6 className="text-sm md:text-base lg:text-lg font-bold">Stopover opportunity in İstanbul with Turkish Airlines</h6>

                </div>
                <div className='text-center'>
                    <button className="text-sm md:text-base w-[200px] px-4 py-2 rounded-lg bg-[#FFB700] hover:bg-sky-600 duration-300 hover:scale-105 text-white font-semibold font-sans">Buy now</button>
                </div>
            </div>
            <div className="px-4 py-8 shadow-lg max-w-[360px] font-sans rounded-xl space-y-6  mx-auto bg-white">
                <div className="flex justify-center w-full h-48 lg:h-[280px] ">

                    <img className="rounded-lg bg-black/40 w-full h-full" src={img2} alt="card navigate ui" />
                </div>
                <div className="text-start w-[85%] mx-auto font-semibold space-y-2">
                    <h6 className="text-sm md:text-base lg:text-lg font-bold">Discover the timeless city with Touristanbul of Turkish Airlines</h6>

                </div>
                <div className='text-center'>
                    <button className="text-sm md:text-base w-[200px] px-4 py-2 rounded-lg bg-[#FFB700] hover:bg-sky-600 duration-300 hover:scale-105 text-white font-semibold font-sans">Buy now</button>
                </div>
            </div>
            <div className="px-4 py-8 shadow-lg max-w-[360px] font-sans rounded-xl space-y-6  mx-auto bg-white">
                <div className="flex justify-center w-full h-48 lg:h-[280px] ">

                    <img className="rounded-lg bg-black/40 w-full h-full" src={img3} alt="card navigate ui" />
                </div>
                <div className="text-start w-[85%] mx-auto font-semibold space-y-2">
                    <h6 className="text-sm md:text-base lg:text-lg font-bold">the best of Abu Dhabi with exclusive Etihad Airways!</h6>

                </div>
                <div className='text-center'>
                    <button className="text-sm md:text-base w-[200px] px-4 py-2 rounded-lg bg-[#FFB700] hover:bg-sky-600 duration-300 hover:scale-105 text-white font-semibold font-sans">Buy now</button>
                </div>
            </div>
        </>
    );
};

export default DestinationCard;