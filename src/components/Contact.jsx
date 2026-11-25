import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData'

function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  // Parallax scroll effect on the giant background typography
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  // Form submit handler with fallback to mailto if EmailJS is not configured
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')

    const form = formRef.current
    if (!form) return

    const firstName = form.first_name?.value?.trim() || ''
    const lastName = form.last_name?.value?.trim() || ''
    const email = form.user_email?.value?.trim() || ''
    const message = form.message?.value?.trim() || ''

    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    const { serviceId, templateId, publicKey } = emailjsConfig
    const isConfigured =
      Boolean(serviceId && templateId && publicKey) &&
      serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'

    // If EmailJS credentials are not configured, open pre-composed mailto
    if (!isConfigured) {
      const subject = `Portfolio Contact from ${firstName} ${lastName}`.trim()
      const body = `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`,
        '_blank'
      )
      setStatus('success')
      form.reset()
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    // Dynamic import of EmailJS browser client
    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.sendForm(serviceId, templateId, form, publicKey)
      setStatus('success')
      form.reset()
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      console.error('EmailJS send error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex flex-col justify-center py-24 md:py-32 border-t border-gray-900"
    >
      {/* Background Giant Parallax Word: "Contact" */}
      <motion.div
        style={{ y }}
        className="absolute top-8 left-6 md:left-12 pointer-events-none z-0 select-none overflow-hidden"
      >
        <div
          className="text-[22vw] leading-[0.75] font-black uppercase tracking-tighter text-white/5 scale-y-[1.4] origin-top-left"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* Main Container centered and aligned with the site */}
      <div className="w-full max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        {/* Red Contact Card */}
        <div
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full p-8 sm:p-12 md:p-16 rounded-3xl shadow-2xl relative"
        >
          {/* Header Row */}
          <div className="flex justify-between items-center mb-10 pb-4 border-b border-white/20">
            <span className="text-white font-black text-xs uppercase tracking-[0.2em]">
              Reach Me
            </span>
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-sm"
              >
                DM on Instagram
              </a>
            )}
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-10"
          >
            {/* Two-Column Inputs on md+ with matching heights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
              {/* Left Column: Name & Email */}
              <div className="flex flex-col justify-between space-y-6 md:space-y-8">
                <div className="flex flex-col">
                  <input
                    id="firstName"
                    name="first_name"
                    type="text"
                    required
                    placeholder="First Name *"
                    className="w-full bg-transparent border-0 border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    id="lastName"
                    name="last_name"
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-transparent border-0 border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    id="email"
                    name="user_email"
                    type="email"
                    required
                    placeholder="Email Address *"
                    className="w-full bg-transparent border-0 border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              {/* Right Column: Message Box */}
              <div className="flex flex-col h-full">
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your Message *"
                  className="w-full flex-1 min-h-[180px] md:min-h-full resize-none bg-white/10 hover:bg-white/15 focus:bg-white/15 border border-white/25 focus:border-white rounded-2xl p-4 text-lg placeholder-white/80 text-white focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Bottom Section: Checkbox, Notes, and Submit Button */}
            <div className="flex flex-col space-y-6 pt-6 border-t border-white/15">
              {/* Consent Checkbox */}
              <label className="flex items-center space-x-3 text-white/90 text-sm cursor-pointer select-none">
                <input
                  type="checkbox"
                  required
                  className="w-4 h-4 rounded accent-black cursor-pointer shrink-0"
                />
                <span>
                  I agree that my submitted information will be used to respond
                  to my inquiry.
                </span>
              </label>

              {/* Info Note on Left & Submit Button on Right */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-2">
                <div className="flex flex-col space-y-1.5 text-xs text-white/80">
                  <p>
                    Your message will be sent directly to my inbox. I typically
                    respond within 24-48 hours.
                  </p>
                  <p>
                    For urgent inquiries:{' '}
                    <a
                      href={`mailto:${personalInfo.emails.primary}`}
                      className="underline font-bold hover:text-black transition-colors"
                    >
                      {personalInfo.emails.primary}
                    </a>
                  </p>
                </div>

                {/* Submit Button */}
                <div className="shrink-0">
                  {status === 'sending' && (
                    <button
                      type="button"
                      disabled
                      className="px-8 py-4 rounded-full bg-black/40 text-white/60 border border-white/20 font-bold text-base cursor-not-allowed inline-flex items-center space-x-3"
                    >
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                      <span>Sending...</span>
                    </button>
                  )}

                  {status === 'success' && (
                    <div className="px-8 py-4 rounded-full bg-green-600 text-white font-bold text-base border border-green-500 inline-flex items-center space-x-2 shadow-lg">
                      <span>Sent Successfully ✓</span>
                    </div>
                  )}

                  {status === 'error' && (
                    <button
                      type="submit"
                      className="px-8 py-4 rounded-full bg-red-950 text-white font-bold text-base border border-red-700 hover:bg-red-900 inline-flex items-center space-x-2 transition-colors cursor-pointer"
                    >
                      <span>Failed — Try Again</span>
                    </button>
                  )}

                  {status === 'idle' && (
                    <button
                      type="submit"
                      className="px-8 py-4 rounded-full border border-white bg-transparent text-white font-bold text-base hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 inline-flex items-center space-x-3 group cursor-pointer shadow-lg"
                    >
                      <span>Send Message</span>
                      <svg
                        className="w-5 h-5 stroke-current transition-transform duration-300 group-hover:translate-x-1"
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
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
