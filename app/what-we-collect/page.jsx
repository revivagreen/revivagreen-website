import Link from 'next/link';
import Image from 'next/image';

// --- 1. ADD AN ARRAY OF COLORS ---
// We'll use soft tints for a clean, modern look.
const cardColors = [
  'bg-teal-400',
  'bg-blue-400',
  'bg-purple-400',
  'bg-yellow-400',
  'bg-pink-400',
  'bg-[#ff00ff]', // A neutral color for the last item
];
// --- END OF COLOR ARRAY ---

const materialsData = [
  { category: "Paper & Cardboard", description: "All types of clean and dry paper, including newspapers, magazines, office paper, and cardboard boxes.", examples: "Examples: Cereal boxes, shipping boxes, junk mail, books.", 
     imageUrl: "/paper.png" },
  { category: "Plastics", description: "We accept plastic bottles and containers with symbols #1 (PETE) and #2 (HDPE). Please rinse all containers.", examples: "Examples: Water bottles, milk jugs, detergent bottles.", 
      imageUrl: "/plastic1.png" },
  { category: "Glass", description: "Clean glass bottles and jars of all colors. Please remove lids and caps.", examples: "Examples: Beverage bottles, food jars (pickles, sauces).",
       imageUrl: "/glass.png" },
  { category: "Metals", description: "Aluminum and steel (tin) cans. Food residue should be rinsed out.", examples: "Examples: Soda cans, soup cans, vegetable cans.", 
      imageUrl: "/metal.png" },
  { category: "E-Waste", description: "Electronic waste requires special handling. We accept a range of small to medium-sized electronics.", examples: "Examples: Old phones, laptops, chargers, keyboards, small appliances.", 
      imageUrl: "/e waste.png" },
  { category: "Other Materials", description: "For items not listed, please contact us. We handle specific industrial and bulk materials on a case-by-case basis.", examples: "Contact us for inquiries about batteries, textiles, or large scrap.",
      imageUrl: "/other waste.png" }
];

export default function WhatWeCollectPage() {
  return (
    <div className=" text-black pt-26">
      <div className="container mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xltext-4xl text-[#0067ff] md:text-4xl   font-sans-serif   text-center mb-12max-w-4xl mx-auto font-bold mb-4">What We Collect</h1>
          <p className="text-lg max-w-3xl mx-auto text-[#000000]">We make it easy to recycle a wide variety of materials. Please ensure items are relatively clean to help us process them efficiently.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* --- 2. UPDATE THE MAPPING FUNCTION --- */}
          {materialsData.map((material, index) => (
            // The template literal now dynamically assigns a background color
            <div key={material.category} className={`${cardColors[index % cardColors.length]} rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col`}>
              <div className="relative w-full h-56">
                <Image
                  src={material.imageUrl}
                  alt={`An image of ${material.category} for recycling`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-2xl font-semibold font-sans-serif text-white  mb-3">{material.category}</h2>
                <p className="text-[#000000] mb-6 flex-grow">{material.description}</p>
                <p className="text-sm text-white">{material.examples}</p>
              </div>
            </div>
          ))}
          {/* --- END OF UPDATE --- */}
        </div>
        <div className="text-center mt-20">
          <Link href="/"><button className="border-2 border-black bg-green-700 hover:bg-white hover:text-black text-white font-semibold font-sans-serif py-3 px-8 rounded-lg text-lg transition-colors">Back to Home</button></Link>
        </div>
      </div>
    </div>
  );
}
