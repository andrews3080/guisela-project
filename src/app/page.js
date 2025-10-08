"use client";
import Link from "next/link";
//import MusicPlayer from "./components/MusicPlayer"; // ✅ ADD THIS

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* ✅ Hidden background music player */}
      

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay + Content */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          💖 Happy Birthday Guisela Soledad 💖
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          A small gift, holding echoes of who you are to me ✨
        </p>

        <Link href="/dashboard">
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition">
            Click to open you Birthday Present🎁😊💌
          </button>
        </Link>
      </div>
    </div>
  );
}
