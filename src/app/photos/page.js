"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Photos() {
  const images = [
    "/photos/WhatsApp_Image_2025-08-26_at_12.32.02_2f7d0f33.jpg",
    "/photos/WhatsApp_Image_2025-07-20_at_13.09.28_8d6a42bc.jpg",
    "/photos/WhatsApp_Image_2025-08-26_at_12.32.06_d02ed134.jpg",
    "/photos/WhatsApp_Image_2025-08-26_at_12.32.05_1b9c8bf3.jpg",
    "/photos/WhatsApp_Image_2025-07-20_at_13.09.14_3fb506ec.jpg",
    "/photos/2025_03_08_13_41_IMG_0904.jpg",
    "/photos/2025_03_08_13_41_IMG_0905.jpg",
    "/photos/WhatsApp_Image_2025-06-27_at_05.10.58_50cf4f75.jpg",
    "/photos/WhatsApp_Image_2025-07-05_at_15.42.14_8d490f0c.jpg",
    "/photos/WhatsApp_Image_2025-07-06_at_12.22.55_b10b52f7.jpg",
    "/photos/WhatsApp_Image_2025-06-27_at_05.10.58_f6499f78.jpg",
    "/photos/WhatsApp_Image_2025-07-06_at_12.22.54_6c71030b.jpg",
    "/photos/2025_04_19_15_41_IMG_1329.jpg",
    "/photos/2025_05_13_11_09_IMG_1495.jpg",
    "/photos/2025_05_21_13_09_IMG_1560.jpg",
    "/photos/2025_05_24_07_34_IMG_1753.jpg",
    "/photos/2024_11_09_11_54_IMG_0196.jpg",  
    "/photos/2024_11_09_11_54_IMG_0197.jpg",
    "/photos/2025_02_04_11_40_IMG_0461.jpg",
    "/photos/2025_02_06_08_41_IMG_0490.jpg",
    "/photos/2025_06_02_10_38_IMG_1802.jpg",
    "/photos/2025_05_24_07_34_IMG_1754.jpg",
    "/photos/2025_06_01_07_22_IMG_1798.jpg",
    "/photos/WhatsApp_Image_2025-09-26_at_17.21.31_3efe13f8.jpg",
    "/photos/2025_07_20_14_04_IMG_3311.jpg",
    "/photos/2025_08_05_02_03_IMG_2602.jpg",
    "/photos/2025_08_05_02_02_IMG_2598.jpg",
  
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [hearts, setHearts] = useState([]); // {id, x, y, size, dur}

  const spawnHeart = (e) => {
    // e is React.MouseEvent - capture coordinates immediately
    const x = e.clientX;
    const y = e.clientY;
    const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
    const size = 18 + Math.floor(Math.random() * 22); // 18-40px
    const dur = 2.4 + Math.random() * 1.2; // 2.4s - 3.6s

    const newHeart = { id, x, y, size, dur };
    setHearts((p) => [...p, newHeart]);

    // cleanup after animation finishes
    setTimeout(() => {
      setHearts((p) => p.filter((h) => h.id !== id));
    }, Math.ceil(dur * 1000) + 300);
  };

  return (
    <main className="min-h-screen bg-pink-50 flex flex-col items-center p-6 relative overflow-hidden">
      <h1 className="text-4xl font-bold text-pink-700 mb-6">
        📸 Your Memories  
      </h1>

      <p className="text-pink-600 mb-8 text-center max-w-lg">
        A little gallery your beautiful moments 💕 Click a photo to see it closer!
      </p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl">
        {images.map((src, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl shadow-md hover:scale-105 transition cursor-pointer"
            onClick={(e) => {
              setIndex(i);
              setOpen(true);
              spawnHeart(e);
            }}
          >
            <img
              src={src}
              alt={`Memory ${i + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((src) => ({ src }))}
      />

      {/* Floating Hearts (position: fixed so they show above everything) */}
      {hearts.map((h) => (
        <span
          key={h.id}
          className="heart"
          style={{
            left: `${h.x}px`,
            top: `${h.y}px`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.dur}s`,
            zIndex: 99999, // large so it appears above lightbox
          }}
        >
          ❤️
        </span>
      ))}

      <style jsx>{`
        .heart {
          position: fixed;
          pointer-events: none;
          transform: translate(-50%, -50%) scale(1);
          user-select: none;
          will-change: transform, opacity;
          animation-name: floatUp;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
        }

        @keyframes floatUp {
          0% {
            transform: translate(-50%, -50%) translateY(0) scale(1);
            opacity: 1;
          }
          40% {
            transform: translate(-50%, -50%) translateY(-70px) scale(1.05);
            opacity: 0.9;
          }
          100% {
            transform: translate(-50%, -50%) translateY(-200px) scale(1.3);
            opacity: 0;
          }
        }
      `}</style>
    </main>
  );
}

