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
  { img: wc1, title: "Wetlands of Bihar", text: "Where the lotus has grown wild for centuries." },
  { img: wc2, title: "Lotus Ponds", text: "Quiet ponds bloom with pink lotuses each season." },
  { img: wc3, title: "Hand Harvested", text: "Farmers gather the seed-bearing pods by hand." },
  { img: wc4, title: "Sun Dried", text: "Seeds dry on woven bamboo mats under open sky." },
  { img: wc5, title: "Slow Roasted", text: "Roasted over traditional clay stoves in iron pans." },
  { img: wc6, title: "Hand Seasoned", text: "Small batches, real spices, gentle hands." },
  { img: wc7, title: "Premium Packed", text: "Carefully packed to keep every crunch fresh." },
  { img: wc8, title: "Shared at the Table", text: "From our farms to your family — with care." },
];

export default function StorySlideshow() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % SLIDES.length), 5000);
    return () => clearInterval(id);
  }, []);

  const slide = SLIDES[i];

  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[32px] bg-wheat/40 shadow-[0_30px_80px_-30px_rgba(77,98,44,0.4)]">
      <AnimatePresence mode="sync">
        <motion.img
          key={i}
          src={slide.img}
          alt={slide.title}
          loading="lazy"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ opacity: { duration: 1.4, ease: "easeInOut" }, scale: { duration: 6, ease: "linear" } }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-olive/80 via-olive/10 to-transparent pointer-events-none" />

      <AnimatePresence mode="wait">
        <motion.div
          key={`txt-${i}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-8 left-8 right-8 text-cream"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-wheat font-semibold">
            Chapter {String(i + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
          </p>
          <h3 className="mt-2 font-display text-3xl lg:text-4xl">{slide.title}</h3>
          <p className="mt-2 max-w-md text-cream/90 text-sm leading-relaxed">{slide.text}</p>
        </motion.div>
      </AnimatePresence>

      <div className="absolute top-5 right-5 flex gap-1.5">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              idx === i ? "w-8 bg-cream" : "w-1.5 bg-cream/40 hover:bg-cream/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
