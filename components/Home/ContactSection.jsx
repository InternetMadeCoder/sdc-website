import React from 'react'
import Button from '../ui/Button'

const ContactSection = () => {
    return (
        <div className="py-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 bg-white flex flex-col items-start gap-4 relative z-30 md:items-center white-section">
            <h2 className="text-4xl">CONTACT US</h2>
            <p className="font-medium text-lg">Connect with us for inquiries or collaboration</p>
            <Button className="bg-yellow-400 mt-4" link="/contact-us" title="Read More" />
        </div>
    )
}

export default ContactSection