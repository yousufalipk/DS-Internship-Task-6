import React from 'react';
import LoactionIcon from '../../public/location.svg';
import Image from 'next/image';
import SendIcon from '../../public/send.svg';
import FacebookIcon from '../../public/fb.svg';
import XIcon from '../../public/x.svg';
import LinkedInIcon from '../../public/linkedIn.svg';
import InstaIcon from '../../public/insta.svg';
import InvertedLogo from '../../public/invertedLogo.svg';

const Footer = () => {
    return (
        <div className='w-full md:min-h-[70vh] bg-black flex flex-col justify-center items-center gap-5 py-10'>
            <div className='w-[80%] h-full flex flex-col md:flex-row justify-between items-center'>
                <div className='w-full h-full flex flex-col md:flex-row justify-start items-start'>
                    <div className='w-[80%] md:w-[25%] h-full flex flex-col justify-start items-start gap-5'>
                        <h1 className='text-white font-semibold'>Quick Links</h1>
                        <ul className='text-gray-400 flex flex-col justify-start items-start gap-2'>
                            <li>Courses</li>
                            <li>Subscriptions</li>
                            <li>About</li>
                            <li>Contact Us</li>
                            <li>Login & Register</li>
                        </ul>
                    </div>
                    <div className='w-[80%] md:w-[25%] h-full flex flex-col justify-start items-start gap-5'>
                        <h1 className='text-white font-semibold'>Get Contact</h1>
                        <ul className='text-gray-400 flex flex-col justify-start items-start gap-2'>
                            <li className='text-xl font-bold text-[#F86537]'>{`(406) 555-0120`}</li>
                            <li>b.r.collins@example.com</li>
                            <li className='flex'>
                                <Image
                                    src={LoactionIcon}
                                    alt='location_icon'
                                    width={40}
                                    height={40}
                                />
                                <p>
                                    North America, USA
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-full md:w-[50%] h-full flex flex-col justify-start items-start gap-5'>
                    <h1 className='text-white font-semibold'>Join the community</h1>
                    <p className='text-gray-400'>2,000+ Students Globally - Connect & Say Hello!</p>
                    <div className='w-full flex justify-between items-center gap-1'>
                        <input
                            type="text"
                            id='email'
                            name='email'
                            placeholder='Email Address'
                            className='bg-gray-800 text-gray-400 text-sm py-3 px-5 rounded-full w-full'
                        />
                        <button
                            className='bg-[#F86537] rounded-full p-3'
                        >
                            <Image
                                src={SendIcon}
                                alt='send'
                                width={15}
                                height={15}
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-[80%] flex flex-col md:flex-row justify-between items-center gap-5'>
                <Image
                    src={InvertedLogo}
                    alt="inverted_logo"
                    width={150}
                    height={150}
                />
                <div className='flex justify-end items-center gap-2'>
                    <div className='bg-gray-800 w-10 h-10 flex justify-center items-center rounded-full'>
                        <Image
                            src={FacebookIcon}
                            alt="inverted_logo"
                            width={8}
                            height={8}
                        />
                    </div>
                    <div className='bg-gray-800 w-10 h-10 flex justify-center items-center rounded-full'>
                        <Image
                            src={XIcon}
                            alt="inverted_logo"
                            width={8}
                            height={8}
                        />
                    </div>
                    <div className='bg-gray-800 w-10 h-10 flex justify-center items-center rounded-full'>
                        <Image
                            src={LinkedInIcon}
                            alt="inverted_logo"
                            width={8}
                            height={8}
                        />
                    </div>
                    <div className='bg-gray-800 w-10 h-10 flex justify-center items-center rounded-full'>
                        <Image
                            src={InstaIcon}
                            alt="inverted_logo"
                            width={8}
                            height={8}
                        />
                    </div>
                </div>
            </div>
            <div className='w-[80%] text-gray-400 flex flex-col md:flex-row justify-between items-center gap-2'>
                <div className='w-full md:w-[60%] flex justify-start items-center gap-2'>
                    <p className='line-clamp-1'>
                        Copyright © 2025 B.R. Collins All Rights Reserved
                    </p>
                    <p className='line-clamp-1'>
                        Terms Of Service
                    </p>
                    <p className='line-clamp-1'>
                        Privacy policy
                    </p>
                </div>
                <p className='w-full md:w-[40%] text-center  md:text-end'>
                    Design and Developed by <span className='underline'>Agency Partner Interactive</span>
                </p>
            </div>
        </div>
    )
}

export default Footer;
