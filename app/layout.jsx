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

export const metadata = {
  title: {
    template: '%s | RevivaGreen',
    default: 'RevivaGreen - Waste Management Reimagined',
  },
  description: 'The unified platform for homes and businesses to manage their recyclable waste efficiently, transparently, and profitably.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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