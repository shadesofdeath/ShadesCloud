import { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  Music,
  Shuffle,
  Repeat,
  Volume,
  VolumeX
} from 'lucide-react';

const playlist = [
  "https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/assets/All%20I%20Want%20-%20Lofi.mp3",
  "https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/assets/Apocalypse%20-%20Cigarettes%20After%20Sex.mp3",
  "https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/assets/Beanie.mp3",
  "https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/assets/Day%20In,%20Day%20Out%20(Neroche).mp3",
  "https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/assets/Dido%20-%20Thank%20you.mp3",
  "https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/assets/Mounika-Intro-(Thinking).mp3",
  "https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/assets/Nightcore%20-%20What%20do%20i%20live%20for%20(Fabian%20Secon)%20-%20(Lyrics).mp3",
  "https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/assets/Nightcore%20Broken.mp3",
  "https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/assets/Passenger%20-%20Let%20Her%20Go%20(Slowed%20Down).mp3",
  "https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/assets/Rnla%20&%20yaeow%20-%20free%20with%20you.mp3",
  "https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/assets/Tom%20Odell%20-%20Another%20Love%20(s%20l%20o%20w%20e%20d%20%20%20%20r%20e%20v%20e%20r%20b).mp3",
  "https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/assets/juice%20wrld%20-%20lucid%20dreams%20(slowed%20-%20reverb).mp3",
  "https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/assets/bruno%20mars%20-%20when%20i%20was%20your%20man%20(%20slowed%20%20reverb%20).mp3",
  "https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/assets/only%20time%20-%20enya%20(slowed%20%20reverb).mp3",
  "https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/assets/%EF%BE%89%20%EF%BE%89%20bruno%20mars%20-%20when%20i%20was%20your%20man%20(%20slowed%20%20reverb%20)%20%EF%BE%89%20%EF%BE%89.mp3"
];

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isLoop, setIsLoop] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      if (!isNaN(audio.duration)) {
        setProgress(audio.currentTime);
        setDuration(audio.duration);
      }
    };

    const handleEnded = () => {
      if (isLoop) {
        audio.currentTime = 0;
        audio.play();
      } else {
        handleNext();
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.volume = volume;

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [currentTrack, isLoop, volume]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        playerRef.current &&
        !playerRef.current.contains(event.target as Node) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const togglePlay = () => {
    if (audioRef.current?.paused) {
      audioRef.current.play().then(() => setIsPlaying(true));
    } else {
      audioRef.current?.pause();
      setIsPlaying(false);
    }
  };

  const handleNext = () => {
    setCurrentTrack((prev) => {
      if (isShuffled) {
        return Math.floor(Math.random() * playlist.length);
      }
      return (prev + 1) % playlist.length;
    });
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentTrack((prev) => {
      if (isShuffled) {
        return Math.floor(Math.random() * playlist.length);
      }
      return (prev - 1 + playlist.length) % playlist.length;
    });
    setIsPlaying(true);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setProgress(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume;
        setIsMuted(false);
      } else {
        audioRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const getCurrentSongName = () => {
    const url = playlist[currentTrack];
    const fileName = decodeURIComponent(url.split('/').pop() || '');
    return fileName.replace('.mp3', '');
  };

  return (
    <>
      <button
        ref={toggleButtonRef}
        onClick={() => setIsExpanded(!isExpanded)}
        className="music-player-button"
        aria-label="Toggle music player"
      >
        <Music className="w-4 h-4" />
      </button>

      {isExpanded && (
        <div className="music-player-container" ref={playerRef}>
          <div className="music-player-widget animate-slideUp p-4 rounded-lg shadow-md bg-white dark:bg-zinc-800">
            <div className="flex flex-col gap-4">
              {/* Şarkı Bilgisi */}
              <div className="text-center">
                <p className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  {getCurrentSongName()}
                </p>
                <div className="flex justify-between text-xs text-zinc-500 mt-1">
                  <span>{formatTime(progress)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={progress}
                onChange={handleProgressChange}
                className="w-full h-1 accent-zinc-500"
              />

              {/* Kontroller */}
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setIsShuffled(!isShuffled)}
                  className={`p-2 rounded-full transition-all duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 ${
                    isShuffled && "text-emerald-500"
                  }`}
                  aria-label="Shuffle"
                >
                  <Shuffle className="w-4 h-4" />
                </button>

                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full transition-all duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                  aria-label="Previous"
                >
                  <SkipBack className="w-4 h-4" />
                </button>

                <button
                  onClick={togglePlay}
                  className="p-3 bg-zinc-100 dark:bg-zinc-700 rounded-full transition-all duration-300 hover:shadow-lg"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>

                <button
                  onClick={handleNext}
                  className="p-2 rounded-full transition-all duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                  aria-label="Next"
                >
                  <SkipForward className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setIsLoop(!isLoop)}
                  className={`p-2 rounded-full transition-all duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 ${
                    isLoop && "text-amber-500"
                  }`}
                  aria-label="Loop"
                >
                  <Repeat className="w-4 h-4" />
                </button>
              </div>

              {/* Ses Kontrolü */}
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={toggleMute}
                  className="p-1 rounded-full transition-all duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                  aria-label="Mute"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume className="w-4 h-4" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-24 accent-zinc-500"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <audio ref={audioRef} src={playlist[currentTrack]} />
    </>
  );
}

export const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-white/70 dark:bg-zinc-800/70 rounded-lg border border-zinc-200/50 dark:border-zinc-700/50 transition-all duration-300 hover:bg-zinc-50 dark:hover:bg-zinc-700/50"
      >
        <div>
          <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{project.title}</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">{project.description}</p>
        </div>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto animate-slideUp">
            <h2 className="text-xl font-bold mb-4">{project.title}</h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4">{project.description}</p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Özellikler</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Teknik Detaylar</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><span className="font-medium">Platform:</span> {project.technicalDetails.platform}</p>
                    <p><span className="font-medium">Gereksinimler:</span> {project.technicalDetails.requirements}</p>
                    <p><span className="font-medium">Dil:</span> {project.technicalDetails.language}</p>
                  </div>
                  <div>
                    <p><span className="font-medium">RAM:</span> {project.technicalDetails.ram}</p>
                    <p><span className="font-medium">CPU:</span> {project.technicalDetails.cpu}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
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

              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-full"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};