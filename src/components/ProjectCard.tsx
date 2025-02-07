import { useState } from 'react';
import { Download, Code, ChevronRight, Monitor, Cpu, Server } from 'lucide-react';

export const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-3">
      <button
        onClick={() => setIsOpen(true)}
        className="w-full text-left p-4 bg-white/70 dark:bg-zinc-800/70 rounded-lg border border-zinc-200/50 dark:border-zinc-700/50 transition-all duration-300 hover:bg-zinc-50 dark:hover:bg-zinc-700/50 flex items-center justify-between group"
      >
        <div>
          <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{project.title}</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1 line-clamp-1">{project.description}</p>
        </div>
        <ChevronRight className="w-5 h-5 text-zinc-400 group-hover:text-zinc-600 dark:text-zinc-500 dark:group-hover:text-zinc-300 transition-colors" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setIsOpen(false)}>
          <div 
            className="relative bg-white dark:bg-zinc-800 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto animate-slideUp" 
            onClick={e => e.stopPropagation()}
          >
            {/* Close butonu artık sağ üst köşede */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-full"
            >
              <svg className="w-5 h-5 text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h2 className="text-xl font-bold mb-4">{project.title}</h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6">{project.description}</p>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Özellikler</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h3 className="font-semibold mb-2">Teknik Detaylar</h3>
                  <div className="space-y-1 text-zinc-600 dark:text-zinc-300">
                    <p>
                      <Monitor className="inline-block mr-1" /> 
                      <span className="font-medium">Platform:</span> {project.technicalDetails.platform}
                    </p>
                    <p>
                      <Code className="inline-block mr-1" /> 
                      <span className="font-medium">Dil:</span> {project.technicalDetails.language}
                    </p>
                    <p>
                      <span className="font-medium">Gereksinimler:</span> {project.technicalDetails.requirements}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Sistem Gereksinimleri</h3>
                  <div className="space-y-1 text-zinc-600 dark:text-zinc-300">
                    <p>
                      <Server className="inline-block mr-1" />
                      <span className="font-medium">RAM:</span> {project.technicalDetails.ram}
                    </p>
                    <p>
                      <Cpu className="inline-block mr-1" />
                      <span className="font-medium">CPU:</span> {project.technicalDetails.cpu}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={project.download}
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded bg-zinc-900 dark:bg-zinc-700 hover:bg-zinc-800 dark:hover:bg-zinc-600 text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4 mr-2" />
                  İndir
                </a>
                <a
                  href={project.sourceCode}
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded bg-zinc-200 dark:bg-zinc-600 hover:bg-zinc-300 dark:hover:bg-zinc-500 text-zinc-900 dark:text-zinc-100 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code className="w-4 h-4 mr-2" />
                  Kaynak Kodu
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};