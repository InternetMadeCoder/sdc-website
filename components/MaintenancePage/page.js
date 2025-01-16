import Image from 'next/image'
import React from 'react'

const txt = "We're currently performing some maintenance. Please check back soon!"

const MaintenancePage = () => {
    return (
        <html lang="en">
            <body className=''>
                <div className='flex flex-col justify-center items-center gap-16 h-[100vh]'>
                    <Image src={"/logo/sdc-logo-black.png"} width={200} height={200} />
                    <p>{txt}</p>
                </div>
            </body>
        </html>
    )
}

export default MaintenancePage