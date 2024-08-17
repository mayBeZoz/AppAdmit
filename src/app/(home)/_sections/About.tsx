import { services } from '@/constants'
import React, { ReactNode } from 'react'

type ServiceCardProps = {
    description:string,
    title:string,
    icon:ReactNode
}

function ServiceCard({description,icon,title}:ServiceCardProps) {
    return (
        <div className='w-full h-full rounded-xl border-zinc-300/80 border-2 p-3 flex flex-col justify-between'>
            <div className='mb-2 text-2xl'>{icon}</div>
            <h6 className='text-xl font-bold mb-1'>{title}</h6>
            <p className='font-medium text-slate-500/80 '>{description}</p>
        </div>
    )
}

function About() {
    const text1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iure voluptate beatae, quis voluptatibus distinctio reprehenderit temporibus ea excepturi eius?"
    return (
        <div className='container'>
            <div className="mt-11 mb-10">
                <h3 className='text-4xl font-black md:w-4/5 mb-4 text-main-black'>We {"'ve"} helped some of the {"world's"} leading companies built better software</h3>
                <p className='w-3/4 text-main-black text-lg font-semibold '>{text1}</p>
            </div>
            <div className="w-full mb-16 grid gap-4 grid-cols-[repeat(auto-fit,minmax(230px,1fr))]">
                {
                    services.map((curr,idx) => <ServiceCard {...curr} key={idx}/>)
                }
            </div>
            
        </div>
    )
}

export default About