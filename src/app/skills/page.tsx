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
      { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" }
    ],
    "Database": [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
    "Mobile App Development": [
      { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react-native/react-native-original.svg" },
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

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.02] bg-white/80 border-gray-200 hover:border-blue-500/50 shadow-xl backdrop-blur-sm">

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">
                  <span className={`${
                    category === 'Programming Languages' ? 'text-blue-600' :
                    category === 'Web Development' ? 'text-green-600' :
                    category === 'Database' ? 'text-purple-600' :
                    'text-pink-600'
                  }`}>
                    {category.toUpperCase()}
                  </span>
                </h3>
                <div className={`h-1 w-16 rounded-full ${
                  category === 'Programming Languages' ? 'bg-blue-600' :
                  category === 'Web Development' ? 'bg-green-600' :
                  category === 'Database' ? 'bg-purple-600' :
                  'bg-pink-600'
                }`}></div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="group p-4 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex justify-center mb-3">
                      <div className="bg-white rounded-full p-2 w-12 h-12 flex items-center justify-center">
                        <img 
                          src={skill.logo} 
                          alt={skill.name}
                          className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement?.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                      </div>
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-lg font-bold hidden ${
                        category === 'Programming Languages' ? 'bg-blue-100 text-blue-600' :
                        category === 'Web Development' ? 'bg-green-100 text-green-600' :
                        category === 'Database' ? 'bg-purple-100 text-purple-600' :
                        'bg-pink-100 text-pink-600'
                      }`}>
                        {skill.name.charAt(0)}
                      </div>
                    </div>
                    <div className="text-center">
                      <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tools */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-orange-600">Additional Tools</h3>
          <div className="grid md:grid-cols-1 gap-8">
            {additionalTools.map((toolGroup, index) => (
              <div key={index} className="p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.02] bg-white/80 border-gray-200 hover:border-orange-500/50 shadow-xl backdrop-blur-sm">
                
                <div className="mb-6">
                  <h4 className="text-2xl font-bold mb-2 text-orange-600">
                    {toolGroup.category.toUpperCase()}
                  </h4>
                  <div className="h-1 w-16 bg-orange-600 rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-3 gap-6">
                  {toolGroup.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="group p-6 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer bg-gray-50 hover:bg-gray-100">
                      <div className="flex justify-center mb-4">
                        <div className="bg-white rounded-full p-2 w-16 h-16 flex items-center justify-center">
                          <img 
                            src={tool.logo} 
                            alt={tool.name}
                            className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.parentElement?.nextElementSibling?.classList.remove('hidden');
                            }}
                          />
                        </div>
                        <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center text-2xl font-bold hidden">
                          {tool.name.charAt(0)}
                        </div>
                      </div>
                      <div className="text-center">
                        <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">
                          {tool.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border bg-white/80 border-gray-200 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-sm text-gray-500">
                Programming Languages
              </div>
            </div>
            <div className="p-6 rounded-xl border bg-white/80 border-gray-200 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2">11</div>
              <div className="text-sm text-gray-500">
                Web Technologies
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