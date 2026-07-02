import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import wc1 from "@/assets/story-wc-1.jpg";
import wc2 from "@/assets/story-wc-2.jpg";
import wc3 from "@/assets/story-wc-3.jpg";
import wc4 from "@/assets/story-wc-4.jpg";
import wc5 from "@/assets/story-wc-5.jpg";
import wc6 from "@/assets/story-wc-6.jpg";
import wc7 from "@/assets/story-wc-7.jpg";
import wc8 from "@/assets/story-wc-8.jpg";

const SLIDES = [
  wc1,
  wc2,
  wc3,
  wc4,
  wc5,
  wc6,
  wc7,
  wc8,
];

export default function StorySlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Images */}
      <AnimatePresence initial={false}>
        <motion.img
          key={index}
          src={SLIDES[index]}
          alt={`Story ${index + 1}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.04,
          }}
          transition={{
            opacity: {
              duration: 1.2,
              ease: "easeInOut",
            },
            scale: {
              duration: 3,
              ease: "linear",
            },
          }}
        />
      </AnimatePresence>

      {/* Soft overlay */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

      {/* Progress Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-500 ${index === i
              ? "w-8 h-2 bg-white"
              : "w-2 h-2 bg-white/40 hover:bg-white/70"
              }`}
          />
        ))}
      </div>
    </div>
  );
}