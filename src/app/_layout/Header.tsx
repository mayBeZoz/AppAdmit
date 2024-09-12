import { navLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link href='/'>
            <h1 className='text-2xl font-black'>AppAdmit</h1>
        </Link>
    )
}

const Nav = () => {
    return (
        <div className="flex items-center gap-6">
            <ul className='flex gap-9'>
                {
                    navLinks.map((link,idx) => (
                        <li key={idx}>
                            <Link 
                                className='font-semibold hover:text-zinc-500 duration-100 text-sm lg:text-lg font-lexend' 
                                href={link.href}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
 
        </div>
    )
}

function Header() {
    return (
        <header className=' mb-10'>
            <div className="h-[65px] gap-10 mx-auto justify-between px-10 max-w-[1280px] w-full flex items-center">
                <Logo/>
                <Nav/>
            </div>
        </header>
    )
}

export default Header