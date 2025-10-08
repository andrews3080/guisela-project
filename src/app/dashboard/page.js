"use client";

import Link from "next/link";

export default function Dashboard() {
  return (
    <main
      className="relative min-h-screen flex flex-col justify-center items-center text-center p-6 overflow-hidden"
      style={{
        backgroundImage: "url('/photos/background1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-lg">
        <h1 className="text-3xl sm:text-4xl font-bold text-pink-200 mb-6 drop-shadow-lg">
          🎀 Happy Birthday 🎀
        </h1>

        <p className="text-pink-100 mb-8 text-center text-base sm:text-lg max-w-md drop-shadow-lg px-2">
          Welcome to this little space of love, all for you 💕.
          Each tab holds a piece of what makes you so special.
        </p>

        <nav className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <Link
            href="/photos"
            className="p-6 rounded-2xl shadow-md bg-white/70 text-center text-pink-600 font-medium hover:scale-105 transition backdrop-blur-sm"
          >
            📸 Photos
          </Link>

          <Link
            href="/love-notes"
            className="p-6 rounded-2xl shadow-md bg-white/70 text-center text-pink-600 font-medium hover:scale-105 transition backdrop-blur-sm"
          >
            💌 Love Notes
          </Link>

          <Link
            href="/videos"
            className="p-6 rounded-2xl shadow-md bg-white/70 text-center text-pink-600 font-medium hover:scale-105 transition backdrop-blur-sm sm:col-span-2"
          >
            🎥 Videos
          </Link>
        </nav>
      </div>
    </main>
  );
}

