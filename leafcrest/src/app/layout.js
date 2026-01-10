"use client";
import { useState } from "react";
import "./globals.css";
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});



export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-[var(--font-inter)] bg-[#fefce8] text-gray-800">

        {/* Navbar */}
        <header className="sticky top-0 z-50 bg-[#fefce8]/80 backdrop-blur border-b border-green-100">
          <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-[#14532d] font-[var(--font-playfair)]">
              LeafCraest 🍃
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 text-sm font-medium text-gray-800">
              <Link href="/" className="hover:text-green-700 transition">Home</Link>
              <Link href="/about" className="hover:text-green-700 transition">About</Link>
              <Link href="/products" className="hover:text-green-700 transition">Teas</Link>
              <Link href="/contact" className="hover:text-green-700 transition">Contact</Link>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex flex-col gap-1.5 focus:outline-none"
              >
                <span className={`block w-6 h-0.5 bg-[#14532d] transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
                <span className={`block w-6 h-0.5 bg-[#14532d] transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
                <span className={`block w-6 h-0.5 bg-[#14532d] transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-white overflow-hidden shadow-md"
              >
                <div className="flex flex-col gap-4 px-6 py-4 text-gray-800 text-lg font-medium">
                  <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-green-700 transition">Home</Link>
                  <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-green-700 transition">About</Link>
                  <Link href="/products" onClick={() => setMenuOpen(false)} className="hover:text-green-700 transition">Teas</Link>
                  <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-green-700 transition">Contact</Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Page Content */}
        {children}

        {/* Footer */}
        <footer className="mt-24 bg-[#14532d] text-white">
          <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
            
            {/* Brand Info */}
            <div>
              <h3 className="text-xl font-semibold font-[var(--font-playfair)]">LeafCraest 🍃</h3>
              <p className="mt-2 text-sm text-green-100">
                Premium Ceylon Tea, crafted with tradition & purity.
              </p>
            </div>

            {/* Explore */}
            <div>
              <h4 className="font-semibold mb-3">Explore</h4>
              <ul className="space-y-2 text-sm text-green-100">
                <li><Link href="/" className="hover:text-green-200">Home</Link></li>
                <li><Link href="/about" className="hover:text-green-200">About</Link></li>
                <li><Link href="/products" className="hover:text-green-200">Tea</Link></li>
                <li><Link href="/contact" className="hover:text-green-200">Contact</Link></li>
              </ul>
            </div>

            {/* Origin */}
            <div>
              <h4 className="font-semibold mb-3">Origin</h4>
              <p className="text-sm text-green-100">
                Sri Lanka 🇱🇰 <br /> From the heart of Ceylon
              </p>
            </div>

          </div>

          <div className="text-center text-xs text-green-200 pb-4">
            © {new Date().getFullYear()} LeafCraest. All rights reserved.
          </div>
        </footer>

      </body>
    </html>
  );
}
