"use client"

import { useState, useEffect } from 'react'
import { Dancing_Script } from 'next/font/google'

const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export default function Header() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setOpen(false) // Close mobile menu after clicking
  }

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'education', 'skills', 'projects', 'contact']
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

  const isActive = (section: string) => activeSection === section

  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur-md bg-black/40 border-b border-gray-800/20">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('home')}
            className={`text-3xl font-bold text-[var(--light-accent)] drop-shadow-lg hover:scale-105 transition-transform duration-300 ${dancingScript.className}`}
            suppressHydrationWarning
          >
            Sachini Kalansooriya
          </button>

          <nav className="hidden md:flex items-center gap-6 text-sm uppercase text-[var(--text-muted)]">
            <button 
              onClick={() => scrollToSection('home')}
              className={`px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 relative overflow-hidden group ${
                isActive('home') 
                  ? 'bg-[var(--surface)] text-[var(--light-accent)] font-semibold shadow-lg border border-[var(--border)] scale-105' 
                  : 'hover:text-[var(--light-accent)] hover:bg-[var(--primary)]/20'
              }`}
              suppressHydrationWarning
            >
              {isActive('home') && (
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/20 via-[var(--accent)]/20 to-transparent opacity-100 group-hover:translate-x-full transition-all duration-500 transform -translate-x-full animate-shimmer"></span>
              )}
              <span className="relative">Home</span>
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className={`px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 relative overflow-hidden group ${
                isActive('education') 
                  ? 'bg-[var(--surface)] text-[var(--light-accent)] font-semibold shadow-lg border border-[var(--border)] scale-105' 
                  : 'hover:text-[var(--light-accent)] hover:bg-[var(--primary)]/20'
              }`}
              suppressHydrationWarning
            >
              {isActive('education') && (
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/20 via-[var(--accent)]/20 to-transparent opacity-100 group-hover:translate-x-full transition-all duration-500 transform -translate-x-full animate-shimmer"></span>
              )}
              <span className="relative">Education</span>
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className={`px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 relative overflow-hidden group ${
                isActive('skills') 
                  ? 'bg-[var(--surface)] text-[var(--light-accent)] font-semibold shadow-lg border border-[var(--border)] scale-105' 
                  : 'hover:text-[var(--light-accent)] hover:bg-[var(--primary)]/20'
              }`}
              suppressHydrationWarning
            >
              {isActive('skills') && (
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/20 via-[var(--accent)]/20 to-transparent opacity-100 group-hover:translate-x-full transition-all duration-500 transform -translate-x-full animate-shimmer"></span>
              )}
              <span className="relative">Skills</span>
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 relative overflow-hidden group ${
                isActive('projects') 
                  ? 'bg-[var(--surface)] text-[var(--light-accent)] font-semibold shadow-lg border border-[var(--border)] scale-105' 
                  : 'hover:text-[var(--light-accent)] hover:bg-[var(--primary)]/20'
              }`}
              suppressHydrationWarning
            >
              {isActive('projects') && (
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/20 via-[var(--accent)]/20 to-transparent opacity-100 group-hover:translate-x-full transition-all duration-500 transform -translate-x-full animate-shimmer"></span>
              )}
              <span className="relative">Projects</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 relative overflow-hidden group ${
                isActive('contact') 
                  ? 'bg-[var(--surface)] text-[var(--light-accent)] font-semibold shadow-lg border border-[var(--border)] scale-105' 
                  : 'hover:text-[var(--light-accent)] hover:bg-[var(--primary)]/20'
              }`}
              suppressHydrationWarning
            >
              {isActive('contact') && (
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/20 via-[var(--accent)]/20 to-transparent opacity-100 group-hover:translate-x-full transition-all duration-500 transform -translate-x-full animate-shimmer"></span>
              )}
              <span className="relative">Contact</span>
            </button>
          </nav>

          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="p-2 rounded-md bg-[var(--surface)]/60 text-[var(--text)] border border-[var(--border)]"
            >
              {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-black/60 border-t border-gray-800/20">
            <div className="px-4 py-4 space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                  isActive('home') 
                    ? 'bg-[var(--primary)] text-white font-semibold' 
                    : 'text-[var(--text-muted)] hover:bg-[var(--primary)]/20 hover:text-[var(--light-accent)]'
                }`}
                suppressHydrationWarning
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('education')}
                className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                  isActive('education') 
                    ? 'bg-[var(--primary)] text-white font-semibold' 
                    : 'text-[var(--text-muted)] hover:bg-[var(--primary)]/20 hover:text-[var(--light-accent)]'
                }`}
                suppressHydrationWarning
              >
                Education
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                  isActive('skills') 
                    ? 'bg-[var(--primary)] text-white font-semibold' 
                    : 'text-[var(--text-muted)] hover:bg-[var(--primary)]/20 hover:text-[var(--light-accent)]'
                }`}
                suppressHydrationWarning
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                  isActive('projects') 
                    ? 'bg-[var(--primary)] text-white font-semibold' 
                    : 'text-[var(--text-muted)] hover:bg-[var(--primary)]/20 hover:text-[var(--light-accent)]'
                }`}
                suppressHydrationWarning
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                  isActive('contact') 
                    ? 'bg-[var(--primary)] text-white font-semibold' 
                    : 'text-[var(--text-muted)] hover:bg-[var(--primary)]/20 hover:text-[var(--light-accent)]'
                }`}
                suppressHydrationWarning
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
