// components/Hero.jsx

import Link from 'next/link';


// ... (your variant objects remain the same) ...

export default function Hero() {
  

  return (
    <section className="relative text-black -m-6">
      <div className="container mx-auto flex flex-col items-center justify-center min-h-screen text-center px-4 -mt-20">
        
        <div className="relative max-w-6xl pt-12 shadow-w-full">
          
          {/* --- 4. ATTACH THE REF TO THE ELEMENT --- */}
           <div className="relative bg-[#FED600] text-black rounded-2xl shadow-lg px-12 py-40 mt-32 flex-col items-center justify-start ">
            {/* The heading is now a standard, non-animated h1 tag */}
             <h1 className="font-sans-serif font-semibold text-5xl md:text-6xl items-start text-center -mt-24 leading-tight">
              Waste is a Resource. We Make it Valuable. For Everyone.
            </h1>
          </div>
        </div>
         <div className="relative max-w-5xl w-full"> 
          <div className="relative bg-green-600 text-black rounded-2xl shadow-lg p-8 z-20 -mt-36 mx-auto w-11/12">
               <p className="text-lg md:text-xl ">
              RevivaGreen is the first unified platform 
              in Andhra Pradesh for homes and businesses to 
              manage their recyclable waste efficiently, 
              transparently, and profitably.
            </p>
          

        
        {/* --- END OF NEW CONTAINER STRUCTURE --- */}
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center pt-5">
            <Link href="/households">
              <button className="border-2  bg-white hover:bg-orange-400 hover:text-black text-black font-semibold font-sans-serif py-3 px-8 rounded-lg text-lg transition-colors">
                For My Home
              </button>
            </Link>
            <Link href="/businesses">
              <button className="border-2  bg-white hover:bg-orange-400 hover:text-black text-black font-semibold font-sans-serif py-3 px-8 rounded-lg text-lg transition-colors">
                For My Business
              </button>
            </Link>
          </div>
          </div>
          </div>

        </div>
      
    </section>
  );
}