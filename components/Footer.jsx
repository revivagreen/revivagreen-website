// components/Footer.jsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-black py-12"> {/* Changed to white background */}
      <div className="container mx-auto text-center">
        
        <div className="mb-6">
            <h3 className="text-3xl font-semibold font-sans-serif text-green-600 mb-1">RevivaGreen</h3>
            <p className="text-base font-semibold font-sans-serif text-yellow-800 mt-1">Connecting Communities. Future-Proofing Our Planet.</p>
          <div className="flex justify-center pt-5 items-center gap-6">

            {/* Instagram Link (Unchanged) */}
            <a 
              href="https://www.instagram.com/revivagreen.in?utm_source=ig_web_button_share_sheet&igsh=bXJqOWR5ZXNhdmdp" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block hover:text-green-600 transition-colors duration-300"
              aria-label="RevivaGreen on Instagram"
            >
              <svg xmlns="http://www.w.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* LinkedIn Link (Unchanged) */}
            <a 
              href="https://www.linkedin.com/posts/revivagreen_revivagreen-sustainability-circulareconomy-activity-7356756660436025345-rjO3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEV7PdUBLWiZeCnai3TYReNHldJL5Kq44k8"
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block hover:text-green-600 transition-colors duration-300"
              aria-label="RevivaGreen on LinkedIn"
            >
              <svg xmlns="http://www.w.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            
            {/* Facebook Link (Unchanged) */}
            <a 
              href="https://www.facebook.com/share/1FcMtTRjoH/"
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block hover:text-green-600 transition-colors duration-300"
              aria-label="RevivaGreen on Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            
            {/* --- START: UPDATED TWITTER/X LINK --- */}
            <a 
              href="https://x.com/revivagreen"
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block hover:text-green-600 transition-colors duration-300"
              aria-label="RevivaGreen on X (formerly Twitter)"
            >
              {/* This is the new SVG for the 'X' logo. It's filled, not stroked. */}
              <svg 
                xmlns="http://www.w.org/2000/svg" 
                width="28"  // Slightly smaller to balance visually with other icons
                height="28"
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
              </svg>
            </a>
            {/* --- END: UPDATED TWITTER/X LINK --- */}

          </div>
        </div>

        <p>&copy; {new Date().getFullYear()} RevivaGreen. All Rights Reserved.</p>
        
      </div>
    </footer>
  );
}