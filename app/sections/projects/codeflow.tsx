"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar, User, Layers, CheckCircle2, Terminal } from "lucide-react";

const WORKTYME_IMAGES = [
  { id: 1, src: "/projects/worktyme/dashboard.png", color: "bg-blue-100/20", title: "Main Dashboard" },
  { id: 2, src: "/projects/worktyme/work_hours.png", color: "bg-cyan-100/20", title: "Work Hours" },
  { id: 3, src: "/projects/worktyme/generate_dtr.png", color: "bg-sky-100/20", title: "Generate DTR" },
  { id: 4, src: "/projects/worktyme/dtr.png", color: "bg-indigo-100/20", title: "DTR" },
];

export default function CodeFlow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = WORKTYME_IMAGES[activeIndex];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % WORKTYME_IMAGES.length);
  const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? WORKTYME_IMAGES.length - 1 : prev - 1));

  return (
    <div className="w-full animate-fade-in font-sans flex flex-col gap-12">
      
      {/* =========================================
          PART 1: CODEFLOW (THE BIG PICTURE)
          ========================================= */}
      <div className="flex flex-col gap-4 border-b border-white/10 pb-12">
        <div className="mb-2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-sm flex items-center gap-3">
            <Terminal className="w-8 h-8 text-cyan-400" />
            CodeFlow
          </h1>
          <p className="text-cyan-50/70 mt-1 font-medium">Personal OS & Application Hub</p>
        </div>

        {/* Large CodeFlow Hero Image */}
        <div className="w-full aspect-[21/9] bg-black rounded-lg overflow-hidden border border-white/10 relative">
          <span className="absolute inset-0 flex items-center justify-center text-white/30 text-2xl font-bold tracking-wider z-10">
            CodeFlow Unified Interface
          </span>
          <img 
            src="/projects/codeflow/main_ui.png" 
            alt="CodeFlow Interface" 
            className="relative w-full h-full object-cover z-20"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </div>

        {/* Personal Caption */}
        <div className="bg-white/5 rounded-lg p-6 border border-white/10 mt-2">
          <p className="text-white/90 leading-relaxed text-base md:text-lg">
            I built CodeFlow to have a unified space where I can turn any passing idea into a working system. The concept was heavily inspired by my internship, where they used a multi-app interface. While my version is more rigid and acts as a beginner's take on the concept, it serves its purpose perfectly as a personal launchpad. 
            <br/><br/>
            My roadmap for this hub includes an OJT tracker, a document repository, an inventory management system, and a job hunt tracker.
          </p>
        </div>
      </div>

      {/* =========================================
          PART 2: WORKTYME (THE FIRST MODULE)
          ========================================= */}
      <div className="flex flex-col gap-6">
        
        {/* --- TOP SECTION: WIDE GALLERY --- */}
        <div className="w-full flex flex-col lg:flex-row gap-2">
          
          {/* MAIN PREVIEW CONTAINER */}
          <div className="relative group w-full lg:w-2/3 aspect-video rounded-lg overflow-hidden flex-shrink-0 bg-black">
            <div key={activeIndex} className="relative w-full h-full flex items-center justify-center animate-fade-in">
              <span className="absolute inset-0 flex items-center justify-center text-white/30 text-xl md:text-3xl font-bold tracking-wider z-10 text-center px-4">
                {activeImage.title}
              </span>
              
              <img 
                src={activeImage.src} 
                alt={activeImage.title} 
                className="relative w-full h-full object-contain z-20"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>

            <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 z-30">
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 z-30">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* THUMBNAILS CONTAINER */}
          <div className="w-full lg:w-1/3 grid grid-cols-3 lg:grid-cols-2 gap-2 content-start">
            {WORKTYME_IMAGES.map((img, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={img.id}
                  onClick={() => setActiveIndex(index)}
                  className={`relative w-full aspect-square rounded-lg overflow-hidden transition-all duration-300 border bg-black ${
                    isActive 
                      ? "border-white opacity-100 scale-[0.98]" 
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <span className="absolute inset-0 flex items-center justify-center text-white text-[10px] font-bold z-10 text-center px-1 mix-blend-overlay">
                    {img.title}
                  </span>
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="relative w-full h-full object-cover z-20"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* --- BOTTOM SECTION: PROJECT DETAILS --- */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2">
          
          {/* Description Column */}
          <div className="w-full lg:w-2/3 flex flex-col">
            <div className="mb-6 border-b border-white/20 pb-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-sm">
                WorkTyme
              </h2>
              <div className="flex items-center gap-2 mt-3 text-cyan-50 font-medium drop-shadow-sm">
                <Calendar className="w-4 h-4" />
                <span>April 2026</span>
              </div>
            </div>

            <div className="space-y-4 text-white/90 leading-relaxed text-base md:text-lg drop-shadow-sm">
              <p>
                WorkTyme is the very first app I developed to sit inside the CodeFlow ecosystem. I built it to solve a direct problem during my internship: it was incredibly tedious to manually compute rendered hours and keep track of our totals.
              </p>
              <p>
                My OJT mates and I used this to automate our Daily Time Records (DTR) and monitor our progress against the hardcoded 486-hour requirement. It did exactly what it needed to do—it made our workflow easier, the calculations were highly accurate, and the automated exports strictly followed the standard CSC format.
              </p>
              
              <div className="mt-6 bg-white/5 rounded-lg p-5 border border-white/10">
                <h3 className="text-white font-bold mb-3">Key Features:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Automated CSC-format DTR generation",
                    "486-hour hardcoded progress tracking",
                    "Accurate daily time computations",
                    "Integrated directly into CodeFlow",
                    "Multi-user support for OJT mates"
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
                  <span>Creator & Developer</span>
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
                  'TypeScript', 'Next.js', 'React', 'TailwindCSS', 'Prisma'
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
    </div>
  );
}