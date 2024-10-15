import articles from "@/data/articles.json" 
import Link from "next/link"


type TPostCardProps = {
    imageURL:string,
    title:string,
    description:string,
    id:string
}

const PostCard = ({description,imageURL,title,id}:TPostCardProps) => {
    return (
        <Link href={`/blog/articles/${id}`} className='w-full duration-200 hover:bg-zinc-200 p-2 rounded-lg hover:scale-105'>
            <img 
                src={imageURL} 
                alt={title+' image'}
                className='w-full h-[150px] object-cover rounded-xl  bg-black'
            />
            <h6 className="w-5/6 mt-2 text-sm capitalize font-lexend font-medium ">{title}</h6>
        </Link>
    )
}

function RecentPosts() {
    
    const posts = articles.slice(0,3)
    return (
        <section className='mb-20'>
            <div className="container">
                <h3 className='text-4xl font-black mb-8 text-main-black'>Recent Posts</h3>
                <div className="w-full grid gap-3 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
                    {
                        posts.map(post => (
                            <PostCard 
                                key={post.id} 
                                imageURL={post.imageURL} 
                                title={post.heading} 
                                description={post.description}
                                id={post.id}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default RecentPosts