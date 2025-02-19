"use client";

import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [messageSent, setMessageSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const form = useRef();

  useEffect(() => {
    setShowContent(true);
  }, []);

  const validateForm = () => {
    let formErrors = {};

    if (!name.trim()) formErrors.name = "Name is required";
    if (!email.trim()) {
      formErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formErrors.email = "Please enter a valid email address";
    }
    if (!message.trim()) formErrors.message = "Message is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_300pw03",
        "template_uav19wd",
        form.current,
        {
          publicKey: "didEHn7X6RkM9mDy4",
        }
      );

      setMessageSent(true);
      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => setMessageSent(false), 5000);
    } catch (error) {
      console.error("Failed to send message:", error.text);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-hidden bg-[#eaeaea] white-section">
      {/* Hero Section remains the same */}
      <div className="bg-[url(/bg/contact-bg.webp)] bg-cover h-[512px] text-white flex flex-col justify-center gap-8 px-4 xl:px-48 lg:px-48 md:px-32 sm:pr-8 sm:pl-32">
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold opacity-0 ${
            showContent ? "animate-slide-down" : ""
          }`}
          style={{
            animation: showContent ? "slideDown 0.8s ease forwards" : "none",
          }}
        >
          Contact Us
        </h1>
        <p
          className={`text-base md:text-lg lg:text-xl lg:w-3/4 opacity-0 ${
            showContent ? "animate-slide-up" : ""
          }`}
          style={{
            animation: showContent ? "slideUp 0.8s ease 0.3s forwards" : "none",
          }}
        >
          Get In Touch! We&apos;d love to hear from you! If you have any
          questions or anything to share, feel free to drop us a message.
        </p>
      </div>

      {/* Main Content */}
      <div className="bg-[#eaeaea] mx-4 sm:mx-6 md:mx-12 lg:mx-20 xl:mx-28 lg:-mt-32 mb-16">
        <div className="py-8 lg:py-16 px-2 md:px-8 flex flex-col lg:flex-row justify-center items-start gap-16 w-full">
          {/* Contact Information Cards */}
          <div className="flex flex-col max-w-96 gap-8 w-full">
            {/* Phone Card */}
            <div
              className={`contact-card bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl 
                            transition-all duration-300 flex items-start gap-4 opacity-0 border-l-4 border-[#D34747]`}
              style={{
                animation: showContent
                  ? "fadeIn 0.5s ease 0.4s forwards"
                  : "none",
              }}
            >
              <div className="p-3 bg-red-50 rounded-full">
                <BiSolidPhoneCall className="w-8 h-8 md:w-10 md:h-10 text-[#D34747] transform transition-transform group-hover:scale-110" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Call Us Directly</h3>
                <p className="text-gray-700 font-medium">Dr. Amit Garg</p>
                <p className="text-gray-600">+91 9897260563</p>
              </div>
            </div>

            {/* Email Card */}
            <div
              className={`contact-card bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl 
                            transition-all duration-300 flex items-start gap-4 opacity-0 border-l-4 border-[#D34747]`}
              style={{
                animation: showContent
                  ? "fadeIn 0.5s ease 0.6s forwards"
                  : "none",
              }}
            >
              <div className="p-3 bg-red-50 rounded-full">
                <IoMdMail className="w-8 h-8 md:w-10 md:h-10 text-[#D34747] transform transition-transform group-hover:scale-110" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-700">sdc@jaipur.manipal.edu</p>
                <p className="text-gray-600">amit.garg@jaipur.manipal.edu</p>
              </div>
            </div>

            {/* Location Card */}
            <div
              className={`contact-card bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl 
                            transition-all duration-300 flex items-start gap-4 opacity-0 border-l-4 border-[#D34747]`}
              style={{
                animation: showContent
                  ? "fadeIn 0.5s ease 0.8s forwards"
                  : "none",
              }}
            >
              <div className="p-3 bg-red-50 rounded-full">
                <MdLocationOn className="w-8 h-8 md:w-10 md:h-10 text-[#D34747] transform transition-transform group-hover:scale-110" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="font-medium text-gray-900 mb-2">
                  Software Development Centre (SDC)
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Computer Science and Engineering Department
                  <br />
                  Manipal University Jaipur
                  <br />
                  Jaipur-Ajmer Express Highway
                  <br />
                  Dehmi Kalan, Near GVK Toll Plaza
                  <br />
                  Jaipur, Rajasthan 303007
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`bg-white rounded-xl shadow-2xl p-8 lg:p-10 w-full lg:w-auto max-w-2xl opacity-0
                        border-t-4 border-[#D34747]`}
            style={{
              animation: showContent ? "fadeIn 0.5s ease 1s forwards" : "none",
            }}
          >
            <div className="max-w-md mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Reach Out To Us
              </h2>
              <p className="text-gray-600 mb-8">
                If you have any questions or anything to share, feel free to
                drop us a message.
              </p>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="from_name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 rounded-lg border bg-gray-50 
                                                transition-all duration-300 transform hover:shadow-md
                                                ${
                                                  errors.name
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                                }
                                                focus:outline-none focus:ring-2 focus:ring-[#D34747] focus:border-transparent
                                                focus:bg-white`}
                    />
                    {errors.name && (
                      <span className="text-red-500 text-xs mt-1 animate-fade-in absolute -bottom-5 left-0">
                        {errors.name}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="from_email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-lg border bg-gray-50
                                                transition-all duration-300 transform hover:shadow-md
                                                ${
                                                  errors.email
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                                }
                                                focus:outline-none focus:ring-2 focus:ring-[#D34747] focus:border-transparent
                                                focus:bg-white`}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs mt-1 animate-fade-in absolute -bottom-5 left-0">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows="5"
                      placeholder="Type your message here..."
                      className={`w-full px-4 py-3 rounded-lg border bg-gray-50
                                                transition-all duration-300 transform hover:shadow-md
                                                ${
                                                  errors.message
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                                }
                                                focus:outline-none focus:ring-2 focus:ring-[#D34747] focus:border-transparent
                                                focus:bg-white`}
                    />
                    {errors.message && (
                      <span className="text-red-500 text-xs mt-1 animate-fade-in absolute -bottom-5 left-0">
                        {errors.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-3 bg-[#D34747] text-white text-sm font-medium rounded-lg
                                            shadow-lg transform transition-all duration-300
                                            ${
                                              isSubmitting
                                                ? "opacity-75 cursor-not-allowed"
                                                : "hover:bg-[#b83a3a] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                                            }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                  {messageSent && (
                    <div className="flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-lg animate-fade-in">
                      <span className="text-green-700 text-sm font-medium">
                        Message sent successfully!
                      </span>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease forwards;
        }
        .animate-slide-down {
          animation: slideDown 0.8s ease forwards;
        }
        .contact-card {
          transform-origin: center;
          transition: all 0.3s ease;
        }
        .contact-card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
}
