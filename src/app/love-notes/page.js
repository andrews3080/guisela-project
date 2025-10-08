"use client";

import { useState } from "react";

export default function LoveNotes() {
  const notes = [
    "You’re the best part of my every day 💕",
    "With you, everything feels magical ✨",
    "No distance can lessen my love for you ❤️",
    "You make my heart smile every single day 😊",
    "Forever yours, always mine 💍",
    "You mean the world to me 💕",
    "I was once broken, but you came into my life and healed me ❤️",
    "You never cared about my money—you love me for who I am ✨",
    "Even knowing my flaws, you love me unconditionally 💖",
    "Distance can’t change the love we share 🌍❤️",
    "You motivate me and lift me up when I’m down 🌟",
    "Even far apart, you’re always with me in spirit 💌",
    "Your love makes every dull day bright 🌸",
    "Thank you for being my constant, my heart, my joy 💞",
    "With you, I feel complete and truly happy 🥰"
  ];

  const [opened, setOpened] = useState(Array(notes.length).fill(false));
  const [hearts, setHearts] = useState([]);

  const handleOpen = (index) => {
    const newOpened = [...opened];
    newOpened[index] = !newOpened[index];
    setOpened(newOpened);

    // Add a floating heart when opening
    if (!opened[index]) {
      const id = Date.now();
      setHearts((prev) => [...prev, id]);
      setTimeout(() => {
        setHearts((prev) => prev.filter((heartId) => heartId !== id));
      }, 2000);
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center p-6 overflow-hidden">

  {/* Fullscreen Background Image */}
  <img
    src="/photos/background.jpg"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Background"
  />

  {/* Optional overlay for readability (remove if not needed) */}
  <div className="absolute inset-0 bg-black/20"></div>

  {/* Foreground Content */}
  <div className="relative z-10 flex flex-col items-center text-white drop-shadow-lg">

        <h1 className="text-4xl font-bold mb-6">💌 Love Notes</h1>

        <p className="mb-8 text-center max-w-lg">
          Little pieces of my heart, just for you. Click an envelope to open 💕
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl">
          {notes.map((note, i) => (
            <div
              key={i}
              onClick={() => handleOpen(i)}
              className="cursor-pointer w-64 h-40 flex items-center justify-center rounded-2xl shadow-lg bg-white/70 hover:scale-105 transition relative overflow-hidden"
            >
              {!opened[i] ? (
                <div className="flex flex-col items-center justify-center text-pink-500">
                  <span className="text-5xl">✉️</span>
                  <span className="mt-2 font-medium">Open Me</span>
                </div>
              ) : (
                <div className="p-4 text-center text-pink-700 text-lg font-medium animate-fadeIn">
                  {note}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Floating hearts */}
      {hearts.map((id) => (
        <span
          key={id}
          className="absolute text-pink-500 text-3xl animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: "0px",
          }}
        >
          ❤️
        </span>
      ))}

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-float {
          animation: floatUp 2s ease-in forwards;
        }
        @keyframes floatUp {
          from {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          to {
            transform: translateY(-200px) scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </main>
  );
}
