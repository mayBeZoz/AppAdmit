import Link from 'next/link'
import React from 'react'

function Hero() {
    const text1 = "The #1 Guide to College Admissions"

    return (
        <div className='container'>
            <div className="relative flex items-end overflow-hidden pb-6 pr-6 rounded-xl h-[480px] p-16">
                <img
                    src="/images/home1.jpg" 
                    alt="img" 
                    className='w-full object-cover absolute top-0 left-0 block h-full'
                />
                <div className="relative h-full flex items-center z-20">
                    <h3 className='text-5xl mt-20 font-extrabold text-center font-lexend text-white'>{text1}</h3>
                </div>
            </div>
        </div>
    )
}

export default Hero