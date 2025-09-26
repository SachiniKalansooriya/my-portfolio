export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f1724] text-white">
  <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 py-12">
  

  <section className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 pt-6 pb-12">
          {/* Left content */}
          <div className="space-y-6 max-w-xl">
            <div className="text-lg font-semibold text-pink-500">Hey there,</div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
             <p> I Am </p>Sachini Kalansooriya
              <span className="inline-block w-1 ml-2 h-12 align-middle bg-white/90 animate-blink" />
            </h1>

            <p className="text-gray-300 text-lg">
             A motivated and versatile software engineering student passionate
             about full-stack development. Skilled in crafting creative, efficient
             solutions with modern technologies, I thrive in collaborative, dynamic
             environments and am eager to contribute to impactful projects while
             continuously learning and innovating.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-6">
              <a href="/resume.pdf" download className="inline-flex items-center px-5 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-md font-medium shadow">Download CV</a>
              <a href="/contact" className="inline-flex items-center px-5 py-3 border border-white/20 text-white rounded-md hover:bg-white/5">Let's talk</a>
            </div>

            <div className="flex items-center gap-4 mt-4">
              {/* social icons (simple circles) */}
              <a className="w-9 h-9 rounded-full border border-pink-500 flex items-center justify-center text-pink-400 hover:bg-pink-500/20" href="#" aria-label="facebook">f</a>
              <a className="w-9 h-9 rounded-full border border-pink-500 flex items-center justify-center text-pink-400 hover:bg-pink-500/20" href="#" aria-label="linkedin">in</a>
              <a className="w-9 h-9 rounded-full border border-pink-500 flex items-center justify-center text-pink-400 hover:bg-pink-500/20" href="#" aria-label="instagram">ig</a>
              <a className="w-9 h-9 rounded-full border border-pink-500 flex items-center justify-center text-pink-400 hover:bg-pink-500/20" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="github">
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
                <div className="absolute w-96 h-96 md:w-[36rem] md:h-[36rem] rounded-full bg-white/5 -right-4 -top-6" />

                {/* portrait (increased size) */}
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                  <img src="/propic.png" alt="Profile" className="w-full h-full object-cover" />
                </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}





