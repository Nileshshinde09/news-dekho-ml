"use client"
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import Link from 'next/link'
import Image from 'next/image'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect,useState } from 'react'
import { auth_toggleAction } from '../redux/reducer'
export const nav = () => {
    const [hamVisible, setHamVisible] = useState(false)
    const hamhandler=(state)=>{
        setHamVisible(!state)
    }
      
    return (
        <div>
            <div className='fixed nav-shadow max-sm:top-2 h-[3.5rem] sm:w-[97%] w-11/12 text-stone-900 bg-zinc-400 flex justify-center '>
                <Link href={"/"}>
                    <h1 className='nav-logo'>
                        Newsदेखो
                    </h1>
                </Link>
                <div className='absolute right-2 text-2xl hover:text-3xl mt-4 cursor-pointer' onClick={()=>hamhandler(hamVisible)}>
                    <GiHamburgerMenu/>
                </div>
            </div>
            <div className='h-[2rem] max-sm:hidden'>
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

            {/* <div className='h-[2rem] sm:hidden'>
                <div className='cat text-2xl flex space-x-4 justify-center mt-[4rem] fixed'>
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
            </div> */}
            {
                hamVisible?
                <>
                <div className='text-center w-[15rem] h-2/3 rounded-lg bg-gray-950 opacity-80 shadow-xl text-white shadow-slate-950 fixed top-5 right-20 border-[1px] border-black'>
                    <div className='font-bold'>
                    Navigation
                    </div>
                    <hr/>
                    <div className='cat text-xl text-blue-400 flex space-x-2 justify-center mt-[1rem]'>
                    <div>
                        <Link href={"/"}>
                            <h1 className='hover:text-2xl'>Trending</h1>
                        </Link>
                        <Link href={"/business"}>
                            <h1 className='hover:text-2xl'>Business</h1>
                        </Link>
                        <Link href={"/health"}>
                            <h1 className='hover:text-2xl'>Health</h1>
                        </Link>
                        <Link href={"/sports"}>
                            <h1 className='hover:text-2xl'>Sports</h1>
                        </Link>
                        
                        <Link href={"/technology"}>
                            <h1 className='hover:text-2xl'>Technology</h1>
                        </Link>
                        <Link href={"/entertainment"}>
                            <h1 className='hover:text-2xl'>Entertainment</h1>
                        </Link>
                    </div>
                    <div>
                    </div>
                </div>  

                    <div className='font-bold'>
                    Authenticator
                    </div> 
                    <hr/>
                    <div className='cat text-xl text-blue-400 flex space-x-2 justify-center mt-[1rem]'>
                    <div>
                        <Link href={"/authenticator"}>
                            <h1 className='hover:text-2xl'>Authenticate</h1>
                        </Link>
                        <Link href={"/apiprovider"}>
                            <h1 className='hover:text-2xl'>Use API</h1>
                        </Link>
                        
                    </div>
                    <div></div>
                </div>
                <div className='text-4xl text-center'>
                    <BsFillArrowRightCircleFill className='w-10 mx-auto mt-5 text-blue-400' onClick={()=>hamhandler(hamVisible)}/>
                </div>
                </div>
                </>
            
                :
                <></>
            
            }
        </div>
    )
}

export default nav


