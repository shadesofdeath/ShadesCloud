import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2.5 
         bg-white/90 dark:bg-zinc-800/90 
         border border-zinc-200/50 dark:border-zinc-700/50
         shadow-sm hover:shadow-md
         backdrop-blur-sm
         text-zinc-700 dark:text-zinc-300
         hover:text-zinc-900 dark:hover:text-zinc-100
         transition-all duration-300
         rounded-full
         z-50"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </button>
  );
}