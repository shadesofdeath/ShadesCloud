import { Download, Code } from 'lucide-react';

export const ProjectCard = ({ project }) => {
  return (
    <article className="backdrop-blur-md bg-white/70 dark:bg-zinc-800/70 rounded-lg border border-zinc-200/50 dark:border-zinc-700/50 transition-all duration-300 h-[400px] flex flex-col">
      <div className="p-6 flex flex-col h-full">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">{project.title}</h2>
        
        <p className="text-zinc-600 dark:text-zinc-300 mb-4 line-clamp-2">{project.description}</p>
        
        <ul className="space-y-2 flex-grow overflow-auto mb-4">
          {project.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 flex-shrink-0" />
              <span className="line-clamp-1">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex gap-2 mt-auto">
          <a
            href={project.download}
            className="inline-flex items-center px-3 py-1 rounded bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 text-zinc-900 dark:text-zinc-100 text-sm transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="w-4 h-4 mr-1" />
            İndir
          </a>
          <a
            href={project.sourceCode}
            className="inline-flex items-center px-3 py-1 rounded bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 text-zinc-900 dark:text-zinc-100 text-sm transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code className="w-4 h-4 mr-1" />
            Kaynak
          </a>
        </div>
      </div>
    </article>
  );
};