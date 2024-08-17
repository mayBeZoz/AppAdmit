import { GoGraph, GoPeople } from "react-icons/go"
import { IoMdSettings } from "react-icons/io"
import { PiGlobeSimple } from "react-icons/pi"

export const navLinks = [
    // {
    //     name:"For Students",
    //     href:"/students",
    // },
    // {
    //     name:"For Educators",
    //     href:"/educators",
    // },
    // {
    //     name:"For Employers",
    //     href:"/employers",
    // },
    {
        name:"Blog",
        href:"/blog",
    },
    // {
    //     name:"Resources",
    //     href:"/resources",
    // },
]



export const services = [
    {
        title:'Services',
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloribus.",
        icon:<IoMdSettings />
    },
    {
        title:'Internships',
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloribus.",
        icon:<PiGlobeSimple />

    },
    {
        title:'Consulting',
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloribus.",
        icon:<GoGraph />
    },
    {
        title:'Training',
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloribus.",
        icon:<GoPeople />
    }

]
