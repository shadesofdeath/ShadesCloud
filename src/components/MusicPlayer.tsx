import { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  Music
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
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setProgress(audio.currentTime);
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      handleNext();
    };

    const handleCanPlay = () => {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('canplay', handleCanPlay);
    audio.volume = volume;

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('canplay', handleCanPlay);
    };
  }, [currentTrack]);

  const togglePlay = () => {
    if (audioRef.current?.paused) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      });
    } else {
      audioRef.current?.pause();
      setIsPlaying(false);
    }
  };

  const handleNext = () => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length);
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
    <div className="fixed bottom-4 right-4 z-50">
      <div className={`bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm rounded-lg border border-zinc-200/50 dark:border-zinc-700/50 shadow-lg transition-all duration-300 overflow-hidden ${isExpanded ? 'w-72' : 'w-12'}`}>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-12 h-12 flex items-center justify-center"
        >
          <Music className="w-5 h-5" />
        </button>
        
        {isExpanded && (
          <div className="p-4 border-t border-zinc-200/50 dark:border-zinc-700/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{getCurrentSongName()}</p>
                <p className="text-xs text-zinc-500">{formatTime(progress)} / {formatTime(duration)}</p>
              </div>
            </div>
            
            <div className="flex justify-center items-center gap-4">
              <button onClick={handlePrev} className="p-2">
                <SkipBack className="w-4 h-4" />
              </button>
              <button onClick={togglePlay} className="p-3 bg-zinc-100 dark:bg-zinc-700 rounded-full">
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              <button onClick={handleNext} className="p-2">
                <SkipForward className="w-4 h-4" />
              </button>
            </div>
            
            <div className="mt-4">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={progress}
                onChange={handleProgressChange}
                className="w-full h-1 accent-zinc-500"
              />
            </div>
          </div>
        )}
        <audio ref={audioRef} src={playlist[currentTrack]} />
      </div>
    </div>
  );
}