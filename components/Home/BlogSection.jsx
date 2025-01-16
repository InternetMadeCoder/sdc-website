import React from 'react'
import Card from '../ui/Card'
import { blogPosts } from '@/components/Blogs/blogsData'
import Button from '../ui/Button'

const BlogSection = () => {
    return (
        <div className="py-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 flex flex-col items-start gap-16 white-section relative z-30 bg-white md:items-center">
            <h2 className="text-4xl">BLOGS</h2>
            <div className="grid items-start gap-8 grid-cols-1 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((blog) => (
                    <Card image={blog.image} key={blog.id} title={blog.title} description={blog.description} link={blog.link} date={blog.date} />
                ))}
            </div>
            <Button className="bg-yellow-400" link="/blogs" title="Explore More Blogs" />
        </div>
    )
}

export default BlogSection