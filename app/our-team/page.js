import Expert from "@/components/OurTeam/Expert";
import Faculty from "@/components/OurTeam/Faculty";
import Students from "@/components/OurTeam/Students";

const heroText = "Welcome to the vibrant history and legacy of our esteemed Software Development Centre! This page serves as a digital chronicle, capturing the essence of our journey, milestones, and the remarkable individuals who have contributed to our club's growth. As we celebrate our past, we also look forward to the future, ensuring that the legacy of innovation and collaboration endures for generations to come."

const aboutText = "Discover the heart and soul of our organization! Each member of our team brings a unique blend of expertise, passion, and dedication to the table. From seasoned developers to creative designers and strategic project managers, we are united by a shared commitment to excellence and innovation. Get to know the faces driving our success, and join us on our journey of continuous growth and achievement."

export default function OurTeam() {
    return (
        <div className=''>
            <div className='bg-[url(/bg/our-team-bg.webp)] bg-cover h-screen text-white flex flex-col justify-center gap-8 lg:gap-16 px-4 xl:px-48 lg:px-48 md:px-32 sm:pr-8 sm:pl-32'>
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>OUR TEAM</h1>
                <p className='text-base lg:text-xl lg:w-3/4'>{heroText}</p>
            </div>
            <div className="white-section">
                <div className='flex flex-col gap-12 px-4 py-10  sm:px-6 md:px-12 lg:px-20 xl:px-20 xl:py-28 white-section'>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center'>Meet Our People</h2>
                    <p className='text-base text-justify lg:text-xl'>{aboutText}</p>
                </div>

                <div className="flex flex-col gap-16 mb-8 md:mb-12 lg:mb-16">
                    <Students />
                    {/* <Expert /> */}
                    <Faculty />
                </div>
            </div>

        </div>
    );
}
