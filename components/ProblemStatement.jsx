// components/ProblemStatement.jsx
import Image from 'next/image';
import AnimatedTextWord from './AnimatedTextWord'

export default function ProblemStatement() {
  return (
    <section className=" text-black py-20 px-4">
        
          
       
      <div className="container mx-auto">
        <h2 className="text-2xl text-[#0067ff] md:text-4xl   font-sans-serif font-semibold  text-center mb-12">
          A Broken System Creates a Shared Challenge
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          
          {/* --- START: Households Card (Pink) --- */}
          {/* We're changing 'bg-gray-50' to 'bg-pink-100' */}
          <div className="md:w-1/2 bg-pink-400 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
            <div className="relative w-full h-56">
              <Image
                src="/hou.png"
                alt="A person sorting household waste for recycling"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl  font-semibold font-sans-serif text-white mb-3">
                For Households
              </h3>
              <p className="leading-relaxed">
                For households, recycling is an inconvenient chore with little reward. Unreliable pickups, opaque weighing, and unfair pricing mean valuable resources end up in landfills because the process is broken.
              </p>
            </div>
          </div>
          {/* --- END: Households Card --- */}

          {/* --- START: Businesses Card (Yellow) --- */}
          {/* We're changing 'bg-gray-50' to 'bg-yellow-100' */}
          <div className="md:w-1/2 bg-yellow-400 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
            <div className="relative w-full h-56">
              <Image
                src="/busi.png"
                alt="Piles of commercial cardboard waste"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold font-sans-serif  text-white mb-3">
                For Businesses
              </h3>
              <p className="leading-relaxed">
                For businesses, waste management is an operational headache and a compliance nightmare. The informal sector can't provide the GST invoices, data reports, or reliable service required by modern, sustainable companies.
              </p>
            </div>
          </div>
          {/* --- END: Businesses Card --- */}

        </div>
      </div>
    </section>
  );
}