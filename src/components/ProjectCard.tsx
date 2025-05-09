import { useState } from 'react';
import { Download, Code, ChevronRight, Monitor, Cpu, Server } from 'lucide-react';

export const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="bg-white/70 dark:bg-zinc-800/70 rounded-lg border border-zinc-200/50 dark:border-zinc-700/50 overflow-hidden">
      <div className="p-6">
        <header className="mb-4">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">{project.title}</h2>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tech.map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300"
              >
                {tech.name}
              </span>
            ))}
          </div>
          <p className="text-zinc-600 dark:text-zinc-300">{project.description}</p>
        </header>

        <div className="grid grid-cols-2 gap-4 text-sm mb-6">
          <div className="space-y-2">
            <p className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
              <Monitor className="w-4 h-4" />
              <span className="font-medium">Platform:</span> {project.technicalDetails.platform}
            </p>
            <p className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
              <Server className="w-4 h-4" />
              <span className="font-medium">RAM:</span> {project.technicalDetails.ram}
            </p>
          </div>
          <div className="space-y-2">
            <p className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
              <Code className="w-4 h-4" />
              <span className="font-medium">Dil:</span> {project.technicalDetails.language}
            </p>
            <p className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
              <Cpu className="w-4 h-4" />
              <span className="font-medium">CPU:</span> {project.technicalDetails.cpu}
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <a
            href={project.download}
            className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-700 hover:bg-zinc-800 dark:hover:bg-zinc-600 text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="w-4 h-4 mr-2" />
            İndir
          </a>
          <a
            href={project.sourceCode}
            className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-600 hover:bg-zinc-200 dark:hover:bg-zinc-500 text-zinc-900 dark:text-zinc-100 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code className="w-4 h-4 mr-2" />
            Kaynak Kodu
          </a>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="w-full mt-4 flex items-center justify-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
        >
          Detayları Gör
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setIsOpen(false)}>
          <div 
            className="relative bg-white dark:bg-zinc-800 rounded-lg p-8 max-w-3xl w-full mx-4 max-h-[80vh] overflow-y-auto animate-slideUp"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-full"
            >
              <svg className="w-5 h-5 text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="space-y-8">
              <header>
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs rounded-full bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                <p className="text-zinc-600 dark:text-zinc-300">{project.description}</p>
              </header>

              <div>
                <h3 className="text-lg font-semibold mb-4">Özellikler</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-zinc-600 dark:text-zinc-300">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Teknik Detaylar</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <p className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
                      <Monitor className="w-4 h-4" />
                      <span className="font-medium">Platform:</span> {project.technicalDetails.platform}
                    </p>
                    <p className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
                      <Code className="w-4 h-4" />
                      <span className="font-medium">Dil:</span> {project.technicalDetails.language}
                    </p>
                    <p className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
                      <span className="font-medium">Gereksinimler:</span> {project.technicalDetails.requirements}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <p className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
                      <Server className="w-4 h-4" />
                      <span className="font-medium">RAM:</span> {project.technicalDetails.ram}
                    </p>
                    <p className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
                      <Cpu className="w-4 h-4" />
                      <span className="font-medium">CPU:</span> {project.technicalDetails.cpu}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};