import React from "react";
import { Link, NavLink } from "react-router-dom";
import CountdownBadge from "./countdown/CountdownBadge.jsx";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = React.useState(false);

  // Close menu on route/nav click (mobile)
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 shadow-md border-b border-gray-200">
      <div className="container-narrow">
        <div className="flex items-center justify-between gap-3 min-h-[70px] py-3">
          {/* Brand (md+ hover: gentle lift + glow) */}
          <Link
            to="/"
            className="block group relative"
            title="debtprotection.org"
            aria-label="Debt Protection Home"
          >
            <motion.img
  src="./images/icon2.png"
  alt="School Match"
  className="w-[clamp(120px,24vw,142px)] relative z-10"
  whileHover={{ y: -2, scale: 1.04 }}
  transition={{ type: "spring", stiffness: 350, damping: 20 }}
  draggable={false}
/>


            {/* soft glow underline on hover (md+) */}
            <span className="hidden md:block pointer-events-none absolute left-0 right-0 bottom-0 translate-y-3 h-3 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
              <span className="block mx-auto w-3/5 h-full rounded-full blur-md bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400" />
            </span>
          </Link>

          {/* Desktop countdown */}
          <div className="hidden md:block">
            <CountdownBadge />
          </div>

          {/* Mobile menu toggle (animated icon) */}
          <motion.button
            className="md:hidden p-2 rounded-lg border border-gray-300 bg-white shadow-sm active:scale-[0.98]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            whileTap={{ scale: 0.98 }}
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <AnimatePresence initial={false} mode="wait">
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="block"
                >
                  <HiOutlineX className="w-6 h-6 text-gray-800" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="block"
                >
                  <HiOutlineMenu className="w-6 h-6 text-gray-800" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Desktop nav with animated items */}
          <nav className="hidden md:block">
            <ul className="flex gap-2 lg:gap-3">
              <li>
                <AnimatedNavLink to="/privacyPolicy">Privacy Policy</AnimatedNavLink>
              </li>
              <li>
                <AnimatedNavLink to="/termsOfUse">Terms Of Use</AnimatedNavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile floating countdown — stays under the mobile menu panel */}
      <div className="md:hidden fixed left-1/2 top-[72px] -translate-x-1/2 z-[60] pointer-events-auto">
        <CountdownBadge size="compact" />
      </div>

      {/* MOBILE MENU (overlays everything incl. countdown) */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop — STARTS BELOW HEADER to avoid logo/close blur */}
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[75]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Panel */}
            <motion.nav
              className="fixed left-0 right-0 top-[70px] z-[80] bg-white border-b shadow-lg rounded-b-2xl overflow-hidden"
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.24, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <ul className="p-3 space-y-2">
                <li>
                  <MobileItem to="/privacyPolicy" onClick={closeMenu}>
                    Privacy Policy
                  </MobileItem>
                </li>
                <li>
                  <MobileItem to="/termsOfUse" onClick={closeMenu}>
                    Terms Of Use
                  </MobileItem>
                </li>
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

// Desktop nav link with underline sweep + pill hover + lift
function AnimatedNavLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className="group relative block rounded-xl px-3 py-2 font-semibold text-gray-700 hover:text-gray-900"
    >
      {/* pill bg grows on hover */}
      <span
        className="
          absolute inset-0 rounded-xl
          bg-gray-100
          opacity-0 group-hover:opacity-100
          scale-95 group-hover:scale-100
          transition-all duration-200
        "
      />
      <span className="relative z-10">{children}</span>
      {/* gradient underline sweep */}
      <span
        className="
          absolute left-3 right-3 bottom-1 h-[2px]
          origin-left scale-x-0
          bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400
          transition-transform duration-300
          group-[.active]:scale-x-100
          group-hover:scale-x-100
          rounded-full
        "
      />
    </NavLink>
  );
}

// Mobile menu item with gentle tap/hover
function MobileItem({ to, onClick, children }) {
  return (
    <motion.div whileTap={{ scale: 0.985 }}>
      <NavLink
        to={to}
        onClick={onClick}
        className="block rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm active:bg-gray-50"
      >
        <span className="font-semibold text-gray-800">{children}</span>
      </NavLink>
    </motion.div>
  );
}
