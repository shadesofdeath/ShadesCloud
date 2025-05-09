import { Code } from 'lucide-react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  isPreview?: boolean;
}

export const ProjectCard = ({ project, isPreview = false }: ProjectCardProps) => {
  return (
    <article className="h-full bg-white/70 dark:bg-zinc-800/70 rounded-lg border border-zinc-200/50 dark:border-zinc-700/50 overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors">
      <div className="p-6">
        <header className="mb-4">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">{project.title}</h2>
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
          <p className="text-zinc-600 dark:text-zinc-300 line-clamp-3">{project.description}</p>
        </header>

        {!isPreview && (
          <div className="mt-4 flex gap-4">
            <a
              href={project.download}
              className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded bg-zinc-900 hover:bg-zinc-800 text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              İndir
            </a>
            <a
              href={project.sourceCode}
              className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded bg-zinc-200 hover:bg-zinc-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code className="w-4 h-4 mr-2" />
              Kaynak
            </a>
          </div>
        )}
      </div>
    </article>
  );
};