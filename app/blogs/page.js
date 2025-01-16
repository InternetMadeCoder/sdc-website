import AllBlogsGrid from "@/components/Blogs/AllBlogsGrid";

export default function Blogs() {
    return (
        <div className=''>
            <div className='bg-[url(/bg/blogs-bg.webp)] bg-cover h-screen text-white flex flex-col justify-center gap-8 md:gap-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28'>
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>BLOGS</h1>
                <p className='text-base md:text-xl lg:text-2xl lg:w-3/4'>
                    Explore our diverse collection of insightful blogs where we share knowledge, tips, and the latest trends in our field. Stay informed, inspired, and connected with our community.
                </p>
            </div>
            <div className='white-section'>
                <div className='flex flex-col gap-6 md:gap-8 px-4 py-16 sm:px-6 md:px-12 lg:px-20 xl:px-28 xl:py-20'>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-8'>Explore Our Blogs</h2>
                    <AllBlogsGrid />
                </div>
                <div className='py-4' /> 
            </div>
        </div>
    );
}
