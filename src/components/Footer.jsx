import React from "react";
import { Link, NavLink } from "react-router-dom";

function LockIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="text-indigo-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-indigo-50 text-indigo-900 mt-20 select-none">
      {/* Top Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-indigo-600 via-teal-400 to-green-400" />

      {/* Disclaimer */}
      <div className="bg-indigo-100 border-t border-indigo-200">
        <div className="container-narrow py-8 text-sm sm:text-base">
          <p className="max-w-3xl mx-auto leading-relaxed">
            <strong className="font-semibold">Disclaimer:</strong> This website is privately owned and not affiliated with governmental agencies. We connect individuals with trusted educational partners to find the best program matches based on individual qualifications. Results may vary. Program availability depends on location.
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-indigo-50 border-t border-indigo-200">
        <div className="container-narrow py-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          {/* Logo and Lock */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Link to="/" title="School Match Quiz" className="inline-flex items-center gap-3">
              <img
                src="./images/icon2.png"
                alt="School Match Quiz"
                className="w-36 md:w-40 h-auto"
                draggable={false}
              />
            </Link>

            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-200 text-indigo-700 font-semibold border border-indigo-300 shadow-md">
              <LockIcon />
              <span>Secure & Confidential</span>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer Navigation">
            <ul className="flex flex-wrap gap-6 text-indigo-700 font-semibold text-sm md:text-base">
              <li>
                <NavLink
                  to="/privacyPolicy"
                  className={({ isActive }) =>
                    isActive ? "underline decoration-indigo-600 underline-offset-4" : "hover:underline hover:decoration-indigo-400"
                  }
                >
                  Privacy Policy
                </NavLink>
              </li>
              <li className="hidden sm:block">•</li>
              <li>
                <NavLink
                  to="/termsOfUse"
                  className={({ isActive }) =>
                    isActive ? "underline decoration-indigo-600 underline-offset-4" : "hover:underline hover:decoration-indigo-400"
                  }
                >
                  Terms of Use
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Copyright */}
          <div className="text-center md:text-right text-indigo-600 text-sm">
            &copy; {year} <span className="font-semibold">schoolmatchquiz.com</span>. All rights reserved.
            <div className="mt-1 md:hidden inline-flex items-center gap-1.5 text-xs font-medium bg-indigo-200 px-3 py-1 rounded-lg border border-indigo-300">
              <LockIcon />
              <span>Secure & Confidential</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-indigo-200 text-center py-4">
          <p className="text-xs text-indigo-600">
            Need help?{" "}
            <a
              href="#school-quiz"
              className="font-semibold text-indigo-700 hover:underline"
              aria-label="Check your eligibility now"
            >
              Check eligibility now
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
