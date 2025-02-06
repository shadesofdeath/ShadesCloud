import { Terminal, Github, Coffee } from 'lucide-react';
import { ProjectCard } from './components/ProjectCard';
import { ThemeToggle } from './components/ThemeToggle';
import { MusicPlayer } from './components/MusicPlayer';
import { projects } from './data/projects';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <header className="container mx-auto px-4 py-12 text-center"> {/* py-16'dan py-12'ye */}
        <div className="inline-flex items-center justify-center p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 mb-4"> {/* p-3'ten p-2'ye */}
          <Terminal className="w-8 h-8 text-zinc-900 dark:text-zinc-100" /> {/* w-8'den w-6'ya */}
        </div>
        <h1 className="text-4xl font-bold mb-3"> {/* text-4xl'den text-3xl'e */}
          ShadeCloud
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto font-light"> {/* text-base'den text-sm'e */}
          Masaüstü deneyiminizi geliştirmek için tasarlanmış hafif ve verimli Windows araçları koleksiyonu.
          Her araç, performans ve basitlik göz önünde bulundurularak hazırlanmıştır.
        </p>
      </header>

      <main className="container mx-auto px-4 py-8 mb-8">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div key={project.title} className="min-w-0">
              <ProjectCard project={project} />
            </div>
          ))}
        </section>
      </main>

      <footer className="container mx-auto px-4 py-6 text-center text-zinc-500 dark:text-zinc-500">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/shadesofdeath" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://buymeacoffee.com/berkayay" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-all duration-300"
            >
              <Coffee className="w-5 h-5" />
            </a>
          </div>
          <p>❤️ ile ShadesOfDeath tarafından geliştirildi</p>
          <p>© 2024 Tüm hakları saklıdır</p>
        </div>
      </footer>

      <MusicPlayer />
    </div>
  );
}

export default App;