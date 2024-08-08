import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'

function Hero() {
    const heading = 'College Admissions'
    const text = 'an insight and advice form students and experts'
    return (
        <div className='container'>
            <div className="relative flex items-end overflow-hidden pl-12 pb-6 pr-6 rounded-xl h-[480px]">
                <img
                    src="/images/blog1.jpg" 
                    alt="img" 
                    className='w-full absolute object-cover top-0 left-0 block h-full'
                />
                <div className="relative z-20">
                    <div>
                        <h1 className='text-5xl font-lexend text-white font-black mb-2'>{heading}</h1>
                        <p className='text-white font-lexend font-light'>{text}</p>
                    </div>
                    <div className="w-full h-[60px] mt-5 flex justify-between p-2 bg-white rounded-xl">
                        <div className="flex-1 items-center ml-2 flex gap-2">
                            <IoSearchOutline className='text-zinc-500 text-2xl'/>
                            <input type="text" placeholder='Search article' className='flex-1 font-lexend text-lg h-full w-[100px]'/>
                        </div>
                        <div className="main_blue_button ml-2 !h-full">Search</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero