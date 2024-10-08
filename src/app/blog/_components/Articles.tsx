import React from 'react'
import articles from '../../../data/articles.json'
import Link from 'next/link'

type ArticleCard = {
    imageURL:string,
    heading:string,
    id:string
}
const ArticleCard = ({imageURL,heading,id}:ArticleCard) => {
    return (
        <Link href={`/blog/articles/${id}`} className='w-full duration-200 hover:bg-zinc-200 p-2 rounded-lg hover:scale-105'>
            <img 
                src={imageURL} 
                alt={heading+'image'}
                className='w-full h-[150px] object-cover rounded-xl  bg-black'
            />
            <h6 className="w-5/6 mt-2 text-sm capitalize font-lexend font-medium ">{heading}</h6>
        </Link>
    )
}

function Articles() {
    
    return (           
        <div className='my-10 container'>
            <h3 className='text-xl font-bold font-lexend mb-4'>Popular Articles</h3>
            <div className='w-full grid gap-3 grid-cols-[repeat(auto-fit,300px)] justify-center'>
                {
                    articles.map((curr,idx) => (
                        <ArticleCard imageURL={curr.imageURL} id={curr.id} heading={curr.heading} key={idx}/>
                    ))
                }
            </div>
        </div>
       
    )
}

export default Articles