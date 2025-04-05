"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  FaLaptopCode,
  FaHandshake,
  FaIndustry,
  FaBriefcase,
  FaUserGraduate,
  FaUsers,
  FaCode,
  FaHandsHelping,
  FaNetworkWired,
  FaGraduationCap,
} from "react-icons/fa";
import { MdTrendingUp } from "react-icons/md";
import {
  BsBriefcase,
  BsFileEarmarkText,
  BsAward,
  BsClipboardCheck,
} from "react-icons/bs";

const JoinSDC = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        if (heroBottom <= 0) {
          document.body.classList.add("white-section");
        } else {
          document.body.classList.remove("white-section");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/bg/bg-join-sdc.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
            Join the SDC Community
          </h1>
          <p className="text-lg md:text-2xl font-light max-w-3xl mx-auto mb-8 md:mb-10">
            Be part of an innovative community where ideas become reality
          </p>
          <a
            href="https://forms.office.com/pages/responsepage.aspx?id=3S8oJwtM-026kSKM2D_fcbXlnRNbGLdGorqWaARNgHJUOUNRTkg0TFNaQ1o4WU0xMkpNUVNWWEtZNy4u&route=shorturl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-yellow-400 text-white text-lg font-medium transform hover:scale-105 transition-all duration-200"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* About SDC Section */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 tracking-tight text-center"
            >
              ABOUT SDC
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl font-light leading-relaxed mb-8 text-gray-700 text-justify"
            >
              Established in 2022, the Software Development Centre offers MUJ
              students hands-on experience by working on real-world projects. It
              fosters innovation, creativity, and entrepreneurship, bridging the
              gap between academia and industry to prepare students for
              successful careers.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SDC Objectives Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 tracking-tight text-center">
              SDC Objectives
            </h2>
            <div className="flex flex-col items-center">
              {/* First row - 3 cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-6">
                {[
                  {
                    icon: <FaLaptopCode className="w-6 h-6" />,
                    title: "Student Platform",
                    text: "Provide a platform for students to work on real-world projects",
                  },
                  {
                    icon: <FaHandshake className="w-6 h-6" />,
                    title: "Software Development",
                    text: "Develop software required by the institute or the outside community",
                  },
                  {
                    icon: <FaIndustry className="w-6 h-6" />,
                    title: "Consultancy",
                    text: "Provide consultancy services to industries and organizations",
                  },
                ].map((objective, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.25, duration: 0.5 }} // Slower animation
                    className="bg-gray-50 p-5 rounded-xl hover:shadow-lg transition-all duration-300 md:flex-col md:items-center md:text-center flex items-start text-left group hover:-translate-y-1"
                  >
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-full text-white md:mb-4 mr-4 md:mr-0 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {objective.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 md:mb-2">
                        {objective.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {objective.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Second row - 2 cards centered */}
              <div className="grid md:grid-cols-2 gap-6 lg:w-2/3">
                {[
                  {
                    icon: <FaBriefcase className="w-6 h-6" />,
                    title: "Opportunities",
                    text: "Facilitate internships and job opportunities for students",
                  },
                  {
                    icon: <FaUserGraduate className="w-6 h-6" />,
                    title: "Alumni Network",
                    text: "Engage MUJ alumni as industry ambassadors and advisors",
                  },
                ].map((objective, index) => (
                  <motion.div
                    key={index + 3}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index + 3) * 0.25, duration: 0.5 }} // Slower animation
                    className="bg-gray-50 p-5 rounded-xl hover:shadow-lg transition-all duration-300 md:flex-col md:items-center md:text-center flex items-start text-left group hover:-translate-y-1"
                  >
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-full text-white md:mb-4 mr-4 md:mr-0 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {objective.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 md:mb-2">
                        {objective.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {objective.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join SDC Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 tracking-tight text-center">
              Why Join SDC?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaUsers className="w-6 h-6" />,
                  title: "Diverse Positions",
                  text: "Explore roles such as SDC Software Developer intern, SDC Project Leader intern, SDC Project Manager intern, and other positions based on the needs.",
                },
                {
                  icon: <FaCode className="w-6 h-6" />,
                  title: "Real-World Software Development",
                  text: "Engage in the development of various real-world software projects and gain hands-on experience.",
                },
                {
                  icon: <FaHandsHelping className="w-6 h-6" />,
                  title: "Consultancy Opportunities",
                  text: "Have the chance to provide consultancy services to industries and other organizations.",
                },
                {
                  icon: <MdTrendingUp className="w-6 h-6" />, // Changed from FaTrendUp to MdTrendingUp
                  title: "Industry Trends",
                  text: "Stay updated on the latest industry trends, becoming well-prepared for a career in the field.",
                },
                {
                  icon: <FaNetworkWired className="w-6 h-6" />,
                  title: "Networking and Mentorship",
                  text: "Collaborate with MUJ alumni and industry experts, benefiting from their insights, guidance, and mentorship.",
                },
                {
                  icon: <FaGraduationCap className="w-6 h-6" />,
                  title: "Curriculum Assessment",
                  text: "Consideration of software developed at SDC as an assessment, meeting project development requirements aligned with the curriculum.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="bg-white p-6 rounded-xl hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-full text-white flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pl-[52px]">
                    {benefit.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Student Outcomes Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 tracking-tight text-center">
              Student Outcomes
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl font-light leading-relaxed text-gray-700 text-justify"
            >
              Students will enhance their coding and problem-solving skills,
              gain experience working on real-world projects, develop effective
              teamwork and collaboration abilities, and ultimately emerge as
              successful professionals in the field of computer science. They
              will possess a strong fundamental knowledge of Software
              Engineering.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Line of Action Section */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pattern-grid-lg"></div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 tracking-tight text-center">
              Line of Action
            </h2>

            {/* Desktop Timeline */}
            <div className="hidden md:block relative min-h-[500px]">
              {/* Horizontal line */}
              <div className="absolute top-10 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg rounded-full"></div>

              <div className="grid grid-cols-4 gap-8 relative">
                {[
                  {
                    icon: <BsBriefcase className="w-5 h-5" />,
                    title: "Opening Positions",
                    text: "The SDC Centre will open vacancies for various positions based on project requirements.",
                  },
                  {
                    icon: <BsFileEarmarkText className="w-5 h-5" />,
                    title: "Selection Process",
                    text: "Student selection considers technical skills, aptitude, and potential. The process includes shortlisting, technical interviews, and personal interviews.",
                  },
                  {
                    icon: <BsAward className="w-5 h-5" />,
                    title: "Offer Letters",
                    text: "Offer letters will be issued to selected students with project allocations.",
                  },
                  {
                    icon: <BsClipboardCheck className="w-5 h-5" />,
                    title: "Continuous Evaluation",
                    text: "Continuous evaluation and assessment of allocated projects will be conducted.",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pt-16 mt-8"
                  >
                    {/* Timeline dot and connector */}
                    <div className="absolute left-1/2 top-[-10px] -translate-x-1/2">
                      {/* Connector Line */}
                      <div className="w-[2px] h-[20px] bg-gradient-to-b from-yellow-400 to-orange-500 absolute left-1/2 -translate-x-1/2 top-[24px]"></div>
                      {/* Dot */}
                      <div className="w-5 h-5 rounded-full bg-white p-[2px] relative z-20">
                        <div className="w-full h-full rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 shadow-md">
                          <div className="absolute inset-[-2px] rounded-full animate-ping opacity-20 bg-orange-500"></div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1 relative">
                      {/* Chat bubble pointer */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-gray-100 transform rotate-45"></div>

                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-full text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {step.icon}
                        </div>
                        <h3 className="text-lg font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline (hidden on desktop) */}
            <div className="md:hidden relative">
              {/* Existing vertical timeline code for mobile */}
              <div className="absolute left-0 h-full w-1 bg-gradient-to-b from-yellow-400 to-orange-500" />
              {[
                {
                  icon: <BsBriefcase className="w-5 h-5" />,
                  title: "Opening Positions",
                  text: "The SDC Centre will open vacancies for various positions based on project requirements.",
                },
                {
                  icon: <BsFileEarmarkText className="w-5 h-5" />,
                  title: "Selection Process",
                  text: "Student selection considers technical skills, aptitude, and potential. Process includes shortlisting, technical interviews, and personal interviews.",
                },
                {
                  icon: <BsAward className="w-5 h-5" />,
                  title: "Offer Letters",
                  text: "Offer letters will be issued to selected students with project allocations.",
                },
                {
                  icon: <BsClipboardCheck className="w-5 h-5" />,
                  title: "Continuous Evaluation",
                  text: "Continuous evaluation and assessment of allocated projects will be conducted.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3, duration: 0.5 }}
                  className={`flex items-start gap-8 mb-12 relative ${
                    index % 2 === 0
                      ? "md:flex-row-reverse md:text-right"
                      : "md:flex-row"
                  }`}
                >
                  {/* Enhanced timeline dot with pulse effect */}
                  <div className="absolute left-[-8px] md:left-1/2 md:-translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 border-4 border-white relative">
                      <div className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-25"></div>
                    </div>
                  </div>

                  <div className="w-full md:w-[calc(50%-2rem)]">
                    {" "}
                    {/* Reduced width */}
                    <div
                      className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 ${
                        index % 2 === 0 ? "ml-6 md:ml-0 md:mr-6" : "ml-6"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-full text-white shadow-lg">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-yellow-400 to-orange-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              Ready to Start Your Journey with SDC?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-10">
              Join our innovative community and be part of something
              extraordinary
            </p>
            <a
              href="https://forms.office.com/pages/responsepage.aspx?id=3S8oJwtM-026kSKM2D_fcbXlnRNbGLdGorqWaARNgHJUOUNRTkg0TFNaQ1o4WU0xMkpNUVNWWEtZNy4u&route=shorturl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 bg-white text-orange-500 rounded-full text-xl font-semibold hover:scale-105 transform transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Apply Now
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

// Add this CSS at the top of your file or in your global CSS
const styles = `
  .pattern-grid-lg {
    background-image: 
      linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px);
    background-size: 4rem 4rem;
  }
`;

export default JoinSDC;
