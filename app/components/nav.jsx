import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const nav = () => {
    return (
        <>
            <div className='fixed nav-shadow h-[3.5rem] sm:w-[97%] w-11/12 bg-slate-200 flex justify-center '>
                <Link href={"/"}>
                <h1 className='nav-logo'>
                    Newsदेखो
                </h1>
                </Link>
            </div>
            <div className='h-[2rem] max-lg:hidden'>
                <div className='cat text-2xl flex space-x-4  mt-[4rem] fixed'>
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
        </>
    )
}

export default nav

