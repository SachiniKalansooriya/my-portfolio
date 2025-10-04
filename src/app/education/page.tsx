// Education Section Component
function EducationSection() {
  return (
    <section className="h-full overflow-y-auto relative">
      {/* Background image with glassy overlay - Fixed to viewport */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: 'url(/background.jpg)' }}
      />
      <div className="fixed inset-0 bg-black/40 backdrop-blur-[1px]" />
      
      {/* Glass effect overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/15" />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl relative z-10">
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

       
      </div>
    </section>
  )
}

export default function EducationPage() {
  return <EducationSection />
}
