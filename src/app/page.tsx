"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {
  // Add smooth scrolling behavior and force mobile visibility
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Force show projects on mobile after 1 second
    const mobileShowTimer = setTimeout(() => {
      if (window.innerWidth <= 768) {
        const projectsSection = document.getElementById('projects')
        if (projectsSection) {
          projectsSection.style.opacity = '1'
          projectsSection.style.transform = 'translateY(0)'
          projectsSection.classList.add('visible')
          
          // Force show all project cards
          const projectCards = projectsSection.querySelectorAll('.animate-slide-up-delay')
          projectCards.forEach((card) => {
            const htmlCard = card as HTMLElement
            htmlCard.style.opacity = '1'
            htmlCard.style.transform = 'translateY(0)'
            htmlCard.classList.add('visible')
          })
        }
      }
    }, 1000)
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
      clearTimeout(mobileShowTimer)
    }
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: number]: number}>({})
  const [activeSection, setActiveSection] = useState('home')
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set(['home']))

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px' // Reduced margin for better mobile triggering
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          setVisibleSections(prev => new Set([...prev, sectionId]))
          
          // Add visible class to the section
          entry.target.classList.add('visible')
          
          // Add visible class to child elements with animation classes
          const animatedElements = entry.target.querySelectorAll('.animate-slide-up, .animate-slide-up-delay')
          animatedElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('visible')
            }, index * 100) // Staggered animation
          })
        }
      })
    }, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll('section[id]')
    sections.forEach(section => observer.observe(section))

    // Fallback for mobile devices - ensure projects are visible after 2 seconds
    const fallbackTimer = setTimeout(() => {
      const projectsSection = document.getElementById('projects')
      if (projectsSection && !visibleSections.has('projects')) {
        setVisibleSections(prev => new Set([...prev, 'projects']))
        projectsSection.classList.add('visible')
        const animatedElements = projectsSection.querySelectorAll('.animate-slide-up, .animate-slide-up-delay')
        animatedElements.forEach((el, index) => {
          setTimeout(() => {
            el.classList.add('visible')
          }, index * 100)
        })
      }
    }, 2000)

    return () => {
      observer.disconnect()
      clearTimeout(fallbackTimer)
    }
  }, [])

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'education', 'skills', 'projects', 'memberships', 'certifications', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    // Technical Skills - Part 1
    "Programming Languages": [
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
     { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ],
    "Web Development": [
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Three.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
      { name: "Node", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Javascript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Socket.io", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
      { name: "Ballerina", logo:"https://ballerina.io/img/branding/ballerina_logo_dgrey_png.png"}
    ],
    "Database": [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
    ],
    "Mobile App Development": [
      { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
    ]
  }

  const toolsAndPlatforms = {
    // Tools & Platforms - Part 2
    "Testing Tools": [
      { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" }
    ],
    "Version Control": [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Github", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
    ],
    "Project Management Tools": [
      { name: "Jira", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" }
    ],
    "UI/UX Designs": [
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
    ],
    "Containerization": [
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
    ],
    "Graphic Design": [
      { name: "Adobe Lightroom Pro", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
      { name: "GIMP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg" },
      { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" }
    ]
  }

  const projects = [
    {
      id: 1,
      title: "Automobile Service Management System",
      subtitle: "Group Project",
      role: "Full-stack Developer, UI/UX Designer",
      timeline: "ONGOING",
      technologies: ["Spring Boot","React","MySQL","Docker","WebSockets","REST APIs"],
      highlightsTitle: "Project Highlights",
      highlights: [
        "Designing and developing a full-stack enterprise web application for automobile service management.",
        "Implementing customer features (secure authentication,appointment booking, real-time tracking) and employee features(time logging, workload monitoring).",
        "Building real-time updates and role-based access control.",
        "Containerizing the system for efficient deployment.",
        "Integrating a Generative AI chatbot for appointment slot checking."
      ],
      images: ["/Autocare.png"],
      type: "Web Application",
      repoUrl: "private",
    },
    {
      id: 2,
      title: "WebCAD - 2D & 3D Modeling Creation System",
      subtitle: "Mentored By Turbogen • Second Year Software Group Project",
      role: "Full-stack Developer, UI/UX Designer",
      timeline: "Jun 2024 - Jun 2025",
      technologies: ["React.js", "Tailwind", "Three.js", "Node.js", "Express", "PostgreSQL", "Socket.io", "Docker"],
      description: "WebCAD is a browser-based 3D modeling application with sketching, editing and export features. Supports collaboration and versioning.",
      responsibilities: [
        "Building features that enabled user account personalization",
        "Developed snap-to-grid functionality for all shapes",
        "Enabled users to create, save, and load custom designs.",
        "Built backend APIs for efficient user data storage and feature support",
      ],
      images: ["/webcad2.png","/webcad1.png",  "/webcad3.png", "/webcad4.png"],
      type: "Web Application",
      repoUrl: "private",
    },
    {
      id: 3,
      title: "STYRA - AI-powered wardrobe stylist mobile app",
      subtitle: "Individual Project",
      role: "Mobile App Developer",
      timeline: "sep 2025",
      technologies: ["React Native", "Expo", "FastAPI", "CLIP", "PostgreSQL"],
      description: "AI-powered wardrobe stylist mobile app that analyzes clothing, manages wardrobe and recommends outfits based on weather and preferences.",
      responsibilities: [
        "Developed the AI clothing analysis feature using a deep learning model(CLIP)",
        "Built the wardrobe management system with database integration",
        "Implemented outfit recommendation logic based on wardrobe, weather, and user preferences",
      ],
      images: [ "/styra5.PNG","/styra1.PNG", "/styra3.PNG","/styra4.PNG","/styra2.PNG"],
      type: "Mobile Application",
      repoUrl: "https://github.com/SachiniKalansooriya/Styra",
    },
    {
      id: 4,
      title: "CHATLY - A Real-Time Chat App",
      subtitle: "Individual Project",
      role: "Full-Stack Developer",
      timeline: "April 2025",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Socket.IO"],
      description: "Real-time chat app with authentication, image uploads, themes, and online presence tracking.",
      responsibilities: [
        "Developed real-time messaging with Socket.IO",
        "Implemented authentication and profile uploads",
        "Designed the MongoDB schema and APIs",
      ],
      images: ["/chatly3.png","/chatly1.png", "/chatly2.png"],
      type: "Web Application",
      repoUrl: "https://github.com/SachiniKalansooriya/Chatly",
    },
    {
      id: 5,
      title: "SafeRoute - A web app for safe route planning and hazard reporting",
      subtitle: "Group Project",
      role: "Full-Stack Developer",
      timeline: "Aug 2025",
      technologies: ["Next.js", "Ballerina", "PostgreSQL", "Tailwind CSS"],
      description: "SafeRoute lets users report road hazards with images, view nearby hazards, and get safe route suggestions. It includes user profiles, reports history and an RDA dashboard.",
      responsibilities: [
        "Built hazard report submission with images and geolocation",
        "Developed route selection, filtering, and interactive map features",
        "Implemented real-time updates for reports and comments",
      ],
      images: ["/saferoute4.jpg", "/saferoute3.jpg",  "/saferoute7.jpg", "/saferoute5.jpg",  "/saferoute1.png", "/saferoute2.jpg"],
      type: "Web Application",
      repoUrl: "https://github.com/BGMPrabuddhi/iwb25-402-mindkraft",
    },
    {
      id: 7,
      title: "Personal Portfolio Website",
      subtitle: "Individual Project",
      role: "Full-Stack Developer, Designer",
      timeline: "Oct 2025 - Present",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      description: "A modern, responsive portfolio website to showcase my skills, projects, education, and contact information. Features glassmorphism design, smooth navigation, and optimized performance for all devices.",
      responsibilities: [
        "Designed and developed the entire website UI/UX from scratch",
        "Implemented responsive layouts and interactive navigation",
        "Integrated contact form with email functionality",
        "Deployed the site using Vercel for fast global delivery",
        "Continuously update content and improve accessibility"
      ],
      images: ["/myportfolio.png"],
      type: "Web Application",
      repoUrl: "https://github.com/SachiniKalansooriya/my-portfolio",
    },

    {
      id: 8,
      title: "MEDISYNC - Smart Medicine Dispenser & Reminder",
      subtitle: "First year Hardware Group Project",
      role: "Embedded Systems Developer, Hardware Designer",
      timeline: "Aug 2023 - Aug 2024",
      technologies: [
        "Arduino IDE", "Firebase", "CallMeBot API", "EasyEDA", "CorelDRAW", "SolidWorks",
        "ESP32", "NEMA 17 Motors", "Ultrasonic Sensor", "RTC Module", "Keypad", "LCD", "Battery System"
      ],
      description: "MEDISYNC is a smart medicine dispensing and reminder system designed to support timely medication intake. Integrates hardware and software for automated dispensing, real-time reminders, and remote notifications.",
      highlightsTitle: "Project Highlights",
      highlights: [
        "Core controller for seamless operation.",
        "Built with Quasar and Firebase for remote management and updates.",
        "NEMA 17 stepper motors ensure accurate dispensing.",
        "Manual requests via keypad and LCD display for flexibility.",
        "Operates during power cuts for uninterrupted management.",
        "Ultrasonic sensor triggers buzzer until tray is removed.",
        "Alerts sent via CallMeBot's WhatsApp API for caregivers and patients."
      ],
      images: ["/medisync.png"],
      type: "IoT/Embedded System",
      repoUrl: "https://github.com/vishwajayawickrama/Automatic-Medicine-Remider-Dispenser",
    },

    {
      id: 9,
      title: "DIGITAL STORE",
      subtitle: "Individual Project",
      role: "UI/UX Designer",
      timeline: "Oct 2025",
      technologies: ["Figma", "UI/UX Design", "Prototyping"],
      description: "A sleek, modern digital store interface designed in Figma, focusing on usability, accessibility, and visual hierarchy. Includes interactive components, product catalogs, and responsive layouts.",
      highlightsTitle: "Design Features",
      highlights: [
        "Interactive prototypes with micro-interactions",
        "Responsive design for desktop and mobile",
        "Accessible color palette and typography",
        "User-centered design approach",
        "Complete design system with components"
      ],
      images: ["/ds1.png","/ds2.png","/ds3.png"],
      type: "UI/UX Design",
      repoUrl: "https://www.figma.com/design/rHcqct4i64TF5VFWwTdj94/Untitled?node-id=10-258&t=Yb7Hc2di84XPznz0-0",
    },
  ]

  const memberships = [
    {
      id: 1,
      title: "Member - FIT Moments",
      organization: "IT Faculty Official Media Unit, University Of Moratuwa",
      image: "/fitmoments.jpg", 
      description: "Active member of FIT Moments, contributing to media and event coverage for the IT Faculty at University of Moratuwa."
    }
  ]

  const certifications = [
    {
      id: 1,
      title: "Version Control Certificate",
      issuer: "Coursera, offered by Meta",
      date: "2024",
      category: "Technical Skill"
    },
    {
      id: 2,
      title: "Python for Beginners",
      issuer: "University of Moratuwa",
      date: "2024",
      category: "Programming Language"
    },
    
    {
      id: 3,
      title: "CodeRush 2024 – Hackathon Participant",
      issuer: "Organized by INTECS, University of Moratuwa",
      date: "2024",
      category: "Hackathon"
    },
    {
      id: 4,
      title: "Innovate with Ballerina Coding Challenge – Participant",
      issuer: "Organized by IEEE UoM in collaboration with WSO2",
      date: "2025",
      category: "Coding Challenge"
    },
  ]

  return (
    <>
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUpStagger {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .animate-slide-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .animate-slide-up-delay {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .animate-slide-up-delay.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Ensure sections start hidden except home */
        section:not(#home) {
          opacity: 0;
          transform: translateY(30px); /* Reduced for mobile */
          transition: opacity 1s ease-out, transform 1s ease-out;
        }

        section:not(#home).visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Mobile specific adjustments */
        @media (max-width: 768px) {
          section:not(#home) {
            transform: translateY(20px); /* Even smaller offset for mobile */
          }
          
          .animate-slide-up {
            transform: translateY(20px);
          }
          
          .animate-slide-up-delay {
            transform: translateY(15px);
          }
          
          /* Ensure projects are always visible on mobile */
          #projects {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
          
          #projects .animate-slide-up-delay {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
          
          /* Fix background image on mobile */
          .bg-cover {
            background-attachment: scroll !important;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
          }
          
          /* Ensure background covers full screen on mobile */
          main {
            min-height: 100vh;
            min-height: 100dvh;
          }
          
          /* iOS Safari specific fixes */
          @supports (-webkit-appearance: none) {
            .bg-cover {
              background-attachment: scroll !important;
            }
          }
          
          /* Center profile picture on mobile */
          #home {
            place-items: center;
          }
          
          #home > div:last-child {
            display: flex;
            justify-content: center !important;
            align-items: center;
            width: 100%;
          }
        }        .stagger-1 { transition-delay: 0.2s; }
        .stagger-2 { transition-delay: 0.4s; }
        .stagger-3 { transition-delay: 0.6s; }
        .stagger-4 { transition-delay: 0.8s; }
        .stagger-5 { transition-delay: 1.0s; }
        
        * {
          transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
      `}</style>
      
      <main className="min-h-screen text-[var(--text)] relative transition-all duration-300 ease-in-out">
      {/* Background image with dark gray overlay - Responsive for mobile */}
      <div 
        className="fixed inset-0 transition-all duration-700 ease-in-out bg-scroll bg-center bg-no-repeat bg-cover md:bg-fixed"
        style={{ 
          backgroundImage: 'url(/background.jpg)',
          minHeight: '100vh'
        }}
      />
      <div className="fixed inset-0 bg-black/50 backdrop-blur-[1.5px] transition-all duration-500 ease-in-out" />
      
      {/* Subtle gray gradient overlay to add depth */}
      <div className="fixed inset-0 transition-opacity duration-500 ease-in-out bg-gradient-to-br from-gray-800/8 via-transparent to-black/20" />
      
      {/* Floating Navigation */}
      <nav className="fixed z-50 flex flex-col space-y-3 top-6 right-6">
        {[
          { 
            id: 'home', 
            label: 'Home',
            icon: (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
            )
          },
          { 
            id: 'education', 
            label: 'Education',
            icon: (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
              </svg>
            )
          },
          { 
            id: 'skills', 
            label: 'Skills',
            icon: (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
              </svg>
            )
          },
          { 
            id: 'projects', 
            label: 'Projects',
            icon: (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
              </svg>
            )
          },
          { 
            id: 'memberships', 
            label: 'Memberships',
            icon: (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-.83.67-1.5 1.5-1.5S12 9.67 12 10.5V11h2c1.11 0 2 .89 2 2v5h3v4c0 1.11-.89 2-2 2H6c-1.11 0-2-.89-2-2z"/>
              </svg>
            )
          },
          { 
            id: 'certifications', 
            label: 'Certifications',
            icon: (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            )
          },
          { 
            id: 'contact', 
            label: 'Contact',
            icon: (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            )
          }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`group relative w-9 h-9 rounded-full border backdrop-blur-md flex items-center justify-center text-sm font-medium transition-all duration-300 hover:scale-110 ${
              activeSection === item.id
                ? 'border-purple-500/60 bg-purple-500/30 text-purple-300 shadow-lg shadow-purple-500/25'
                : 'border-purple-500/60 bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20'
            }`}
            suppressHydrationWarning
          >
            <span className="transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </span>
            
            {/* Tooltip */}
            <div className="absolute px-3 py-1 mr-3 text-sm text-white transition-opacity duration-300 rounded-lg opacity-0 pointer-events-none right-full bg-black/80 group-hover:opacity-100 whitespace-nowrap">
              {item.label}
              <div className="absolute w-0 h-0 transform -translate-y-1/2 border-t-2 border-b-2 border-l-4 top-1/2 left-full border-l-black/80 border-t-transparent border-b-transparent"></div>
            </div>
          </button>
        ))}
      </nav>
      
      <div className="container relative z-10 px-6 py-12 mx-auto font-sans transition-all duration-500 ease-in-out sm:px-8 md:px-12 lg:px-24 xl:px-32 animate-fade-in">

        {/* HOME SECTION */}
        <section id="home" className="grid items-start min-h-screen grid-cols-1 gap-8 pt-6 pb-12 lg:grid-cols-2">
          {/* Left content */}
          <div className="max-w-xl space-y-6">
            <div className="text-xl font-semibold text-transparent bg-gradient-to-r from-purple-500 via-blue-600 to-indigo-600 bg-clip-text">Hey there,</div>

            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
             <p className="font-libre"> I Am </p><span className="text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-300 bg-clip-text font-libre">Sachini Kalansooriya</span>
              <span className="inline-block w-1 h-12 ml-2 align-middle bg-purple-400 animate-blink" />
            </h1>

            <p className="text-[var(--text-muted)] text-base">
             A motivated and versatile software engineering student passionate
             about full-stack development. Skilled in crafting creative, efficient
             solutions with modern technologies, I thrive in collaborative, dynamic
             environments and am eager to contribute to impactful projects while
             continuously learning and innovating.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-6">
              <a href="/SachiniKalansooriyaCV.pdf" download className="relative inline-flex items-center px-5 py-3 overflow-hidden font-medium text-white transition-all duration-300 transform border rounded-md shadow-lg bg-purple-600/20 backdrop-blur-md border-purple-500/60 hover:bg-purple-600/30 hover:shadow-purple-500/25 hover:scale-105 group">
                <span className="absolute inset-0 transition-all duration-700 transform -translate-x-full opacity-0 bg-gradient-to-r from-white/10 via-white/20 to-transparent group-hover:opacity-100 group-hover:translate-x-full"></span>
                <span className="relative">Download CV</span>
              </a>
              <a href="#contact" className="inline-flex items-center px-5 py-3 border border-purple-500/60 bg-purple-500/10 backdrop-blur-md text-[var(--text)] rounded-md hover:bg-purple-500/20 hover:border-purple-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">Let&apos;s talk</a>
            </div>

            <div className="flex items-center gap-4 mt-4">
              {/* social icons (simple circles) */}
              <a className="flex items-center justify-center text-purple-400 transition-all duration-300 border rounded-full shadow-lg w-9 h-9 border-purple-500/60 bg-purple-500/10 backdrop-blur-md hover:bg-purple-500/20 hover:border-purple-500 hover:shadow-purple-500/25" href="https://www.linkedin.com/in/sachini-kalansooriya/" target="_blank" aria-label="linkedin">in</a>
              <a className="flex items-center justify-center text-purple-400 transition-all duration-300 border rounded-full shadow-lg w-9 h-9 border-purple-500/60 bg-purple-500/10 backdrop-blur-md hover:bg-purple-500/20 hover:border-purple-500 hover:shadow-purple-500/25" href="https://github.com/SachiniKalansooriya" target="_blank" rel="noreferrer" aria-label="github">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.805 1.305 3.49.997.108-.775.418-1.305.76-1.605-2.665-.3-5.467-1.335-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.096.81 2.21 0 1.595-.015 2.88-.015 3.27 0 .32.21.694.825.576C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
                </svg>
              </a>
            </div>
          </div>

                    {/* Right portrait with circular backdrop */}
          <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[32rem] md:h-[32rem] lg:w-[36rem] lg:h-[36rem] flex items-center justify-center">
                {/* big circular backdrop (smaller on mobile, properly centered) */}
                <div className="absolute w-72 h-72 sm:w-80 sm:h-80 md:w-[30rem] md:h-[30rem] lg:w-[34rem] lg:h-[34rem] rounded-full bg-[var(--surface)]/20 border-1 border-gray-600 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:-right-4 md:-top-6 md:transform-none md:translate-x-0 md:translate-y-0" />

                {/* portrait (responsive size) */}
                <div className="relative w-64 h-64 overflow-hidden border-2 border-gray-500 rounded-full shadow-2xl sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  <Image src="/propic.jpg" alt="Profile" className="object-cover w-full h-full" width={384} height={384} />
                </div>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="min-h-screen py-16">
          {/* Header */}
          <div className="mb-16 text-center animate-slide-up-delay stagger-1">
            <h3 className="mb-6 text-3xl font-bold text-transparent lg:text-4xl bg-gradient-to-r from-purple-500 via-blue-600 to-indigo-600 bg-clip-text drop-shadow-sm font-title">
              Education
            </h3>
            <p className="text-lg tracking-wide text-purple-400 font-satisfy">
              My academic journey and achievements
            </p>
          </div>

          {/* Main Grid - University and A-Level */}
          <div className="grid gap-10 mb-12 lg:grid-cols-2">
            
            {/* University Education Card */}
            <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/8 transition-all duration-500 hover:scale-[1.02] hover:border-purple-500/30 shadow-2xl hover:shadow-purple-500/10 animate-slide-up-delay stagger-2">
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 rounded-3xl bg-gradient-to-br from-purple-500/5 via-transparent to-blue-600/5 group-hover:opacity-100"></div>
              
              {/* University Header */}
              <div className="relative z-10">
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden border-2 rounded-full shadow-lg border-purple-300/30">
                  <Image src="/uom-logo.jpg" alt="University of Moratuwa Logo" width={80} height={80} className="object-cover w-full h-full" />
                </div>
                <div className="flex items-start justify-between mb-8">
                  <div className="flex-1 pr-20"> {/* Added padding to make room for the logo */}
                    <h3 className="mb-4 text-2xl font-bold leading-tight text-purple-300 lg:text-3xl">
                      B.Sc. (Hons) Degree in<br/>
                      <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                        Information Technology
                      </span>
                    </h3>
                    <div className="mb-4 space-y-2">
                      <p className="text-lg font-semibold text-purple-500">
                        CGPA: 3.37
                      </p>
                      <p className="text-xl font-bold text-purple-300">
                        University of Moratuwa
                      </p>
                    </div>
                    {/* Moved date badge to bottom */}
                    <div className="mt-6">
                      <div className="inline-block px-4 py-2 text-sm font-semibold text-purple-400 border rounded-full bg-gradient-to-r from-purple-500/20 to-blue-600/20 border-purple-500/30 backdrop-blur-sm">
                        2023 - present
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* A-Level Results Card */}
            <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/8 transition-all duration-500 hover:scale-[1.02] hover:border-blue-600/30 shadow-2xl hover:shadow-blue-600/10 animate-slide-up-delay stagger-3">
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 rounded-3xl bg-gradient-to-br from-blue-600/5 via-transparent to-indigo-600/5 group-hover:opacity-100"></div>
              
              {/* A-Level Header */}
              <div className="relative z-10">
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden border-2 rounded-full shadow-lg border-blue-300/30">
                  <Image src="/anuladevi-logo.jpg" alt="Anuladevi Balika Vidyalaya Logo" width={80} height={80} className="object-cover w-full h-full" />
                </div>
                <div className="flex items-start justify-between mb-8">
                  <div className="flex-1 pr-20"> {/* Added padding to make room for the logo */}
                    <h3 className="mb-4 text-2xl font-bold leading-tight text-blue-300 lg:text-3xl">
                      <span className="text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text">
                        GCE Advanced Level
                      </span>
                      <span className="block mt-2 text-xl font-semibold text-blue-500">
                        Z-score: 1.7953 (Maths Stream)
                      </span>
                    </h3>
                    <div className="mb-4 space-y-2">
                      <p className="text-lg font-semibold text-blue-300">
                        Anuladevi Balika Vidyalaya
                      </p>
                    </div>
                    {/* Moved date badge to bottom */}
                    <div className="mt-6">
                      <div className="inline-block px-4 py-2 text-sm font-semibold text-purple-400 border rounded-full bg-gradient-to-r from-purple-500/20 to-blue-600/20 border-purple-500/30 backdrop-blur-sm">
                        2021
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="min-h-screen py-16">
          <div className="mb-16 text-center animate-slide-up-delay stagger-1">
            <h3 className="mb-6 text-3xl font-bold text-transparent lg:text-4xl bg-gradient-to-r from-purple-500 via-blue-600 to-indigo-600 bg-clip-text drop-shadow-sm font-title">
              Skills & Technologies
            </h3>
            <p className="text-lg tracking-wide text-purple-400 font-satisfy">
              Technologies I work with
            </p>
          </div>

          {/* Technical Skills Section - Part 1 */}
          <div className="mb-16">
            <div className="mb-12 text-center">
              <h3 className="mb-4 text-3xl font-bold text-transparent lg:text-4xl bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text font-title">
                Technical Skills
              </h3>
              <p className="text-purple-300 font-satisfy">Core programming and development technologies</p>
            </div>
            
            {/* Technical Skills Grid */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
              
              {/* Programming Languages */}
              <div className="relative p-6 transition-all duration-500 border shadow-xl group bg-white/5 border-white/10 rounded-3xl backdrop-blur-xl hover:bg-white/8 hover:border-purple-500/30 hover:shadow-purple-500/10">
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 rounded-3xl bg-gradient-to-br from-purple-500/5 via-transparent to-blue-600/5 group-hover:opacity-100"></div>
                <div className="relative z-10 space-y-4">
                  <div className="text-center">
                    <h4 className="mb-1 text-lg font-bold text-white lg:text-xl">
                      <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">
                        Programming Languages
                      </span>
                    </h4>
                    <div className="w-14 h-0.5 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {skillCategories["Programming Languages"].map((skill, idx) => (
                      <div key={idx} className="flex flex-col items-center p-3 transition-all duration-300 border rounded-lg bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 hover:scale-105">
                        <div className="flex items-center justify-center w-12 h-12 p-2 mb-2 rounded-lg bg-white/20">
                          <img src={skill.logo} alt={skill.name} className="object-contain w-8 h-8" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                        </div>
                        <div className="text-sm font-semibold text-center text-white/90">{skill.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Web Development */}
              <div className="relative p-6 transition-all duration-500 border shadow-xl group bg-white/5 border-white/10 rounded-3xl backdrop-blur-xl hover:bg-white/8 hover:border-blue-600/30 hover:shadow-blue-600/10 lg:col-span-2 xl:col-span-2">
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 rounded-3xl bg-gradient-to-br from-blue-600/5 via-transparent to-indigo-600/5 group-hover:opacity-100"></div>
                <div className="relative z-10 space-y-6">
                  <div className="text-center">
                    <h4 className="mb-2 text-xl font-bold text-white lg:text-2xl">
                      <span className="text-transparent bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text">
                        Web Development
                      </span>
                    </h4>
                    <div className="w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5">
                    {skillCategories["Web Development"].map((skill, idx) => {
                      const isBallerina = skill.name && skill.name.toLowerCase() === 'ballerina'
                      return (
                        <div key={idx} className="flex flex-col items-center p-3 transition-all duration-300 border bg-white/10 border-white/20 rounded-xl backdrop-blur-sm hover:bg-white/15 hover:scale-105">
                          <div className={"bg-white/20 rounded-lg p-2 flex items-center justify-center mb-2 " + (isBallerina ? 'w-14 h-14' : 'w-12 h-12')}>
                            <img
                              src={skill.logo}
                              alt={skill.name}
                              className={(isBallerina ? 'w-10 h-10' : 'w-8 h-8') + ' object-contain'}
                              onError={(e) => { e.currentTarget.style.display = 'none'; }}
                            />
                          </div>
                          <div className="text-sm font-semibold text-center text-white/90">{skill.name}</div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Database */}
              <div className="relative p-6 transition-all duration-500 border shadow-xl group bg-white/5 border-white/10 rounded-3xl backdrop-blur-xl hover:bg-white/8 hover:border-indigo-500/30 hover:shadow-indigo-500/10">
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 rounded-3xl bg-gradient-to-br from-indigo-500/5 via-transparent to-blue-700/5 group-hover:opacity-100"></div>
                <div className="relative z-10 space-y-4">
                  <div className="text-center">
                    <h4 className="mb-1 text-lg font-bold text-white lg:text-xl">
                      <span className="text-transparent bg-gradient-to-r from-indigo-400 to-blue-600 bg-clip-text">
                        Database
                      </span>
                    </h4>
                    <div className="w-14 h-0.5 bg-gradient-to-r from-indigo-400 to-blue-600 mx-auto rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {skillCategories["Database"].map((skill, idx) => (
                      <div key={idx} className="flex flex-col items-center p-3 transition-all duration-300 border rounded-lg bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 hover:scale-105">
                        <div className="flex items-center justify-center w-12 h-12 p-2 mb-2 rounded-lg bg-white/20">
                          <img src={skill.logo} alt={skill.name} className="object-contain w-8 h-8" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                        </div>
                        <div className="text-sm font-semibold text-center text-white/90">{skill.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile App Development */}
              <div className="relative p-6 transition-all duration-500 border shadow-xl group bg-white/5 border-white/10 rounded-3xl backdrop-blur-xl hover:bg-white/8 hover:border-purple-600/30 hover:shadow-purple-600/10">
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 rounded-3xl bg-gradient-to-br from-purple-600/5 via-transparent to-purple-800/5 group-hover:opacity-100"></div>
                <div className="relative z-10 space-y-4">
                  <div className="text-center">
                    <h4 className="mb-1 text-lg font-bold text-white lg:text-xl">
                      <span className="text-transparent bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text">
                        Mobile App Development
                      </span>
                    </h4>
                    <div className="w-14 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full"></div>
                  </div>
                  <div className="flex justify-center">
                    {skillCategories["Mobile App Development"].map((skill, idx) => (
                      <div key={idx} className="flex flex-col items-center p-3 transition-all duration-300 border rounded-lg bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 hover:scale-105">
                        <div className="flex items-center justify-center w-12 h-12 p-2 mb-2 rounded-lg bg-white/20">
                          <img src={skill.logo} alt={skill.name} className="object-contain w-8 h-8" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                        </div>
                        <div className="text-sm font-semibold text-center text-white/90">{skill.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tools & Platforms Section - Part 2 */}
          <div>
            <div className="mb-12 text-center">
              <h3 className="mb-4 text-3xl font-bold text-transparent lg:text-4xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text font-title">
                Tools & Platforms
              </h3>
              <p className="text-blue-300 font-satisfy">Development tools and collaboration platforms</p>
            </div>
            
            {/* Tools & Platforms Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Object.entries(toolsAndPlatforms).map(([category, tools]) => (
                <div key={category} className="relative p-6 transition-all duration-500 border shadow-xl group bg-white/5 border-white/10 rounded-3xl backdrop-blur-xl hover:bg-white/8 hover:border-purple-600/30 hover:shadow-purple-600/10">
                  <div className="absolute inset-0 transition-opacity duration-500 opacity-0 rounded-3xl bg-gradient-to-br from-purple-600/5 via-transparent to-blue-700/5 group-hover:opacity-100"></div>
                  <div className="relative z-10 space-y-4">
                    <div className="text-center">
                      <h4 className="mb-1 text-lg font-bold text-white">
                        <span className="text-transparent bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text">
                          {category}
                        </span>
                      </h4>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-600 mx-auto rounded-full"></div>
                    </div>
                    <div className={`grid gap-3 ${tools.length === 1 ? 'justify-center flex' : tools.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                      {tools.map((tool, idx) => (
                        <div key={idx} className="flex flex-col items-center p-3 transition-all duration-300 border rounded-lg bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 hover:scale-105">
                          <div className="flex items-center justify-center w-12 h-12 p-2 mb-2 rounded-lg bg-white/20">
                            <img src={tool.logo} alt={tool.name} className="object-contain w-8 h-8" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                          </div>
                          <div className="text-sm font-semibold leading-tight text-center text-white/90">{tool.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
              <div className="relative p-6 transition-all duration-500 border shadow-xl group rounded-2xl border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/8 hover:scale-105 hover:border-purple-500/30 hover:shadow-purple-500/10">
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 rounded-2xl bg-gradient-to-br from-purple-500/5 via-transparent to-purple-700/5 group-hover:opacity-100"></div>
                <div className="relative z-10 mb-2 text-3xl font-bold text-purple-400">3</div>
                <div className="relative z-10 text-sm font-medium text-purple-300">
                  Programming Languages
                </div>
              </div>
              <div className="relative p-6 transition-all duration-500 border shadow-xl group rounded-2xl border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/8 hover:scale-105 hover:border-blue-500/30 hover:shadow-blue-500/10">
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-blue-700/5 group-hover:opacity-100"></div>
                <div className="relative z-10 mb-2 text-3xl font-bold text-blue-400">13</div>
                <div className="relative z-10 text-sm font-medium text-blue-300">
                  Web Technologies
                </div>
              </div>
              <div className="relative p-6 transition-all duration-500 border shadow-xl group rounded-2xl border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/8 hover:scale-105 hover:border-indigo-500/30 hover:shadow-indigo-500/10">
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 via-transparent to-indigo-700/5 group-hover:opacity-100"></div>
                <div className="relative z-10 mb-2 text-3xl font-bold text-indigo-400">3</div>
                <div className="relative z-10 text-sm font-medium text-indigo-300">
                  Database Systems
                </div>
              </div>
              <div className="relative p-6 transition-all duration-500 border shadow-xl group rounded-2xl border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/8 hover:scale-105 hover:border-purple-600/30 hover:shadow-purple-600/10">
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 rounded-2xl bg-gradient-to-br from-purple-600/5 via-transparent to-purple-800/5 group-hover:opacity-100"></div>
                <div className="relative z-10 mb-2 text-3xl font-bold text-purple-500">1</div>
                <div className="relative z-10 text-sm font-medium text-purple-300">
                  Mobile Development
                </div>
              </div>
              <div className="relative p-6 transition-all duration-500 border shadow-xl group rounded-2xl border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/8 hover:scale-105 hover:border-blue-700/30 hover:shadow-blue-700/10">
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 rounded-2xl bg-gradient-to-br from-blue-700/5 via-transparent to-indigo-800/5 group-hover:opacity-100"></div>
                <div className="relative z-10 mb-2 text-3xl font-bold text-blue-500">6</div>
                <div className="relative z-10 text-sm font-medium text-blue-300">
                  Development Tools
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className={`min-h-screen py-16 px-4 md:px-0 animate-slide-up ${visibleSections.has('projects') ? 'visible' : ''}`}>
          <div className={`mb-16 text-center animate-slide-up-delay stagger-1 ${visibleSections.has('projects') ? 'visible' : ''}`}>
            <h3 className="mb-6 text-3xl font-bold text-transparent lg:text-4xl bg-gradient-to-r from-purple-500 via-blue-600 to-indigo-600 bg-clip-text drop-shadow-sm font-title">
              Featured Projects
            </h3>
            <p className="text-lg tracking-wide text-purple-300 font-satisfy">
              Some of my recent work
            </p>
          </div>

          <div className="grid gap-8 md:gap-12">
            {projects.map((project, index) => (
              <div key={project.id} className={`relative p-4 md:p-8 transition-all duration-500 border shadow-2xl group rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/8 animate-slide-up-delay stagger-${Math.min(index + 2, 5)} ${visibleSections.has('projects') ? 'visible' : ''}`}>
                <div className="grid gap-6 md:gap-10 lg:grid-cols-2">
                  {/* Project Info */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-purple-200 lg:text-2xl">
                        {project.title}
                      </h3>
                      <p className="mb-4 text-lg text-purple-300">{project.subtitle}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <div className="inline-block px-3 py-1 text-sm text-purple-300 border rounded-full bg-gradient-to-r from-purple-500/20 to-blue-600/20 border-purple-400/30">
                          {project.role}
                        </div>
                        <div className="inline-flex items-center px-3 py-1 text-sm text-blue-300 border rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-600/20 border-blue-400/30">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                          {project.timeline}
                        </div>
                      </div>
                    </div>

                    <p className="leading-relaxed text-blue-200">{project.description}</p>

                    <div>
                      <h4 className="mb-3 text-lg font-semibold text-purple-200">
                        {project.highlightsTitle || "Key Responsibilities:"}
                      </h4>
                      <ul className="space-y-2">
                        {(project.highlights || project.responsibilities)?.map((item, index) => (
                          <li key={index} className="flex items-start text-blue-300">
                            <span className="mr-2 text-purple-400">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 text-lg font-semibold text-purple-200">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 text-sm text-purple-300 border rounded-full bg-purple-500/10 border-purple-400/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Repository Link */}
                    <div className="mt-6">
                      {project.repoUrl === "private" ? (
                        <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-400 border rounded-lg cursor-not-allowed bg-gray-600/20 border-gray-500/30">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                          </svg>
                          Private Repository
                        </div>
                      ) : (
                        <a 
                          href={project.repoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center px-4 py-2 text-sm font-medium text-purple-300 transition-all duration-300 border rounded-lg border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 hover:border-purple-500 hover:text-purple-200"
                        >
                          {project.type === "UI/UX Design" ? (
                            <>
                              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.02s-1.354-3.02-3.019-3.02h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.015-4.49-4.491S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.02s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.02s1.354 3.02 3.019 3.02h3.117v-6.04H8.148zm7.704 0c2.476 0 4.49 2.015 4.49 4.491s-2.014 4.49-4.49 4.49-4.49-2.015-4.49-4.49 2.014-4.491 4.49-4.491zm0 1.471c-1.665 0-3.019 1.355-3.019 3.02s1.354 3.02 3.019 3.02 3.019-1.355 3.019-3.02-1.354-3.02-3.019-3.02zM8.148 24c-2.476 0-4.49-2.015-4.49-4.491s2.014-4.49 4.49-4.49h4.588V24H8.148zm0-7.51c-1.665 0-3.019 1.355-3.019 3.02s1.354 3.02 3.019 3.02h3.117v-6.04H8.148z"/>
                              </svg>
                              View Figma Design
                            </>
                          ) : (
                            <>
                              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                              </svg>
                              View Repository
                            </>
                          )}
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Images Carousel */}
                  <div className="relative">
                    {project.type === "Mobile Application" ? (
                      /* Mobile App Frame */
                      <div className="relative mx-auto w-64 h-[500px] sm:w-72 sm:h-[550px]">
                        {/* Phone Frame */}
                        <div className="relative w-full h-full bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                          <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
                            {/* Notch */}
                            <div className="absolute top-0 z-10 w-32 h-6 transform -translate-x-1/2 bg-gray-900 left-1/2 rounded-b-xl"></div>
                            
                            {/* Screen Content */}
                            <div className="relative w-full h-full">
                              <img 
                                src={project.images[currentImageIndex[project.id] || 0]} 
                                alt={`${project.title} ${(currentImageIndex[project.id] || 0) + 1}`} 
                                className="object-cover object-center w-full h-full transition-opacity duration-300" 
                              />
                            </div>
                            

                            
                          </div>
                        </div>
                        
                        {/* Navigation Arrows for Mobile - Below the frame */}
                        {project.images.length > 1 && (
                          <div className="flex justify-center mt-4 space-x-4">
                            {/* Previous Button */}
                            <button
                              onClick={() => prevImage(project.id, project.images.length)}
                              className="flex items-center justify-center w-10 h-10 text-white transition-all duration-300 border rounded-lg shadow-lg bg-white/10 backdrop-blur-md hover:bg-white/20 border-white/30 hover:scale-110 hover:border-purple-400/50 hover:shadow-purple-400/25"
                              suppressHydrationWarning
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                              </svg>
                            </button>
                            
                            {/* Next Button */}
                            <button
                              onClick={() => nextImage(project.id, project.images.length)}
                              className="flex items-center justify-center w-10 h-10 text-white transition-all duration-300 border rounded-lg shadow-lg bg-white/10 backdrop-blur-md hover:bg-white/20 border-white/30 hover:scale-110 hover:border-purple-400/50 hover:shadow-purple-400/25"
                              suppressHydrationWarning
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </div>
                        )}
                      </div>
                    ) : (
                      /* Laptop Frame for Web Apps */
                      <div className="relative max-w-3xl mx-auto">
                        {/* Laptop Base */}
                        <div className="relative">
                          {/* Laptop Screen */}
                          <div className="p-3 bg-gray-900 shadow-2xl rounded-t-2xl">
                            {/* Screen Bezel */}
                            <div className="bg-[#121212] rounded-xl overflow-hidden relative aspect-[16/10] border border-gray-800">
                              
                              
                              {/* Screen Content */}
                              <div className="relative w-full h-full">
                                <div className="absolute inset-0 overflow-hidden rounded-xl">
                                  <img 
                                    src={project.images[currentImageIndex[project.id] || 0]} 
                                    alt={`${project.title} ${(currentImageIndex[project.id] || 0) + 1}`} 
                                    className="object-contain w-full h-full transition-opacity duration-300" 
                                  />
                                </div>
                              </div>
                              
                              {/* Navigation Arrows for Laptop */}
                              {project.images.length > 1 && (
                                <>
                                </>
                              )}
                            </div>
                          </div>
                          
                          {/* Laptop Base/Keyboard */}
                          <div className="relative w-full h-6 mx-auto bg-gray-800 rounded-b-2xl">
                            {/* Trackpad */}
                            <div className="absolute w-16 h-4 transform -translate-x-1/2 bg-gray-700 rounded top-1 left-1/2"></div>
                          </div>
                          
                          {/* Laptop Stand */}
                          <div className="relative w-3/4 h-2 mx-auto bg-gray-600 rounded-b"></div>
                        </div>
                        
                        {/* Navigation Arrows for Laptop - Below the frame */}
                        {project.images.length > 1 && (
                          <div className="flex justify-center mt-4 space-x-4">
                            {/* Previous Button */}
                            <button
                              onClick={() => prevImage(project.id, project.images.length)}
                              className="flex items-center justify-center w-10 h-10 text-white transition-all duration-300 border rounded-lg shadow-lg bg-white/10 backdrop-blur-md hover:bg-white/20 border-white/30 hover:scale-110 hover:border-purple-400/50 hover:shadow-purple-400/25"
                              suppressHydrationWarning
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                              </svg>
                            </button>
                            
                            {/* Next Button */}
                            <button
                              onClick={() => nextImage(project.id, project.images.length)}
                              className="flex items-center justify-center w-10 h-10 text-white transition-all duration-300 border rounded-lg shadow-lg bg-white/10 backdrop-blur-md hover:bg-white/20 border-white/30 hover:scale-110 hover:border-purple-400/50 hover:shadow-purple-400/25"
                              suppressHydrationWarning
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </div>
                        )}
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
                                ? 'bg-purple-400 w-6' 
                                : 'bg-white/30 hover:bg-purple-300/50'
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

 {/* Memberships & Activities Section */}
        <section id="memberships" className={`px-4 py-16 md:px-16 animate-slide-up ${visibleSections.has('memberships') ? 'visible' : ''}`}>
           <div className={`mb-16 text-center animate-slide-up-delay stagger-1 ${visibleSections.has('memberships') ? 'visible' : ''}`}>
           <h4 className="mb-6 text-2xl font-bold text-transparent lg:text-3xl bg-gradient-to-r from-purple-500 via-blue-600 to-indigo-600 bg-clip-text drop-shadow-sm font-title">
            Memberships & Activities</h4>
          </div>
          <div className="grid gap-12">
            {memberships.map((membership, index) => (
              <div key={membership.id} className={`relative flex flex-col md:flex-row items-center md:items-start gap-8 p-8 shadow-lg bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-xl min-h-[300px] animate-slide-up-delay stagger-${index + 2} ${visibleSections.has('memberships') ? 'visible' : ''}`}>
                {/* Logo in top-right corner */}
                <div className="absolute w-16 h-16 overflow-hidden border-2 border-purple-300 rounded-full shadow-lg top-4 right-4 md:w-20 md:h-20">
                  <Image src="/fitmoments-logo.jpg" alt="FIT Moments Logo" width={80} height={80} className="object-cover w-full h-full" />
                </div>
                
                <div className="w-full md:w-2/5">
                  <Image src={membership.image} alt={membership.title} width={600} height={400} className="object-cover w-full h-auto rounded-md shadow-lg" />
                </div>
                <div className="flex flex-col justify-center w-full h-full md:w-3/5 md:pt-6">
                  <h3 className="mb-3 text-2xl font-semibold text-purple-200">{membership.title}</h3>
                  <p className="mb-6 text-xl text-purple-300">{membership.organization}</p>
                  <p className="text-lg text-blue-200">{membership.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className={`px-4 pt-32 pb-16 md:px-16 animate-slide-up ${visibleSections.has('certifications') ? 'visible' : ''}`}>
          <div className={`mb-16 text-center animate-slide-up-delay stagger-1 ${visibleSections.has('certifications') ? 'visible' : ''}`}>
           <h3 className="mb-6 text-3xl font-bold text-transparent lg:text-4xl bg-gradient-to-r from-purple-500 via-blue-600 to-indigo-600 bg-clip-text drop-shadow-sm font-title">
          Certifications & Achievements</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, index) => (
              <div key={cert.id} className={`p-6 transition-all duration-300 shadow-lg bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl hover:shadow-purple-500/20 hover:-translate-y-1 animate-slide-up-delay stagger-${Math.min(index + 2, 5)} ${visibleSections.has('certifications') ? 'visible' : ''}`}>
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 mr-4 text-purple-300 rounded-full bg-purple-500/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <span className="px-2 py-1 text-xs text-purple-200 rounded-full bg-purple-500/20">{cert.category}</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-purple-200">{cert.title}</h3>
                <p className="mb-2 text-blue-300">{cert.issuer}</p>
                <p className="text-sm text-purple-400">{cert.date}</p>
              </div>
            ))}
          </div>
        </section>

        
        {/* CONTACT SECTION */}
        <section id="contact" className={`min-h-screen pt-32 pb-16 animate-slide-up ${visibleSections.has('contact') ? 'visible' : ''}`}>
          <div className={`mb-16 text-center animate-slide-up-delay stagger-1 ${visibleSections.has('contact') ? 'visible' : ''}`}>
             <h3 className="mb-6 text-3xl font-bold text-transparent lg:text-4xl bg-gradient-to-r from-purple-500 via-blue-600 to-indigo-600 bg-clip-text drop-shadow-sm font-title">
              Get In Touch
            </h3>
            <p className="max-w-2xl mx-auto text-lg tracking-wide text-purple-300 font-satisfy">
              I&apos;m always interested in new opportunities and exciting projects. 
              Whether you want to discuss a project, job opportunity, or just say hello, I&apos;d love to hear from you!
            </p>
          </div>

          <div className="grid max-w-6xl gap-12 mx-auto lg:grid-cols-2">
            {/* Left Side - Contact Information */}
            <div className="space-y-8">
              
              {/* Contact Info Cards */}
              <div className="relative p-8 border group rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl">
                <h3 className="mb-6 text-2xl font-bold text-purple-300 font-title">Contact Information</h3>
                <div className="space-y-4">
                  
                  {/* Email */}
                  <a href="mailto:sachinikalansooriya22@gmail.com" className="flex items-center p-4 space-x-4 transition-all duration-300 group rounded-xl hover:scale-105 hover:bg-white/10">
                    <div className="p-3 text-purple-300 transition-all duration-300 border rounded-lg bg-purple-500/20 border-purple-500/30 group-hover:bg-purple-500/30 group-hover:scale-110">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white/90">Email</p>
                      <p className="transition-colors text-white/70 group-hover:text-purple-300">sachinikalansooriya22@gmail.com</p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a href="tel:+94771896153" className="flex items-center p-4 space-x-4 transition-all duration-300 group rounded-xl hover:scale-105 hover:bg-white/10">
                    <div className="p-3 text-purple-300 transition-all duration-300 border rounded-lg bg-purple-500/20 border-purple-500/30 group-hover:bg-purple-500/30 group-hover:scale-110">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white/90">Phone</p>
                      <p className="transition-colors text-white/70 group-hover:text-purple-300">+94 771896153</p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center p-4 space-x-4 rounded-xl">
                    <div className="p-3 text-purple-300 border rounded-lg bg-purple-500/20 border-purple-500/30">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white/90">Location</p>
                      <p className="text-white/70">Galle, Sri Lanka</p>
                    </div>
                  </div>

                  {/* Work Status */}
                  <div className="flex items-center p-4 space-x-4 rounded-xl">
                    <div className="p-3 text-purple-300 border rounded-lg bg-purple-500/20 border-purple-500/30">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white/90">Work Status</p>
                      <p className="text-white/70">Open to Opportunities</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links & Resume */}
              <div className="relative p-8 border group rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-blue-300 font-title">Follow Me</h3>
                  <a
                    href="/SachiniKalansooriyaCV.pdf"
                    download
                    className="inline-flex items-center px-4 py-2 font-medium text-white transition-all duration-300 border rounded-lg shadow-lg bg-blue-600/20 backdrop-blur-md border-blue-500/60 hover:bg-blue-600/40 hover:shadow-blue-500/25 hover:scale-105"
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
                    className="p-4 transition-all duration-300 border shadow-lg rounded-xl border-purple-500/60 bg-purple-500/20 backdrop-blur-md hover:bg-purple-500/30 hover:border-purple-500 hover:scale-110 group hover:shadow-purple-500/25"
                  >
                    <div className="text-purple-300 transition-colors">
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
                    className="p-4 transition-all duration-300 border shadow-lg rounded-xl border-purple-500/60 bg-purple-500/20 backdrop-blur-md hover:bg-purple-500/30 hover:border-purple-500 hover:scale-110 group hover:shadow-purple-500/25"
                  >
                    <div className="text-purple-300 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>

              {/* Availability Status */}
              <div className="relative p-6 border group rounded-3xl border-green-500/30 bg-green-500/10 backdrop-blur-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div>
                    <div className="font-semibold text-green-300">Available for Work</div>
                    <div className="text-sm text-white/70">
                      Currently seeking new opportunities
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="relative p-8 transition-all duration-500 border shadow-xl group rounded-3xl border-blue-500/30 bg-white/5 backdrop-blur-xl hover:shadow-blue-500/10">
              <h3 className="mb-6 text-2xl font-bold text-blue-300 font-title">Send Message</h3>
              
              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg ${submitStatus.toLowerCase().includes('failed') ? 'bg-red-500/20 border border-red-500/50 text-red-300' : 'bg-green-500/20 border border-green-500/50 text-green-300'} text-center font-medium`}>
                  {submitStatus}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-white/90">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 text-white transition-all duration-300 border rounded-lg shadow-md bg-white/10 backdrop-blur-sm border-blue-500/30 placeholder-white/50 focus:border-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-500/30 hover:shadow-blue-500/20"
                    placeholder="Enter your full name"
                    suppressHydrationWarning
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-white/90">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 text-white transition-all duration-300 border rounded-lg shadow-md bg-white/10 backdrop-blur-sm border-blue-500/30 placeholder-white/50 focus:border-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-500/30 hover:shadow-blue-500/20"
                    placeholder="your.email@example.com"
                    suppressHydrationWarning                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white/90">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 text-white transition-all duration-300 border rounded-lg shadow-md bg-white/10 backdrop-blur-sm border-blue-500/30 placeholder-white/50 focus:border-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-500/30 hover:shadow-blue-500/20"
                    placeholder="What's this about?"
                    suppressHydrationWarning
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-white/90">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 text-white transition-all duration-300 border rounded-lg shadow-md resize-none bg-white/10 backdrop-blur-sm border-blue-500/30 placeholder-white/50 focus:border-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-500/30 hover:shadow-blue-500/20"
                    placeholder="Tell me about your project, job opportunity, or just say hello!"
                    suppressHydrationWarning
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-4 bg-blue-600/20 backdrop-blur-md border border-blue-500/60 hover:bg-blue-600/30 hover:border-blue-500 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                    isSubmitting ? 'cursor-not-allowed' : ''
                  }`}
                  suppressHydrationWarning
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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

        {/* Footer */}
        <footer className="py-8 text-center border-t border-purple-500/20 bg-gradient-to-r from-purple-900/10 to-blue-900/10">
          <p className="text-purple-300/80">
            © 2025 Sachini Kalansooriya. All rights reserved.
          </p>
        </footer>

      </div>
    </main>
    </>
  )
}





