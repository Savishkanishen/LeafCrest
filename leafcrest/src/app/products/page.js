"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const teas = [
  {
    name: "Ceylon Tea",
    desc: "Rich, bold flavor with deep aroma.",
    price: "LKR 2,500",
    image: "/black-tea.jpg",
  },
  {
    name: "Green Tea",
    desc: "Fresh, light, and antioxidant-rich.",
    price: "LKR 2,800",
    image: "/green-tea.jpg",
  },
  {
    name: "Cinnamon Tea",
    desc: "Naturally calming herbal blend.",
    price: "LKR 3,000",
    image: "/herbal-tea.jpg",
  },
];

export default function Products() {
  return (
    <main className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-[#14532d] text-center">
          Our Teas
        </h1>

        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {teas.map((tea, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <div className="relative h-56">
                <Image
                  src={tea.image}
                  alt={tea.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#14532d]">
                  {tea.name}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {tea.desc}
                </p>
                <p className="mt-4 font-semibold">{tea.price}</p>

                <button className="mt-6 w-full py-3 bg-[#14532d] text-white rounded-xl hover:bg-green-900 transition">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
