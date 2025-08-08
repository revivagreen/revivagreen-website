import Link from 'next/link';

// --- 1. ADD AN ARRAY OF COLORS ---
const cardColors = [
    'bg-teal-400',
    'bg-red-400',
    'bg-lime-400',
];
// --- END OF COLOR ARRAY ---

// We define our data here to keep the code clean and easy to update.
const materialsData = [
  { category: "Paper & Cardboard", description: "All types of clean and dry paper, including newspapers, magazines, office paper, and cardboard boxes.", examples: "Examples: Cereal boxes, shipping boxes, junk mail, books." },
  { category: "Plastics", description: "We accept plastic bottles and containers with symbols #1 (PETE) and #2 (HDPE). Please rinse all containers.", examples: "Examples: Water bottles, milk jugs, detergent bottles." },
  { category: "Glass", description: "Clean glass bottles and jars of all colors. Please remove lids and caps.", examples: "Examples: Beverage bottles, food jars (pickles, sauces)." },
];

export default function WhatWeCollect() {
  return (
    <div className=" text-black">
      <div className="container mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl  md:text-5xltext-4xl text-[#0067ff] md:text-4xl   font-sans-serif font-semibold  text-center mb-12max-w-4xl mx-auto   mb-4">
            What We Collect
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-black">
            We make it easy to recycle a wide variety of materials.
          </p>
        </div>

        {/* --- 2. UPDATE THE MAPPING FUNCTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materialsData.map((material, index) => (
            // We now use a template literal to dynamically add the color class
            <div key={material.category} className={`${cardColors[index % cardColors.length]} p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300`}>
              <h3 className="text-3xl font  font-semibold font-sans-serif text-white mb-3">{material.category}</h3>
              <p className="text-black mb-6">{material.description}</p>
              <p className="text-sm text-white">{material.examples}</p>
            </div>
          ))}
        </div>
        {/* --- END OF UPDATE --- */}
        
        <div className="text-center mt-16">
            <Link href="/what-we-collect">
                <button className="border-2 border-black bg-[#ffaa1d] hover:bg-white hover:text-black text-black font-semibold font-sans-serif py-3 px-8 rounded-lg text-lg transition-colors">
                    See All Accepted Materials
                </button>
            </Link>
        </div>
      </div>
    </div>
  );
}