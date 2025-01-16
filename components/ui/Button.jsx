import Link from "next/link"

const Button = ({ title, className, link, type }) => {
    return (
        <Link href={link}>
            <button className={`px-10 py-2 bg-white text-black text-sm font-semibold lg:py-3 lg:px-12 lg:text-lg ${className}`} type={type}>
                {title}
            </button>
        </Link>
    )
}

export default Button