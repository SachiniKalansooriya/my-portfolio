"use client"
import { useState } from "react"

type Project = {
  id: number
  title: string
  subtitle?: string
  role?: string
  technologies: string[]
  description?: string
  responsibilities?: string[]
  images?: string[] // Updated to array of images
  demoLink?: string
  githubLink?: string
  type?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "WebCAD - 2D & 3D Modeling Creation System",
    subtitle: "Mentored By Turbogen • Second Year Software Project",
    role: "Full-stack Developer, UI/UX Designer",
    technologies: ["React.js", "Tailwind", "Three.js", "Node.js", "Express", "PostgreSQL", "Socket.io", "Docker"],
    description:
      "WebCAD is a browser-based 3D modeling application with sketching, editing and export features. Supports collaboration and versioning.",
    responsibilities: [
      "Building features that enabled user account personalization and workspace customization",
      "Developed snap-to-grid functionality for all shapes",
      "Enabled users to create, save, and load custom designs.",
      "Built backend APIs for efficient user data storage and feature support",
    ],
    images: [
      "/webcad1.png",
      "/webcad2.png",
      "/webcad3.png",
      "/webcad4.png"
    ],
    demoLink: "#",
    githubLink: "#",
    type: "Web Application",
  },
  {
    id: 2,
    title: "STYRA - AI-powered wardrobe stylist mobile app",
    subtitle: "Individual Project",
    role: "Mobile App Developer",
    technologies: ["React Native", "Expo", "FastAPI", "CLIP", "PostgreSQL"],
    description:
      "AI-powered wardrobe stylist mobile app that analyzes clothing, manages wardrobe and recommends outfits based on weather and preferences.",
    responsibilities: [
      "Developed the AI clothing analysis feature using a deep learning model",
      "Built the wardrobe management system with database integration",
      "Implemented outfit recommendation logic based on wardrobe, weather, and user preferences",
    ],
    images: [
      "/styra1.png",
      "/styra2.png",
      "/styra3.png",
      "/styra4.png"

    ],
    demoLink: "#",
    githubLink: "#",
    type: "Mobile Application",
  },
  {
    id: 3,
    title: "CHATLY - A Real-Time Chat App",
    subtitle: "Individual Project",
    role: "Full-Stack Developer",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Socket.IO"],
    description:
      "Real-time chat app with authentication, image uploads, themes, and online presence tracking.",
    responsibilities: [
      "Developed real-time messaging with Socket.IO",
      "Implemented authentication and profile uploads",
      "Designed the MongoDB schema and APIs",
    ],
    images: [
      "/chatly1.png",
      "/chatly2.png",
      "/chatly3.png"
    ],
    demoLink: "#",
    githubLink: "#",
    type: "Web Application",
  },
  {
    id: 4,
    title: "SafeRoute - A web app for safe route planning and hazard reporting",
    subtitle: "Group Project",
    role: "Full-Stack Developer",
    technologies: ["Next.js", "Ballerina", "PostgreSQL", "Tailwind CSS"],
    description:
      "SafeRoute lets users report road hazards with images, view nearby hazards, and get safe route suggestions. It includes user profiles, reports history and an RDA dashboard.",
    responsibilities: [
      "Built hazard report submission with images and geolocation",
      "Developed route selection, filtering, and interactive map features",
      "Implemented real-time updates for reports and comments",
    ],
    images: [
      "/saferoute4.jpg",
      "/saferoute3.jpg",
      "/saferoute9.png",
      "/saferoute10.png",
      "/saferoute7.jpg",
     "/saferoute2.jpg",
      "/saferoute5.jpg"
    ],
    demoLink: "#",
    githubLink: "#",
    type: "Web Application",
  },
  {
    id: 5,
    title: "MediSync – Smart Medicine Dispenser & Reminder",
    subtitle: "IoT Hardware Project",
    role: "Hardware & Software Developer",
    technologies: ["Arduino IDE", "Firebase", "CallMeBot API", "EasyEDA"],
    description:
      "IoT medicine dispenser with scheduling, sensors and remote monitoring.",
    responsibilities: [
      "Programmed ESP32 microcontroller",
      "Integrated motors and sensors for dispensing",
      "Built Firebase integration for notifications",
    ],
    images: [
      "/medisync.png"
    ],
    demoLink: "#",
    githubLink: "#",
    type: "IoT Hardware",
  },
]

