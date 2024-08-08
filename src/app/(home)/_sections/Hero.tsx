import Link from 'next/link'
import React from 'react'

function Hero() {
    const text1 = "Find the perfect research and internship opportunities"
    const text2 = "We help you find the best research and internship opportunities, and give you the tools to stand out in the application process."
    const text3 = "ResearchConnect helps students find the best research and internship opportunities, and gives them the tools to stand out in the application process. Here's how it works:"
    return (
        <div className='container'>
            <div className="relative flex items-end overflow-hidden pl-12 pb-6 pr-6 rounded-xl h-[480px]">
                <img
                    src="/images/home1.png" 
                    alt="img" 
                    className='w-full absolute top-0 left-0 block h-full'
                />
                <div className="relative z-20">
                    <h3 className='text-5xl font-extrabold font-lexend text-white'>{text1}</h3>
                    <p className='font-lexend text-white mt-2'>{text2}</p>
                    <Link className='main_blue_button mt-8' href='/get-started'>
                        Get Started
                    </Link>
                </div>
            </div>

            <div className="mt-11">
                <h3 className='text-4xl font-extrabold mb-4 text-main-black'>How it works</h3>
                <p className='w-3/4 text-main-black text-lg font-semibold mb-6'>{text3}</p>
                <Link className='main_blue_button mt-6' href='/learn-more'>
                    Learn More
                </Link>
           </div>
        </div>
    )
}

export default Hero