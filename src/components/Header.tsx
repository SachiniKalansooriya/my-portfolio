"use client"

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Dancing_Script } from 'next/font/google'

const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-50">
  <div className="backdrop-blur-md bg-black/40 border-b border-gray-800/20">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className={`text-3xl font-bold text-[var(--light-accent)] drop-shadow-lg ${dancingScript.className}`}>Sachini Kalansooriya</div>

          <nav className="hidden md:flex items-center gap-6 text-sm uppercase text-[var(--text-muted)]">
            <Link 
              href="/" 
              className={`px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 relative overflow-hidden group ${
                isActive('/') 
                  ? 'bg-[var(--surface)] text-[var(--light-accent)] font-semibold shadow-lg border border-[var(--border)] scale-105' 
                  : 'hover:text-[var(--light-accent)] hover:bg-[var(--primary)]/20'
              }`}
            >
              {isActive('/') && (
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/20 via-[var(--accent)]/20 to-transparent opacity-100 group-hover:translate-x-full transition-all duration-500 transform -translate-x-full animate-shimmer"></span>
              )}
              <span className="relative">Home</span>
            </Link>
            <Link 
              href="/education" 
              className={`px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 relative overflow-hidden group ${
                isActive('/education') 
                  ? 'bg-[var(--surface)] text-[var(--light-accent)] font-semibold shadow-lg border border-[var(--border)] scale-105' 
                  : 'hover:text-[var(--light-accent)] hover:bg-[var(--primary)]/20'
              }`}
            >
              {isActive('/education') && (
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/20 via-[var(--accent)]/20 to-transparent opacity-100 group-hover:translate-x-full transition-all duration-500 transform -translate-x-full animate-shimmer"></span>
              )}
              <span className="relative">Education</span>
            </Link>
            <Link 
              href="/skills" 
              className={`px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 relative overflow-hidden group ${
                isActive('/skills') 
                  ? 'bg-[var(--surface)] text-[var(--light-accent)] font-semibold shadow-lg border border-[var(--border)] scale-105' 
                  : 'hover:text-[var(--light-accent)] hover:bg-[var(--primary)]/20'
              }`}
            >
              {isActive('/skills') && (
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/20 via-[var(--accent)]/20 to-transparent opacity-100 group-hover:translate-x-full transition-all duration-500 transform -translate-x-full animate-shimmer"></span>
              )}
              <span className="relative">Skills</span>
            </Link>
            <Link 
              href="/projects" 
              className={`px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 relative overflow-hidden group ${
                isActive('/projects') 
                  ? 'bg-[var(--surface)] text-[var(--light-accent)] font-semibold shadow-lg border border-[var(--border)] scale-105' 
                  : 'hover:text-[var(--light-accent)] hover:bg-[var(--primary)]/20'
              }`}
            >
              {isActive('/projects') && (
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/20 via-[var(--accent)]/20 to-transparent opacity-100 group-hover:translate-x-full transition-all duration-500 transform -translate-x-full animate-shimmer"></span>
              )}
              <span className="relative">Projects</span>
            </Link>
            <Link 
              href="/contact" 
              className={`px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 relative overflow-hidden group ${
                isActive('/contact') 
                  ? 'bg-[var(--surface)] text-[var(--light-accent)] font-semibold shadow-lg border border-[var(--border)] scale-105' 
                  : 'hover:text-[var(--light-accent)] hover:bg-[var(--primary)]/20'
              }`}
            >
              {isActive('/contact') && (
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/20 via-[var(--accent)]/20 to-transparent opacity-100 group-hover:translate-x-full transition-all duration-500 transform -translate-x-full animate-shimmer"></span>
              )}
              <span className="relative">Contact</span>
            </Link>
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
              <Link 
                href="/" 
                className={`block px-3 py-2 rounded transition-colors ${
                  isActive('/') 
                    ? 'bg-[var(--primary)] text-white font-semibold' 
                    : 'text-[var(--text-muted)] hover:bg-[var(--primary)]/20 hover:text-[var(--light-accent)]'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/education" 
                className={`block px-3 py-2 rounded transition-colors ${
                  isActive('/education') 
                    ? 'bg-[var(--primary)] text-white font-semibold' 
                    : 'text-[var(--text-muted)] hover:bg-[var(--primary)]/20 hover:text-[var(--light-accent)]'
                }`}
              >
                Education
              </Link>
              <Link 
                href="/skills" 
                className={`block px-3 py-2 rounded transition-colors ${
                  isActive('/skills') 
                    ? 'bg-[var(--primary)] text-white font-semibold' 
                    : 'text-[var(--text-muted)] hover:bg-[var(--primary)]/20 hover:text-[var(--light-accent)]'
                }`}
              >
                Skills
              </Link>
              <Link 
                href="/projects" 
                className={`block px-3 py-2 rounded transition-colors ${
                  isActive('/projects') 
                    ? 'bg-[var(--primary)] text-white font-semibold' 
                    : 'text-[var(--text-muted)] hover:bg-[var(--primary)]/20 hover:text-[var(--light-accent)]'
                }`}
              >
                Projects
              </Link>
              <Link 
                href="/contact" 
                className={`block px-3 py-2 rounded transition-colors ${
                  isActive('/contact') 
                    ? 'bg-[var(--primary)] text-white font-semibold' 
                    : 'text-[var(--text-muted)] hover:bg-[var(--primary)]/20 hover:text-[var(--light-accent)]'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
