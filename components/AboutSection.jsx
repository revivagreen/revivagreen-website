// components/AboutSection.jsx
import Link from 'next/link';

// --- 1. DEFINE THE DATA AND COLORS IN ONE PLACE ---
const valuesData = [
  {
    title: "Transparency",
    description: "From digital scales to clear pricing and data reports, we ensure every step of the process is clear and honest.",
    color: "bg-[#8a2be1]" // A light blue tint
  },
  {
    title: "Sustainability",
    description: "Our core purpose is to build a circular economy, reduce landfill waste, and create a healthier planet.",
    color: "bg-[#f000ff]" // A light green tint
  },
  {
    title: "Shared Profit",
    description: "We believe recycling should be rewarding. We offer fair, competitive prices for your materials.",
    color: "bg-[#ff009f]" 
  }
];

export default function AboutSection() {
  return (
    <div className=" text-black ">
      <div className="container mx-auto py-20 px-4">

        <div className="text-center max-w-4xl mx-auto">
          <h2 className=" text-2xl text-[#0067ff] md:text-4xl   font-sans-serif font-semibold  text-center mb-12max-w-4xl mx-auto  mb-4">Our Mission</h2>
          <p className="text-lg md:text-xl text-black leading-relaxed  mb-12">
            To revolutionize waste management by creating a transparent, profitable, and sustainable ecosystem for both households and businesses.
          </p>
        </div>

        {/* --- 2. UPDATE THE MAPPING FUNCTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {valuesData.map((value) => (
            // We now use a template literal to dynamically add the color from our data
            <div key={value.title} className={`${value.color} p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300`}>
              <h3 className="text-2xl  font-semibold font-sans-serif text-white mb-3">{value.title}</h3>
              <p className="text-black ">{value.description}</p>
            </div>
          ))}
        </div>
        {/* --- END OF UPDATE --- */}

        <div className="text-center mt-16">
          <Link href="/about">
            <button className="border-2 bg-[#66ff4a] border-black hover:bg-white hover:text-black text-black font-semibold font-sans-serif py-3 px-8 rounded-lg text-lg transition-colors">
              Learn More About Us
            </button>
          </Link>
        </div>
        
      </div>
    </div>
  );
}