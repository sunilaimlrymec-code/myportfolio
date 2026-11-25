import { internshipsList } from '../data/portfolioData'

// Individual Internship Card
function InternshipCard({ intern, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between shadow-xl"
    >
      <div>
        {/* Top Row: Duration & Internship Badge */}
        <div className="flex justify-between items-center mb-4">
          <span className="font-mono text-xs text-white/60 uppercase tracking-wider">
            {intern.duration}
          </span>
          <span className="px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest select-none">
            Internship
          </span>
        </div>

        {/* Role & Organization */}
        <h3 className="text-2xl font-black text-white tracking-tight mb-1">
          {intern.role}
        </h3>
        <p className="uppercase text-red-200 text-xs font-bold tracking-widest mb-6">
          {intern.organization}
        </p>

        {/* Skills Gained Bulleted List */}
        <div className="mb-6">
          <p className="text-xs uppercase tracking-wider text-white/70 font-bold mb-2">
            Skills Gained:
          </p>
          <ul className="space-y-1.5">
            {intern.skills?.map((skill, i) => (
              <li
                key={i}
                className="text-white/90 text-sm flex items-start space-x-2"
              >
                <span className="text-black font-black select-none leading-tight">
                  •
                </span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Technologies Row at Bottom */}
      <div className="pt-4 border-t border-white/10 mt-4">
        <p className="text-[10px] uppercase tracking-wider text-white/50 font-semibold mb-2">
          Technologies:
        </p>
        <div className="flex flex-wrap gap-2">
          {intern.tech?.map((t, i) => (
            <span
              key={i}
              className="font-mono text-xs px-2.5 py-1 rounded-md bg-black/40 text-white/90 border border-white/10"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function Internships() {
  return (
    <section className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* Top Edge Torn-Paper SVG Divider (flows from the previous dark section) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none rotate-180 -translate-y-[1px]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20 fill-[#0a0a0a] block"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* Decorative pulsing black star: Bottom-Left */}
      <svg
        className="absolute bottom-8 left-8 w-10 h-10 text-black opacity-20 animate-pulse pointer-events-none"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* Centred Header */}
      <div data-aos="fade-up" className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black uppercase tracking-tight mb-4">
          Work Experience
        </h2>
        <p className="text-red-100 text-sm md:text-base max-w-2xl mx-auto font-medium">
          Hands-on professional training, enterprise project architectures, and engineering internships.
        </p>
      </div>

      {/* Grid of Internship Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
        {internshipsList.map((intern, index) => (
          <InternshipCard
            key={intern.organization + index}
            intern={intern}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

export default Internships
