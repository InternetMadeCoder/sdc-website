"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

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
            <div className="p-4 text-gray-600 bg-[#FFE8CC]">
              {typeof answer === "string" ? (
                answer
              ) : (
                <ul className="list-disc pl-4">
                  {answer.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = ({ title, questions }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-12"
  >
    <h3 className="text-2xl font-bold mb-6 text-gray-800">{title}</h3>
    {questions.map((faq, index) => (
      <FAQItem key={index} {...faq} index={index} />
    ))}
  </motion.div>
);

export default function FAQPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);

      // Check if scrolled past hero section
      const heroHeight = window.innerHeight;
      setIsScrolled(scrollPosition > heroHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Update body class based on scroll position
    if (isScrolled) {
      document.body.classList.add("white-section-visible");
    } else {
      document.body.classList.remove("white-section-visible");
    }
  }, [isScrolled]);

  const faqSections = {
    "General Information": [
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
    ],
    "Joining and Participation": [
      {
        question: "How can I become a member of SDC?",
        answer:
          "Recruitment for SDC usually takes place at the beginning of the academic year. Keep an eye on our website and social media for announcements regarding applications and selection processes.",
      },
      {
        question: "Do I need prior experience in coding to join SDC?",
        answer:
          "A basic understanding of coding is required before joining. However, we encourage learning and provide opportunities for skill enhancement through mentorship and collaborative projects.",
      },
      {
        question: "What are the benefits of being part of SDC?",
        answer: [
          "Hands-on experience with live projects",
          "Mentorship from industry experts and alumni",
          "Participation in workshops, hackathons, and industry events",
          "Networking opportunities with professionals and tech leaders",
          "Skill development in various domains like web development, AI, cloud computing, etc.",
        ],
      },
      {
        question: "What is the selection process for SDC?",
        answer:
          "The selection process includes an initial shortlisting based on applications, followed by a technical interview to assess skills and enthusiasm.",
      },
    ],
    "Projects and Collaboration": [
      {
        question: "Does SDC work on industry-based projects?",
        answer:
          "Yes, SDC collaborates with industry professionals and companies to develop software solutions for real-world challenges.",
      },
      {
        question: "Can students propose their own projects?",
        answer:
          "Absolutely! SDC encourages innovation, and students with creative project ideas can pitch them for consideration.",
      },
      {
        question: "How are projects assigned to members?",
        answer:
          "Projects are assigned based on a student's skill level, interests, and project requirements. Mentors guide teams to ensure successful project completion.",
      },
    ],
    "Workshops and Events": [
      {
        question: "Does SDC organize workshops and hackathons?",
        answer:
          "Yes, SDC regularly conducts workshops, hackathons, coding competitions, and seminars to help students enhance their skills and stay updated with industry trends.",
      },
      {
        question: "Are these workshops open to non-SDC members?",
        answer:
          "Some workshops and events are open to all students, while others may be exclusive to SDC members. Event details are shared in advance.",
      },
    ],
    "Technical Learning & Mentorship": [
      {
        question: "What technologies can I learn at SDC?",
        answer: [
          "Web Development (React, Node.js, Django, etc.)",
          "Mobile App Development (Flutter, React Native)",
          "Artificial Intelligence & Machine Learning",
          "Cloud Computing & DevOps",
          "Database Management & Cybersecurity",
        ],
      },
      {
        question: "Do SDC members receive mentorship?",
        answer:
          "Yes, SDC members are guided by experienced seniors, industry experts, and accomplished alumni who provide technical insights and career guidance.",
      },
    ],
    "Future Prospects": [
      {
        question: "How does SDC help with internships and placements?",
        answer:
          "SDC provides industry exposure, networking opportunities, and real-world project experience, which significantly enhances students' chances of securing internships and job placements.",
      },
      {
        question: "Do SDC members get certificates or recognition?",
        answer:
          "Yes, active members who contribute significantly to projects and events receive certificates, recognition, and recommendations for internships or jobs.",
      },
    ],
    Miscellaneous: [
      {
        question: "Where can I get updates about SDC activities?",
        answer:
          "Follow SDC on its official website, social media platforms, and university portals for updates on events, projects, and recruitment.",
      },
      {
        question: "How can I contact SDC for collaborations or queries?",
        answer:
          "You can reach out to us through our official website's contact form, email, or social media channels.",
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/bg/bg-gallery.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        {/* Add overlay */}
        <div className="absolute inset-0 z-10 bg-black/40" />
        <div
          className="relative z-20 container mx-auto px-4 text-center text-white"
          style={{
            transform: `translateY(${scrollY * -0.2}px)`,
          }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Everything you need to know about Software Development Center
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <IoIosArrowDown className="text-white text-4xl" />
        </div>
      </div>
      <div className="white-section bg-white">
        <div className="container mx-auto px-4 py-16">
          {Object.entries(faqSections).map(([title, questions]) => (
            <FAQSection key={title} title={title} questions={questions} />
          ))}
        </div>
      </div>
    </div>
  );
}
