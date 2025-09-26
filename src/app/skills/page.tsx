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
    <section className="h-full overflow-y-auto">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600">
            Technologies and tools I work with
          </p>
        </div>

        {/* One single grid with all logos + names (flattened categories + additional tools) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          {(() => {
            // flatten skillCategories and additionalTools into a single array
            const items: { name: string; logo: string; category?: string }[] = []
            Object.entries(skillCategories).forEach(([category, skills]) => {
              skills.forEach((s) => items.push({ name: s.name, logo: s.logo, category }))
            })
            additionalTools.forEach((g) => g.tools.forEach((t) => items.push({ name: t.name, logo: t.logo, category: g.category })))
            return items.map((skill, idx) => {
              const isBallerina = skill.name && skill.name.toLowerCase() === 'ballerina'
              return (
                <div key={idx} className="flex flex-col items-center p-3 bg-white/80 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
                  <div className={"bg-white rounded-full p-2 flex items-center justify-center mb-2 " + (isBallerina ? 'w-20 h-20' : 'w-16 h-16')}>
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className={(isBallerina ? 'w-14 h-14' : 'w-10 h-10') + ' object-contain'}
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                  <div className="text-sm font-medium text-gray-800 text-center">{skill.name}</div>
                  {skill.category && <div className="text-xs text-gray-500 mt-1">{skill.category}</div>}
                </div>
              )
            })
          })()}
        </div>

        {/* Summary */}
        <div className="text-center">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="p-6 rounded-xl border bg-white/80 border-gray-200 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-sm text-gray-500">
                Programming Languages
              </div>
            </div>
            <div className="p-6 rounded-xl border bg-white/80 border-gray-200 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2">12</div>
              <div className="text-sm text-gray-500">
                Web Technologies
              </div>
            </div>
            <div className="p-6 rounded-xl border bg-white/80 border-gray-200 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2">1</div>
              <div className="text-sm text-gray-500">
                Mobile App Development
              </div>
            </div>
            <div className="p-6 rounded-xl border bg-white/80 border-gray-200 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
              <div className="text-sm text-gray-500">
                Database Systems
              </div>
            </div>
            <div className="p-6 rounded-xl border bg-white/80 border-gray-200 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-orange-600 mb-2">8</div>
              <div className="text-sm text-gray-500">
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