// ============================================================
// portfolioData.js — Portfolio Information
// All content and links across the portfolio are defined here.
// ============================================================

export const personalInfo = {
  name: "H Sunil Kumar",
  firstName: "H Sunil Kumar",
  brandName: "H Sunil Kumar", // shown in preloader, navbar and footer
  title: "Java Full-Stack Developer",
  location: "Bangalore, India",
  phone: "9902407808",
  emails: {
    primary: "sunil.aiml.rymec@gmail.com",
    secondary: "",
  },
  summary: "2026 Computer Science graduate and Java Full-Stack Developer passionate about building scalable web applications using Java, Spring Boot, SQL, and modern web technologies.",
  resumeUrl: "/sunilKumar.pdf", // located in /public
};

// JSpiders — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "JSpiders",
  url: "https://qspiders.com/branches/btm-jspiders?branchId=8-branchId",
};

export const socialLinks = {
  github: "https://github.com/sunilaimlrymec-code",
  linkedin: "https://www.linkedin.com/in/sunil-kumar-h-b14015351/",
  instagram: "https://www.instagram.com/sunilkumarr.01/?hl=en",
};

export const heroContent = {
  greeting: "Hi, I'm H Sunil Kumar",
  titleHighlight: "Java Full-Stack Developer",
  subtitle: "Building robust, scalable full-stack applications with Java, Spring Boot, and modern responsive frontends.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:sunil.aiml.rymec@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello H Sunil Kumar,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/sunilKumar.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML rendered safely with personal trusted text
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">H Sunil Kumar</span>, a 2026 Computer Science graduate with hands-on experience in Java Full-Stack Development, Spring Boot, Hibernate, REST APIs, and SQL. I have built projects including a Smart Placement Management System and contributed to open-source Java projects on GitHub, while sharpening my skills through the placement training program at JSpiders. I enjoy solving complex logic problems, learning modern architectures, and building practical software solutions.`,
  techStack: ["Java", "Spring Boot", "Hibernate", "REST APIs", "React", "MySQL", "PostgreSQL", "Git"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A disciplined, engineering-first approach to building resilient full-stack applications.",
  cards: [
    { number: "01", title: "Research", text: "Analyze business requirements, study system workflows, and design robust database schemas and API specifications." },
    { number: "02", title: "Design", text: "Architect scalable backend services, define RESTful endpoints, and design responsive user interfaces." },
    { number: "03", title: "Develop", text: "Write clean, modular code with Spring Boot and React, implementing role-based authentication and secure endpoints." },
    { number: "04", title: "Deploy", text: "Test thoroughly using Postman and Swagger, optimize database queries, and prepare production-ready builds." },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Backend",
      skills: [
        { name: "Core Java" },
        { name: "JDBC" },
        { name: "Hibernate" },
        { name: "Spring Boot" },
        { name: "REST APIs" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "JavaScript (ES6+)" },
        { name: "React" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL" },
        { name: "PostgreSQL" },
        { name: "Oracle SQL" },
      ],
    },
    {
      title: "Core Concepts",
      skills: [
        { name: "OOP" },
        { name: "Data Structures & Algorithms" },
        { name: "Debugging" },
        { name: "Agile (Scrum)" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "CI/CD" },
        { name: "Eclipse" },
        { name: "VS Code" },
        { name: "Postman" },
      ],
    },
    {
      title: "AI Tools",
      skills: [
        { name: "ChatGPT" },
        { name: "Claude" },
        { name: "Copilot" },
        { name: "Cursor" },
      ],
    },
  ],
};

export const leadershipList = [
  {
    title: "Selenium Boot",
    repo: "seleniumboot/selenium-boot",
    prUrl: "https://github.com/seleniumboot/selenium-boot/pull/200",
    prNumber: "#200",
    role: "Open-Source Contributor",
    badge: "Pull Request #200",
    description: "Contributed enhancements to the Selenium Boot open-source framework, supporting Spring Boot test automation workflows and component integration.",
    tech: ["Java", "Spring Boot", "Selenium", "Test Automation"],
  },
  {
    title: "JVM MCP Server",
    repo: "oscarbol09/jvm-mcp",
    prUrl: "https://github.com/oscarbol09/jvm-mcp/pull/99",
    prNumber: "#99",
    role: "Open-Source Contributor",
    badge: "Pull Request #99",
    description: "Contributed to the Model Context Protocol (MCP) server for Java Virtual Machine diagnostics, developer inspection tools, and runtime instrumentation.",
    tech: ["Java", "JVM", "Model Context Protocol", "Developer Tooling"],
  },
  {
    title: "Systivex",
    repo: "soubhagya-behera/systivex",
    prUrl: "https://github.com/soubhagya-behera/systivex/pull/7",
    prNumber: "#7",
    role: "Open-Source Contributor",
    badge: "Pull Request #7",
    description: "Contributed pull request improvements, developer tooling enhancements, and configuration workflows to the Systivex repository.",
    tech: ["Open Source", "System Utilities", "Developer Tooling", "Git"],
  },
];

export const internshipsList = [
  {
    organization: "JSpiders, Bengaluru",
    role: "Java Full-Stack Development Trainee",
    duration: "Feb 2026 - Aug 2026",
    skills: ["Full-Stack Architecture", "REST API Development", "Database Optimization", "Team Code Reviews"],
    tech: ["Core Java", "Spring Boot", "Hibernate", "REST APIs", "MySQL", "JavaScript"],
  },
];

export const softSkillsList = [
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating seamlessly in sprints, sharing knowledge, and participating in peer code reviews." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex algorithms and architecture bottlenecks into efficient components." },
  { name: "Communication", icon: "💬", desc: "Articulating technical design clearly in documentation, pull requests, and meetings." },
  { name: "Leadership", icon: "⭐", desc: "Taking initiative on feature ownership and guiding project milestones to successful completion." },
];

