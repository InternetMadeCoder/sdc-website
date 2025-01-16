import React from 'react'
import Card from '../ui/Card'
import { blogPosts } from '@/components/Blogs/blogsData'

const AllBlogsGrid = () => {
    return (
        <div className='flex justify-center font-manrope'>
            <div className="grid items-start gap-8 grid-cols-1 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((blog) => (
                    <Card image={blog.image} key={blog.id} title={blog.title} link={blog.link} date={blog.date} />
                ))}
            </div>
        </div>
    )
}

export default AllBlogsGrid