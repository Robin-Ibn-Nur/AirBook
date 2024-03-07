import React from 'react';
import LOGOWhite from "/Logo/LOGOWhite.png"

import facebook from "/SocialLcon/facebook.png"
import linkedin from "/SocialLcon/linkedin.png"
import youtube from "/SocialLcon/youtube.png"

const Footer = () => {
    return (

        <footer className="flex flex-col bg-[#006CE4] mt-16 text-white">
            <div className="flex flex-col items-start justify-around gap-5  p-10 py-10 md:flex-row md:gap-0 ">
                <aside className="text-xl w-content">
                    <h4>Address</h4>
                    <p>House- 75 Ka, Main <br /> Rd, Dhaka 1216</p>
                    <p>View on Maps</p>
                </aside>
                <nav className="text-lg">
                    <ul className="space-y-3">
                        <li>
                            <a className="cursor-pointer hover:underline">About us</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">Stories</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">Blog</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">Airlines</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">Airlines</a>
                        </li>
                    </ul>
                </nav>
                <nav className="text-lg">
                    <ul className="space-y-3">
                        <li>
                            <a className="cursor-pointer hover:underline">Services</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">Add</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">Terms of Service</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">Privacy Policy</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">Portfolio</a>
                        </li>
                    </ul>
                </nav>
                <nav className="text-lg">
                    <ul className="space-y-3">
                        <li>
                            <a className="cursor-pointer hover:underline">Contact</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">+880 1234562890</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">+880 1345628980</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">+880 1234562890</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">info@airbook.com</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='container mx-auto border border-[1px] w-[80%]'></div>
            <div className='flex justify-around gap-5 items-center '>
                <img src={LOGOWhite} alt="" />
                <aside className=" py-5 text-center text-sm">
                    <p>&copy; © Copyright  AIRBOOK</p>
                </aside>
                <aside className=" flex gap-5 py-5 text-center text-sm">
                    <img src={youtube} alt="" />
                    <img src={facebook} alt="" />
                    <img src={linkedin} alt="" />
                </aside>
            </div>
        </footer>

    );
};

export default Footer;