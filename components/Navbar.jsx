// components/Navbar.jsx
"use client"; 

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    // This outer div provides the top margin for the whole header section
    <div className="pt-12"> 
      <div className="container mx-auto">
        {/* --- 1. THE MAIN HEADER WRAPPER (THE BACKGROUND) --- */}
        {/* This is our white background bar. It is positioned relatively. */}
        <header className="relative bg-[#1A3A30] shadow-green-950 rounded-xl z-50 mt-10 shadow-lg flex justify-end items-center px-16 py-10 h-6">
          
          {/* --- 2. THE LOGO --- */}
          {/* The logo is positioned absolutely relative to the header. */}
          {/* 'top-1/2 -translate-y-1/2' vertically centers it. */}
          {/* 'left-8' places it on the left side. */}
          <Link href="/" className="absolute top-1/2 -translate-y-1/2 left-8 z-10">
            <div className="bg-[#1A3A30] p-2 rounded-full  shadow-md">
              <Image
                src="/logo.svg"
                alt="RevivaGreen Logo"
                width={252} // A larger logo that will overlap
                height={252}
                unoptimized
                priority
              />
            </div>
          </Link>
          
          {/* --- 3. THE NAVIGATION LINKS --- */}
          {/* The nav sits inside the flex container, naturally aligning to the right. */}
          <nav className="flex items-center gap-4 md:gap-8 text-lg font-light">
            <Link href="/" className={`font-semibold transition-colors duration-200 ${pathname === '/' ? 'text-yellow-600' : 'text-white hover:text-green-500 hover:text-2xl'}`}>
              Home
            </Link>
            <Link href="/what-we-collect" className={`font-semibold transition-colors duration-200 ${pathname === '/what-we-collect' ? 'text-yellow-600' : 'text-white hover:text-green-500 hover:text-2xl'}`}>
              What We Collect
            </Link>
            <Link href="/about" className={`font-semibold transition-colors duration-200 ${pathname === '/about' ? 'text-yellow-600' : 'text-white hover:text-green-500 hover:text-2xl'}`}>
              About Us
            </Link>
            <Link href="/contact" className={`font-semibold transition-colors duration-200 ${pathname === '/contact' ? 'text-yellow-600' : 'text-white hover:text-green-500 hover:text-2xl'}`}>
              Contact
            </Link>
          </nav>

        </header>
      </div>
    </div>
  );
}