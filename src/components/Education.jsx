import { educationList, certificates } from '../data/portfolioData'

// Individual Education Card Component
function EducationCard({ item, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-red-500/40 hover:shadow-[0_10px_35px_rgba(255,42,42,0.15)] hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        {/* Top Meta Row: Badge & Duration */}
        <div className="flex justify-between items-center mb-6">
          <span className="px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-bold text-[11px] uppercase tracking-wider">
            {item.badge}
          </span>
          <span className="font-mono text-xs text-white/60 uppercase tracking-wider">
            {item.duration}
          </span>
        </div>

        {/* Institution & Icon */}
        <div className="flex items-start space-x-3 mb-3">
          <span className="text-2xl select-none shrink-0 mt-0.5">{item.icon}</span>
          <div>
            <h3 className="text-xl font-black text-white group-hover:text-red-400 transition-colors leading-snug">
              {item.institution}
            </h3>
            <p className="text-xs text-white/50 font-medium">{item.location}</p>
          </div>
        </div>

        {/* Degree Title */}
        <p className="text-sm font-semibold text-white/90 mb-4 leading-relaxed">
          {item.degree}
        </p>

        {/* Score Pill */}
        <div className="mb-6">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white font-mono text-xs font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a2a]" />
            <span>{item.score}</span>
          </span>
        </div>

        {/* Key Highlights */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-white/60 mb-2.5">
            Key Highlights:
          </p>
          <ul className="space-y-2">
            {item.highlights.map((highlight, i) => (
              <li
                key={i}
                className="text-white/80 text-xs sm:text-sm flex items-start space-x-2 leading-relaxed"
              >
                <span className="text-[#ff2a2a] font-black select-none leading-tight mt-0.5">
                  •
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function Education() {
  return (
    <section
      id="education"
      className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background Ambience Glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header Block */}
      <div data-aos="fade-up" className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] text-xs font-bold tracking-widest uppercase mb-4">
          Academic Journey
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
          Educational Background
        </h2>
        <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          My academic foundation in computer science, software engineering, mathematics, and analytical problem-solving.
        </p>
      </div>

      {/* Education Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 relative z-10 mb-16">
        {educationList.map((item, index) => (
          <EducationCard key={item.badge + index} item={item} index={index} />
        ))}
      </div>

      {/* Professional Certifications Bar */}
      {certificates?.featured && certificates.featured.length > 0 && (
        <div
          data-aos="fade-up"
          className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10"
        >
          <div className="flex items-center space-x-4">
            <span className="text-3xl select-none">🏆</span>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">
                Verified Credentials & Certifications
              </h3>
              <p className="text-white/60 text-xs md:text-sm">
                Industry certifications in Java, Spring Boot, and Full-Stack Development.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 items-center">
            {certificates.featured.map((cert, idx) => (
              <span
                key={idx}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-semibold"
              >
                <span>{cert.icon}</span>
                <span>{cert.name}</span>
                <span className="text-white/40">({cert.issuer})</span>
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default Education
