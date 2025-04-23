"use client"
import React from 'react'
import { useUser } from '../../context/index';
import Cart from '../Cart/Cart';
import Image from "next/image";
import Link from 'next/link';
import CrossIcon from '../../public/cross.svg';
import CartIcon from '../../public/cart.svg';
import Logo from '../../public/logo.svg';
import SearchIcon from '../../public/search.svg';

const Navbar = () => {
    const { cart, setCart, promotion, setPromotion, items } = useUser();

    const links = ['Subscriptions', 'About', 'Contact Us'];

    return (
        <div className='w-full flex flex-col justify-start items-center'>
            {/* Cart  */}
            <div className={`fixed z-50 top-0 right-0 w-full h-full transform transition-transform duration-300 ease-in-out ${cart ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                <Cart />
            </div>

            {promotion && (
                <div className="relative w-full bg-[#1176C1] flex items-center p-2 text-xs md:text-md">

                    <div className="w-full flex flex-col md:flex-row justify-center items-center text-white md:gap-1 gap-1 text-center md:text-left">
                        <span className="font-bold">
                            Courses from $149.00
                        </span>
                        <span>
                            Gain the skills to climb that career ladder.
                        </span>
                        <span className="text-[#FFCA7E]">
                            3 days left!
                        </span>
                    </div>

                    <div
                        onClick={() => {
                            setPromotion(false);
                        }}
                        className={`absolute right-[1%] md:right-[5%] w-[15%] flex justify-center items-center hover:cursor-pointer hover:scale-95 transform transition-transform duration-300 ease-in-out ${promotion ? 'translate-y-0' : 'translate-y-full'}`}>
                        <Image
                            src={CrossIcon}
                            alt='cross_icon'
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
            )}

            <div className="w-[80%] flex justify-between items-center p-5 gap-5">
                <Link href={'/'} onClick={() => setCart(false)} className="hover:cursor-pointer flex justify-start items-center">
                    <Image
                        src={Logo}
                        alt="logo"
                        width={150}
                        height={150}
                    />
                </Link>

                <div className="hidden w-[40%] lg:flex justify-center items-center gap-5">
                    <div className="relative w-[70%] flex justify-center items-center">
                        <input
                            type="text"
                            id="search"
                            name="search"
                            placeholder="Search for any thing"
                            className="p-2 rounded-full border border-[#D9E2E6] text-[#AEB5B9] outline-0 w-full px-10"
                        />
                        <Image
                            src={SearchIcon}
                            alt='search_icon'
                            width={20}
                            height={20}
                            className="absolute left-4 z-10"
                        />
                    </div>
                    <div className="relative border border-[#F86537] p-2 rounded-full w-[30%] flex justify-center items-center">
                        <select id="course" name="course" className="w-[80%] outline-0 text-[#F86537]">
                            <option>Courses</option>
                        </select>
                    </div>
                </div>

                <div className="hidden w-[25%] lg:flex justify-center items-center gap-6">
                    {links.map((l, i) => {
                        return (
                            <div key={i} className="hover:cursor-pointer hover:scale-105 transition-all duration-300">
                                {l}
                            </div>
                        )
                    })}
                </div>

                <div className="flex justify-center items-center gap-5">
                    <button
                        onClick={() => {
                            setCart(true);
                        }}
                        className="relative py-2 px-5 border-[#D9E2E6] text-[#AEB5B9] hover:cursor-pointer hover:scale-105 transition-all duration-300"
                    >
                        <Image
                            src={CartIcon}
                            alt="cart_icon"
                            width={25}
                            height={25}
                        />
                        <div className="absolute top-0 right-0 text-xs py-1 px-2 rounded-full bg-blue-200 flex justify-center items-center text-black">
                            {items.length}
                        </div>
                    </button>

                    <button className="hidden md:flex border-2 py-2 px-5 rounded-full border-[#D9E2E6] text-[#AEB5B9] hover:cursor-pointer hover:scale-105 transition-all duration-300">
                        Login
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Navbar;
