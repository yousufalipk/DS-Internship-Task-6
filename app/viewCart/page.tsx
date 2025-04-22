"use client"
import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import TrashIcon from '../../public/trash.svg';
import Image from 'next/image';
import { useUser } from '@/context';

const ViewCart = () => {
    const { items, handleRemoveItem } = useUser();

    return (
        <div className='w-full min-h-[100vh] flex flex-col justify-center items-center bg-blue-50'>
            <Navbar />
            <div className='w-[80%] min-h-[70vh] flex flex-col justify-start items-start gap-5'>
                <h2 className='text-sm md:text-md'>
                    {`Home > Courses > Accountablity in the workplace >`} <span className='text-blue-400'>Cart</span>
                </h2>
                <div className='w-full flex flex-col justify-start items-start gap-4'>
                    <h1 className='w-full text-3xl font-bold'>Shopping Cart</h1>
                    <div className='w-full h-[2vh] flex justify-start items-center gap-1 text-sm md:text-md'>
                        <span className='text-blue-500'>{`(${items.length})`}</span> Courses in Cart
                    </div>
                </div>
                <div className='w-full h-full flex flex-col md:flex-row justify-start items-start gap-10 py-5'>
                    <div className='w-full md:w-[70%] h-full flex flex-col justify-center items-center gap-5'>
                        {items.map((items, index) => {
                            return (
                                <div key={index} className='w-full flex justify-center items-center'>
                                    <div className='w-[10%] h-full'>
                                        <Image
                                            src={items.imageUrl}
                                            alt='item_pic'
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                    <div className='w-[80%] h-full pl-2 flex flex-col justify-start items-start gap-[1px]'>
                                        <div className='text-[10px] bg-blue-400 text-white py-[2px] px-1 rounded-md'>
                                            {items.hrs}HRS
                                        </div>
                                        <h2 className='text-xs md:text-md font-bold line-clamp-2'>{items.title}</h2>
                                        <p className='text-xs md:text-md text-gray-400 flex gap-1'>
                                            <Image
                                                src={items.authorPicUrl}
                                                alt='author_pic'
                                                width={15}
                                                height={15}
                                            />
                                            by: <span className='text-blue-400 underline'>{items.by}</span>
                                            | <span>{items.lessons} Lessons</span>
                                            <span className='text-black font-semibold'>
                                                {items.ratings}
                                            </span>
                                        </p>
                                    </div>
                                    <div
                                        onClick={() => {
                                            handleRemoveItem(index)
                                        }}
                                        className='w-[15%] h-full flex flex-col justify-center items-center gap-5'
                                    >
                                        <div className='w-full flex flex-col justify-start items-end'>
                                            <p className='font-semibold text-xs md:text-md text-blue-500'>${items.discountedPrice}.00</p>
                                            <p className='font-semibold text-xs md:text-md'><span className='text-gray-400'>{items.originalPrice}.00</span></p>

                                        </div>
                                        <Image
                                            src={TrashIcon}
                                            alt='trash_icon'
                                            width={20}
                                            height={20}
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='w-full md:w-[30%] min-h-[30vh] flex flex-col justify-center items-center bg-white rounded-lg p-5 md:p-5 gap-2'>
                        <div className='w-full flex justify-between items-center'>
                            <div className='w-1/2 flex justify-start items-start text-blue-500 font-bold'>
                                Total:
                            </div>
                            <div className='w-1/2 flex flex-col justify-end items-end'>
                                <h1 className='text-2xl font-bold'>$298.00</h1>
                                <h1 className='text-xl text-gray-500'>$89.98</h1>
                                <h1 className='text-lg text-gray-600'>Discount 78% off</h1>
                            </div>
                        </div>
                        <hr className='w-[80%] text-gray-300' />
                        <button className='w-full p-2 rounded-full border border-[#F86537] bg-[#F86537] text-sm md:text-md line-clamp-1 text-white'>
                            {`Proceed to checkout ->`}
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ViewCart;
