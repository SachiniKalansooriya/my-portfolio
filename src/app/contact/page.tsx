 'use client'
import React, { useState } from 'react'

export default function ContactPage() {
 const [formData, setFormData] = useState({
   name: '',
   email: '',
   subject: '',
   message: ''
 })
 const [isSubmitting, setIsSubmitting] = useState(false)
 const [submitStatus, setSubmitStatus] = useState('')

 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
   setFormData({
     ...formData,
     [e.target.name]: e.target.value
   })
 }

 const handleSubmit = async (e: React.FormEvent) => {
   e.preventDefault()
   setIsSubmitting(true)
   
   try {
     // Send to our API route
     const response = await fetch('/api/send-email', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(formData),
     })
     
     const data = await response.json()
     
     if (response.ok) {
       setSubmitStatus('Message sent successfully! I\'ll get back to you soon.')
       setFormData({ name: '', email: '', subject: '', message: '' })
     } else {
       setSubmitStatus(`Failed to send message: ${data.error || 'Unknown error'}`)
     }
   } catch (error) {
     setSubmitStatus('Failed to send message. Please try again later.')
     console.error('Error sending email:', error)
   } finally {
     setIsSubmitting(false)
     
     // Clear status message after 5 seconds
     setTimeout(() => setSubmitStatus(''), 5000)
   }
 }

 const contactInfo = [
   {
     icon: (
       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
       </svg>
     ),
     label: "Email",
     value: "sachinikalansooriya22@gmail.com",
     link: "mailto:sachinikalansooriya22@gmail.com"
   },
   {
     icon: (
       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
       </svg>
     ),
     label: "Phone",
     value: "+94 771896153",
     link: "tel:+94771896153"
   },
   {
     icon: (
       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
       </svg>
     ),
     label: "Location",
     value: "Galle, Sri Lanka",
     link: "#"
   },
   {
     icon: (
       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
       </svg>
     ),
     label: "Work Status",
     value: "Open to Opportunities",
     link: "#"
   }
 ]

 const socialLinks = [
   {
     name: "LinkedIn",
     url: "https://www.linkedin.com/in/sachini-kalansooriya/",
     icon: (
       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
       </svg>
     ),
     color: "hover:text-blue-500"
   },
   {
     name: "GitHub",
     url: "https://github.com/SachiniKalansooriya",
     icon: (
       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
         <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
       </svg>
     ),
     color: "hover:text-gray-600"
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
     
     <div className="container mx-auto px-4 py-8 max-w-6xl min-h-full relative z-10">
       {/* Header */}
       <div className="text-center mb-12">
         <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
           Get In Touch
         </h2>
         <p className="text-base max-w-2xl mx-auto text-white/90">
           I'm always interested in new opportunities and exciting projects. 
           Whether you want to discuss a project, job opportunity, or just say hello, I'd love to hear from you!
         </p>
       </div>

       <div className="grid lg:grid-cols-2 gap-12 items-start">
         
         {/* Left Side - Contact Information */}
         <div className="space-y-8">
           
           {/* Contact Info Cards */}
           <div className="space-y-4">
             <h3 className="text-2xl font-bold mb-6 text-blue-600">Contact Information</h3>
             {contactInfo.map((info, index) => (
               <div key={index} className="group p-4 rounded-xl border transition-all duration-300 hover:scale-105 bg-white/80 border-gray-200 hover:border-blue-500/50 shadow-lg backdrop-blur-sm">
                 
                 <a href={info.link} className="flex items-center space-x-4">
                   <div className="p-3 rounded-lg bg-blue-100 text-blue-600 group-hover:scale-110 transition-transform">
                     {info.icon}
                   </div>
                   <div>
                     <div className="font-semibold text-gray-700">
                       {info.label}
                     </div>
                     <div className="text-gray-500 group-hover:text-blue-600 transition-colors">
                       {info.value}
                     </div>
                   </div>
                 </a>
               </div>
             ))}
           </div>

           {/* Social Links */}
           <div>
             <div className="flex items-center justify-between mb-6">
               <h3 className="text-2xl font-bold text-purple-600">Follow Me</h3>
               <a
                 href="/resume.pdf"
                 download
                 className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow hover:scale-105 transition-transform"
               >
                 Download Resume
               </a>
             </div>
             <div className="flex space-x-4">
               {socialLinks.map((social, index) => (
                 <a 
                   key={index}
                   href={social.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="p-4 rounded-xl border transition-all duration-300 hover:scale-110 group bg-white/80 border-gray-200 hover:border-purple-500/50 shadow-lg backdrop-blur-sm"
                 >
                   <div className={`text-gray-600 group-hover:text-gray-900 ${social.color} transition-colors`}>
                     {social.icon}
                   </div>
                 </a>
               ))}
             </div>
           </div>

           {/* Availability Status */}
           <div className="p-6 rounded-xl border bg-green-50 border-green-200 backdrop-blur-sm">
             <div className="flex items-center space-x-3">
               <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
               <div>
                 <div className="font-semibold text-green-600">Available for Work</div>
                 <div className="text-sm text-gray-600">
                   Currently seeking new opportunities
                 </div>
               </div>
             </div>
           </div>
         </div>

         {/* Right Side - Contact Form */}
         <div className="p-8 rounded-2xl border bg-white/80 border-gray-200 shadow-xl backdrop-blur-sm">
           
           <h3 className="text-2xl font-bold mb-6 text-pink-600">Send Message</h3>
           
           <form onSubmit={handleSubmit} className="space-y-6">
             {/* Name Input */}
             <div>
               <label className="block text-sm font-medium mb-2 text-gray-700">
                 Your Name *
               </label>
               <input
                 type="text"
                 name="name"
                 value={formData.name}
                 onChange={handleInputChange}
                 required
                 className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                 placeholder="Enter your full name"
               />
             </div>

             {/* Email Input */}
             <div>
               <label className="block text-sm font-medium mb-2 text-gray-700">
                 Email Address *
               </label>
               <input
                 type="email"
                 name="email"
                 value={formData.email}
                 onChange={handleInputChange}
                 required
                 className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                 placeholder="your.email@example.com"
               />
             </div>

             {/* Subject Input */}
             <div>
               <label className="block text-sm font-medium mb-2 text-gray-700">
                 Subject *
               </label>
               <input
                 type="text"
                 name="subject"
                 value={formData.subject}
                 onChange={handleInputChange}
                 required
                 className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                 placeholder="What's this about?"
               />
             </div>

             {/* Message Textarea */}
             <div>
               <label className="block text-sm font-medium mb-2 text-gray-700">
                 Message *
               </label>
               <textarea
                 name="message"
                 value={formData.message}
                 onChange={handleInputChange}
                 required
                 rows={5}
                 className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 resize-none bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                 placeholder="Tell me about your project, job opportunity, or just say hello!"
               />
             </div>

             {/* Submit Button */}
             <button
               type="submit"
               disabled={isSubmitting}
               className={`w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                 isSubmitting ? 'cursor-not-allowed' : ''
               }`}
             >
               {isSubmitting ? (
                 <span className="flex items-center justify-center">
                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                   </svg>
                   Sending Message...
                 </span>
               ) : (
                 <span className="flex items-center justify-center">
                   <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                   </svg>
                   Send Message
                 </span>
               )}
             </button>

             {/* Status Message */}
             {submitStatus && (
              <div className={`p-4 ${
                submitStatus.toLowerCase().includes('failed') 
                  ? 'bg-red-500/20 border border-red-500/50 text-red-600' 
                  : 'bg-green-500/20 border border-green-500/50 text-green-600'
              } rounded-lg text-center font-medium`}>
                 {submitStatus}
               </div>
             )}
           </form>
         </div>
       </div>
     </div>
   </section>
 )
}