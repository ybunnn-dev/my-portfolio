"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// --- SKELETON LOADER COMPONENT ---
// This is the pulsing gray box shown while sections download
const SkeletonCard = ({ className }: { className?: string }) => (
  <div className={`bg-gray-200 dark:bg-gray-800 animate-pulse rounded-lg ${className}`}></div>
);

// --- DYNAMIC IMPORTS ---
// Load Profile Sec
const LazyProfileSec = dynamic(() => import("./sections/profile_section"), {
  ssr: false,
  loading: () => <SkeletonCard className="w-full h-[350px]" />
});

// Load About Me
const LazyAboutMe = dynamic(() => import("./sections/about"), {
  ssr: false,
  loading: () => <SkeletonCard className="w-full h-[250px]" />
});

// Load Tech Stack
const LazyEducation= dynamic(() => import("./sections/education"), {
  ssr: false,
  loading: () => <SkeletonCard className="w-full h-[150px]" />
});

// Load Experience
const LazyExperience = dynamic(() => import("./sections/experience"), {
  ssr: false,
  loading: () => <SkeletonCard className="w-full h-full min-h-[400px]" />
});


export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen w-full bg-[#F4F4F4] dark:bg-gray-900 transition-colors duration-300 pb-10">
      
      <main className="flex w-full flex-col px-4 sm:px-16 xl:px-[10rem] py-10 max-w-full mx-auto">
        
        {/* Dark Mode Toggle */}
        <div className="flex justify-end w-full mb-6">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
              isDarkMode ? "bg-light_gradient" : "bg-gray-300"
            }`}
            aria-label="Toggle Dark Mode"
          >
            <div 
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                isDarkMode ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </button>
        </div>

        {/* 1. Profile Section */}
        <div className="mb-4">
          <LazyProfileSec />
        </div>

        {/* 2. Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
          
          {/* LEFT COLUMN (Takes up 4 out of 6 columns) */}
          <div className="col-span-1 lg:col-span-4 flex flex-col gap-4">
            <LazyAboutMe />
            <div className="flex-1">
              <LazyEducation />
            </div>
          </div>

          {/* RIGHT COLUMN (Takes up 2 out of 6 columns) */}
          <div className="col-span-1 lg:col-span-2">
             <LazyExperience />
          </div>

        </div>
      </main>
    </div>
  );
}