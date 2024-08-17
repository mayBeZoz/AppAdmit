import Link from 'next/link'
import React from 'react'

function Hero() {
    const text1 = "Find the perfect research and internship opportunities"
    const text2 = "We help you find the best research and internship opportunities, and give you the tools to stand out in the application process."

    return (
        <div className='container'>
            <div className="relative flex items-end overflow-hidden pb-6 pr-6 rounded-xl h-[480px] =pl-12">
                <img
                    src="/images/office.jpg" 
                    alt="img" 
                    className='w-full absolute top-0 left-0 block h-full'
                />
                <div className="relative h-full flex items-center z-20">
                    <h3 className='text-5xl mt-20 font-extrabold text-center font-lexend text-white'>{text1}</h3>
                    {/* <p className='font-lexend text-white mt-2'>{text2}</p>
                    
                    <Link className='main_blue_button mt-8' href='/get-started'>
                        Get Started
                    </Link> */}
                </div>
            </div>

            
        </div>
    )
}

export default Hero