import React, { useEffect, useState } from 'react';
import { useUser } from '../../context/index';
import CartIcon from '../../public/cart.svg';
import TrashIcon from '../../public/trash.svg';
import CrossIcon from '../../public/cross.svg';

import Image from 'next/image';

const Cart = () => {

  const { items, handleRemoveItem, setCart } = useUser();

  return (
    <div className='w-full min-h-screen flex justify-end items-center relative'>
      <div className='absolute inset-0 bg-[#0A141980]/50 backdrop-brightness-50 z-0 backdrop-blur-[2px] w-full h-full'></div>

      <div className='relative z-10 w-full md:w-[90%] lg:w-[40%] h-screen flex flex-col justify-start items-start p-10 md:p-20 bg-white gap-3'>

        <div className='w-full h-[5vh] flex justify-between items-center'>
          <h1 className='text-2xl md:text-3xl font-bold line-clamp-1'>Your Shopping Cart</h1>
          <button
            className='hover:cursor-pointer hover:scale-105 duration-300 transition-all'
            onClick={() => {
              setCart(false)
            }}
          >
            <Image
              src={CrossIcon}
              alt="cross_icon"
              width={30}
              height={30}
            />
          </button>
        </div>

        <div className='w-full h-[2vh] flex justify-start items-center gap-1 text-sm md:text-md'>
          <span className='text-blue-500'>{`(${items.length})`}</span> Courses in Cart
        </div>

        <div className='w-full h-[74vh] flex flex-col justify-start items-center-start gap-5 py-5'>
          {items.map((items, index) => {
            return (
              <div key={index} className='w-full flex justify-center items-center'>
                <div className='w-[25%] h-full'>
                  <Image
                    src={items.imageUrl}
                    alt='item_pic'
                    width={100}
                    height={100}
                  />
                </div>
                <div className='w-[60%] h-full pl-2 flex flex-col justify-start items-start gap-[1px]'>
                  <h2 className='text-xs md:text-md font-bold line-clamp-2'>{items.title}</h2>
                  <p className='text-xs md:text-md text-gray-400'>by: <span className='text-blue-400'>{items.by}</span></p>
                  <p className='font-semibold text-xs md:text-md'>${items.discountedPrice}.00 <span className='text-gray-400'>{items.originalPrice}.00</span></p>
                </div>
                <div
                  onClick={() => {
                    handleRemoveItem(index)
                  }}
                  className='w-[15%] h-full flex justify-center items-center'>
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

        <div className='w-full h-[20vh] flex flex-col justify-center items-center'>
          <div className='w-full h-1/2 flex justify-between items-center'>
            <h2 className='font-bold text-sm md:text-md'>Subtotal:</h2>
            <h1 className='font-bold text-lg'>$298.00</h1>
          </div>
          <hr className='w-[90%] text-gray-300' />
          <div className='w-full h-1/2 flex justify-between items-center gap-2 mt-4'>
            <button className='w-1/2 p-2 rounded-full border border-gray-400 text-gray-800 text-sm md:text-md line-clamp-1'>
              View Cart
            </button>
            <button className='w-1/2 p-2 rounded-full border border-[#F86537] bg-[#F86537] text-sm md:text-md line-clamp-1 text-white'>
              {`Proceed to checkout ->`}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;
