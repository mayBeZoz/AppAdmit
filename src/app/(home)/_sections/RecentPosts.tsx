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
        <Link href={`/blog/articles/${id}`} className="w-full h-[300px]">
            <img 
                src={imageURL} 
                alt={title} 
                className="w-full mb-4 h-[170px] object-cover rounded-lg"
            />
            <h5 className="mb-2 font-serif font-medium text-lg">{title}</h5>
            <p className="text-[#4F7396] font-medium font-lexend">{description}</p>
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