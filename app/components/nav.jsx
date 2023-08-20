"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect,useState } from 'react'
import { auth_toggleAction } from '../redux/reducer'
export const nav = () => {
    // GiHamburgerMenu
      
    return (
        <div>
            <div className='fixed nav-shadow h-[3.5rem] sm:w-[97%] w-11/12 text-stone-900 bg-blue-300 flex justify-center '>
                <Link href={"/"}>
                    <h1 className='nav-logo'>
                        Newsदेखो
                    </h1>
                </Link>
            </div>
            <div className='h-[2rem] max-lg:hidden'>
                <div className=' cat text-2xl flex justify-center shadow-lg shadow-gray-950 space-x-4 mt-[4rem] fixed bg-blue-300  h-[2rem] sm:w-[97%] w-11/12'>
                    <Link href={"/"}>
                        <h1 className='hover:text-3xl'>Trending</h1>
                    </Link>
                    <Link href={"/business"}>
                        <h1 className='hover:text-3xl'>Business</h1>
                    </Link>
                    <Link href={"/entertainment"}>
                        <h1 className='hover:text-3xl'>Entertainment</h1>
                    </Link>
                    <Link href={"/health"}>
                        <h1 className='hover:text-3xl'>Health</h1>
                    </Link>
                    <Link href={"/sports"}>
                        <h1 className='hover:text-3xl'>Sports</h1>
                    </Link>
                    <Link href={"/technology"}>
                        <h1 className='hover:text-3xl'>Technology</h1>
                    </Link>

                    
                </div>
            </div>

            <div className='h-[2rem] lg:hidden'>
                <div className='cat text-2xl flex space-x-4 justify-center mt-[4rem] fixed '>
                    <div>
                        <Link href={"/"}>
                            <h1 className='hover:text-3xl'>Trending</h1>
                        </Link>
                        <Link href={"/business"}>
                            <h1 className='hover:text-3xl'>Business</h1>
                        </Link>
                        <Link href={"/entertainment"}>
                            <h1 className='hover:text-3xl'>Entertainment</h1>
                        </Link>
                    </div>
                    <div>
                        <Link href={"/health"}>
                            <h1 className='hover:text-3xl'>Health</h1>
                        </Link>
                        <Link href={"/sports"}>
                            <h1 className='hover:text-3xl'>Sports</h1>
                        </Link>
                        <Link href={"/technology"}>
                            <h1 className='hover:text-3xl'>Technology</h1>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default nav

