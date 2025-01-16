"use client"

import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formErrors = {};

        if (!name) formErrors.name = "Name is required";
        if (!email) {
            formErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = "Email is invalid";
        }
        if (!message) formErrors.message = "Message is required";

        setErrors(formErrors);

        return Object.keys(formErrors).length === 0;
    };

    const [messageSent, setMessageSent] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        emailjs
            .sendForm('service_300pw03', 'template_uav19wd', form.current, {
                publicKey: 'didEHn7X6RkM9mDy4',
            })
            .then(
                () => {
                    // console.log('SUCCESS!');
                    setMessageSent(true);
                    setName('');
                    setEmail('');
                    setMessage('');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="overflow-hidden bg-[#eaeaea] white-section ">
            <div className="bg-[url(/bg/contact-bg.webp)] bg-cover h-[512px] text-white flex flex-col justify-center gap-8 px-4 xl:px-48 lg:px-48 md:px-32 sm:pr-8 sm:pl-32">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Contact Us</h1>
                <p className="text-base md:text-lg lg:text-xl lg:w-3/4">Get In Touch! We’d love to hear from you! If you have any questions or anything to share, feel free to drop us a message.</p>
            </div>
            <div className="bg-[#eaeaea] mx-4 sm:mx-6 md:mx-12 lg:mx-20 xl:mx-28 lg:-mt-32 mb-16">
                <div className="py-8 lg:py-16 px-2 md:px-8 flex flex-col lg:flex-row justify-center items-center gap-16 w-full">
                    <div className="flex flex-col max-w-96 gap-8">
                        <div className="p-4 shadow-xl flex justify-start items-center gap-2">
                            <BiSolidPhoneCall className="w-8 h-8 md:w-16 md:h-16 text-[#D34747]" />
                            <div>
                                <p>Call Us Directly at</p>
                                <span>+91 9897260563</span>
                              
                                <span className="block">Dr.Amit Garg</span>
                            </div>
                        </div>
                        <div className="p-4 shadow-xl flex justify-start items-center gap-2">
                            <IoMdMail className="w-8 h-8 md:w-16 md:h-16 text-[#D34747]" />
                            <div>
                                <p>Mail Us</p>
                                <span>sdc@jaipur.manipal.edu</span>
                                <span className="block">amit.garg@jaipur.manipal.edu</span>
                            </div>
                        </div>
                        <div className="p-4   shadow-xl flex justify-start items-center gap-0 ">
                            <MdLocationOn className="min-w-8 min-h-8 md:min-w-16 md:min-h-16 text-[#D34747]" />
                            <div className="max-w-72">
                                <p>Meet Us At</p>
                                <span className="block font-bold whitespace-nowrap">Software Development Centre(SDC)</span>
                                <span className="text-sm">Computer Science and Engineering Department Manipal University Jaipur, Jaipur-Ajmer Express Highway, Dehmi Kalan, Near GVK Toll Plaza, Jaipur, Rajasthan 303007</span>
                            </div>
                        </div>
                    </div>
                    <div className="px-8 py-16 shadow-2xl flex flex-col gap-4">
                        <h2 className="text-2xl font-bold text-center">Reach Out To Us</h2>
                        <span className="text-sm text-center">If you have any questions or anything to share, feel free to drop us a message.</span>

                        <form className="flex flex-col justify-start gap-4" ref={form} onSubmit={sendEmail}>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="name">Name</label>
                                <input className="border px-2 py-1 focus:outline-none" type="text" id="name" name="from_name" value={name} onChange={(e) => setName(e.target.value)} required />
                                {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="email">Email</label>
                                <input className="border px-2 py-1 focus:outline-none" type="email" id="email" name="from_email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="message">Message</label>
                                <textarea className="border px-2 py-1 focus:outline-none" id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                                {errors.message && <span className="text-red-500 text-xs">{errors.message}</span>}
                            </div>
                            <div>
                                <input className="py-2 px-4 text-white text-sm rounded-lg bg-[#D34747] cursor-pointer hover:bg-[#d98b8b]" type="submit" value="Send Message" />
                            </div>
                            {messageSent && (
                                <div className={`bg-green-100 border-green-300 border-2 rounded-lg px-2 py-1`}>
                                    <span className="text-sm">Message sent successfully.</span>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};