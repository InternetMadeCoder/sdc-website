import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaRegCopyright } from "react-icons/fa";
// Remove unused icon imports
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaFacebookSquare } from "react-icons/fa";
import { LINKS_1, LINKS_2, LINKS_3 } from "./constants";

const year = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="bg-[#2B2B2B] text-white px-4 py-6 text-sm lg:text-base relative z-30 white-section font-poppins">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-b-2 pb-4">
                <div className="col-span-2 sm:col-span-3 lg:col-span-1 flex items-center mb-4">
                    <Link href="/" className="font-bold text-3xl">
                        <Image src={'/logo/sdc-logo-white.png'} width={60} height={60} alt="SDC" className="w-24" />
                    </Link>
                </div>
                <ul className="flex flex-col lg:items-start gap-2">
                    {LINKS_1.map((link) => (
                        <li key={link.key}>
                            <Link href={link.href} className="hover:underline">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className="flex flex-col lg:items-start gap-2">
                    {LINKS_2.map((link) => (
                        <li key={link.key}>
                            <Link href={link.href} className="hover:underline">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex flex-col mt-4 lg:mt-0 lg:items-start">
                    <span className="text-lg font-bold">Socials</span>
                    <div className="flex gap-2 mt-1">
                        <Link href={"https://www.linkedin.com/in/software-development-centre-cse-department-manipal-university-jaipur-419007326/"}>
                            <FaLinkedin className="w-6 h-6" />
                        </Link>
                        {/* Remove Twitter and Facebook links */}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 mt-4 text-xs gap-2 lg:items-center">
                <div className="flex gap-1 items-center">
                    <span>2025</span>
                    <FaRegCopyright />
                    <span>All rights reserved.</span>
                </div>
                <div className="text-right">
                    <span>SDC - Manipal University Jaipur</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;