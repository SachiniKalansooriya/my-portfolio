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
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-white/90">
            My academic journey and achievements
          </p>
        </div>

        {/* Main Grid - University and A-Level */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* University Education Card */}
          <div className="p-8 rounded-2xl border transition-all duration-300 hover:scale-105 bg-white/80 border-gray-200 hover:border-blue-500/50 shadow-xl backdrop-blur-sm">
            
            {/* University Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-blue-600">
                  B.Sc. (Hons) Degree in Information Technology
                </h3>
                <p className="text-3 font-semibold text-gray-700">
                  CGPA: 3.37
                </p>
                <p className="text-lg font-semibold text-gray-700">
                  University of Moratuwa
                </p>
                <p className="text-gray-500">
                  Sri Lanka
                </p>
              </div>
              <div className="text-right">
                <div className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  2023 - present
                </div>
              </div>
            </div>
          </div>

          {/* A-Level Results Card */}
          <div className="p-8 rounded-2xl border transition-all duration-300 hover:scale-105 bg-white/80 border-gray-200 hover:border-purple-500/50 shadow-xl backdrop-blur-sm">
            
            {/* A-Level Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2 text-purple-600">
                GCE Advanced Level (2021)
                <p className="text-lg font-medium"> Z-score: 1.7953 (Maths Stream)</p>
              </h3>
              <p className="text-gray-500">
                Anuladevi Balika Vidyalaya • 2021
              </p>
              <p className="text-gray-500">Galle</p>
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
