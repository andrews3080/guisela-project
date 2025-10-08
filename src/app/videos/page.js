"use client";
import React, { useState } from "react";

const videos = [
  { id: 1, title: "First time on the dance floor", src: "/videos/video1.mp4" },
  { id: 2, title: "Walking into class like I own the syllabus 💼🔥", src: "/videos/video2.mp4" },
  { id: 3, title: "Just me, the camera, and the moment 📸✨", src: "/videos/video3.mp4" },
  { id: 4, title: "Me vs. Duolingo streak: it’s personal now 😤🔥", src: "/videos/video4.mp4" },
  { id: 5, title: "Visit to the zoo with Big sis Sintia💖", src: "/videos/video5.mp4" },
  { id: 6, title: "Hands of magic, heart of gold — shoutout to Sintia for the braid slay 💫", src: "/videos/video6.mp4" },
  { id: 7, title: "Current mood: just me and the music😊💕🎵", src: "/videos/video7.mp4" },
  { id: 8, title: "No reason, just feeling myself today 💁‍♀️", src: "/videos/video8.mp4" },
  { id: 9, title: "Just me, the camera, and main character energy.🎬✨", src: "/videos/video9.mp4" },
  { id: 10, title: "POV: main character energy activated 🎬💫", src: "/videos/video10.mp4" },
  { id: 11, title: "When your sister forces you into a cameo 😅📹 'Say hello!' — OK fine 🙄", src: "/videos/video11.mp4" },
  { id: 12, title: "Just me, the elevator, and a little pre-class vibe check 😌📚", src: "/videos/video12.mp4" },
  { id: 13, title: "If I look this good by accident, imagine on purpose.😉", src: "/videos/2025_05_29_12_06_IMG_1767.mp4" },
  { id: 14, title: "Soy sauce, spice, and everything nice! 🍳🍜✨", src: "/videos/2025_05_29_11_56_IMG_1765.mp4" },
  { id: 15, title: "With Big Sis🫂💖", src: "/videos/2025_07_30_09_07_IMG_3310.mp4" },
  { id: 16, title: "Doing the farming aura with my roomies 💃💫", src: "/videos/2025_10_02_23_23_IMG_3314.mp4" },
];

const VideoPage = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const handlePlay = (index) => setCurrentIndex(index);
  const handleClose = () => setCurrentIndex(null);
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % videos.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);

  return (
    <div className="p-4 sm:p-6 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 min-h-screen">
      {currentIndex === null ? (
        // ✅ Responsive grid with visible thumbnails
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition bg-white"
              onClick={() => handlePlay(index)}
            >
              <div className="relative w-full aspect-video bg-gray-200">
                <video
                src={video.src}
                className="w-full aspect-video object-cover"
                muted
                loop
                playsInline
                preload="metadata"
                onLoadedMetadata={(e) => e.target.currentTime = 0.1}
              />

                {/* Soft overlay for better contrast */}
                <div className="absolute inset-0 bg-black/10" />
              </div>
              <div className="p-3 text-center font-medium text-pink-700 text-sm sm:text-base">
                {video.title}
              </div>
            </div>
          ))}
        </div>
      ) : (
        // ✅ Fullscreen player with better mobile scaling
        <div className="relative w-full h-screen bg-black flex flex-col items-center justify-center">
          <video
            key={videos[currentIndex].src}
            src={videos[currentIndex].src}
            controls
            autoPlay
            className="w-full h-full object-contain max-h-screen"
          />

          <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white text-lg sm:text-xl font-bold drop-shadow-lg text-center px-4">
            {videos[currentIndex].title}
          </div>

          <div className="absolute bottom-6 left-0 right-0 flex justify-center flex-wrap gap-4">
            <button
              onClick={handlePrev}
              className="px-4 py-2 bg-white/20 hover:bg-white/40 text-white rounded-lg text-sm sm:text-base"
            >
              ⬅ Prev
            </button>
            <button
              onClick={handleClose}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm sm:text-base"
            >
              🔙 Back
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-white/20 hover:bg-white/40 text-white rounded-lg text-sm sm:text-base"
            >
              Next ➡
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPage;
