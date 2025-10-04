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
      <div className="container mx-auto px-4 py-8 h-full max-w-5xl">
        {/* Project Navigation - Left/Right arrows */}
        <button 
          onClick={prevProject} 
          className="absolute left-8 md:left-16 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 border shadow hover:bg-gray-100 transition-colors"
          aria-label="Previous Project"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={nextProject} 
          className="absolute right-8 md:right-16 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 border shadow hover:bg-gray-100 transition-colors"
          aria-label="Next Project"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Card */}
        <div className="mt-6 rounded-2xl overflow-hidden border bg-white/80 shadow">
          {/* Image top with carousel */}
          <div className="w-full h-[500px] bg-gray-50 relative overflow-hidden">
            {/* Image carousel */}
            {p.images && p.images.length > 0 ? (
              <div className="w-full h-full relative">
                {/* Special layout for STYRA - show 2 images side by side */}
                {p.id === 2 ? (
                  <div className="w-full h-full grid grid-cols-2 gap-4 p-6">
                    {/* Left image */}
                    <div className="flex items-center justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={p.images[currentImageIndex]} 
                        alt={`${p.title} screenshot ${currentImageIndex + 1}`} 
                        className="max-w-full max-h-[450px] object-contain shadow-xl rounded-lg" 
                      />
                    </div>
                    {/* Right image */}
                    <div className="flex items-center justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={p.images[currentImageIndex + 1] || p.images[0]} 
                        alt={`${p.title} screenshot ${(currentImageIndex + 1) % p.images.length + 1}`} 
                        className="max-w-full max-h-[450px] object-contain shadow-xl rounded-lg" 
                      />
                    </div>
                  </div>
                ) : (
                  /* Regular single image layout for other projects */
                  <div className="w-full h-full flex items-center justify-center p-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={p.images[currentImageIndex]} 
                      alt={`${p.title} screenshot ${currentImageIndex + 1}`} 
                      className="max-w-full max-h-[450px] object-contain shadow-xl rounded-lg" 
                    />
                  </div>
                )}
                
                {/* Image counter */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-2 rounded-full text-sm font-medium">
                  {p.id === 2 ? 
                    `${Math.floor(currentImageIndex / 2) + 1} / ${Math.ceil(p.images.length / 2)}` :
                    `${currentImageIndex + 1} / ${p.images.length}`
                  }
                </div>
                
                {/* Image navigation arrows */}
                {((p.id === 2 && p.images.length > 2) || (p.id !== 2 && p.images.length > 1)) && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors shadow-lg"
                      aria-label="Previous Image"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors shadow-lg"
                      aria-label="Next Image"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white bg-gradient-to-br from-blue-500 to-purple-600">
                No Screenshots Available
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-blue-600 mb-1">{p.title}</h3>
            {p.subtitle && <p className="text-gray-600 mb-3">{p.subtitle}</p>}
            {p.role && <div className="inline-block px-2 py-1 rounded-full bg-purple-100 text-purple-800 text-sm mb-4">{p.role}</div>}

            {p.description && (
              <div className="mb-4">
                <h4 className="font-semibold">Description</h4>
                <p className="text-sm text-gray-700 mt-1">{p.description}</p>
              </div>
            )}

            {p.responsibilities && (
              <div className="mb-4">
                <h4 className="font-semibold">Responsibilities</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1">
                  {p.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            )}

            {p.technologies && (
              <div className="mb-4">
                <h4 className="font-semibold">Stack</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {p.technologies.map((t, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-800">{t}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-3 mt-4">
              {p.demoLink ? (
                <a href={p.demoLink} target="_blank" rel="noreferrer" className="flex-1 text-center px-4 py-2 rounded bg-blue-600 text-white">Live Project</a>
              ) : (
                <button className="flex-1 px-4 py-2 rounded bg-gray-200 text-gray-600" disabled>Live Project</button>
              )}

              {p.id === 1 ? (
                <div className="px-4 py-2 text-gray-500">Repo link is private</div>
              ) : p.githubLink ? (
                <a href={p.githubLink} target="_blank" rel="noreferrer" className="px-4 py-2 rounded border text-gray-700">Source Code</a>
              ) : (
                <button className="px-4 py-2 rounded border text-gray-400" disabled>Source Code</button>
              )}
            </div>
          </div>
        </div>

        {/* Project Navigation Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {projects.map((_, i) => (
            <button 
              key={i} 
              onClick={() => goToProject(i)} 
              className={`${i === currentProjectIndex ? 'w-3 h-3 bg-blue-400 scale-110' : 'w-3 h-3 bg-gray-400'} rounded-full transition`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
 