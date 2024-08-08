import React from 'react'
import articles from '../../../data/articles.json'
import Link from 'next/link'

type ArticleCard = {
    imageURL:string,
    title:string,
}
const ArticleCard = ({imageURL,author,heading,id,mainSection,sections}:TArticle) => {
    return (
        <Link href={`/blog/articles/${id}`} className='w-full'>
            <img 
                src={imageURL} 
                alt={heading+'image'}
                className='w-full h-[150px] object-cover rounded-xl bg-black'
            />
            <h6 className="w-5/6 mt-2 text-sm capitalize font-lexend font-medium ">{heading}</h6>
        </Link>
    )
}

function Articles() {
    
    return (           
        <div className='mt-10 container'>
            <h3 className='text-xl font-bold font-lexend mb-4'>Popular Articles</h3>
            <div className='w-full grid gap-3 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]'>
                {
                    articles.map((curr:TArticle,idx) => (
                        <ArticleCard {...curr} key={idx}/>
                    ))
                }
            </div>
        </div>
       
    )
}

export default Articles