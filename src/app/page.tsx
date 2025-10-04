"use client"
import React, { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: number]: number}>({})

  const nextImage = (projectId: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages
    }))
  }

  const prevImage = (projectId: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages
    }))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setSubmitStatus('Message sent successfully! I\'ll get back to you soon.')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus(`Failed to send message: ${data.error || 'Unknown error'}`)
      }
    } catch (error) {
      setSubmitStatus('Failed to send message. Please try again later.')
      console.error('Error sending email:', error)
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(''), 5000)
    }
  }

  const skillCategories = {
    "Programming Languages": [
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }
    ],
    "Web Development": [
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Three.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
      { name: "Javascript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Node", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Socket.io", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
      { name: "Ballerina", logo:"https://ballerina.io/img/branding/ballerina_logo_dgrey_png.png"},
      { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" }
    ],
    "Database": [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
    "Mobile App Development": [
      { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    ],
    "Version Control": [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Github", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    ],
    "Project Management Tools": [
      { name: "Jira", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" }
    ],
    "UI/UX Designs": [
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    ],
    "Containerization": [
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    ],
  }

  const projects = [
    {
      id: 1,
      title: "WebCAD - 2D & 3D Modeling Creation System",
      subtitle: "Mentored By Turbogen • Second Year Software Project",
      role: "Full-stack Developer, UI/UX Designer",
      technologies: ["React.js", "Tailwind", "Three.js", "Node.js", "Express", "PostgreSQL", "Socket.io", "Docker"],
      description: "WebCAD is a browser-based 3D modeling application with sketching, editing and export features. Supports collaboration and versioning.",
      responsibilities: [
        "Building features that enabled user account personalization and workspace customization",
        "Developed snap-to-grid functionality for all shapes",
        "Enabled users to create, save, and load custom designs.",
        "Built backend APIs for efficient user data storage and feature support",
      ],
      images: ["/webcad1.png", "/webcad2.png", "/webcad3.png", "/webcad4.png"],
      type: "Web Application",
    },
    {
      id: 2,
      title: "STYRA - AI-powered wardrobe stylist mobile app",
      subtitle: "Individual Project",
      role: "Mobile App Developer",
      technologies: ["React Native", "Expo", "FastAPI", "CLIP", "PostgreSQL"],
      description: "AI-powered wardrobe stylist mobile app that analyzes clothing, manages wardrobe and recommends outfits based on weather and preferences.",
      responsibilities: [
        "Developed the AI clothing analysis feature using a deep learning model",
        "Built the wardrobe management system with database integration",
        "Implemented outfit recommendation logic based on wardrobe, weather, and user preferences",
      ],
      images: ["/styra1.PNG", "/styra2.PNG", "/styra3.PNG", "/styra4.PNG"],
      type: "Mobile Application",
    },
    {
      id: 3,
      title: "CHATLY - A Real-Time Chat App",
      subtitle: "Individual Project",
      role: "Full-Stack Developer",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Socket.IO"],
      description: "Real-time chat app with authentication, image uploads, themes, and online presence tracking.",
      responsibilities: [
        "Developed real-time messaging with Socket.IO",
        "Implemented authentication and profile uploads",
        "Designed the MongoDB schema and APIs",
      ],
      images: ["/chatly1.png", "/chatly2.png", "/chatly3.png"],
      type: "Web Application",
    },
    {
      id: 4,
      title: "SafeRoute - A web app for safe route planning and hazard reporting",
      subtitle: "Group Project",
      role: "Full-Stack Developer",
      technologies: ["Next.js", "Ballerina", "PostgreSQL", "Tailwind CSS"],
      description: "SafeRoute lets users report road hazards with images, view nearby hazards, and get safe route suggestions. It includes user profiles, reports history and an RDA dashboard.",
      responsibilities: [
        "Built hazard report submission with images and geolocation",
        "Developed route selection, filtering, and interactive map features",
        "Implemented real-time updates for reports and comments",
      ],
      images: ["/saferoute1.png", "/saferoute2.jpg", "/saferoute3.jpg", "/saferoute4.jpg"],
      type: "Web Application",
    },
  ]

  return (
    <main className="min-h-screen text-[var(--text)] relative">
      {/* Background image with dark gray overlay - Fixed to viewport */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: 'url(/background.jpg)' }}
      />
      <div className="fixed inset-0 bg-black/50 backdrop-blur-[1.5px]" />
      
      {/* Subtle gray gradient overlay to add depth */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-800/8 via-transparent to-black/20" />
      
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 py-12 relative z-10">

        {/* HOME SECTION */}
        <section id="home" className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 pt-6 pb-12 min-h-screen">
          {/* Left content */}
          <div className="space-y-6 max-w-xl">
            <div className="text-lg font-semibold bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] bg-clip-text text-transparent">Hey there,</div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
             <p> I Am </p><span className="bg-gradient-to-r from-emerald-400 via-green-300 to-white bg-clip-text text-transparent">Sachini Kalansooriya</span>
              <span className="inline-block w-1 ml-2 h-12 align-middle bg-[var(--light-accent)] animate-blink" />
            </h1>

            <p className="text-[var(--text-muted)] text-base">
             A motivated and versatile software engineering student passionate
             about full-stack development. Skilled in crafting creative, efficient
             solutions with modern technologies, I thrive in collaborative, dynamic
             environments and am eager to contribute to impactful projects while
             continuously learning and innovating.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-6">
              <a href="/resume.pdf" download className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] hover:from-[var(--secondary)] hover:via-[var(--primary)] hover:to-[var(--accent)] text-white rounded-md font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none relative overflow-hidden group">
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 transform -translate-x-full"></span>
                <span className="relative">Download CV</span>
              </a>
              <a href="#contact" className="inline-flex items-center px-5 py-3 border border-[var(--border)] text-[var(--text)] rounded-md hover:bg-[var(--primary)]/10 hover:border-[var(--primary)] transform hover:scale-105 transition-all duration-300">Let's talk</a>
            </div>

            <div className="flex items-center gap-4 mt-4">
              {/* social icons (simple circles) */}
              <a className="w-9 h-9 rounded-full border border-[var(--accent)] flex items-center justify-center text-[var(--light-accent)] hover:bg-[var(--accent)]/20" href="https://www.linkedin.com/in/sachini-kalansooriya/" aria-label="linkedin">in</a>
              <a className="w-9 h-9 rounded-full border border-[var(--accent)] flex items-center justify-center text-[var(--light-accent)] hover:bg-[var(--accent)]/20" href="https://github.com/SachiniKalansooriya" target="_blank" rel="noreferrer" aria-label="github">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.805 1.305 3.49.997.108-.775.418-1.305.76-1.605-2.665-.3-5.467-1.335-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.096.81 2.21 0 1.595-.015 2.88-.015 3.27 0 .32.21.694.825.576C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right portrait with circular backdrop */}
          <div className="flex justify-center lg:justify-end relative">
                <div className="relative w-96 h-96 md:w-[36rem] md:h-[36rem] flex items-center justify-center">
                {/* big circular backdrop (larger) */}
                <div className="absolute w-96 h-96 md:w-[36rem] md:h-[36rem] rounded-full bg-[var(--surface)]/20 -right-4 -top-6" />

                {/* portrait (increased size) */}
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[var(--border)] shadow-2xl">
                  <img src="/propic.png" alt="Profile" className="w-full h-full object-cover" />
                </div>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="py-16 min-h-screen">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-sm">
              Education
            </h2>
            <p className="text-lg text-white/80 font-light tracking-wide">
              My academic journey and achievements
            </p>
          </div>

          {/* Main Grid - University and A-Level */}
          <div className="grid lg:grid-cols-2 gap-10 mb-12">
            
            {/* University Education Card */}
            <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/8 transition-all duration-500 hover:scale-[1.02] hover:border-emerald-400/30 shadow-2xl hover:shadow-emerald-500/10">
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/5 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* University Header */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white leading-tight">
                      B.Sc. (Hons) Degree in<br/>
                      <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                        Information Technology
                      </span>
                    </h3>
                    <div className="space-y-2 mb-4">
                      <p className="text-lg font-semibold text-emerald-300">
                        CGPA: 3.37
                      </p>
                      <p className="text-xl font-bold text-white/90">
                        University of Moratuwa
                      </p>
                      <p className="text-white/60 font-medium">
                        Sri Lanka
                      </p>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <div className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-300 border border-emerald-400/30 backdrop-blur-sm">
                      2023 - present
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* A-Level Results Card */}
            <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/8 transition-all duration-500 hover:scale-[1.02] hover:border-cyan-400/30 shadow-2xl hover:shadow-cyan-500/10">
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* A-Level Header */}
              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white leading-tight">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      GCE Advanced Level
                    </span>
                    <span className="block text-xl font-semibold text-cyan-300 mt-2">
                      Z-score: 1.7953 (Maths Stream)
                    </span>
                  </h3>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-white/90">
                      Anuladevi Balika Vidyalaya
                    </p>
                    <p className="text-white/60 font-medium">
                      Galle • 2021
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-16 min-h-screen">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-500 bg-clip-text text-transparent drop-shadow-sm">
              Skills & Technologies
            </h2>
            <p className="text-lg text-white/80 font-light tracking-wide">
              Technologies I work with
            </p>
          </div>

          <div className="grid gap-8">
            {Object.entries(skillCategories).map(([category, skills]) => (
              <div key={category} className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/8 transition-all duration-500 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-white/90">{category}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                      <img src={skill.logo} alt={skill.name} className="w-12 h-12 mb-2" />
                      <span className="text-sm text-white/80 text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-16 min-h-screen">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
              Featured Projects
            </h2>
            <p className="text-lg text-white/80 font-light tracking-wide">
              Some of my recent work
            </p>
          </div>

          <div className="grid gap-12">
            {projects.map((project) => (
              <div key={project.id} className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/8 transition-all duration-500 shadow-2xl">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Project Info */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-lg text-white/70 mb-4">{project.subtitle}</p>
                      <div className="inline-block px-3 py-1 rounded-full text-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-400/30">
                        {project.role}
                      </div>
                    </div>

                    <p className="text-white/80 leading-relaxed">{project.description}</p>

                    <div>
                      <h4 className="text-lg font-semibold text-white/90 mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {project.responsibilities.map((resp, index) => (
                          <li key={index} className="text-white/70 flex items-start">
                            <span className="text-emerald-400 mr-2">•</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white/90 mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 rounded-full text-sm bg-white/10 text-white/80 border border-white/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project Images Carousel */}
                  <div className="relative">
                    {project.type === "Mobile Application" ? (
                      /* Mobile App Frame */
                      <div className="relative mx-auto w-64 h-[500px]">
                        {/* Phone Frame */}
                        <div className="relative w-full h-full bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                          <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-10"></div>
                            
                            {/* Screen Content */}
                            <div className="w-full h-full relative">
                              <img 
                                src={project.images[currentImageIndex[project.id] || 0]} 
                                alt={`${project.title} ${(currentImageIndex[project.id] || 0) + 1}`} 
                                className="w-full h-full object-cover object-center transition-opacity duration-300" 
                              />
                            </div>
                            
                            {/* Navigation Arrows for Mobile */}
                            {project.images.length > 1 && (
                              <>
                                {/* Previous Button */}
                                <button
                                  onClick={() => prevImage(project.id, project.images.length)}
                                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-20"
                                  suppressHydrationWarning
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                  </svg>
                                </button>
                                
                                {/* Next Button */}
                                <button
                                  onClick={() => nextImage(project.id, project.images.length)}
                                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-20"
                                  suppressHydrationWarning
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </button>
                              </>
                            )}
                            
                            {/* Image Counter for Mobile */}
                            {project.images.length > 1 && (
                              <div className="absolute top-8 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full z-20">
                                {(currentImageIndex[project.id] || 0) + 1} / {project.images.length}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Laptop Frame for Web Apps */
                      <div className="relative mx-auto max-w-2xl">
                        {/* Laptop Base */}
                        <div className="relative">
                          {/* Laptop Screen */}
                          <div className="bg-gray-900 rounded-t-2xl p-4 shadow-2xl">
                            {/* Screen Bezel */}
                            <div className="bg-black rounded-lg overflow-hidden relative aspect-[16/10]">
                              {/* Top Bar with Dots */}
                              <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 flex items-center px-4 z-10">
                                <div className="flex space-x-2">
                                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                                <div className="flex-1 text-center">
                                  <div className="bg-gray-700 rounded px-4 py-1 text-xs text-gray-300 inline-block">
                                    {project.title}
                                  </div>
                                </div>
                              </div>
                              
                              {/* Screen Content */}
                              <div className="w-full h-full pt-8 relative">
                                <img 
                                  src={project.images[currentImageIndex[project.id] || 0]} 
                                  alt={`${project.title} ${(currentImageIndex[project.id] || 0) + 1}`} 
                                  className="w-full h-full object-cover object-top transition-opacity duration-300" 
                                />
                              </div>
                              
                              {/* Navigation Arrows for Laptop */}
                              {project.images.length > 1 && (
                                <>
                                  {/* Previous Button */}
                                  <button
                                    onClick={() => prevImage(project.id, project.images.length)}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-20"
                                    suppressHydrationWarning
                                  >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                  </button>
                                  
                                  {/* Next Button */}
                                  <button
                                    onClick={() => nextImage(project.id, project.images.length)}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-20"
                                    suppressHydrationWarning
                                  >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </button>
                                </>
                              )}
                              
                              {/* Image Counter for Laptop */}
                              {project.images.length > 1 && (
                                <div className="absolute top-10 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full z-20">
                                  {(currentImageIndex[project.id] || 0) + 1} / {project.images.length}
                                </div>
                              )}
                            </div>
                          </div>
                          
                          {/* Laptop Base/Keyboard */}
                          <div className="bg-gray-800 h-6 rounded-b-2xl mx-auto w-full relative">
                            {/* Trackpad */}
                            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gray-700 rounded"></div>
                          </div>
                          
                          {/* Laptop Stand */}
                          <div className="bg-gray-600 h-2 rounded-b mx-auto w-3/4 relative"></div>
                        </div>
                      </div>
                    )}
                    
                    {/* Image Indicators (common for both) */}
                    {project.images.length > 1 && (
                      <div className="flex justify-center mt-4 space-x-2">
                        {project.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(prev => ({...prev, [project.id]: index}))}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              (currentImageIndex[project.id] || 0) === index 
                                ? 'bg-blue-400 w-6' 
                                : 'bg-white/30 hover:bg-white/50'
                            }`}
                            suppressHydrationWarning
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-16 min-h-screen">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
              Get In Touch
            </h2>
            <p className="text-lg text-white/80 font-light tracking-wide max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Whether you want to discuss a project, job opportunity, or just say hello, I'd love to hear from you!
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Information */}
            <div className="space-y-8">
              
              {/* Contact Info Cards */}
              <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-blue-400 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  
                  {/* Email */}
                  <a href="mailto:sachinikalansooriya22@gmail.com" className="group flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-white/10">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/90 font-semibold">Email</p>
                      <p className="text-white/70 group-hover:text-pink-400 transition-colors">sachinikalansooriya22@gmail.com</p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a href="tel:+94771896153" className="group flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-white/10">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/90 font-semibold">Phone</p>
                      <p className="text-white/70 group-hover:text-blue-400 transition-colors">+94 771896153</p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center space-x-4 p-4 rounded-xl">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/90 font-semibold">Location</p>
                      <p className="text-white/70">Galle, Sri Lanka</p>
                    </div>
                  </div>

                  {/* Work Status */}
                  <div className="flex items-center space-x-4 p-4 rounded-xl">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/90 font-semibold">Work Status</p>
                      <p className="text-white/70">Open to Opportunities</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links & Resume */}
              <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-purple-400">Follow Me</h3>
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow hover:scale-105 transition-transform font-medium"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Resume
                  </a>
                </div>
                
                <div className="flex space-x-4">
                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/in/sachini-kalansooriya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl border border-white/20 transition-all duration-300 hover:scale-110 group bg-white/5 hover:bg-white/10 hover:border-blue-500/50"
                  >
                    <div className="text-white group-hover:text-blue-400 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a 
                    href="https://github.com/SachiniKalansooriya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl border border-white/20 transition-all duration-300 hover:scale-110 group bg-white/5 hover:bg-white/10 hover:border-gray-500/50"
                  >
                    <div className="text-white group-hover:text-gray-300 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>

              {/* Availability Status */}
              <div className="group relative p-6 rounded-3xl border border-green-400/30 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div>
                    <div className="font-semibold text-green-400">Available for Work</div>
                    <div className="text-sm text-white/70">
                      Currently seeking new opportunities
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-pink-400 mb-6">Send Message</h3>
              
              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg ${submitStatus.toLowerCase().includes('failed') ? 'bg-red-500/20 border border-red-500/50 text-red-300' : 'bg-green-500/20 border border-green-500/50 text-green-300'} text-center font-medium`}>
                  {submitStatus}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/90">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    placeholder="Enter your full name"
                    suppressHydrationWarning
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/90">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                    suppressHydrationWarning
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white/90">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    placeholder="What's this about?"
                    suppressHydrationWarning
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/90">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 resize-none transition-all duration-300"
                    placeholder="Tell me about your project, job opportunity, or just say hello!"
                    suppressHydrationWarning
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                    isSubmitting ? 'cursor-not-allowed' : ''
                  }`}
                  suppressHydrationWarning
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}





