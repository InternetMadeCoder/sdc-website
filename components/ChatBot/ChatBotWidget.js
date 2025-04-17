"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Bot, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Dynamically import your chatbot components
const ChatWindow = dynamic(() => import("./ChatWindow"), {
  loading: () => <div>Loading...</div>,
});

const WelcomeAnimation = dynamic(() => import("./WelcomeAnimation"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export default function ChatBotWidget() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const handleChatOpen = () => {
    setIsChatOpen(true);
    setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
  };

  return (
    <>
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              className="bg-white rounded-2xl w-full max-w-3xl h-[80vh] relative overflow-hidden"
            >
              <button
                onClick={() => setIsChatOpen(false)}
                className="absolute right-5 top-4 z-50"
              >
                <X className="h-6 w-6 text-gray-500 hover:text-gray-700" />
              </button>

              {showWelcome ? <WelcomeAnimation /> : <ChatWindow />}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleChatOpen}
        className="fixed bottom-10 right-10 rounded-full p-4 shadow-lg z-40"
        // style={{ backgroundColor: "#2979FF" }}
        style={{
    backgroundImage: "linear-gradient(to right, #1565C0, #42A5F5)",
  }}
      >
        <Bot className="h-8 w-8 text-white" />
        {/* <span className="text-sm font-medium">Help</span> */}

      </motion.button>
    </>
  );
}
