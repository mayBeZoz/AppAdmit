import React from 'react'

type FeatureCard = {
    imageURL:string,
    title:string,
    author:string
}

const Card = ({author,imageURL,title}:FeatureCard) => {
    return (
        <div className='w-full'>
            <img 
                src={imageURL} 
                alt={title+'image'}
                className='w-full h-[200px] object-cover rounded-xl bg-black'
            />
            <h6 className="w-5/6 mt-2 font-lexend font-medium truncate">{title}</h6>
            <p className='text-sm font-medium mt-1 text-slate-500'>By {author}</p>
        </div>
    )
}

function Features() {
    const features:FeatureCard[] = [
        {
            imageURL:'https://www.thoughtco.com/thmb/i5-UM-aomWshSVymZeSS3faVaPM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/group-of-students-studying-together-in-reading-room-925118050-5c8458b346e0fb00014319a0.jpg',
            title:"what's a good SAT score? a guide to a new SAT",
            author:"collageVine"
        },
        {
            imageURL:'https://scientific-publishing.webshop.elsevier.com/wp-content/uploads/2022/08/what-background-study-how-to-write-1200x900.jpg',
            title:"SAT vs ACT, which test is flight for you",
            author:"collageVine"
        },
  
    ]
    return (
        <div className='mt-4 container'>
            <h3 className='text-xl font-bold font-lexend mb-4'>Features</h3>
            <div className='w-full grid gap-3 grid-cols-[repeat(auto-fit,minmax(350px,1fr))]'>
                {
                    features.map((curr,idx) => (
                        <Card key={idx} {...curr}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Features