import { CurtainAnimation } from './components/CurtainAnimation';
import { Terminal, Github, Coffee, ChevronRight } from 'lucide-react';
import { ProjectCard } from './components/ProjectCard';
import { ThemeToggle } from './components/ThemeToggle';
import { MusicPlayer } from './components/MusicPlayer';
import { projects } from './data/projects';
import { useState, useEffect } from 'react';

function App() {
  // Rastgele önerilen projeler için
  const getRandomProjects = (excludeTitle: string, count: number = 2) => {
    const filteredProjects = projects.filter(p => p.title !== excludeTitle);
    const shuffled = [...filteredProjects].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
    <>
      <CurtainAnimation />
      <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
        <div className="absolute top-4 right-4 z-50">
          <ThemeToggle />
        </div>

        <header className="container mx-auto px-4 py-12 text-center">
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 mb-4">
            <Terminal className="w-8 h-8 text-zinc-900 dark:text-zinc-100" />
          </div>
          <h1 className="text-4xl font-bold mb-3">
            ShadeCloud
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto font-light">
            Karanlıktan korkma, yıldızlar sadece karanlıkta parlar.
          </p>
        </header>

        <main className="container mx-auto px-4 py-8 mb-8">
          <div className="max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <div key={project.title} className="mb-12">
                <ProjectCard project={project} />
                
                {/* Önerilen Projeler */}
                <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-700">
                  <h3 className="text-lg font-semibold mb-4">Benzer Projeler</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {getRandomProjects(project.title).map((suggestedProject) => (
                      <div
                        key={suggestedProject.title}
                        className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all duration-300"
                      >
                        <h4 className="font-medium mb-2">{suggestedProject.title}</h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 line-clamp-2">
                          {suggestedProject.description}
                        </p>
                        <div className="flex items-center text-sm text-zinc-500 dark:text-zinc-400">
                          <span className="flex items-center">
                            Detayları gör
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        <footer className="container mx-auto px-6 py-6 text-center text-zinc-600 dark:text-zinc-400">
          <div className="flex flex-col items-center gap-2">
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
            <p>❤ ile ShadesOfDeath tarafından geliştirildi</p>
          </div>
        </footer>

        <MusicPlayer />
      </div>
    </>
  );
}

export default App;