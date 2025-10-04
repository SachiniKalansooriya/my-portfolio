export default function Home() {
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
  

  <section className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 pt-6 pb-12">
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
              <a href="/contact" className="inline-flex items-center px-5 py-3 border border-[var(--border)] text-[var(--text)] rounded-md hover:bg-[var(--primary)]/10 hover:border-[var(--primary)] transform hover:scale-105 transition-all duration-300">Let's talk</a>
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
      </div>
    </main>
  )
}





