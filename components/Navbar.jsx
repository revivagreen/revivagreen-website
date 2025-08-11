// components/Navbar.jsx
"use client"; 

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* --- DESKTOP HEADER --- */}
      <div className="hidden md:block">
        <div className="pt-4"> 
          <div className="">
            <header className="relative  z-50 rounded-xl  shadow-lg flex justify-end  px-10 py-12">
              <Link href="/" className="absolute top-1/2 -translate-y-1/2 left-16 -m-4 -px-3 z-10">
                <div >
                  <Image
                    src="/logo.png"
                    alt="RevivaGreen Logo"
                    width={140}
                    height={140}
                    unoptimized
                    priority
                  />
                </div>
              </Link>
              <nav className="flex items-center gap-4 md:gap-8 text-lg font-semibold pl-48">
                <Link href="/" className={`cursor-pointer transition-colors duration-200 ${pathname === '/' ? 'text-yellow-500' : 'text-black hover:text-green-600'}`}>
                  Home
                </Link>
                <Link href="/what-we-collect" className={`cursor-pointer transition-colors duration-200 ${pathname === '/what-we-collect' ? 'text-yellow-500' : 'text-black hover:text-green-600'}`}>
                  What We Collect
                </Link>
                <Link href="/about" className={`cursor-pointer transition-colors duration-200 ${pathname === '/about' ? 'text-yellow-500' : 'text-black hover:text-green-600'}`}>
                  About Us
                </Link>
                <Link href="/contact" className={`cursor-pointer transition-colors duration-200 ${pathname === '/contact' ? 'text-yellow-500' : 'text-black hover:text-green-600'}`}>
                  Contact
                </Link>
              </nav>
            </header>
          </div>
        </div>
      </div>
      
      {/* --- MOBILE HEADER --- */}
      <div className="md:hidden">
        <header className="absolute top-0 left-0 w-full z-50 py-4 px-4 flex justify-between items-center">
          <Link href="/">
            <div>
              <Image
                src="/logo.png"
                alt="RevivaGreen Logo"
                width={70}
                height={70}
                unoptimized
                priority
              />
            </div>
          </Link>
          <div>
            <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu" className="p-2">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {/* CORRECTED: path is self-closing */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </header>

        {/* Mobile Slide-out Menu */}
        <div className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-[#1A3A30] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-end p-4">
            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="p-2">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {/* CORRECTED: path is self-closing */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-center gap-8 mt-8">
            <Link href="/" className={`text-xl font-semibold ${pathname === '/' ? 'text-yellow-500' : 'text-white'}`}>Home</Link>
            <Link href="/what-we-collect" className={`text-xl font-semibold ${pathname === '/what-we-collect' ? 'text-yellow-500' : 'text-white'}`}>What We Collect</Link>
            <Link href="/about" className={`text-xl font-semibold ${pathname === '/about' ? 'text-yellow-500' : 'text-white'}`}>About Us</Link>
            <Link href="/contact" className={`text-xl font-semibold ${pathname === '/contact' ? 'text-yellow-500' : 'text-white'}`}>Contact</Link>
          </nav>
        </div>
        
        {/* Dark Overlay when menu is open */}
        {isMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={() => setIsMenuOpen(false)}></div>}
      </div>
    </>
  );
}