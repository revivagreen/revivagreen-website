// app/businesses/page.jsx
import Link from 'next/link';

export default function BusinessesPage() {
  return (
    // --- THIS IS THE LINE WE'RE CHANGING ---
    // We are adding padding-top (pt-32) to the main container div
    <div className=" text-black pt-26">
    {/* --- END OF CHANGE --- */}
      <div className="container mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h1 className="mb-4 text-3xl text-[#0067ff]   font-sans-serif font-semibold  text-center mb-12max-w-4xl mx-auto">Solutions for Your Business</h1>
          <p className="text-lg max-w-3xl mx-auto text-black">
            Streamline your waste management, meet compliance standards, and enhance your corporate sustainability goals with RevivaGreen.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-purple-400 p-8 sm:p-12 rounded-lg shadow-lg">
           <div className="max-w-4xl mx-auto text-left">
             <h2 className="text-2xl font-sans-serif font-semibold text-white mb-6">Our Services Include:</h2>
              <ul className="list-disc list-inside space-y-4 text-lg">
               <li>Reliable, scheduled pickups for all your recyclable materials.</li>
               <li>Transparent, digital weighing and immediate payment processing.</li>
               <li>GST-compliant invoicing and detailed data reports for your records.</li>
               <li>Customized waste management plans for offices, restaurants, and industrial facilities.</li>
               <li>Dedicated account management and support.</li>
              </ul>
           </div>
        </div>
        <div className="text-center mt-20">
          <Link href="/">
            <button className="border-2 border-black bg-green-700 hover:bg-white hover:text-black text-white font-semibold font-sans-serif py-3 px-8 rounded-lg text-lg transition-colors">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}