export default function ProjectsPage() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextProject = () => {
    setCurrentProjectIndex((i) => (i + 1) % projects.length)
    setCurrentImageIndex(0) // Reset image index when changing projects
  }
  
  const prevProject = () => {
    setCurrentProjectIndex((i) => (i - 1 + projects.length) % projects.length)
    setCurrentImageIndex(0) // Reset image index when changing projects
  }
  
  const goToProject = (idx: number) => {
    setCurrentProjectIndex(idx)
    setCurrentImageIndex(0) // Reset image index when changing projects
  }
  
  const nextImage = () => {
    const p = projects[currentProjectIndex]
    if (p.images && p.images.length > 0) {
      if (p.id === 2) {
        // For STYRA, navigate by pairs (increment by 2)
        setCurrentImageIndex((i) => {
          const nextIndex = i + 2;
          return nextIndex >= p.images!.length ? 0 : nextIndex;
        })
      } else {
        // For other projects, navigate normally
        setCurrentImageIndex((i) => (i + 1) % p.images!.length)
      }
    }
  }
  
  const prevImage = () => {
    const p = projects[currentProjectIndex]
    if (p.images && p.images.length > 0) {
      if (p.id === 2) {
        // For STYRA, navigate by pairs (decrement by 2)
        setCurrentImageIndex((i) => {
          const prevIndex = i - 2;
          return prevIndex < 0 ? Math.max(0, p.images!.length - 2) : prevIndex;
        })
      } else {
        // For other projects, navigate normally
        setCurrentImageIndex((i) => (i - 1 + p.images!.length) % p.images!.length)
      }
    }
  }

  const p = projects[currentProjectIndex]

  return (
    <section className="h-full overflow-hidden relative">
      {/* Background image with glassy overlay - Fixed to viewport */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: 'url(/background.jpg)' }}
      />
      <div className="fixed inset-0 bg-black/50 backdrop-blur-[1px]" />
      
      {/* Glass effect overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20" />
      
      <div className="container mx-auto px-4 py-8 h-full max-w-5xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-sm">
            My Projects
          </h1>
          <p className="text-lg text-white/80 font-light tracking-wide">
            Showcasing my development journey and technical achievements
          </p>
        </div>

        {/* Project Navigation Container - Outside project card but at image height */}
        <div className="relative">
          {/* Project Navigation Arrows - Outside project grid, at image middle height */}
          <button 
            onClick={prevProject} 
            className="absolute -left-20 top-[250px] transform -translate-y-1/2 z-30 group p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-emerald-500/20"
            aria-label="Previous Project"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400/10 via-transparent to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <svg className="w-6 h-6 text-white/90 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={nextProject} 
            className="absolute -right-20 top-[250px] transform -translate-y-1/2 z-30 group p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-emerald-500/20"
            aria-label="Next Project"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400/10 via-transparent to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <svg className="w-6 h-6 text-white/90 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

        {/* Card */}
        <div className="mt-6 group relative rounded-3xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          {/* Image top with carousel */}
          <div className="relative w-full h-[500px] bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border-b border-white/20 overflow-hidden">
            {/* Image carousel */}
            {p.images && p.images.length > 0 ? (
              <div className="w-full h-full relative">
                {/* Special layout for STYRA - show 2 images side by side */}
                {p.id === 2 ? (
                  <div className="w-full h-full grid grid-cols-2 gap-6 p-8">
                    {/* Left image */}
                    <div className="flex items-center justify-center group">
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-105 border border-white/20 backdrop-blur-sm">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={p.images[currentImageIndex]} 
                          alt={`${p.title} screenshot ${currentImageIndex + 1}`} 
                          className="max-w-full max-h-[420px] object-contain" 
                        />
                      </div>
                    </div>
                    {/* Right image */}
                    <div className="flex items-center justify-center group">
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-105 border border-white/20 backdrop-blur-sm">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={p.images[currentImageIndex + 1] || p.images[0]} 
                          alt={`${p.title} screenshot ${(currentImageIndex + 1) % p.images.length + 1}`} 
                          className="max-w-full max-h-[420px] object-contain" 
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Regular single image layout for other projects */
                  <div className="w-full h-full flex items-center justify-center p-8">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-105 border border-white/20 backdrop-blur-sm group">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={p.images[currentImageIndex]} 
                        alt={`${p.title} screenshot ${currentImageIndex + 1}`} 
                        className="max-w-full max-h-[420px] object-contain" 
                      />
                    </div>
                  </div>
                )}
                
                {/* Image navigation arrows */}
                {((p.id === 2 && p.images.length > 2) || (p.id !== 2 && p.images.length > 1)) && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-1/4 bottom-4 transform -translate-x-1/2 group p-3 rounded-2xl bg-black/20 border border-white/20 backdrop-blur-xl hover:bg-black/40 text-white/90 transition-all duration-300 shadow-xl hover:shadow-emerald-500/20 hover:scale-110"
                      aria-label="Previous Image"
                    >
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400/10 via-transparent to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-1/4 bottom-4 transform translate-x-1/2 group p-3 rounded-2xl bg-black/20 border border-white/20 backdrop-blur-xl hover:bg-black/40 text-white/90 transition-all duration-300 shadow-xl hover:shadow-emerald-500/20 hover:scale-110"
                      aria-label="Next Image"
                    >
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400/10 via-transparent to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/90 bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4 opacity-50">📷</div>
                  <div className="text-xl font-medium">No Screenshots Available</div>
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 space-y-6">
            {/* Title and subtitle */}
            <div className="space-y-2">
              <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                {p.title}
              </h3>
              {p.subtitle && (
                <p className="text-white/70 text-lg font-light">{p.subtitle}</p>
              )}
              {p.role && (
                <div className="inline-block px-4 py-2 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 backdrop-blur-sm text-purple-200 text-sm font-medium shadow-lg">
                  {p.role}
                </div>
              )}
            </div>

            {p.description && (
              <div className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/8 transition-all duration-300 shadow-lg">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400/5 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h4 className="font-bold text-lg text-white/90 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mr-3"></span>
                    Description
                  </h4>
                  <p className="text-white/80 leading-relaxed">{p.description}</p>
                </div>
              </div>
            )}

            {p.responsibilities && (
              <div className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/8 transition-all duration-300 shadow-lg">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/5 via-transparent to-emerald-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h4 className="font-bold text-lg text-white/90 mb-4 flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full mr-3"></span>
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {p.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start text-white/80">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                        <span className="leading-relaxed">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {p.technologies && (
              <div className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/8 transition-all duration-300 shadow-lg">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h4 className="font-bold text-lg text-white/90 mb-4 flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-3"></span>
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {p.technologies.map((t, i) => (
                      <span 
                        key={i} 
                        className="group/tech relative px-4 py-2 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm text-white/90 text-sm font-medium hover:bg-white/15 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-400/20"
                      >
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 to-blue-400/10 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative z-10">{t}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex gap-4 pt-4">
              {p.demoLink ? (
                <a 
                  href={p.demoLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="group relative flex-1 text-center px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500/80 to-cyan-500/80 border border-emerald-400/30 backdrop-blur-sm text-white font-semibold hover:from-emerald-500 hover:to-cyan-500 transition-all duration-300 shadow-xl hover:shadow-emerald-500/30 hover:scale-105"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10 flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Project
                  </span>
                </a>
              ) : (
                <button className="flex-1 px-6 py-3 rounded-2xl bg-white/5 border border-white/20 backdrop-blur-sm text-white/50 font-semibold cursor-not-allowed" disabled>
                  Live Project
                </button>
              )}

              {p.id === 1 ? (
                <div className="px-6 py-3 text-white/60 font-medium flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Private Repository
                </div>
              ) : p.githubLink ? (
                <a 
                  href={p.githubLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="group relative px-6 py-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm text-white/90 font-semibold hover:bg-white/15 transition-all duration-300 shadow-lg hover:shadow-white/20 hover:scale-105"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10 flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Source Code
                  </span>
                </a>
              ) : (
                <button className="px-6 py-3 rounded-2xl bg-white/5 border border-white/20 backdrop-blur-sm text-white/50 font-semibold cursor-not-allowed" disabled>
                  Source Code
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Project Navigation Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {projects.map((_, i) => (
            <button 
              key={i} 
              onClick={() => goToProject(i)} 
              className={`group relative transition-all duration-300 hover:scale-125 ${
                i === currentProjectIndex 
                  ? 'w-12 h-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full shadow-lg shadow-emerald-400/30' 
                  : 'w-4 h-4 bg-white/30 border border-white/40 backdrop-blur-sm rounded-full hover:bg-white/50'
              }`}
              aria-label={`Go to project ${i + 1}`}
            >
              {i !== currentProjectIndex && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </button>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}
 