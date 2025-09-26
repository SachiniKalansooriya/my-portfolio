export default function Home() {
  return (
    <section className="h-full flex items-center justify-center px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full py-8">
          <div className="space-y-6">
            <div className="animate-fade-in">
              <p className="text-lg font-medium text-blue-600">Hello, I'm</p>
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-2">
                <span className="bg-pink-300 bg-clip-text text-transparent">Sachini Kalansooriya</span>
              </h1>
              <h2 className="text-xl lg:text-2xl font-light text-blue-500">IT Undergraduate</h2>
            </div>
            <div>
              <p className="text-base lg:text-lg leading-relaxed text-gray-600">
                A passionate and versatile full-stack developer with a strong drive for learning and innovation.
              </p>

              <div className="mt-6 flex items-center gap-4">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition-colors"
                >
                  Download Resume
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 relative">
                <div className="w-full h-full rounded-2xl overflow-hidden border-4 transition-all duration-300 hover:scale-105 border-blue-500/30 shadow-blue-500/20 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center text-4xl lg:text-6xl font-bold text-white">
                    <img src="propic.jpg" alt="Profile" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}





