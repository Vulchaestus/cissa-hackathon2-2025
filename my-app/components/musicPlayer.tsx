"use client";

import { useEffect, useRef, useState } from "react";

type AudioPlayerProps = {
   songId: number;
};

export default function AudioPlayer({ songId }: AudioPlayerProps) {
   const audioRef = useRef<HTMLAudioElement>(null);
   const [isPlaying, setIsPlaying] = useState(false);
   const [currentTime, setCurrentTime] = useState(0);
   const [duration, setDuration] = useState(0);
   const [song, setSong] = useState<any | null>(null);

   // Fetch song info from API
   useEffect(() => {
      async function fetchSong() {
         const res = await fetch(`/api/song/${songId}`);
         if (!res.ok) {
            console.error("Failed to fetch song");
            return;
         }
         const data = await res.json();
         setSong(data);
      }
      fetchSong();
   }, [songId]);

   useEffect(() => {
      const audio = audioRef.current;
      if (!audio) return;

      const updateTime = () => setCurrentTime(audio.currentTime);
      const setAudioData = () => setDuration(audio.duration);

      audio.addEventListener("loadedmetadata", setAudioData);
      audio.addEventListener("timeupdate", updateTime);

      return () => {
         audio.removeEventListener("loadedmetadata", setAudioData);
         audio.removeEventListener("timeupdate", updateTime);
      };
   }, [song]);

   const togglePlay = () => {
      const audio = audioRef.current;
      if (!audio) return;

      if (isPlaying) {
         audio.pause();
      } else {
         audio.play();
      }
      setIsPlaying(!isPlaying);
   };

   const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const audio = audioRef.current;
      if (!audio) return;

      const newTime = parseFloat(e.target.value);
      audio.currentTime = newTime;
      setCurrentTime(newTime);
   };

   const formatTime = (time: number) => {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds.toString().padStart(2, "0")}`;
   };

   if (!song) {
      return <div>Loading song...</div>;
   }

   return (
      <div className="w-full max-w-md p-4 rounded-2xl shadow-md bg-white flex flex-col gap-4">
         <div className="text-lg font-semibold">
            {song.name} - {song.artistName}
         </div>

         <audio ref={audioRef} src={song.songObj} preload="metadata" />

         <div className="flex items-center gap-4">
            <button onClick={togglePlay} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
               {isPlaying ? "⏸️" : "▶️"}
            </button>

            <div className="flex-1 flex flex-col">
               <input
                  type="range"
                  min={0}
                  max={duration}
                  value={currentTime}
                  onChange={handleSliderChange}
                  className="w-full"
                  step="0.1"
               />
               <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
               </div>
            </div>
         </div>
      </div>
   );
}
