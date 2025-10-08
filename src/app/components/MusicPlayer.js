"use client";
import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false); // Start paused until user clicks

  const songs = [
    "/songs/Flavour-Ft-Chidinma-Ololufe.mp3",
    "/songs/In Control.mp3",
    "/songs/Into The Future.mp3",
    "/songs/Joeboy-Body-and-Soul.mp3",
    "/songs/Koffee_-_Lockdown.mp3",
    "/songs/Koffee_-_Stand_By_You.mp3",
    "/songs/Kwesi-Arthur-Celebrate-Ft-Teni.mp3",
    "/songs/Kwesi-Arthur-Fefe-Ne-Fe.mp3",
    "/songs/Marc Anthony - I Need You.mp3",
    "/songs/Non Stop.mp3",
    "/songs/Run AM (feat. Mereba).mp3",
    "/songs/Stonebwoy.mp3",
    "/songs/Unconditional Love.mp3",
    "/songs/Where Is The Love.mp3"
  ];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set the first song initially
    audio.src = songs[0];

    const startMusicOnClick = () => {
      audio.play().then(() => {
        setIsPlaying(true);
        window.removeEventListener("click", startMusicOnClick);
        window.removeEventListener("touchstart", startMusicOnClick);
      }).catch(err => {
        console.error("Still blocked:", err);
      });
    };

    // ✅ Listen for first interaction
    window.addEventListener("click", startMusicOnClick);
    window.addEventListener("touchstart", startMusicOnClick);

    // ✅ When one song ends, move to next
    audio.addEventListener("ended", handleNext);

    return () => {
      window.removeEventListener("click", startMusicOnClick);
      window.removeEventListener("touchstart", startMusicOnClick);
      audio.removeEventListener("ended", handleNext);
    };
  }, []);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
  setCurrentSongIndex((prevIndex) => {
    const newIndex = (prevIndex + 1) % songs.length;
    const audio = audioRef.current;
    if (audio) {
      audio.src = songs[newIndex];
      audio.play().catch(() => {});
    }
    return newIndex;
  });
  setIsPlaying(true);
};


  const handlePrevious = () => {
    const newIndex = currentSongIndex === 0
      ? songs.length - 1
      : currentSongIndex - 1;
    setCurrentSongIndex(newIndex);
    const audio = audioRef.current;
    audio.src = songs[newIndex];
    audio.play().catch(() => {});
    setIsPlaying(true);
  };

 return (
  <>
    <audio ref={audioRef} hidden />

    {/* ✅ Always visible, on top of everything */}
    <div className="fixed bottom-4 right-4 z-50 flex gap-2 bg-black/70 text-white px-4 py-2 rounded-lg shadow-lg">
      <button onClick={handlePrevious} className="hover:opacity-80">
        ⏮ Prev
      </button>
      <button onClick={handlePlayPause} className="hover:opacity-80">
        {isPlaying ? "⏸ Pause" : "▶ Play"}
      </button>
      <button onClick={handleNext} className="hover:opacity-80">
        ⏭ Next
      </button>
    </div>
  </>
);

}
