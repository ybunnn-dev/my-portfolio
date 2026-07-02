"use client";

import { Calendar, User, Layers, CheckCircle2, LockKeyhole } from "lucide-react";

export default function DocsProject() {
  return (
    <div className="w-full animate-fade-in font-sans flex flex-col gap-6">
      
      {/* --- TOP SECTION: NDA PLACEHOLDER --- */}
      <div className="w-full relative aspect-video rounded-lg overflow-hidden flex-shrink-0 bg-black/40 border border-white/10 flex flex-col items-center justify-center group">
        {/* Subtle radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-black/20 to-black z-0 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center transform transition-transform duration-500 group-hover:scale-105">
          <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm mb-4 border border-white/5 shadow-lg">
            <LockKeyhole className="w-10 h-10 md:w-12 md:h-12 text-white/70" />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white/80 tracking-widest uppercase drop-shadow-md text-center">
            Classified / NDA
          </h2>
          <p className="text-white/50 text-sm md:text-base text-center max-w-md mt-3 px-6 leading-relaxed">
            Visual assets for this system are protected under a Non-Disclosure Agreement with the Department of Science and Technology – Region V.
          </p>
        </div>
      </div>

      {/* --- BOTTOM SECTION: PROJECT DETAILS --- */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2">
        
        {/* Description Column */}
        <div className="w-full lg:w-2/3 flex flex-col">
          <div className="mb-6 border-b border-white/20 pb-4">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-sm">
              DOCS 2.0
            </h1>
            <h2 className="text-lg md:text-xl text-white/70 font-medium mt-1">
              Document Operations and Communication System
            </h2>
            <div className="flex items-center gap-2 mt-3 text-cyan-50 font-medium drop-shadow-sm">
              <Calendar className="w-4 h-4" />
              <span>February 2026 - May 2026</span>
            </div>
          </div>

          <div className="space-y-4 text-white/90 leading-relaxed text-base md:text-lg drop-shadow-sm">
            <p>
              Built and improved a comprehensive web-based system designed for DOST-V to efficiently manage and track document operations and internal communications. The platform facilitates a smooth workflow across units by automating critical routing and notification processes.
            </p>
            
            <div className="mt-6 bg-white/5 rounded-lg p-5 border border-white/10">
              <h3 className="text-white font-bold mb-3">Key Features:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Manage documents efficiently",
                  "Track timelines and actions",
                  "Automated Reference Number Generation",
                  "Automated Acknowledgement Receipts",
                  "Workflow automation & notifications",
                  "User-friendly redesigned interface"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/80 text-sm md:text-base">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Role & Stack Column */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8">
          
          {/* Role Box */}
          <div className="relative overflow-hidden flex-1">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 drop-shadow-sm">
              <User className="w-5 h-5 text-white" />
              Role
            </h3>
            <ul className="space-y-3 relative z-10">
              <li className="flex items-start gap-3 text-white/90 text-base drop-shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span>Assistant Full-Stack Developer</span>
              </li>
              <li className="flex items-start gap-3 text-white/90 text-base drop-shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span>UI/UX Designer</span>
              </li>
            </ul>
          </div>

          {/* Stack Box */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 drop-shadow-sm">
              <Layers className="w-5 h-5 text-white" />
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Laravel', 'MariaDB', 'Alpine.js', 'TailwindCSS', 
                'Flowbite', 'ApexChart', 'Discord Webhook', 'Figma'
              ].map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold rounded-md border border-white/20 shadow-sm transition-colors hover:bg-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}