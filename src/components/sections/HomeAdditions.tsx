import { Link } from "@tanstack/react-router";

import classic from "@/assets/tomato.png";
import cheese from "@/assets/chezzy.png";
import cream from "@/assets/creamandonion.png";
import peri from "@/assets/periperi.png";
import pudina from "@/assets/pudina.png";
import pepper from "@/assets/himalayan.png";

export function FinalCTA() {
  // Ordered left → right. rotate + lift build the arc/curve.
  const products = [
    { src: classic, rotate: -18, y: 75 },
    { src: pepper, rotate: -11, y: 23 },
    { src: cream, rotate: -5, y: -5 },
    { src: cheese, rotate: 5, y: -5 },
    { src: pudina, rotate: 11, y: 23 },
    { src: peri, rotate: 18, y: 75 },
  ];

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        flex-col
        items-center
        justify-center
        bg-olive
        px-6
        py-20
        lg:px-10
      "
    >
      {/* =================================================
          DECORATIVE PRODUCT IMAGES
      ================================================= */}
      <div
        className="
    relative
    z-10
    flex
    items-end
    justify-center
    w-full
    max-w-6xl
    gap-0
    sm:gap-0
    lg:gap-1
    px-2
  "
      >
        {products.map((product, index) => (
          <img
            key={index}
            src={product.src}
            alt=""
            className="
              w-[15%]
              sm:w-[15%]
              lg:w-[190px]
              aspect-[3/4]
              object-contain
              drop-shadow-2xl
              transition-transform
              duration-500
              hover:z-20
              hover:!translate-y-[-12px]
              hover:scale-110
            "
            style={{
              transform: `translateY(${product.y}px) rotate(${product.rotate}deg)`,
              transformOrigin: "bottom center",
            }}
          />
        ))}
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}
      <div
        data-reveal
        className="
          reveal
          relative
          z-20
          mx-auto
          max-w-5xl
          mt-14
          sm:mt-16
          lg:mt-20
          text-center
        "
      >
        <h2
          className="
            font-display
            text-4xl
            sm:text-5xl
            font-semibold
            leading-tight
            text-white
            lg:text-7xl
          "
        >
          Snack quietly.
          <span className="italic"> Live loudly.</span>
        </h2>

        <p
          className="
            mx-auto
            mt-6
            sm:mt-8
            max-w-2xl
            text-base
            sm:text-xl
            font-semibold
            leading-relaxed
            tracking-wide
            text-white/90
          "
        >
          Discover the small-batch range or talk to us about wholesale,
          gifting and premium snack solutions. We answer every email.
        </p>

        <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-5">
          <Link
            to="/shop"
            className="
              rounded-full
              bg-white
              px-10
              py-4
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-olive
              transition-all
              duration-300
              hover:scale-105
              hover:bg-white/90
            "
          >
            Shop Now
          </Link>

          <Link
            to="/contact"
            className="
              rounded-full
              border-2
              border-white
              bg-transparent
              px-10
              py-4
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-white
              transition-all
              duration-300
              hover:bg-white
              hover:text-olive
            "
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}