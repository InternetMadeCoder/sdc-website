"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const QuickQueries = [
  "Admission Process",
  "Fee Structure",
  "Course Duration",
  "Placement Statistics",
  "Faculty Information",
  "Infrastructure",
];


export default function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function sendMessageToChatbot(userMessage) {
    const response = await fetch("http://127.0.0.1:5001/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMessage }),
    });
    return response.json();
  }

  const handleFeedback = async (response, questionMsg, answerMsg) => {
    if (response === "yes") {
      const thankYouMessage = {
        id: Date.now().toString(),
        text: "Thank you for your contribution! What else can I help you with?",
        sender: "bot",
        type: "thank_you",
      };
      setMessages((prev) => [...prev, thankYouMessage]);
    }
  
    if (response === "no") {
      try {
        await sendFeedback(questionMsg.text, answerMsg.text, "doubtful");
      } catch (error) {
        console.error("Feedback error:", error);
      }
  
      const feedbackMsg = {
        id: Date.now().toString(),
        text: "Your feedback has been recorded. Thank you for helping us improve!",
        sender: "bot",
        type: "thank_you",
      };
      setMessages((prev) => [...prev, feedbackMsg]);
    }
  };
  
  async function sendFeedback(question, answer, feedbackType) {
    try {
      await fetch("http://127.0.0.1:5001/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, answer, feedback_type: feedbackType }),
      });
    } catch (error) {
      console.error("Feedback error:", error);
    }
  }

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { id: Date.now().toString(), text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const { response, confidence } = await sendMessageToChatbot(input);
      const botMsg = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "bot",
        type: confidence === 0.0 && response.includes("contact information")
          ? "clarification"
          : confidence > 0.6
            ? "normal"
            : "confirmation"
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), text: "Backend error. Please try again later.", sender: "bot" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickQuery = async (query) => {
    const userMsg = { id: Date.now().toString(), text: query, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const { response, confidence } = await sendMessageToChatbot(query);
      const botMsg = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "bot",
        type: confidence > 0.6 ? "normal" : "confirmation",
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), text: "Couldn't reach assistant.", sender: "bot" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClarification = async (response) => {
    const userMsg = {
      id: Date.now().toString(),
      text: response === "yes" ? "Yes, that's correct" : "No, that's not what I meant",
      sender: "user",
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    const lastClarifyMsg = [...messages].reverse().find((m) => m.type === "clarification" && m.sender === "bot");
    const nameMatch = lastClarifyMsg?.text?.match(/for\s+(.+?)\?/i);
    const name = nameMatch ? nameMatch[1].trim() : "";

    setTimeout(async () => {
      if (response === "yes" && name) {
        try {
          const { response: contactResponse, confidence } = await sendMessageToChatbot(`contact of ${name}`);
          setMessages((prev) => [...prev, { id: (Date.now() + 2).toString(), text: contactResponse, sender: "bot" }]);
        } catch {
          setMessages((prev) => [...prev, { id: (Date.now() + 2).toString(), text: "Failed to fetch contact.", sender: "bot" }]);
        }
      } else {
        setMessages((prev) => [...prev, { id: (Date.now() + 2).toString(), text: "I apologize for the confusion. Could you please specify what information you're looking for about this person?"
, sender: "bot" }]);
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="bg-white shadow-md px-6 py-4 flex items-center gap-4">
        <Image src="/muj logo this.png" alt="MUJ Logo" width={190} height={190} />
        <Image src="/sdc-logo-black.webp" alt="SDC Logo" width={120} height={120} />
        <h1 className="text-2xl font-serif font-semibold text-black">MUJ CSE ASSISTANT</h1>
      </div>

      <div className="p-4 flex flex-wrap gap-2 justify-center">
        {QuickQueries.map((q, i) => (
          <motion.button key={q} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} onClick={() => handleQuickQuery(q)} className="bg-white px-4 py-2 rounded-full shadow-md border border-orange-300 text-orange-600 text-sm">
            {q}
          </motion.button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <motion.div key={msg.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${msg.sender === "user" ? "bg-orange-500 text-white" : "bg-white text-black shadow-md"}`}>
              <p className="whitespace-pre-line">{msg.text}</p>
              {msg.type === "clarification" && (
                <div className="mt-2 flex gap-2">
                  <button onClick={() => handleClarification("yes")} className="text-sm text-gray-500 hover:text-green-500">👍 Yes</button>
                  <button onClick={() => handleClarification("no")} className="text-sm text-gray-500 hover:text-red-500">👎 No</button>
                </div>
              )}

              {/* 👍 Helpful / 👎 Not Helpful for normal bot responses */}
              {msg.sender === "bot" && (!msg.type || (msg.type !== "clarification" && msg.type !== "thank_you")) && (
                <div className="mt-2 flex gap-2">
                <button
  onClick={() => {
    sendFeedback(messages[idx - 1]?.text || "Unknown", msg.text, "helpful");
    const thankYouMessage = {
      id: Date.now().toString(),
      text: "Thank you for your contribution! What else can I help you with?",
      sender: "bot",
      type: "thank_you",
    };
    setMessages((prev) => [...prev, thankYouMessage]);
  }}
  className="text-sm text-gray-500 hover:text-green-500"
>
  👍 Helpful
</button>

                  <button
onClick={() => handleFeedback("no", messages[idx - 1], msg)}
className="text-sm text-gray-500 hover:text-red-500"
                  >
                    👎 Not Helpful
                  </button>
                </div>
              )}

            </div>
          </motion.div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white p-4 rounded-2xl shadow-md">
              <Loader2 className="h-6 w-6 animate-spin text-orange-500" />
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t">
        <div className="flex gap-2">
        <input
  type="text"
  value={input}
  onChange={(e) => setInput(e.target.value)}
  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
  placeholder="Type your message..."
  className="flex-1 px-4 py-2 rounded-full border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm md:text-base text-black" // 👈 add this
/>
          <button onClick={handleSend} className="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600">
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

