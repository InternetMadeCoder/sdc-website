"use client";
import { expertise } from "./constants";
import { motion } from "framer-motion";
import { DiCode, DiCodeigniter, DiClojureAlt } from "react-icons/di";
import {
  BiBrain,
  BiCloud,
  BiLockAlt,
  BiPalette,
  BiNetworkChart,
} from "react-icons/bi";

const iconMap = {
  code: DiCode,
  psychology: BiBrain,
  cloud: BiCloud,
  security: BiLockAlt,
  dashboard: BiPalette,
  handshake: BiNetworkChart,
};

export default function ExpertiseSection() {
  return (
    <section className="expertise-section py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {expertise.heading}
          </h2>
          <p className="text-gray-600 text-justify max-w-4xl mx-auto">
            {expertise.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.areas.map((area, index) => {
            const IconComponent = iconMap[area.icon];
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden hover:bg-[#FFE8CC]"
              >
                {/* Mobile View - Normal Card */}
                <div className="lg:hidden">
                  <div className="flex flex-col items-center text-center mb-4">
                    <IconComponent
                      className="text-6xl mb-4"
                      style={{
                        color: "var(--primary-color)",
                        background: "linear-gradient(135deg, #ff6b6b, #feca57)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    />
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 text-justify">
                      {area.description}
                    </p>
                  </div>
                </div>

                {/* Desktop View - Hover Effect Card */}
                <div className="hidden lg:block">
                  <div className="flex flex-col items-center text-center transition-transform duration-300 group-hover:-translate-y-2">
                    <IconComponent
                      className="text-6xl mb-4"
                      style={{
                        color: "var(--primary-color)",
                        background: "linear-gradient(135deg, #ff6b6b, #feca57)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    />
                    <h3 className="text-xl font-semibold text-gray-800">
                      {area.title}
                    </h3>
                  </div>

                  <div className="absolute inset-0 bg-[#FFE8CC] bg-opacity-98 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-gray-600 text-justify">
                      {area.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-gray-600 text-center max-w-4xl mx-auto mt-12"
        >
          {expertise.footer}
        </motion.p>
      </div>
    </section>
  );
}
