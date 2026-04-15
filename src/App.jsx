import React from 'react';
import { Analytics } from "@vercel/analytics/react";

const ProjectCard = ({ title, description, tags }) => (
  <div className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all hover:bg-white/[0.06]">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed mb-6">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white selection:bg-blue-500/30">
      <header className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
          SHAIKH AFTAB <span className="text-blue-500">ALLI</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl font-medium">
          Android Developer specializing in cinematic UI/UX and high-performance Kotlin applications.
        </p>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-sm font-bold tracking-[0.2em] text-blue-500 uppercase mb-8">Selected Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard 
            title="DeenBase"
            description="Islamic Android app — Quran, Hadith (35,000+), and daily Dhikr. Built with Kotlin and Jetpack Compose."
            tags={["Kotlin", "Jetpack Compose", "Room DB", "Material 3"]}
          />
        </div>
      </main>

      <footer className="max-w-5xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Have a project in mind?</h2>
            <p className="text-gray-500">Available for freelance opportunities on Fiverr.</p>
          </div>
          <a href="https://www.fiverr.com/aftaballi" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
            Hire on Fiverr
          </a>
        </div>
        <div className="mt-20 text-gray-600 text-sm">
          © {new Date().getFullYear()} Shaikh Aftab Alli. Built with React & Tailwind.
        </div>
      </footer>
      <Analytics />
    </div>
  );
}

export default App;
