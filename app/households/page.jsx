// app/households/page.jsx
import Link from 'next/link';

export default function HouseholdsPage() {
  return (
    // Main page container with top padding
    <div className=" text-black pt-26">
      <div className="container mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h1 className=" mb-4 text-4xl text-[#0067ff] md:text-4xl   font-sans-serif font-semibold  text-center mb-12max-w-4xl mx-auto">Recycling Made Easy for Your Home</h1>
          <p className="text-lg max-w-3xl mx-auto text-[#000000]">
            Turn your household waste into real value. With RevivaGreen, recycling is simple, transparent, and rewarding.
          </p>
        </div>

        {/* --- START: NEW LIGHT BROWN CONTAINER --- */}
        {/* We use 'bg-orange-100' for a soft, light brown/tan color */}
        <div className="max-w-4xl mx-auto bg-orange-400 p-8 sm:p-12 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center font-sans-serif sm:text-left">How It Works:</h2>
          <ul className="list-decimal list-inside space-y-6 text-white text-lg">
            <li>
              <span className="font-semibold font-sans-serif text-white">Schedule a Pickup:</span> 
              <span className="text-black"> Use our simple app or even WhatsApp to book a pickup time that works for you. No more waiting around!</span>
            </li>
            <li>
              <span className="font-semibold font-sans-serif text-white">Transparent Weighing:</span> 
              <span className="text-black"> Our agent arrives with a calibrated digital scale. You see the exact weight of your materials on the spot.</span>
            </li>
            <li>
              <span className="font-semibold font-sans-serif text-white">Instant Payment:</span> 
              <span className="text-black"> Get paid instantly for your recyclables via UPI. The price is fair, transparent, and there's no haggling involved.</span>
            </li>
            <li>
              <span className="font-semibold font-sans-serif text-white">Track Your Impact:</span> 
              <span className="text-black"> See how your efforts contribute to a greener planet. Track the number of trees and the amount of water you've saved right in our app.</span>
            </li>
          </ul>
        </div>
        {/* --- END: NEW LIGHT BROWN CONTAINER --- */}

        <div className="text-center mt-20">
          <Link href="/">
            <button className="border-2 border-black bg-green-700 hover:bg-white hover:text-black text-white font-sans-serif font-semibold font-sans-serif py-3 px-8 rounded-lg text-lg transition-colors">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}