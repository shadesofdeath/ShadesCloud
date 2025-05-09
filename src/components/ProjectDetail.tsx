import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, Code, Monitor, Cpu, Server } from 'lucide-react';
import type { Project } from '../types';

interface ProjectDetailProps {
  projects: Project[];
}

export function ProjectDetail({ projects }: ProjectDetailProps) {
  const { projectId } = useParams();
  const project = projects.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === projectId);

  if (!project) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-bold mb-4">Proje bulunamadı</h2>
        <Link 
          to="/"
          className="inline-flex items-center text-blue-500 hover:text-blue-600"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Ana sayfaya dön
        </Link>
      </div>
    );
  }

  // Benzer projeleri bul (aynı teknoloji kullanan)
  const similarProjects = projects
    .filter(p => 
      p.title !== project.title && 
      p.tech.some(t => project.tech.some(pt => pt.name === t.name))
    )
    .slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto">
      <Link 
        to="/"
        className="inline-flex items-center mb-8 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Tüm Projeler
      </Link>

      <article className="bg-white/70 dark:bg-zinc-800/70 rounded-lg border border-zinc-200/50 dark:border-zinc-700/50 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-sm rounded-full bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300"
              >
                {tech.name}
              </span>
            ))}
          </div>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">{project.description}</p>
        </header>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Özellikler</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-zinc-600 dark:text-zinc-300">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Teknik Detaylar</h2>
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
        </section>

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
      </article>

      {similarProjects.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-6">Benzer Projeler</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarProjects.map(similarProject => (
              <Link
                key={similarProject.title}
                to={`/project/${similarProject.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="block p-4 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all duration-300"
              >
                <h3 className="font-medium mb-2">{similarProject.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                  {similarProject.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
