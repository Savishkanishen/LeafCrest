"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp number in Sri Lanka format (remove leading 0, add 94)
    const phone = "94705914888"; 
    const text = `Hello LeafCrest 🌿%0A%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    // Show success feedback
    setSent(true);

    // Open WhatsApp after a short delay
    setTimeout(() => {
      window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
    }, 1200);
  };

  return (
    <main className="py-24 bg-[#fefce8]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl font-bold text-[#14532d]">
            Get in Touch
          </h1>
          <p className="mt-6 text-gray-700">
            Have a question about our tea or want to place an order?
            We’d love to hear from you.
          </p>

          <div className="mt-10 space-y-4 text-gray-700">
            <p>📍 Sri Lanka</p>
            <p>📧 leafcresttea@gmail.com</p>
            <p>📞 +94 70 591 4888</p>
          </div>

          {/* WHATSAPP CTA */}
          <a
            href="https://wa.me/94705914888"
            target="_blank"
            className="inline-block mt-10 px-6 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition"
          >
            Chat on WhatsApp 💬
          </a>
        </motion.div>

        {/* RIGHT - FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-10 rounded-3xl shadow-sm"
        >
          <h3 className="text-xl font-semibold text-[#14532d]">
            Send a Message
          </h3>

          {!sent ? (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                required
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#14532d] text-white rounded-xl hover:bg-green-900 transition"
              >
                Send Message
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-10 text-center bg-green-50 border border-green-200 p-8 rounded-2xl"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-4xl"
              >
                ✅
              </motion.div>
              <h3 className="mt-4 text-xl font-semibold text-[#14532d]">
                Message Sent Successfully
              </h3>
              <p className="mt-2 text-gray-600">
                Redirecting you to WhatsApp…
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </main>
  );
}
