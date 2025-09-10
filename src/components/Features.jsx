import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const items = [
  { img: "./images/111.png", text: "Take our quick 60-second school match quiz" },
  { img: "./images/222.png", text: "Get matched with top programs tailored to you" },
  { img: "./images/333.png", text: "Explore your options — no fees, no obligations" },
];

export default function Features() {
  return (
    <section
      className="
        py-16
        bg-gradient-to-b
        from-indigo-50
        via-indigo-100
        to-indigo-200
        text-indigo-900
      "
    >
      <div className="container-narrow">
        <h2 className="text-center text-indigo-900 text-3xl md:text-4xl font-extrabold">
          How It Works
        </h2>

        <div className="mt-10">
          {/* Mobile list */}
          <ul className="grid grid-cols-1 gap-6 place-items-center md:hidden">
            {items.map((it, i) => (
              <Card key={i} it={it} index={i} />
            ))}
          </ul>

          {/* Desktop horizontal scroll list */}
          <ul
            className="
              hidden md:flex md:flex-nowrap md:justify-center
              md:gap-6 xl:gap-10
              md:overflow-x-auto md:scroll-smooth md:snap-x md:snap-mandatory
              [-ms-overflow-style:none] [scrollbar-width:none]
              md:[&::-webkit-scrollbar]:hidden
            "
            style={{ scrollbarWidth: "none" }}
          >
            {items.map((it, i) => (
              <Card key={i} it={it} index={i} snap />
            ))}
          </ul>
        </div>

       <div className="mt-8 text-center">
  <a
    href="#school-quiz"
    onClick={(e) => {
      e.preventDefault(); // prevent default jump to #school-quiz
      window.scrollTo({ top: 0, behavior: "smooth" }); // scroll smoothly to top
    }}
    className="btn btn-indigo mt-2 px-10 py-3 font-semibold shadow-lg hover:shadow-xl transition"
  >
    Get Started
  </a>
</div>

      </div>
    </section>
  );
}

function Card({ it, index, snap = false }) {
  const prefersReducedMotion = useReducedMotion();

  // Gentle pulse zoom animation (on desktop)
  const zoomAnim = prefersReducedMotion
    ? {}
    : {
        scale: [1, 1.05, 1],
        transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
      };

  return (
    <motion.li
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={[
        "rounded-3xl border border-indigo-300 bg-white shadow-md",
        "hover:bg-indigo-50 hover:-translate-y-1 transition ease-in-out",
        "w-[220px] h-[330px] sm:w-[240px] sm:h-[355px]",
        "md:w-[260px] md:h-[380px] lg:w-[280px] lg:h-[400px]",
        "p-6",
        snap ? "snap-center" : "",
      ].join(" ")}
    >
      <div className="flex flex-col items-center h-full gap-4">
        <div className="relative flex items-center justify-center flex-1">
          {!prefersReducedMotion && (
            <motion.span
              aria-hidden="true"
              className="absolute w-28 h-28 rounded-full bg-gradient-to-tr from-indigo-300 to-indigo-100 filter blur-xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          )}

          <motion.img
            src={it.img}
            alt=""
            className="relative mx-auto max-h-[110px] md:max-h-[120px] object-contain will-change-transform"
            animate={zoomAnim}
            whileHover={{ scale: prefersReducedMotion ? 1 : 1.1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            draggable={false}
          />
        </div>

        <h4 className="text-indigo-900 text-lg font-semibold text-center mt-2">
          {it.text}
        </h4>
      </div>
    </motion.li>
  );
}
