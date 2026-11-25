import { useRef, useState } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from 'framer-motion'
import { skillsContent } from '../data/portfolioData'

// Individual Hanging Tag Card with active scroll highlight
function TagCard({
  number,
  title,
  text,
  className,
  aosDelay,
  aosType,
  pathLength,
  containerRef,
}) {
  const cardRef = useRef(null)
  const [isActive, setIsActive] = useState(false)

  // Track the scroll line progress and activate the card when the line reaches it
  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!cardRef.current || !containerRef.current) return
    const containerRect = containerRef.current.getBoundingClientRect()
    const cardRect = cardRef.current.getBoundingClientRect()
    const containerHeight = containerRect.height || 1350
    const cardTopRelativeToContainer = cardRect.top - containerRect.top
    const lineTip = latest * containerHeight
    setIsActive(lineTip >= cardTopRelativeToContainer + 50)
  })

  return (
    <div
      ref={cardRef}
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 transition-all duration-700 ${
        isActive
          ? 'bg-[#ff2a2a] shadow-[0_15px_35px_rgba(255,42,42,0.35)] scale-[1.02]'
          : 'bg-white shadow-xl border border-gray-100 hover:scale-[1.01]'
      } ${className}`}
    >
      {/* Small punched hole circle at the top */}
      <div
        className={`w-5 h-5 rounded-full mx-auto border-2 transition-colors duration-700 ${
          isActive
            ? 'bg-red-800 border-red-400'
            : 'bg-gray-200 border-gray-300'
        }`}
      />

      {/* Inner rounded panel */}
      <div
        className={`mt-4 p-6 sm:p-8 min-h-[220px] rounded-[1.5rem] flex flex-col justify-between transition-colors duration-700 ${
          isActive
            ? 'bg-red-700/50 text-white'
            : 'bg-[#f4f4f4] text-gray-800'
        }`}
      >
        <div>
          {/* Serif italic number */}
          <span
            className={`text-4xl font-serif italic mb-2 block select-none transition-colors duration-700 ${
              isActive ? 'text-white/40' : 'text-gray-400'
            }`}
          >
            {number}
          </span>
          {/* Title */}
          <h3
            className={`text-2xl font-black tracking-tight mb-2 transition-colors duration-700 ${
              isActive ? 'text-white' : 'text-gray-900'
            }`}
          >
            {title}
          </h3>
        </div>
        {/* Description text */}
        <p
          className={`text-sm leading-relaxed transition-colors duration-700 ${
            isActive ? 'text-white/90' : 'text-gray-600'
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  )
}

function Services() {
  const containerRef = useRef(null)

  // Measure scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  // Smooth the scroll animation with spring physics
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  // Desktop S-curve SVG path
  const desktopPath =
    'M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200'

  // Card layout configuration
  const cardConfigs = [
    {
      className:
        'md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6',
      aosType: 'fade-left',
      aosDelay: 100,
    },
    {
      className:
        'md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6',
      aosType: 'fade-right',
      aosDelay: 200,
    },
    {
      className:
        'md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3',
      aosType: 'fade-left',
      aosDelay: 300,
    },
    {
      className:
        'md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3',
      aosType: 'fade-right',
      aosDelay: 400,
    },
  ]

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        {/* Header Block */}
        <div
          data-aos="fade-up"
          className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-12 md:mb-0"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] text-xs font-bold tracking-widest uppercase mb-4">
            {skillsContent.badge}
          </span>
          <div className="relative inline-block mb-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-gray-900">
              {skillsContent.heading}
            </h2>
            {/* Hand-drawn arrow SVG */}
            <svg
              className="absolute -bottom-2 -right-8 w-6 h-6 text-[#ff2a2a]"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" />
            </svg>
          </div>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            {skillsContent.description}
          </p>
        </div>

        {/* Desktop Animated SVG Dashed Path */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
        >
          {/* Layer 1: Faint guide path */}
          <path
            d={desktopPath}
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
          />

          {/* Layer 2: Animated reveal mask */}
          <mask id="path-mask">
            <motion.path
              d={desktopPath}
              fill="none"
              stroke="white"
              strokeWidth="20"
              style={{ pathLength }}
            />
          </mask>

          {/* Layer 3: Active dashed path */}
          <path
            d={desktopPath}
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="8 10"
            mask="url(#path-mask)"
          />
        </svg>

        {/* Mobile Animated SVG Dashed Path */}
        <svg
          className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-4 h-full pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >
          {/* Layer 1: Faint mobile guide */}
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />

          {/* Layer 2: Mobile animated mask */}
          <mask id="path-mask-mobile">
            <motion.path
              d="M 2,0 L 2,100"
              fill="none"
              stroke="white"
              strokeWidth="20"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength }}
            />
          </mask>

          {/* Layer 3: Active mobile dashed path */}
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
            mask="url(#path-mask-mobile)"
          />
        </svg>

        {/* Cards Container */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10">
          {skillsContent.cards.map((card, index) => {
            const config = cardConfigs[index] || {}
            return (
              <TagCard
                key={card.number}
                number={card.number}
                title={card.title}
                text={card.text}
                className={config.className || ''}
                aosType={config.aosType || 'fade-up'}
                aosDelay={config.aosDelay || 100}
                pathLength={pathLength}
                containerRef={containerRef}
              />
            )
          })}
        </div>

        {/* Handwritten End Note */}
        <div className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6 select-none">
          {skillsContent.endText}
        </div>
      </div>
    </section>
  )
}

export default Services
