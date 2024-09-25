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
        title:'Startups',
        description:"Giving you advice on creating a lasting impact on your community and showing leadership in your application",
        icon:<IoMdSettings />
    },
    {
        title:'Internships',
        description:"Showing interest in your desired major, and creating a spike",
        icon:<PiGlobeSimple />

    },
    {
        title:'Research',
        description:"Furthering knowledge in your specific field and showing your dedication to the major you plan to pursue",
        icon:<GoGraph />
    },
    {
        title:'Essays',
        description:"Revealing your personality through your writing, and how you can appeal to admissions officers",
        icon:<GoPeople />
    }

]
