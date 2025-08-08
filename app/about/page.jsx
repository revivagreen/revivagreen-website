// app/about/page.jsx
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Our Mission',
  description: 'Learn about the mission and principles that guide RevivaGreen. We are committed to transparency, sustainability, and creating a circular economy.',
};

// --- 1. CREATE A STRUCTURED ARRAY FOR YOUR VALUES ---
const valuesData = [
  {
    title: "Transparency",
    description: "From digital scales to clear pricing and data reports, we ensure every step of the process is clear and honest. No haggling, no doubts.",
    color: "bg-orange-500"
  },
  {
    title: "Sustainability",
    description: "Our core purpose is to build a circular economy, reduce landfill waste, and create a healthier planet for future generations.",
    color: "bg-green-600"
  },
  {
    title: "Shared Profit",
    description: "We believe recycling should be rewarding. We offer fair, competitive prices to ensure that both our clients and the environment profit.",
    color: "bg-yellow-600"
  }
];

export default function AboutPage() {
  return (
    <div className=" text-[#000000] pt-26">
      <div className="container mx-auto py-20 px-4">

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl  text-[#0067ff] md:text-4xl   font-sans-serif font-semibold  text-center mb-12max-w-4xl mx-autofont-bold mb-4">
            Our Mission
          </h1>
          <p className="text-lg md:text-xl text-[#000000] leading-relaxed">
            To revolutionize waste management by creating a transparent, profitable, and sustainable ecosystem for both households and businesses. We believe that waste is not an end-product, but a valuable resource waiting to be revived.
          </p>
        </div>

        <div className="mt-20">
          <h2 className=" text-[#0067ff] md:text-4xl   font-sans-serif font-semibold  text-center mb-12max-w-4xl mx-auto mb-12">
            The Principles That Guide Us
          </h2>
          
          {/* --- 2. UPDATE THE JSX TO MAP OVER THE DATA --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {valuesData.map((value) => (
              // The background color is now dynamically set from our data array
              <div key={value.title} className={`${value.color} p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300`}>
                <h3 className="text-2xl font-semibold font-sans-serif text-white mb-3">{value.title}</h3>
                <p className="text-[#000000]">{value.description}</p>
              </div>
            ))}
          </div>
          {/* --- END OF UPDATE --- */}

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