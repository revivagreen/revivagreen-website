// app/layout.jsx
import { Poppins, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Configure Poppins for the body text
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

// Configure Playfair Display for headings
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-playfair',
});

// --- START: UPDATED METADATA FOR SEO ---
export const metadata = {
  // This is the new, more descriptive title for your homepage
  title: {
    default: 'RevivaGreen | Waste Management & Recycling Services in Andhra Pradesh',
    template: '%s | RevivaGreen',
  },
  // This is a more keyword-rich description
  description: 'RevivaGreen is the first unified platform for homes and businesses in Andhra Pradesh to manage their recyclable waste efficiently, transparently, and profitably. Schedule your pickup today.',
  
  // This is the new Google Site Verification tag
  verification: {
    google: 'jKxEyDqjvVa__I7TluVSX9bdJ2uIzCnG7PpjrleTaNw',
  },
};
// --- END: UPDATED METADATA FOR SEO ---

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 
        The <head> tag is automatically managed by Next.js. 
        The metadata object above will correctly place the title, description,
        and verification tag in the head.
      */}
      <body className={`${poppins.variable} ${playfair.variable} flex flex-col min-h-screen font-sans bg-[#1a3a30]`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}