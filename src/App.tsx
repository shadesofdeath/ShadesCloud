import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CurtainAnimation } from './components/CurtainAnimation';
import { Terminal, Github, Coffee, Search } from 'lucide-react';
import { ProjectCard } from './components/ProjectCard';
import { ThemeToggle } from './components/ThemeToggle';
import { MusicPlayer } from './components/MusicPlayer';
import { ProjectDetail } from './components/ProjectDetail';
import { projects } from './data/projects';
import { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.tech.some(tech => tech.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <Router>
      <CurtainAnimation />
      <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
        <div className="absolute top-4 right-4 z-50">
          <ThemeToggle />
        </div>

        <Routes>
          <Route path="/" element={
            <>
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
                
                {/* Arama Çubuğu */}
                <div className="max-w-md mx-auto mt-8">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
                    <input
                      type="text"
                      placeholder="Projelerde ara..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                    />
                  </div>
                </div>
              </header>

              <main className="container mx-auto px-4 py-8 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                  {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                      <Link 
                        key={project.title} 
                        to={`/project/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="transition-transform hover:-translate-y-1"
                      >
                        <ProjectCard project={project} isPreview={true} />
                      </Link>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <p className="text-zinc-600 dark:text-zinc-400">
                        Aramanızla eşleşen proje bulunamadı.
                      </p>
                    </div>
                  )}
                </div>
              </main>
            </>
          } />
          
          <Route path="/project/:projectId" element={
            <main className="container mx-auto px-4 py-8 mb-8">
              <ProjectDetail projects={projects} />
            </main>
          } />
        </Routes>

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
    </Router>
  );
}

export default App;