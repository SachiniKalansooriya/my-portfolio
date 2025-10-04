"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur-md bg-black/10  ">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-2xl font-bold text-pink-500">Sachini</div>

          <nav className="hidden md:flex items-center gap-6 text-sm uppercase text-gray-300">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/education" className="hover:text-white">Education</Link>
            <Link href="/skills" className="hover:text-white">Skills</Link>
            <Link href="/projects" className="hover:text-white">Projects</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </nav>

          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="p-2 rounded-md bg-white/6 text-white"
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
          <div className="md:hidden bg-black/70 border-t border-white/6">
            <div className="px-4 py-4 space-y-2">
              <Link href="/" className="block px-3 py-2 rounded text-gray-200 hover:bg-white/5">Home</Link>
              <Link href="/education" className="block px-3 py-2 rounded text-gray-200 hover:bg-white/5">Education</Link>
              <Link href="/skills" className="block px-3 py-2 rounded text-gray-200 hover:bg-white/5">Skills</Link>
              <Link href="/projects" className="block px-3 py-2 rounded text-gray-200 hover:bg-white/5">Projects</Link>
              <Link href="/contact" className="block px-3 py-2 rounded text-gray-200 hover:bg-white/5">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
