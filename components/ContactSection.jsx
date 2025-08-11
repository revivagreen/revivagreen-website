// components/ContactSection.jsx
"use client";

import Link from 'next/link';

export default function ContactSection() {
  return (
    // This is the main dark green background for the whole section
    <div className=" text-black">
      <div className="container mx-auto py-20 px-4">

        {/* --- START: NEW WRAPPER CONTAINER --- */}
        {/* This new div will act as our card. */}
        {/* It has a lighter background, padding, rounded corners, and a max-width. */}
        <div className="bg-green-600  max-w-4xl mx-auto p-10 rounded-xl shadow-lg text-center">
          
          {/* Heading */}
          <h2 className="text-xl font-semibold md:text-3xl text-white  mb-4">Have a Question?</h2>
          
          {/* Paragraph */}
          <p className="text-lg md:text-xl text-black leading-relaxed mb-12">
            Whether you're a household looking to start recycling or a business with complex waste management needs, we're here to help.
          </p>

          {/* Button */}
          <div>
            <Link href="/contact">
              <button className="border-2 border-white bg-[#EE0014] hover:bg-white hover:text-black text-white font-bold py-3 px-8  text-lg transition-colors">
                Get In Touch
              </button>
            </Link>
          </div>

        </div>
        {/* --- END: NEW WRAPPER CONTAINER --- */}
        
      </div>
    </div>
  );
}