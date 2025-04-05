"use client";
import { motion } from "framer-motion";
import { DiCode } from "react-icons/di";
import {
  BiBrain,
  BiCloud,
  BiPalette,
  BiNetworkChart,
  BiRocket,
} from "react-icons/bi";

const solutions = [
  {
    icon: <DiCode className="text-6xl" />,
    title: "Custom Software Development",
    description:
      "Building scalable and adaptable solutions to meet evolving needs.",
  },
  {
    icon: <BiBrain className="text-6xl" />,
    title: "Intelligent Systems",
    description:
      "Leveraging data and automation to create smarter and more efficient applications.",
  },
  {
    icon: <BiCloud className="text-6xl" />,
    title: "Cloud & Infrastructure",
    description:
      "Enhancing accessibility, performance, and security through modern technologies.",
  },
  {
    icon: <BiPalette className="text-6xl" />,
    title: "User-Centric Design",
    description:
      "Creating intuitive and engaging experiences with a focus on usability.",
  },
  {
    icon: <BiNetworkChart className="text-6xl" />,
    title: "Industry & Academic Collaborations",
    description:
      "Bridging the gap between learning and real-world applications.",
  },
  {
    icon: <BiRocket className="text-6xl" />,
    title: "Continuous Innovation",
    description: "Adapting to new technologies for future-ready solutions.",
  },
];

const SolutionsSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          SOLUTIONS WE DELIVER
        </motion.h2>

        <p className="text-gray-600 text-justify max-w-4xl mx-auto mb-12">
          At the Software Development Center (SDC), we are committed to
          delivering innovative solutions that make a real difference. Through
          our expertise in technology and creative problem-solving, we develop
          custom solutions that not only meet current needs but are also built
          for future growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden hover:bg-[#FFE8CC]"
            >
              {/* Mobile View - Normal Card */}
              <div className="lg:hidden">
                <div className="flex flex-col items-center text-center mb-4">
                  <div
                    style={{
                      color: "var(--primary-color)",
                      background: "linear-gradient(135deg, #ff6b6b, #feca57)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    className="mb-4"
                  >
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 text-justify">
                    {solution.description}
                  </p>
                </div>
              </div>

              {/* Desktop View - Hover Effect Card */}
              <div className="hidden lg:block">
                <div className="flex flex-col items-center text-center transition-transform duration-300 group-hover:-translate-y-2">
                  <div
                    style={{
                      color: "var(--primary-color)",
                      background: "linear-gradient(135deg, #ff6b6b, #feca57)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    className="mb-4"
                  >
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {solution.title}
                  </h3>
                </div>

                <div className="absolute inset-0 bg-[#FFE8CC] bg-opacity-98 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-gray-600 text-justify">
                    {solution.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
