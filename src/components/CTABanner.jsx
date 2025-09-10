import React from "react";
import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { FaBookOpen, FaGraduationCap } from "react-icons/fa";

const badgeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: "spring", stiffness: 80, damping: 12 },
  }),
};

const buttonVariants = {
  initial: { scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)" },
  hover: {
    scale: 1.05,
    boxShadow: "0 8px 20px rgba(255,255,255,0.3)",
    transition: { duration: 0.3, yoyo: Infinity },
  },
  tap: { scale: 0.95 },
};

export default function CTABanner() {
  return (
    <section
      className="
        relative overflow-hidden border-y
        bg-gradient-to-br
        from-blue-700
        via-teal-500
        to-green-400
        text-white
        before:absolute before:-top-20 before:-left-20 before:w-96 before:h-96 before:rounded-full before:bg-white/10 before:blur-3xl before:animate-float-slow
        after:absolute after:-bottom-20 after:-right-20 after:w-80 after:h-80 after:rounded-full after:bg-white/20 after:blur-2xl after:animate-float
      "
      aria-labelledby="cta-title"
    >
      <div className="container-narrow relative py-20 sm:py-24 md:py-28 text-center">
        <motion.h2
          id="cta-title"
          className="font-extrabold tracking-tight text-[clamp(1.75rem,5vw,3rem)] drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Find Your Perfect School Match Today.
        </motion.h2>

        <motion.p
          className="mt-5 max-w-xl mx-auto text-white/90 text-[clamp(1rem,2vw,1.125rem)] leading-relaxed drop-shadow-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        >
          Get matched with programs that fit your schedule and goals. Fast, easy, confidential.
        </motion.p>

        <motion.a
          href="#school-quiz"
           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="
            mt-12 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500
            px-12 py-4 font-semibold text-white shadow-lg shadow-pink-400/40 cursor-pointer select-none
            focus:outline-none focus:ring-4 focus:ring-pink-400/50 focus:ring-offset-2 focus:ring-offset-blue-700 hover:brightness-110"
          aria-label="Start your school match quiz now"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <span className="mr-3 text-xl">🎓</span> Get Matched Now
        </motion.a>

        {/* Trust badges */}
        <motion.div
          className="mt-10 flex justify-center flex-wrap gap-6 text-sm sm:text-base"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
        >
          {[
            { icon: <HiOutlineAcademicCap className="w-6 h-6" />, text: "Personalized Matches" },
            { icon: <FaBookOpen className="w-6 h-6" />, text: "100% Confidential" },
            { icon: <FaGraduationCap className="w-6 h-6" />, text: "No Upfront Fees" },
          ].map((badge, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={badgeVariants}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 border border-white/20 backdrop-blur-lg shadow-lg text-white/90"
            >
              {badge.icon}
              {badge.text}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
