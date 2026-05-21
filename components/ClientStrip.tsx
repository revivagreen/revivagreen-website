'use client'

const LOGOS = [
  { name: 'Lakshmi Group',    abbr: 'LM'  },
  { name: 'CCL Products',     abbr: 'CC' },
  { name: 'Varun Group',      abbr: 'VG'  },
  { name: 'Pruthvi Toyota',   abbr: 'MRB'  },
  { name: 'Client Five',      abbr: 'C5'  },
  { name: 'Client Six',       abbr: 'C6'  },
]

// ─── REPLACE THE abbr PLACEHOLDERS WITH YOUR ACTUAL LOGO <img> TAGS
// when you have real logos. Each logo should be:
//   <img src="/images/logos/client-name.svg" alt="Client Name" className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300" />

export default function ClientStrip() {
  return (
    <section className="bg-white border-y border-[#D3D1C7]" aria-label="Trusted clients">
      <div className="container py-8">

        {/* Label */}
        <p className="text-center text-[13px] font-medium uppercase tracking-[0.08em] text-[#888780] mb-8">
          Trusted by leading businesses in Andhra Pradesh
        </p>

        {/* Logo row */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default"
              title={logo.name}
            >
              {/* PLACEHOLDER — replace this div with your real <img> tag */}
              <div className="h-10 px-5 bg-[#F5F0E8] rounded flex items-center justify-center">
                <span className="text-[13px] font-semibold text-[#5A5850] tracking-wide">
                  {logo.abbr}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}