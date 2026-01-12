
"use client";
import Image from "next/image";


import { motion } from "framer-motion";



export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>

      <section className="relative min-h-[90vh] flex items-center">
   

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <br></br>
            <p className="uppercase tracking-widest text-sm text-green-700">
              Pure Ceylon Tea
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-bold text-[#14532d] leading-tight">
              Crafted by Nature, <br /> Perfected by Tradition
            </h1>

            <p className="mt-6 text-lg text-gray-700">
              LeafCrest brings you premium handpicked tea leaves from
              Sri Lanka’s finest estates — rich aroma, authentic taste.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="/products" >
              <button className="px-6 py-3 bg-[#14532d] text-white rounded-xl hover:bg-green-900 transition hover:scale-110 transition duration-300" >
                Explore Teas
              </button></a>

              <a href="/about">
              
              <button className="px-6 py-3 border border-[#14532d] text-[#14532d] rounded-xl hover:bg-green-50 transition hover:scale-110 transition duration-300">
                Our Story
              </button>
              </a>
            </div>
          </div>

          <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="relative h-[420px] rounded-3xl overflow-hidden shadow-lg"
>


          <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/tea.jpg"
              alt="Premium Tea"
              fill
              className="object-cover"
            />
          </div>

          </motion.div>

        </div>
     
      </section>  
      </motion.div>

      {/* STORY SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#14532d]">
            From Leaf to Cup
          </h2>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Every LeafCrest tea leaf is carefully selected, naturally
            processed, and packed to preserve freshness, aroma, and flavor —
            just as nature intended.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-[#fefce8]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          
          {[
            { title: "Handpicked Leaves", desc: "Only the finest young leaves are selected." },
            { title: "100% Natural", desc: "No additives, no artificial flavors." },
            { title: "Ceylon Origin", desc: "Sourced from Sri Lanka’s highlands." },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-[#14532d]">
                {item.title}
              </h3>
              <p className="mt-4 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
