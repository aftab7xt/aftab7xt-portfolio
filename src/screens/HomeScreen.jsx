import React from 'react';

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

export default function HomeScreen() {
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
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard 
            title="DeenBase"
            description="Islamic Android app — Quran, Hadith (35,000+), and daily Dhikr. Built with Kotlin and Jetpack Compose."
            tags={["Kotlin", "Jetpack Compose", "Room DB", "Material 3"]}
          />
        </div>

        {/* GitHub Link */}
        <div className="mt-10">
          <a 
            href="https://github.com/aftab7xt" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-lg font-medium text-gray-200 hover:text-white transition-colors"
          >
            View all projects on GitHub
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>

        {/* Work in Progress Placeholder */}
        <div className="mt-32 mb-16 flex flex-col items-center justify-center opacity-70">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="64" 
            height="64" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="mb-6 text-gray-300"
          >
            <path d="M12 12H5a2 2 0 0 0-2 2v5"></path>
            <circle cx="13" cy="19" r="2"></circle>
            <circle cx="5" cy="19" r="2"></circle>
            <path d="M8 19h3"></path>
            <path d="M15 19h3v-7a2 2 0 0 0-2-2h-3v9Z"></path>
            <path d="M12 12V6a2 2 0 0 1 2-2h3"></path>
            <path d="M22 19v-4"></path>
            <path d="M22 22v-3"></path>
          </svg>
          <h3 className="text-3xl font-bold tracking-tight text-white">Work in progress</h3>
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
    </div>
  );
}
