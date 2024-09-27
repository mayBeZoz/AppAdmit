'use client'

import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { useDebounce } from 'use-debounce'
import articles from "../../../data/articles.json"
import Link from 'next/link'

const ArticlesSearchInput = () => {

    const [value,setValue] = useState<string>('')
    const [debounceSearchInput] = useDebounce(value,1000)
    const [filteredArticles,SetFilteredArticles] = useState<TArticle[]>([])
    const [isFocus,setIsFocus] = useState<boolean>(false)

    useEffect(()=>{
        setValue(value)
    },[debounceSearchInput])

    useEffect(()=>{
        const res = articles.filter(article => article.heading.toLowerCase().includes(value.toLowerCase()))
        if (res.length) {
            SetFilteredArticles(res)  
        }else {
            SetFilteredArticles([])  
        }
    },[value])

    return (
        <div className='relative'>
            <div className="w-full h-[60px] mt-5 flex justify-between p-2 bg-white rounded-xl">
                <div className="flex-1 items-center ml-2 flex gap-2">
                    <IoSearchOutline className='text-zinc-500 text-2xl'/>
                    <input 
                        type="text" 
                        onFocus={() => setIsFocus(true)}
                        value={value} 
                        placeholder='Search article' 
                        className='flex-1 font-lexend text-lg h-full w-[100px]'
                        onChange={(e) => {
                            setValue(e.target.value)
                        }}
                    />
                </div>
                <button className="main_blue_button ml-2 h-full">Search</button>
            </div>
            {
                isFocus && (
                    <div 
                        className="absolute bg-white rounded-lg shadow-lg left-0 w-full bg-red p-4 top-20"
                        onMouseLeave={() => setIsFocus(false)}
                    >
                        <div className='flex flex-col'>
                            {       
                                filteredArticles.map((article,idx) => (
                                    <Link 
                                        key={idx} 
                                        className='w-full font-medium text-lg p-2 truncate rounded-lg hover:bg-zinc-200' 
                                        href={`/blog/articles/${article.id}`}
                                    >{article.heading}</Link>
                                ))
                            }
                            {
                                filteredArticles.length === 0 && (
                                    <p className='text-center font-medium text-gray-500'>No results found</p>
                                )
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

function Hero() {
    const heading = 'College Admissions'
    const text = 'an insight and advice from students and experts'
    return (
        <div className='container'>
            <div className="relative flex items-end pl-12 pb-6 pr-6  h-[480px]">
                <img
                    src="/images/blog1.jpg" 
                    alt="img" 
                    className='w-full absolute rounded-xl object-cover top-0 left-0 block h-full'
                />
                <div className="relative z-20">
                    <div>
                        <h1 className='text-5xl font-lexend text-white font-black mb-2'>{heading}</h1>
                        <p className='text-white font-lexend font-light'>{text}</p>
                    </div>
                    <ArticlesSearchInput/>
                </div>
            </div>
        </div>
    )
}

export default Hero