"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#14532d]">
            Our Story
          </h1>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            LeafCraest was born from a deep respect for nature, tradition,
            and the timeless art of tea crafting in Sri Lanka.
          </p>
        </motion.div>

        {/* STORY BLOCK */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-semibold text-[#14532d]">
              Rooted in Ceylon
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              From the misty highlands of Sri Lanka, LeafCraest sources
              handpicked tea leaves cultivated using sustainable practices.
              Each harvest reflects generations of knowledge passed down
              through skilled tea artisans.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We believe tea is not just a beverage — it is a ritual, a moment
              of calm, and a connection to nature.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-[#fefce8] p-10 rounded-3xl"
          >
            <h3 className="text-xl font-semibold text-[#14532d]">
              Our Values
            </h3>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>🌱 100% Natural & Ethical Sourcing</li>
              <li>🍃 Handpicked Premium Leaves</li>
              <li>🤍 Respect for Nature & Farmers</li>
              <li>☕ Authentic Taste & Aroma</li>
            </ul>
          </motion.div>
        </div>

        {/* TIMELINE */}
        <div className="mt-28">
          <h2 className="text-3xl font-bold text-[#14532d] text-center">
            Our Journey
          </h2>

          <div className="mt-16 space-y-10 max-w-3xl mx-auto">
            {[
              {  
                 text: "The 2025 Origin LeafCrest didn’t begin with a sale it began with a search. In 2025, we set out with a single, obsessive goal to find the soul of tea.",
                 title:"The Research We spent a year in the gardens, testing hundreds of harvests and studying the chemistry of the perfect steep. We questioned every leaf, every soil, and every temperature.",
                ti: "The Promise We did the work so you can feel the serenity. LeafCrest is the result of that relentless research—a tea brand born from data, refined by taste, and dedicated to your best morning."},
          
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex gap-6 items-start"
              >
                
                <div className="bg-[#14532d] p-6 rounded-xl flex-1">
                 {item.text}<br></br>  
                  {item.title}<br></br>
                  {item.ti}
               
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
