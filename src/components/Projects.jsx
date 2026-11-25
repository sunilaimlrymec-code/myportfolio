import { projects, socialLinks } from '../data/portfolioData'

// Inline SVG Icon for GitHub
function GitHubIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

// Inline SVG Icon for External Links
function ExternalLinkIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  )
}

// Individual Project Card with gradient border
function ProjectCard({ project, aosDelay }) {
  const isFlagship = project.isFlagship

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={`p-[1px] rounded-2xl transition-all duration-300 ${
        isFlagship
          ? 'bg-gradient-to-r from-red-500/50 via-white/10 to-red-500/30 hover:from-red-500/80 hover:via-white/30 hover:to-red-500/60 shadow-[0_0_25px_rgba(255,42,42,0.15)]'
          : 'bg-white/10 hover:border-white/20'
      }`}
    >
      <div className="rounded-2xl p-6 md:p-8 backdrop-blur-md bg-[#0f0f0f]/90 h-full flex flex-col justify-between">
        <div>
          {/* Optional Badge */}
          {project.badge && (
            <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest mb-3">
              {project.badge}
            </span>
          )}

          {/* Title and Faint Serif Number */}
          <div className="flex justify-between items-baseline gap-4 mb-3">
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              {project.title}
            </h3>
            <span className="text-5xl font-black italic font-serif text-white/10 select-none">
              {project.number}
            </span>
          </div>

          {/* Description */}
          <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech Tag Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techTags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-3 py-1 bg-white/5 border border-white/10 text-white/80 text-xs font-bold hover:text-white hover:bg-[#ff2a2a]/20 hover:border-[#ff2a2a]/40 transition-colors select-none"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {/* GitHub Button */}
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs md:text-sm inline-flex items-center space-x-2 transition-all"
            >
              <GitHubIcon className="w-4 h-4 fill-current" />
              <span>GitHub</span>
            </a>
          )}

          {/* Demo Button */}
          {project.links?.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#ff2a2a] hover:bg-[#ff4040] text-white font-semibold text-xs md:text-sm inline-flex items-center space-x-2 shadow-lg shadow-red-600/30 transition-all"
            >
              <span>Live Demo</span>
              <ExternalLinkIcon className="w-4 h-4 stroke-current" />
            </a>
          ) : (
            <span
              className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/40 font-semibold text-xs md:text-sm inline-flex items-center space-x-2 cursor-not-allowed select-none"
            >
              <span>Demo Coming Soon</span>
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative"
    >
      {/* Header */}
      <div data-aos="fade-up" className="max-w-4xl mx-auto text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold tracking-widest uppercase mb-4">
          Featured Projects
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4">
          Work that speaks for itself
        </h2>
        <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto">
          Selected full-stack and backend systems built with modern architectures, clean code, and production-grade security.
        </p>
      </div>

      {/* Cards List */}
      <div className="max-w-5xl mx-auto flex flex-col gap-6 md:gap-8 mb-16">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            aosDelay={(index + 1) * 100}
          />
        ))}
      </div>

      {/* Bottom CTA to view all repositories */}
      <div data-aos="fade-up" className="text-center">
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 hover:border-red-500/40 text-white font-bold text-sm md:text-base shadow-lg hover:shadow-[0_0_25px_rgba(255,42,42,0.2)] transition-all duration-300 group"
        >
          <GitHubIcon className="w-5 h-5 fill-current" />
          <span>Explore All My Repositories</span>
          <svg
            className="w-4 h-4 stroke-current transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Projects
