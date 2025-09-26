 'use client'
import { useState } from 'react'

export default function ProjectsPage() {
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      id: 1,
      title: "WebCAD - 2D & 3D Modeling Creation System",
      subtitle: "Mentored By Turbogen • Second Year Software Project",
      role: "Full-stack Developer, UI/UX Designer",
      technologies: ["React.js", "Tailwind", "Three.js", "Node.js", "Express", "PostgreSQL", "Socket.io", "Docker"],
      description: "WebCAD is a browser-based 3D modeling application designed to provide intuitive tools for sketching, editing, and exporting 3D designs. It supports collaborative modeling with real-time features, version control, and user personalization.",
      responsibilities: [
        "Building features that enabled user account personalization and workspace customization",
        "Developed snap-to-grid functionality for all shapes",
        "Enabled users to create, save, and load custom designs.",
        "Built backend APIs for efficient user data storage and feature support"
      ],
      image: "/webcad-screenshot.jpg",
      demoLink: "#",
      githubLink: "#",
      type: "Web Application",
      duration: "6 months",
     teamSize: "4 members"
   },
   {
     id: 2,
     title: "STYRA - AI-powered wardrobe stylist mobile app ",
     subtitle: "Individual Project",
     role: "Mobile App Developer",
     technologies: ["React Native", "Expo","FastAPI","CLIP (DeepFashion AI model)", "Postgresql"],
     description: "AI-powered wardrobe stylist mobile app that helps users analyze clothing items, manage their wardrobe, and get outfit recommendations using advanced image analysis and weather-aware styling.",
     responsibilities: [
       "Developed the AI clothing analysis feature using a deep learning model(CLIP)",
       "Built the wardrobe management system with database integration.",
       "Implemented outfit recommendation logic based on wardrobe, weather, and user preferences.",
       "Created history tracking for outfits and analyses.",
       "Integrated weather data to improve outfit suggestions.",
       "Set up secure user authentication and protected screens for personalized management."
     ],
     image: "/talky-screenshot.jpg",
     demoLink: "#",
     githubLink: "#",
     type: "Mobile Application",
     duration: "2 months",
     teamSize: "Individual"
   },
   {
     id: 3,
     title: "TALKY - A Real-Time Chat App",
     subtitle: "Individual Project",
     role: "Full-Stack Developer",
     technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Socket.IO", "Postman"],
     description: "A real-time chat application that offers seamless real-time messaging, send text messages, emojis, and images, and view who's online in real time. Includes secure user authentication with sign-up and login functionality, customizable profile pictures, and theme switching between dark and light modes.",
     responsibilities: [
       "Developed real-time messaging system using Socket.IO",
       "Implemented secure user authentication and authorization",
       "Created responsive UI with dark/light theme switching",
       "Built file upload functionality for images and profile pictures",
       "Designed and implemented MongoDB database schema",
       "Integrated emoji support and online user status tracking"
     ],
     image: "/talky-screenshot.jpg",
     demoLink: "#",
     githubLink: "#",
     type: "Web Application",
     duration: "3 months",
     teamSize: "Individual"
   },

   {
     id: 3,
     title: "CHATLY - A Real-Time Chat App",
     subtitle: "Individual Project",
     role: "Full-Stack Developer",
     technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Socket.IO", "Postman"],
     description: "A real-time chat application that offers seamless real-time messaging, send text messages, emojis, and images, and view who's online in real time. Includes secure user authentication with sign-up and login functionality, customizable profile pictures, and theme switching between dark and light modes.",
     responsibilities: [
       "Developed real-time messaging system using Socket.IO",
       "Implemented secure user authentication and authorization",
       "Created responsive UI with dark/light theme switching",
       "Built file upload functionality for images and profile pictures",
       "Designed and implemented MongoDB database schema",
       "Integrated emoji support and online user status tracking"
     ],
     image: "/talky-screenshot.jpg",
     demoLink: "#",
     githubLink: "#",
     type: "Web Application",
     duration: "3 months",
     teamSize: "Individual"
   },
  
   {
     id: 4,
     title: "SafeRoute -  A web app for safe route planning and hazard reporting",
     subtitle: "Group Project",
     role: "Full-Stack Developer",
     technologies: ["Next.js", "Ballerina", "Postgresql", "Tailwind CSS"],
     description: "SafeRoute lets users report road hazards with images, view nearby hazards, and get safe route suggestions. It includes secure login, password recovery, user profiles, and report history. Users can comment, react, and manage their reports, while RDA admins have a dashboard for oversight and real-time updates. The app supports GPS location, role-based access, and automatic removal of temporary reports.",
     responsibilities: [
       "Built hazard report submission with images and geolocation",
       "Developed route selection, filtering, and interactive map features",
       "Implemented real-time updates for reports and comments",
       "Built file upload functionality for images and profile pictures",
       "Created RDA dashboard for report management",
     ],
     image: "/talky-screenshot.jpg",
     demoLink: "#",
     githubLink: "#",
     type: "Web Application",
     duration: "3 months",
     teamSize: "Individual"
   },
   {
     id: 5,
     title: "MediSync – Smart Medicine Dispenser & Reminder",
     subtitle: "First-Year IoT-Based Hardware Project",
     role: "Hardware & Software Developer",
     technologies: ["Arduino IDE", "Firebase", "CallMeBot API", "EasyEDA", "CorelDRAW", "SolidWorks"],
     description: "Built a smart medicine dispensing and reminder system to support timely medication intake. An IoT-based solution that combines hardware and software to ensure patients never miss their medication schedule.",
     responsibilities: [
       "Designed and programmed ESP32 microcontroller for system control",
       "Integrated NEMA 17 motors for precise medicine dispensing mechanism",
       "Implemented ultrasonic sensor for medicine level detection",
       "Developed real-time clock module for scheduling reminders",
       "Created user interface with keypad and LCD display",
       "Built Firebase integration for remote monitoring and notifications"
     ],
     image: "/medisync-screenshot.jpg",
     demoLink: "#",
     githubLink: "#",
     type: "IoT Hardware",
     duration: "4 months",
     teamSize: "3 members",
     hardware: ["ESP32", "NEMA 17 Motors", "Ultrasonic Sensor", "RTC module", "Keypad", "LCD", "Battery System"]
   }
 ]

 const nextProject = () => {
   setCurrentProject((prev) => (prev + 1) % projects.length)
 }

 const prevProject = () => {
   setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
 }

 const goToProject = (index: number) => {
   setCurrentProject(index)
 }

 const currentProj = projects[currentProject]

 return (
   <section className="h-full overflow-hidden relative">
     <div className="container mx-auto px-4 py-8 h-full max-w-7xl">
       {/* Header */}
       <div className="text-center mb-2">
         <h2 className="text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
           My Projects
         </h2>
       
       </div>
 {/* Navigation Arrows */}
         <button
           onClick={prevProject}
           className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full transition-all duration-300 hover:scale-110 bg-white/90 hover:bg-gray-100 text-gray-900 border border-gray-300 shadow-lg backdrop-blur-sm"
         >
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
           </svg>
         </button>
          <button
           onClick={nextProject}
           className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full transition-all duration-300 hover:scale-110 bg-white/90 hover:bg-gray-100 text-gray-900 border border-gray-300 shadow-lg backdrop-blur-sm"
         >
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
           </svg>
         </button>

       {/* Main Project Display */}
       <div className="relative h-120 max-h-[calc(100vh-200px)]">
         {/* Project Content */}
         <div className="h-120 rounded-2xl border transition-all duration-500 bg-white/80 border-gray-200 shadow-xl backdrop-blur-sm overflow-hidden">
           
           <div className="grid lg:grid-cols-2 h-full">
             
             {/* Left Side - Project Image */}
             <div className="relative overflow-hidden">
               <div className="w-full h-full flex items-center justify-center bg-gray-100/50">
                 <div className={`w-full h-full bg-gradient-to-br ${
                   currentProject === 0 ? 'from-blue-500 to-purple-600' :
                   currentProject === 1 ? 'from-green-500 to-blue-600' :
                   'from-purple-500 to-pink-600'
                 } flex items-center justify-center text-white`}>
                   <div className="text-center">
                     <div className="text-6xl mb-4">
                       {currentProject === 0 ? '🎨' : currentProject === 1 ? '💬' : '💊'}
                     </div>
                     <div className="text-xl font-bold">Project Screenshot</div>
                     <div className="text-sm opacity-75 mt-2">
                       Replace with actual image: {currentProj.image}
                     </div>
                   </div>
                 </div>
               </div>
               
               {/* Project Type Badge */}
               <div className="absolute top-4 left-4">
                 <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                   currentProj.type === 'Web Application' ? 'bg-blue-500/90 text-white' :
                   currentProj.type === 'IoT Hardware' ? 'bg-purple-500/90 text-white' :
                   'bg-green-500/90 text-white'
                 }`}>
                   {currentProj.type}
                 </span>
               </div>
             </div>

             {/* Right Side - Project Details */}
             <div className="p-8 flex flex-col justify-between overflow-y-auto">
               
               {/* Project Header */}
               <div className="mb-2">
                 <h3 className="text-2xl lg:text-3xl font-bold text-blue-600">
                   {currentProj.title}
                 </h3>
                 <p className="text-lg mb-2 text-gray-600">
                   {currentProj.subtitle}
                 </p>
                 <div className="inline-block px-1 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                   {currentProj.role}
                 </div>
               </div>

               {/* Description */}
               <div className="mb-2">
                 <h4 className="font-semibold mb-3 text-lg">Description</h4>
                 <p className="text-sm leading-relaxed text-gray-600">
                   {currentProj.description}
                 </p>
               </div>

               {/* Responsibilities */}
               {currentProj.responsibilities && currentProj.responsibilities.length > 0 && (
                 <div className="mb-4">
                   <h4 className="font-semibold mb-2 text-lg">Responsibilities</h4>
                   <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                     {currentProj.responsibilities.map((item, idx) => (
                       <li key={idx}>{item}</li>
                     ))}
                   </ul>
                 </div>
               )}

               {/* Technologies */}
               <div className="mb-6">
                 <h4 className="font-semibold mb-3 text-lg">Technologies Used</h4>
                 <div className="flex flex-wrap gap-2">
                   {currentProj.technologies.map((tech, index) => (
                     <span key={index} className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                       {tech}
                     </span>
                   ))}
                 </div>
               </div>

               {/* Hardware (for IoT project) */}
               {currentProj.hardware && (
                 <div className="mb-6">
                   <h4 className="font-semibold mb-3 text-lg">Hardware Components</h4>
                   <div className="flex flex-wrap gap-2">
                     {currentProj.hardware.map((hw, index) => (
                       <span key={index} className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                         {hw}
                       </span>
                     ))}
                   </div>
                 </div>
               )}

               {/* Action Buttons */}
               <div className="flex gap-4 mt-auto">
                 <button className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                   <span className="flex items-center justify-center">
                     <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                     </svg>
                     View Demo
                   </span>
                 </button>
                 {currentProj.id === 1 ? (
                   <span className="px-4 py-3 font-semibold text-gray-500">Repo link is private</span>
                 ) : (
                   <button className="px-4 py-3 font-semibold rounded-lg border-2 border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                     <span className="flex items-center justify-center">
                       <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                       </svg>
                       Code
                     </span>
                   </button>
                 )}
               </div>
             </div>
           </div>
         </div>

         {/* Project Indicators */}
         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
           {projects.map((_, index) => (
             <button
               key={index}
               onClick={() => goToProject(index)}
               className={`w-3 h-3 rounded-full transition-all duration-300 ${
                 currentProject === index 
                   ? 'bg-blue-400 scale-125' 
                   : 'bg-gray-400 hover:bg-gray-500'
               }`}
             />
           ))}
         </div>
       </div>
     </div>
   </section>
 )
}
