import { FaRegHeart, FaUsers } from "react-icons/fa"
import { GoGraph, GoPeople } from "react-icons/go"
import { IoMdSettings } from "react-icons/io"
import { IoCompassOutline, IoPeople } from "react-icons/io5"
import { LuKeyRound } from "react-icons/lu"
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


export const about = [
    {
        title:'Find Your Path',
        description:"Explore careers and majors, find schools that fit you, and get personalized guidance.",
        icon:<IoCompassOutline />
    },
    {
        title:'Get Expert Advice',
        description:"Learn from students who've been through it, plus professional counselors and experts.",
        icon:<FaUsers />
    },
    {
        title:'Discover New Interests',
        description:"Read about life at different colleges, try new activities, and get inspired by student stories.",
        icon:<FaRegHeart />
    },
    {
        title:'Connect with Others',
        description:"Find friends, mentors, and study buddies to help you through the process.",
        icon:<IoPeople />
    },
    {
        title:'Unlock Your Potential',
        description:"Develop your academic skills, build leadership experience, and become a well-rounded college applicant.",
        icon:<LuKeyRound />
    },
]