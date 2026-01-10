import "./globals.css";
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";


const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "LeafCraest | Premium Ceylon Tea",
  description: "Pure, handcrafted Ceylon tea from Sri Lanka",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-[var(--font-inter)] bg-[#fefce8] text-gray-800">

        {/* Navbar */}
        <header className="sticky top-0 z-50 bg-[#fefce8]/80 backdrop-blur border-b border-green-100">
          <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            <Link href="/" className="text-2xl font-bold text-[#14532d]">
              LeafCraest 🍃
            </Link>

            <div className="hidden md:flex gap-8 text-sm font-medium">
              <Link href="/" className="hover:text-green-700">Home</Link>
              <Link href="/about" className="hover:text-green-700">About</Link>
              <Link href="/products" className="hover:text-green-700">Teas</Link>
              <Link href="/contact" className="hover:text-green-700">Contact</Link>
            </div>
          </nav>
        </header>

        {/* Page Content */}
        {children}

        {/* Footer */}
        <footer className="mt-24 bg-[#14532d] text-white">
          <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold">LeafCraest 🍃</h3>
              <p className="mt-2 text-sm text-green-100">
                Premium Ceylon Tea, crafted with tradition & purity.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Explore</h4>
              <ul className="space-y-2 text-sm text-green-100">
                <li>Home</li>
                <li>About</li>
                <li>Tea</li>
                <li>Contact</li>
              </ul>
            </div>

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
