"use client"

import { useState } from "react"
import { HiOutlineMailOpen } from "react-icons/hi"

type TInputProps = {
    email:string,
    setEmail:(val:string) => void
}

const Input = ({ email, setEmail }:TInputProps) => {
    return (
        <div className="w-[230px] flex items-center px-4 bg-slate-200 rounded-full gap-3 p-2">
            <div className="w-[30px]">
                <HiOutlineMailOpen className="text-black/30 block whitespace-nowrap text-3xl" />
            </div>

            <input
                value={email}
                className="bg-transparent w-full font-lexend placeholder:text-lg text-xl"
                onChange={(e) => setEmail(e.target.value)} 
                type="text" 
                placeholder="Your Email"
            />
        </div>
    )
}

function UpperFooter() {
    const [email,setEmail] = useState<string>("")

    return (
        <div className='py-20 bg-gradient-to-tr from-blue-700 to-cyan-400'>
            <div className="container flex justify-center items-center">
                <div className="bg-white w-full sm:w-[500px] rounded-3xl">
                    
                    <div className='w-full h-[150px] flex items-center justify-center relative mt-11'>
                        <img 
                            src="/images/illustration-email.webp" 
                            alt="email img" 
                            className='w-full absolute top-0 left-0 h-full object-cover'
                        />
                        <img 
                            src="/images/email-icon.jpg" 
                            alt="email icon" 
                            className='h-[120px] relative z-10 [backdrop-filter:shadow(100px)] object-contain' 
                        />
                    </div>

                    <div className='mt-4 mb-6'>
                        <h6 className='uppercase text-2xl text-black/80 font-lexend font-semibold text-center'>Subscribe</h6>
                        <p className='font-medium font-lexend text-center mt-1 text-black/40'>Subscribe to our newsletter & stay updated</p>
                    </div>

                    <div className='flex mb-10 justify-center items-center gap-4'>
                        <Input email={email} setEmail={setEmail}/>
                        <button className="px-7 py-3 rounded-full text-white text-sm font-lexend font-medium from-blue-700 bg-gradient-to-tr to-cyan-400">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpperFooter