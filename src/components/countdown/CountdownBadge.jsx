import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import useCountdown from "./useCountdown.js";
import { HiOutlineClock } from "react-icons/hi";

/* ------------------------------------------------------------- */
/* CHIP: modern card with smooth fade + scale animation           */
/* ------------------------------------------------------------- */
function ChipFadeScale({ value, unit, size = "default" }) {
  const display = String(value).padStart(2, "0"); // always 2 digits
  const isCompact = size === "compact";

  const padX = isCompact ? "px-2" : "px-4";
  const padY = isCompact ? "py-1" : "py-2";
  const text = isCompact ? "text-sm" : "text-lg";

  return (
    <AnimatePresence initial={false} mode="popLayout">
      <motion.div
        key={`${unit}:${display}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className={`inline-flex flex-col items-center justify-center rounded-xl border border-indigo-400 bg-indigo-50 shadow-md ${padX} ${padY} select-none`}
        aria-live="polite"
        aria-atomic="true"
      >
        <span className={`${text} font-extrabold text-indigo-700 tabular-nums`}>{display}</span>
        <span className="text-xs font-semibold text-indigo-500">{unit}</span>
      </motion.div>
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------- */
/* COUNTDOWN BADGE: clean & bright style, small rounded shadow   */
/* ------------------------------------------------------------- */
export default function CountdownBadge({ size = "default", className = "" }) {
  // Set initial countdown for 1 day 11h 24m 11s (adjust as needed)
  const INITIAL_MS = (1 * 24 * 60 * 60 + 11 * 60 * 60 + 24 * 60 + 11) * 1000;
  const { d, h, m, s } = useCountdown(INITIAL_MS);

  const isCompact = size === "compact";
  const gap = isCompact ? "gap-2" : "gap-4";
  const badgePad = isCompact ? "p-3" : "p-5";
  const labelText = isCompact ? "text-sm" : "text-base";

  return (
    <div
      className={`inline-flex items-center rounded-2xl bg-white shadow-lg ring-2 ring-indigo-300 ${badgePad} ${gap} ${className}`}
      role="region"
      aria-label="Limited-time eligibility countdown"
    >
      <HiOutlineClock className="text-indigo-500 mr-3" aria-hidden="true" />
      <span className={`font-semibold text-indigo-700 ${labelText} whitespace-nowrap`}>
        Eligibility offer ends in:
      </span>
      <div className={`flex ${gap} ml-4`}>
        <ChipFadeScale value={d} unit="Days" size={size} />
        <ChipFadeScale value={h} unit="Hours" size={size} />
        <ChipFadeScale value={m} unit="Minutes" size={size} />
        <ChipFadeScale value={s} unit="Seconds" size={size} />
      </div>
    </div>
  );
}
