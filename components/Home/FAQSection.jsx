"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`mb-4 rounded-lg overflow-hidden ${
        isOpen ? "bg-[#FFE8CC]" : ""
      }`}
    >
      <button
        className={`w-full text-left p-4 flex justify-between items-center transition-colors ${
          isOpen ? "bg-[#FFD299]" : "bg-white hover:bg-[#FFE8CC]"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <IoIosArrowDown className="text-xl" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 text-gray-600 bg-[#FFE8CC]">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQSection() {
  const faqs = [
    {
      question: "What is the Software Development Center (SDC)?",
      answer:
        "SDC is a student-driven initiative at Manipal University Jaipur that bridges the gap between academia and industry through hands-on software development projects, mentorship, and real-world problem-solving.",
    },
    {
      question: "Who can join SDC?",
      answer:
        "SDC is open to students with a passion for software development. Whether you're a beginner or an experienced coder, if you're eager to learn and contribute, you're welcome to apply.",
    },
    {
      question: "What kind of projects does SDC work on?",
      answer:
        "SDC develops real-world projects across various domains, including web development, mobile applications, artificial intelligence, machine learning, and cloud computing. Many projects involve collaborations with industry partners and university initiatives.",
    },
    {
      question: "How does SDC help students grow professionally?",
      answer:
        "Through hands-on projects, mentorship from industry experts, hackathons, workshops, and real-world challenges, SDC helps students develop both technical and soft skills essential for their careers.",
    },
  ];

  return (
    <section className="py-16 bg-white relative z-30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          FREQUENTLY ASKED QUESTIONS
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="relative inline-block px-8 py-4 bg-transparent text-[#EF9535] font-semibold border-2 border-[#EF9535] hover:bg-[#EF9535] hover:text-white transition-all duration-200 group overflow-hidden"
            >
              <span className="relative z-10">See All Questions</span>
              <div
                className="absolute inset-0 bg-[#EF9535] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"
                style={{ zIndex: 0 }}
              ></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
