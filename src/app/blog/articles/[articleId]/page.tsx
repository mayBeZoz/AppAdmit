import React from 'react'
import articles from '../../../../data/articles.json'

type ArticlePageProps = {
    params:{
        articleId:string
    }
}

function ArticlePage({params}:ArticlePageProps) {
    const article = articles.find(article => article.id === params.articleId)
    console.log(article)
    return (
        <div className='container mt-20'>
            <h2 className='text-5xl md:text-6xl font-lexend capitalize text-center font-extrabold'>{article?.heading}</h2>

            {
                article?.imageURL && <div className='my-10 w-full h-[500px]'>
                    <img src={article.imageURL} alt="article image" className='w-full h-full object-cover rounded-lg' />
                </div>
            }
            <div className='mb-32 md:w-3/4'>
                <h3 className='text-2xl mb-16 first-letter:text-8xl first-letter:mr-2 first-letter:uppercase font-serif font-bold'>{article?.mainSection.heading}</h3>
                <ul className="flex flex-col gap-8">
                    {
                        article?.mainSection.texts.map((txt,idx) => <li key={idx} className='font-serif text-xl'>
                            <p>{txt}</p>
                        </li>)
                    }
                </ul>
            </div>

            <div className='flex flex-col gap-10 md:w-3/4'>
                {
                    article?.sections.map((section,idx) => (
                        <div key={idx}>
                            <h4 className='text-4xl font-bold capitalize font-lexend'>{section.heading}</h4>
                            <ul className='mt-8 flex flex-col gap-8'>
                                {
                                    section.texts.map((txt,idx) => (
                                        <li className='font-serif text-xl' key={idx}>
                                            <p>{txt}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ArticlePage