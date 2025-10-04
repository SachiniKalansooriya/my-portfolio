"use client"

import React from 'react'

function SkillsSection() {
  const skillCategories = {
    "Programming Languages": [
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }
    ],
    "Web Development": [
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Three.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
      { name: "Javascript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Node", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Socket.io", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
        { name: "Ballerina", logo:"https://ballerina.io/img/branding/ballerina_logo_dgrey_png.png"},
      { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" }
    ],
    "Database": [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
    "Mobile App Development": [
      { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    ],
    "Version Control": [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Github", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    ],
    "Project Management Tools": [
      { name: "Jira", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" }
    ],
     "UI/UX Designs": [
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    ],
     "Containerization": [
       { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    ],
  }
  const additionalTools = [
    { 
      category: "Graphic Design", 
      tools: [
        { name: "Adobe Lightroom Pro", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
        { name: "GIMP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg" },
        { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" }
      ]
    }
  ]

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
      
      <div className="container mx-auto px-4 py-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-sm">
            Technical Skills
          </h2>
          <p className="text-lg text-white/80 font-light tracking-wide">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills by Categories - Balanced Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
          
          {/* Programming Languages */}
          <div className="group relative bg-white/5 border border-white/10 rounded-3xl p-4 backdrop-blur-xl hover:bg-white/8 transition-all duration-500 hover:border-emerald-400/30 shadow-xl hover:shadow-emerald-500/10">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/5 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 space-y-4">
              <div className="text-center">
                <h3 className="text-lg lg:text-xl font-bold text-white mb-1">
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    Programming Languages
                  </span>
                </h3>
                <div className="w-14 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {skillCategories["Programming Languages"].map((skill, idx) => (
                  <div key={idx} className="flex flex-col items-center p-2 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105">
                    <div className="bg-white/20 rounded-lg p-1.5 flex items-center justify-center mb-1.5 w-10 h-10">
                      <img src={skill.logo} alt={skill.name} className="w-6 h-6 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                    </div>
                    <div className="text-xs font-semibold text-white/90 text-center">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Web Development */}
          <div className="group relative bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:bg-white/8 transition-all duration-500 hover:border-blue-400/30 shadow-xl hover:shadow-blue-500/10 lg:col-span-2 xl:col-span-2">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/5 via-transparent to-emerald-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 space-y-6">
              <div className="text-center">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                  <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                    Web Development
                  </span>
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                {skillCategories["Web Development"].map((skill, idx) => {
                  const isBallerina = skill.name && skill.name.toLowerCase() === 'ballerina'
                  return (
                    <div key={idx} className="flex flex-col items-center p-3 bg-white/10 border border-white/20 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105">
                      <div className={"bg-white/20 rounded-lg p-2 flex items-center justify-center mb-2 " + (isBallerina ? 'w-14 h-14' : 'w-12 h-12')}>
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className={(isBallerina ? 'w-10 h-10' : 'w-8 h-8') + ' object-contain'}
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                      </div>
                      <div className="text-sm font-semibold text-white/90 text-center">{skill.name}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Database */}
          <div className="group relative bg-white/5 border border-white/10 rounded-3xl p-4 backdrop-blur-xl hover:bg-white/8 transition-all duration-500 hover:border-cyan-400/30 shadow-xl hover:shadow-cyan-500/10">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 space-y-4">
              <div className="text-center">
                <h3 className="text-lg lg:text-xl font-bold text-white mb-1">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Database
                  </span>
                </h3>
                <div className="w-14 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {skillCategories["Database"].map((skill, idx) => (
                  <div key={idx} className="flex flex-col items-center p-2 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105">
                    <div className="bg-white/20 rounded-lg p-1.5 flex items-center justify-center mb-1.5 w-10 h-10">
                      <img src={skill.logo} alt={skill.name} className="w-6 h-6 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                    </div>
                    <div className="text-xs font-semibold text-white/90 text-center">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile App Development */}
          <div className="group relative bg-white/5 border border-white/10 rounded-3xl p-4 backdrop-blur-xl hover:bg-white/8 transition-all duration-500 hover:border-emerald-400/30 shadow-xl hover:shadow-emerald-500/10">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/5 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 space-y-4">
              <div className="text-center">
                <h3 className="text-sm lg:text-base font-bold text-white mb-1">
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    Mobile App Development
                  </span>
                </h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
              </div>
              <div className="flex justify-center">
                {skillCategories["Mobile App Development"].map((skill, idx) => (
                  <div key={idx} className="flex flex-col items-center p-3 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105">
                    <div className="bg-white/20 rounded-lg p-2 flex items-center justify-center mb-1.5 w-12 h-12">
                      <img src={skill.logo} alt={skill.name} className="w-8 h-8 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                    </div>
                    <div className="text-xs font-semibold text-white/90 text-center">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Version Control */}
          <div className="group relative bg-white/5 border border-white/10 rounded-3xl p-4 backdrop-blur-xl hover:bg-white/8 transition-all duration-500 hover:border-cyan-400/30 shadow-xl hover:shadow-cyan-500/10">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 space-y-4">
              <div className="text-center">
                <h3 className="text-sm lg:text-base font-bold text-white mb-1">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Version Control
                  </span>
                </h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {skillCategories["Version Control"].map((skill, idx) => (
                  <div key={idx} className="flex flex-col items-center p-2 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105">
                    <div className="bg-white/20 rounded-lg p-1.5 flex items-center justify-center mb-1.5 w-10 h-10">
                      <img src={skill.logo} alt={skill.name} className="w-6 h-6 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                    </div>
                    <div className="text-xs font-semibold text-white/90 text-center">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Graphic Design */}
          <div className="group relative bg-white/5 border border-white/10 rounded-3xl p-4 backdrop-blur-xl hover:bg-white/8 transition-all duration-500 hover:border-blue-400/30 shadow-xl hover:shadow-blue-500/10">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/5 via-transparent to-emerald-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 space-y-4">
              <div className="text-center">
                <h3 className="text-sm lg:text-base font-bold text-white mb-1">
                  <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                    Graphic Design
                  </span>
                </h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {additionalTools[0].tools.map((tool, idx) => (
                  <div key={idx} className="flex flex-col items-center p-2 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105">
                    <div className="bg-white/20 rounded-lg p-1.5 flex items-center justify-center mb-1 w-10 h-10">
                      <img src={tool.logo} alt={tool.name} className="w-6 h-6 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                    </div>
                    <div className="text-xs font-semibold text-white/90 text-center leading-tight">{tool.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Single Item Categories */}
          {["Project Management Tools", "UI/UX Designs", "Containerization"].map((category) => (
            <div key={category} className="group relative bg-white/5 border border-white/10 rounded-3xl p-4 backdrop-blur-xl hover:bg-white/8 transition-all duration-500 hover:border-emerald-400/30 shadow-xl hover:shadow-emerald-500/10">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/5 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 space-y-4">
                <div className="text-center">
                  <h3 className="text-sm lg:text-base font-bold text-white mb-1">
                    <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                      {category}
                    </span>
                  </h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
                </div>
                <div className="flex justify-center">
                  {skillCategories[category as keyof typeof skillCategories]?.map((skill, idx) => (
                    <div key={idx} className="flex flex-col items-center p-3 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105">
                      <div className="bg-white/20 rounded-lg p-2 flex items-center justify-center mb-1.5 w-12 h-12">
                        <img src={skill.logo} alt={skill.name} className="w-8 h-8 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                      </div>
                      <div className="text-xs font-semibold text-white/90 text-center">{skill.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="text-center">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/8 transition-all duration-500 hover:scale-105 hover:border-emerald-400/30 shadow-xl hover:shadow-emerald-500/10">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400/5 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-3xl font-bold text-emerald-400 mb-2">3</div>
              <div className="relative z-10 text-sm text-white/70 font-medium">
                Programming Languages
              </div>
            </div>
            <div className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/8 transition-all duration-500 hover:scale-105 hover:border-cyan-400/30 shadow-xl hover:shadow-cyan-500/10">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-3xl font-bold text-cyan-400 mb-2">12</div>
              <div className="relative z-10 text-sm text-white/70 font-medium">
                Web Technologies
              </div>
            </div>
            <div className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/8 transition-all duration-500 hover:scale-105 hover:border-blue-400/30 shadow-xl hover:shadow-blue-500/10">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/5 via-transparent to-emerald-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-3xl font-bold text-blue-400 mb-2">1</div>
              <div className="relative z-10 text-sm text-white/70 font-medium">
                Mobile App Development
              </div>
            </div>
            <div className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/8 transition-all duration-500 hover:scale-105 hover:border-emerald-400/30 shadow-xl hover:shadow-emerald-500/10">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400/5 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-3xl font-bold text-emerald-300 mb-2">3</div>
              <div className="relative z-10 text-sm text-white/70 font-medium">
                Database Systems
              </div>
            </div>
            <div className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/8 transition-all duration-500 hover:scale-105 hover:border-cyan-400/30 shadow-xl hover:shadow-cyan-500/10">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-3xl font-bold text-cyan-300 mb-2">8</div>
              <div className="relative z-10 text-sm text-white/70 font-medium">
                Development Tools
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function SkillsPage() {
  return <SkillsSection />
}