// components/SolutionTabs.jsx
"use client";

import { useState } from 'react';

// Data for the different tabs (remains the same)
const householdSteps = [
  { title: "1. Schedule with a Tap.", description: "Clean out your home, then use our simple app or WhatsApp to choose a pickup time that fits your life." },
  { title: "2. Transparent Weighing & Instant Pay.", description: "Our professional agent arrives with a calibrated digital scale. You see the weight, you see the rate, and you get paid instantly via UPI. No haggling, no doubt." },
  { title: "3. Track Your Impact.", description: "Enjoy a cleaner home and a greener planet. You can track your positive environmental impact—like trees and water saved—right in your app." }
];

const businessSteps = [
    { title: "1. Custom Waste Management Plan.", description: "We start with a free waste audit to understand your needs, then partner with you to create a reliable, scheduled pickup plan that works for your operations." },
    { title: "2. Professional & Compliant Service.", description: "Our uniformed team provides timely, documented pickups. We provide GST-compliant invoices for every transaction and can offer specialized services like secure data destruction." },
    { title: "3. Data for Your Sustainability Goals.", description: "We provide you with detailed monthly reports showing the exact tonnage of waste you've diverted from landfills, helping you meet your corporate sustainability and ESG goals." }
];

// --- 1. ADD AN ARRAY OF COLORS ---
const cardColors = [
    'bg-green-500',
    'bg-blue-500',
    'bg-purple-500',
];
// --- END OF COLOR ARRAY ---

export default function SolutionTabs() {
  const [activeTab, setActiveTab] = useState('households');
  const steps = activeTab === 'households' ? householdSteps : businessSteps;

  return (
    <section className=" text-black py-20 px-4">
      <div className="container mx-auto">
        <div className="text-4xl text-[#0067ff] md:text-4xl   font-sans-serif font-semibold  text-center mb-12max-w-4xl mx-auto">
            <h2 className="text-4xl  md:text-4xl  mb-6">
            One Platform. A Tailored Experience for You.
            </h2>
        </div>
        
        <div className="flex justify-center my-10 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('households')}
            className={`py-3 px-8 text-lg font-semibold font-sans-serif transition-colors duration-300 ${activeTab === 'households' ? 'border-b-2 border-reviva-green text-reviva-green' : 'text-black'}`}
          >
            For Households
          </button>
          <button
            onClick={() => setActiveTab('businesses')}
            className={`py-3 px-8 text-lg font-semibold font-sans-serif transition-colors duration-300 ${activeTab === 'businesses' ? 'border-b-2 border-reviva-green text-reviva-green' : 'text-black'}`}
          >
            For Businesses
          </button>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* --- 2. UPDATE THE MAPPING FUNCTION --- */}
          {steps.map((step, index) => (
            // We now use a template literal to dynamically add the color class
            <div key={index} className={`${cardColors[index % cardColors.length]} p-6 rounded-lg shadow-md`}>
              <h3 className="text-3xl font-semibold font-sans-serif text-white mb-2">{step.title}</h3>
              <p className="text-black leading-relaxed">{step.description}</p>
            </div>
          ))}
          {/* --- END OF UPDATE --- */}
        </div>
      </div>
    </section>
  );
}