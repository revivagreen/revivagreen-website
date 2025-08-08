// components/Footer.jsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className=" text-black py-12">
      <div className="container mx-auto text-center">
        
        <div className="mb-6">
          
            <h3 className="text-3xl font-semibold text-green-600 mb-3">RevivaGreen</h3>
          <div className="flex justify-center items-center gap-6">

            {/* Instagram Link */}
            <a 
              href="https://www.instagram.com/revivagreen.in?utm_source=ig_web_button_share_sheet&igsh=bXJqOWR5ZXNhdmdp" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block hover:text-green-600 transition-colors duration-300"
              aria-label="RevivaGreen on Instagram"
            >
              {/* Instagram SVG Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* LinkedIn Link */}
            <a 
              href="https://www.linkedin.com/posts/revivagreen_revivagreen-sustainability-circulareconomy-activity-7356756660436025345-rjO3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEV7PdUBLWiZeCnai3TYReNHldJL5Kq44k8" // <-- REPLACE WITH YOUR URL
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block hover:text-green-600 transition-colors duration-300"
              aria-label="RevivaGreen on LinkedIn"
            >
              {/* LinkedIn SVG Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            
            {/* --- NEW: Facebook Link --- */}
            <a 
              href="https://www.facebook.com/share/1FcMtTRjoH/" // <-- REPLACE WITH YOUR FACEBOOK URL
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block hover:text-green-600 transition-colors duration-300"
              aria-label="RevivaGreen on Facebook"
            >
              {/* Facebook SVG Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            {/* --- END OF FACEBOOK LINK --- */}
  <a 
              href="https://x.com/revivagreen" // <-- REPLACE WITH YOUR TWITTER URL
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block hover:text-green-600 transition-colors duration-300"
              aria-label="RevivaGreen on Twitter"
            >
              {/* Twitter (X) SVG Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
        </div>

        <p>© {new Date().getFullYear()} RevivaGreen. All Rights Reserved.</p>
        <p className="text-sm mt-2">Connecting Communities. Future-Proofing Our Planet.</p>
      </div>
    </footer>
  );
}