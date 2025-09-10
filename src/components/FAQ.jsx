import React from "react";
import { motion, AnimatePresence } from "framer-motion";

/* -------------------------------------------------------------------------- */
/* School Match Quiz FAQ Questions & Answers                                  */
/* -------------------------------------------------------------------------- */
const items = [
  {
    q: "What if I’m unsure about my area of study?",
    a: (
      <>
        No worries! You can select "Not sure yet" and explore multiple programs. Our matching will help you discover options suited to your interests.
      </>
    ),
  },
  {
    q: "Can I take classes fully online?",
    a: (
      <>
        Absolutely! Many programs offer 100% online courses to fit your schedule and lifestyle.
      </>
    ),
  },
  {
    q: "When can I start my program?",
    a: (
      <>
        Most schools have flexible start dates — immediately, within a few months, or even later. Pick what fits you best.
      </>
    ),
  },
  {
    q: "Is this quiz confidential?",
    a: (
      <>
        Yes, 100% confidential. Your information is protected and used only to find the best school matches for you.
      </>
    ),
  },
  {
    q: "Are there any upfront costs or fees?",
    a: (
      <>
        No upfront fees. We connect you with schools that fit your budget and timeline.
      </>
    ),
  },
  {
    q: "How do I know this is right for me?",
    a: (
      <>
        Our quiz is designed to cut through confusion and help you find educational programs tailored to your needs and goals.
      </>
    ),
  },
];

/* -------------------------------------------------------------------------- */
/* Animated Chevron Icon for toggling                                         */
/* -------------------------------------------------------------------------- */
function Chevron({ open }) {
  return (
    <motion.svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="flex-shrink-0 text-indigo-600"
      initial={false}
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.25 }}
    >
      <path
        d="M6 9l6 6 6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

/* -------------------------------------------------------------------------- */
/* FAQ Item Component with smooth expand/collapse animation                   */
/* -------------------------------------------------------------------------- */
function Item({ q, a, open, onToggle }) {
  const id = React.useId();
  const contentId = `${id}-content`;
  const buttonId = `${id}-button`;

  return (
    <div className="relative rounded-xl border border-indigo-300 bg-indigo-50 shadow-sm transition-shadow hover:shadow-md">
      {/* Accent bar when open */}
      <motion.span
        aria-hidden="true"
        className="absolute left-0 top-0 w-1 rounded-tr-xl rounded-br-xl bg-indigo-600"
        initial={false}
        animate={{ height: open ? "100%" : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />

      <button
        id={buttonId}
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={contentId}
        className="w-full flex items-center justify-between p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-xl"
      >
        <h3 className="text-indigo-900 font-semibold text-lg">{q}</h3>
        <Chevron open={open} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={contentId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="px-5 pb-5"
          >
            <p className="text-indigo-700 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN FAQ Component                                                         */
/* -------------------------------------------------------------------------- */
export default function FAQ() {
  // Only one FAQ item open at a time
  const [openIndex, setOpenIndex] = React.useState(null);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="py-20 bg-gradient-to-b from-indigo-100 to-indigo-50">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-extrabold text-indigo-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-indigo-700 text-lg">
            Answers to common questions that will help you get started on your educational journey.
          </p>
        </div>

        {/* FAQ Items List */}
        <ul className="space-y-4">
          {items.map((item, idx) => (
            <li key={idx}>
              <Item
                q={item.q}
                a={item.a}
                open={openIndex === idx}
                onToggle={() => toggle(idx)}
              />
            </li>
          ))}
        </ul>

        {/* CTA Button */}
       <div className="mt-12 text-center">
  <a
    href="#school-quiz"
    onClick={(e) => {
      e.preventDefault(); // prevent default anchor jump
      window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll to top
    }}
    className="inline-block rounded-full bg-indigo-600 px-10 py-3 font-semibold text-white hover:bg-indigo-700 transition"
    aria-label="Start the School Match Quiz"
  >
    Start the School Match Quiz
  </a>
</div>

      </div>
    </section>
  );
}
