import { about } from "@/constants"
import { ReactNode } from "react"


type AboutCardProps = {
    description:string,
    title:string,
    icon:ReactNode
}

function AboutCard({description,icon,title}:AboutCardProps) {
    return (
        <div className='w-full h-full rounded-xl border-zinc-300/80 border-2 p-3 flex flex-col'>
            <div className='mb-3 text-2xl'>{icon}</div>
            <h6 className='text-xl font-bold mb-2'>{title}</h6>
            <p className='font-medium text-slate-500/80 '>{description}</p>
        </div>
    )
}



function WhyUs() {
    const text1 = "We're more than just a college admissions blog. We're here to help you succeed in high school, college, and beyond."

    return (
        <div className='container'>
            <div className="mt-11 mb-10">
                <h3 className='text-4xl font-black mb-4 text-main-black'>Why AppAdmit?</h3>
                <p className='w-3/4 text-main-black text-lg font-semibold '>{text1}</p>
            </div>
            <div className="w-full mb-16 grid gap-4 grid-cols-[repeat(auto-fit,minmax(170px,1fr))]">
                {
                    about.map((curr,idx) => <AboutCard {...curr} key={idx}/>)
                }
            </div>
          
        </div>
    )
}

export default WhyUs