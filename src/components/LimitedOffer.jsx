import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import useCountdown from "./countdown/useCountdown.js";
import { HiCheckCircle, HiOutlineClock } from "react-icons/hi";

const two = (n) => String(n).padStart(2, "0");

function FlipTile({ value, label }) {
  const display = two(value);

  return (
    <div className="relative" style={{ perspective: "1000px" }} aria-live="polite">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={display}
          initial={{ rotateX: -180, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: 180, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
          style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
          className="
            relative overflow-hidden rounded-3xl border
            bg-gradient-to-b from-white via-indigo-50 to-indigo-100
            border-indigo-300
            shadow-lg
            px-4 py-3 sm:px-6 sm:py-5
            text-center
          "
        >
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute -top-12 left-0 w-full h-1/2 bg-gradient-to-r from-white/80 via-white/30 to-transparent"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.5 }}
            style={{ backfaceVisibility: "hidden" }}
          />
          <div
            className="
              relative z-10 font-extrabold tabular-nums leading-none tracking-tight
              text-indigo-700 text-[clamp(1.2rem,6vw,2rem)] sm:text-[clamp(1.6rem,5vw,2.7rem)]
              min-w-[2ch]
            "
          >
            {display}
          </div>
          <div
            className="
              relative z-10 mt-1 text-xs font-semibold uppercase tracking-wide
              text-indigo-600 sm:text-sm
            "
          >
            {label}
          </div>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-indigo-300/40"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function LimitedOffer() {
  const ONE_DAY_MS = 24 * 60 * 60 * 1000;
  const { d, h, m, s } = useCountdown(ONE_DAY_MS);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 border-y bg-gradient-to-b from-indigo-50 via-indigo-100 to-indigo-200 text-indigo-900">
      {/* subtle background shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-80px] w-48 h-48 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.18),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-90px] left-[-60px] w-56 h-56 rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.15),transparent_60%)]"
      />

      <div className="container-narrow grid gap-10 md:grid-cols-[1.3fr_1fr]">
        {/* Timer first on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="order-1 md:order-2 card p-6 sm:p-8 rounded-3xl bg-white shadow-lg text-center"
        >
          <div className="font-bold text-indigo-900 mb-4 text-lg sm:text-xl">
            Time left to take the quiz:
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 justify-center">
            <FlipTile value={d} label="Days" />
            <FlipTile value={h} label="Hours" />
            <FlipTile value={m} label="Minutes" />
            <FlipTile value={s} label="Seconds" />
          </div>

          <div className="text-sm sm:text-base mt-8 text-indigo-700 leading-relaxed max-w-md mx-auto">
            Complete this short quiz within the limited window to discover programs tailored for you. Your future starts now!
          </div>
        </motion.div>

        {/* Copy second on mobile */}
        <div className="order-2 md:order-1 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-300 bg-indigo-100 px-4 py-1.5 uppercase font-bold text-indigo-700 text-xs tracking-wide w-max shadow-sm">
            <HiOutlineClock className="w-5 h-5 shrink-0" aria-hidden="true" />
            Limited window
          </div>

          <h2 className="mt-4 sm:mt-5 font-extrabold text-3xl sm:text-4xl text-indigo-900 leading-tight">
            ⏳ Limited-Time Access — Take the Quiz Before It Closes
          </h2>

          <p className="mt-3 text-indigo-800">
            The school matching opportunities aren’t available forever. This quiz window is limited and{" "}
            <strong>may close without prior notice</strong>. Act quickly to find the educational path that suits you best.
          </p>

          <ul className="mt-6 space-y-3 text-indigo-900 text-base font-semibold">
            {[
              "Discover programs that fit your lifestyle.",
              "Get matched with top schools — no obligations.",
              "100% confidential and free to take.",
            ].map((line, i) => (
              <li key={i} className="flex items-center gap-3">
                <HiCheckCircle className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                <span>{line}</span>
              </li>
            ))}
          </ul>

         <a
  href="#school-quiz"
  onClick={(e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
  className="mt-8 inline-block rounded-full bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 px-8 py-3 font-bold uppercase text-white text-lg shadow-lg hover:shadow-xl transition"
  aria-label="Take the School Match Quiz Now"
>
  Take the Quiz Now
</a>

        </div>
      </div>
    </section>
  );
}
