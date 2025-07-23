'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

const storyLines = [
  "My name is Ganesh Shah.",
  "I come from a small family in Itahari, Nepal.",
  "From Class 1 to 10, I studied at Standard Secondary Boarding School.",
  "It was during the COVID lockdown that something changed.",
  "I wasn't just playing with tech anymore — I was understanding it.",
  "I used to open up small devices like remote control cars… just to see how they worked.",
  "And soon, I was talking to computers — and they started talking back.",
  "By Class 8, I was learning HTML, CSS, C, and Python.",
  "I built my first projects — including an automatic PC system powered by the ChatGPT API.",
  "I started freelancing.",
  "Sites like Upwork, Fiverr, and even TikTok became my platforms.",
  "After SEE, I joined Sushma Godawari College.",
  "And while formal study wasn't my focus — building things was.",
  "I helped create a 3D Godawari game in Unity.",
  "We launched an eSports tournament platform, and other unique applications.",
  "This isn't just my story —",
  "It's my journey of turning passion into reality.",
  "Welcome to my world."
];

export const Story = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [progress, setProgress] = useState(0);
  const animationRef = useRef<number>();

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        const progress = (audio.currentTime / audio.duration) * 100;
        setProgress(progress);
        
        // Update current line based on audio time
        const lineDuration = audio.duration / storyLines.length;
        const currentLineIndex = Math.floor(audio.currentTime / lineDuration);
        setCurrentLine(Math.min(currentLineIndex, storyLines.length - 1));
      }
      animationRef.current = requestAnimationFrame(updateProgress);
    };

    if (isPlaying) {
      audio.play();
      animationRef.current = requestAnimationFrame(updateProgress);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <section className="relative py-6 flex flex-col items-center justify-center px-2 sm:px-4">
      <div className="w-full max-w-2xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl shadow-black/30">
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <h2 className="text-lg font-medium text-gray-300">my_story.txt</h2>
          <div className="w-12"></div>
        </div>
        
        <div className="relative h-0.5 bg-white/10 rounded-full mb-4">
          <motion.div 
            className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <div className="min-h-32 mb-8">
          <AnimatePresence mode="wait">
            <motion.p 
              key={currentLine}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-sm sm:text-base font-mono text-gray-200 leading-relaxed bg-black/20 p-4 rounded-lg border-l-2 border-blue-400/50"
            >
              {storyLines[currentLine]}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="flex justify-center">
          <button
            onClick={togglePlay}
            className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause className="w-8 h-8" />
            ) : (
              <Play className="w-8 h-8 ml-1" />
            )}
          </button>
        </div>
      </div>

      <audio 
        ref={audioRef} 
        src="/audio/story.wav"
        onEnded={() => setIsPlaying(false)}
        className="hidden"
      />
    </section>
  );
};

export default Story;
