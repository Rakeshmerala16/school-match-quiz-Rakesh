import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MultiStepForm from "./form/SchoolMatchQuiz.jsx";

export default function Hero() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // subtle vertical parallax for headline & subtext
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden text-white bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-900"
    >
      {/* Vignette & subtle texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(0,0,0,0.45),transparent_70%)] pointer-events-none" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:18px_18px] mix-blend-overlay pointer-events-none"
        aria-hidden="true"
      />

      {/* Scrim for better text contrast on small screens */}
      <div className="absolute inset-y-0 left-0 right-0 md:right-1/2 bg-gradient-to-r from-black/60 via-black/30 to-transparent pointer-events-none" />

      {/* Main content grid */}
      <div className="relative container-narrow min-h-screen py-16 md:py-24 flex items-center">
        <div className="grid md:grid-cols-[1fr_minmax(480px,600px)] items-center gap-10 w-full">

          {/* Left: Headline & text */}
          <div>
            <motion.h1
              style={{ y: y1 }}
              className="font-extrabold tracking-tight leading-[1.05] text-[clamp(2.5rem,7vw,4rem)] drop-shadow-md"
            >
              <span className="relative inline-block text-white">
                <span className="relative z-10">
                  FIND YOUR{" "}
                  <span
                    className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 drop-shadow-lg"
                    style={{ filter: "drop-shadow(0 0 6px rgba(16,185,129,0.6))" }}
                  >
                    SCHOOL MATCH IN 60 SECONDS
                  </span>
                </span>
                {/* Subtle animated sheen */}
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 z-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)]"
                  initial={{ x: "-130%" }}
                  animate={{ x: "130%" }}
                  transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 2 }}
                  style={{ mixBlendMode: "screen", transform: "skewX(-18deg)" }}
                />
              </span>

              {/* Underline bar */}
              <motion.span
                aria-hidden="true"
                className="mt-4 block h-1 w-[min(420px,70%)] rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-[length:200%_100%]"
                initial={{ backgroundPositionX: "0%" }}
                animate={{ backgroundPositionX: "100%" }}
                transition={{ duration: 600, repeat: Infinity, ease: "linear" }}
              />
            </motion.h1>

            <motion.div style={{ y: y2 }} className="mt-7 max-w-md prose prose-indigo text-white/90 drop-shadow-lg">

            <p className="text-lg leading-relaxed">
                Cut through the noise. In <b>2 minutes</b>, Find the Programs, Formats and Timelines that fit your life and budget.
              </p>

              <ul className="flex flex-wrap gap-4 justify-start py-6">
                <li className="rounded-full bg-black/25 backdrop-blur px-4 py-2 font-semibold shadow-lg">
                  🔒 100% Confidential
                </li>
                <li className="rounded-full bg-black/25 backdrop-blur px-4 py-2 font-semibold shadow-lg">
                  ✔️ No Upfront Fees
                </li>
              </ul>

              
              
            </motion.div>
          </div>

          

          {/* Right: Form */}
          <div id="quiz" className="relative">
            {/* Soft animated glowing background */}
            <div className="absolute -inset-3 -z-10 rounded-[30px] opacity-50 blur-3xl bg-gradient-to-tr from-teal-400 via-cyan-400 to-emerald-400 animate-pulse" />
            <MultiStepForm />
          </div>
        </div>
      </div>

      {/* Soft dark bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
    </section>
  );
}