export const projects = [
  {
    id: "project-one",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Smart Placement Management System",
    description: "A role-based placement management platform for students, TPOs, and administrators with automated eligibility tracking, JWT security, and email notifications.",
    techTags: ["Java", "Spring Boot", "Spring Security", "Hibernate", "MySQL", "JWT", "REST APIs", "Swagger"],
    links: { github: "https://github.com/sunilaimlrymec-code/smart_placement_mangement", demo: "" },
    isFlagship: true,
  },
  {
    id: "project-two",
    number: "02",
    badge: null,
    title: "Hospital Appointment & Telemedicine System",
    description: "A secure healthcare application for managing doctor appointments and telemedicine consultations with role-based authentication and JPA persistence.",
    techTags: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "PostgreSQL"],
    links: { github: "https://github.com/sunilaimlrymec-code/Online-Hospital-Appointment-Doctor-Consultation-System", demo: "" },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component
export const certificates = {
  featured: [
    { name: "Oracle Java Foundations", issuer: "Oracle", icon: "🏅" },
    { name: "Java Full-Stack Development Course", issuer: "JSpiders", icon: "📜" },
  ],
  viewAllUrl: "https://www.linkedin.com/in/sunil-kumar-h-b14015351/",
};

export const education = {
  degree: "B.E. in Artificial Intelligence & Machine Learning / Computer Science",
  institution: "Rao Bahadur Y Mahabaleshwarappa Engineering College (RYMEC)",
  cgpa: "81%",
  graduation: "2026",
  twelfth: "Pupil Tree PU College (71.3%)",
  tenth: "Sri Vasavi Vidyalaya (91.63%)",
};

export const educationList = [
  {
    level: "Undergraduate Degree",
    degree: "B.E. in Artificial Intelligence & Machine Learning / Computer Science",
    institution: "Rao Bahadur Y Mahabaleshwarappa Engineering College (RYMEC)",
    location: "Bellary, Karnataka",
    duration: "2022 — 2026",
    score: "81% Aggregate",
    icon: "🎓",
    badge: "B.E. Degree",
    highlights: [
      "Specializing in Java Full-Stack architecture, Spring Boot, REST APIs, and Relational Databases.",
      "Comprehensive coursework in Data Structures & Algorithms, Object-Oriented Programming, and Database Systems.",
      "Built production-ready projects including Smart Placement Management and Hospital Consultation systems.",
    ],
  },
  {
    level: "Pre-University (12th / PUC)",
    degree: "Pre-University Course (Science — PCMB)",
    institution: "Pupil Tree PU College",
    location: "Bellary, Karnataka",
    duration: "2020 — 2022",
    score: "71.3%",
    icon: "🏛️",
    badge: "Class XII",
    highlights: [
      "Rigorous science curriculum with core focus on Mathematics, Physics, Chemistry, and Biology.",
      "Developed foundational analytical logic, quantitative problem-solving, and algorithmic thinking.",
    ],
  },
  {
    level: "Secondary School (10th / SSLC)",
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Sri Vasavi Vidyalaya",
    location: "Bellary, Karnataka",
    duration: "Graduated: 2020",
    score: "91.63% (Distinction)",
    icon: "🏫",
    badge: "Class X",
    highlights: [
      "Graduated with Distinction honors (91.63%).",
      "Active participant in state-level science symposiums, mathematics competitions, and academic leadership.",
    ],
  },
];

export const footerContent = {
  taglines: ["Java Full-Stack Developer", "Spring Boot · REST APIs · React", "Building Resilient Software"],
  credential: "B.E. Computer Science & Engineering",
  copyright: `© ${new Date().getFullYear()} H Sunil Kumar | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
