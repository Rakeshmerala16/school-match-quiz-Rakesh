import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    key: "studyArea",
    title: "Which area of study interests you most?",
    type: "dropdown",
    options: [
      { label: "Healthcare & Nursing", value: "healthcare-nursing" },
      { label: "Business & Management", value: "business-management" },
      { label: "Technology & IT", value: "technology-it" },
      { label: "Education & Teaching", value: "education-teaching" },
      { label: "Criminal Justice", value: "criminal-justice" },
      { label: "Arts & Design", value: "arts-design" },
      { label: "Not sure yet", value: "not-sure" },
    ],
    info: "🎓 Find Your Perfect School Match",
  },
  {
    key: "classFormat",
    title: "How do you prefer to take classes?",
    type: "radio",
    options: [
      { label: "100% Online", value: "100-online" },
      { label: "On-campus", value: "on-campus" },
      { label: "Mix of both", value: "hybrid" },
      { label: "No preference", value: "no-preference" },
    ],
    info: "🏫 Choose the format that fits your lifestyle",
  },
  {
    key: "startTime",
    title: "When would you like to start?",
    type: "radio",
    options: [
      { label: "Immediately", value: "immediately" },
      { label: "Within 3 months", value: "3-months" },
      { label: "Within 6-12 months", value: "6-12-months" },
      { label: "Not sure", value: "not-sure" },
    ],
    info: "⏰ Programs are enrolling now",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Phoenix, AZ",
    quote: "I found the perfect nursing program that fit my schedule. Now I'm working my dream job!",
    program: "Healthcare & Nursing",
  },
  {
    name: "Michael R.",
    location: "Dallas, TX",
    quote: "The online business program was exactly what I needed. Graduated debt-free and got promoted!",
    program: "Business & Management",
  },
  {
    name: "Jennifer L.",
    location: "Miami, FL",
    quote: "Amazing support throughout my IT degree. The career services helped me land a great job.",
    program: "Technology & IT",
  },
];

export default function SchoolMatchQuiz() {
  const [data, setData] = React.useState({});
  const [step, setStep] = React.useState(0);
  const [touchedError, setTouchedError] = React.useState(false);
  const [showResults, setShowResults] = React.useState(false);
  const navigate = useNavigate();

  const total = steps.length;
  const current = steps[step];

  const update = (key, value) => {
    setData((d) => ({ ...d, [key]: value }));
  };

  function validate(s) {
    if (!s) return true;
    return Boolean(data[s.key]);
  }
  const hasError = !validate(current);

  function guardedNext() {
    if (!validate(current)) {
      setTouchedError(true);
      return;
    }
    setTouchedError(false);
    if (step < total - 1) {
      setStep((s) => s + 1);
    } else {
      setShowResults(true);
    }
  }

  function prev() {
    setTouchedError(false);
    setStep((s) => Math.max(s - 1, 0));
  }

  function onOptionChange(k, v) {
    update(k, v);
    setTimeout(() => {
      guardedNext();
    }, 300);
  }

  function redirectToResults() {
    const baseUrl =
      "https://www.onlineedudegrees.com/app?publisher_id=1592#camptpid#&kw=#s1#_#s4#&transaction_id=#reqid#";
    window.open(baseUrl, "_blank");
  }

  const pct = total > 1 ? Math.round((step / (total - 1)) * 100) : 0;

  const stepVariants = {
    initial: { opacity: 0, x: 24 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.35 } },
    exit: { opacity: 0, x: -24, transition: { duration: 0.25 } },
  };

  if (showResults) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-green-600 mb-2">Great news!</h2>
            <p className="text-xl text-slate-700">
              <strong>Programs are available.</strong> Based on your answers, we
              found schools enrolling now.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-24 rounded-lg mb-6 flex items-center justify-center text-white">
            <div className="text-center">
              <div className="text-2xl font-bold">🎓</div>
              <div className="text-sm">Schools Found & Ready to Enroll</div>
            </div>
          </div>

          <button
            onClick={redirectToResults}
            className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors mb-8"
          >
            View My School Matches →
          </button>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Success Stories</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-600 italic mb-2">"{testimonial.quote}"</p>
                  <div className="text-xs text-slate-500">
                    <strong>{testimonial.name}</strong>
                    <br />
                    {testimonial.location}
                    <br />
                    <span className="text-blue-600">{testimonial.program}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-xs text-slate-500 border-t pt-4">
            <h4 className="font-semibold mb-2">Privacy & Terms</h4>
            <p className="mb-2">
              <strong>Privacy Policy:</strong> Your information is secure and confidential. We do
              not sell or share your personal data with unauthorized third parties. Information
              collected is used solely to match you with appropriate educational programs.
            </p>
            <p className="mb-2">
              <strong>Terms of Use:</strong> By using this quiz, you agree to receive information
              about educational programs that match your interests. You may opt out at any time.
              This service is provided free of charge.
            </p>
            <p>
              <strong>Disclosure:</strong> We may receive compensation from educational
              institutions for successful student connections. This does not affect our matching
              algorithm or recommendations.
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Find Your School Match In 60 Seconds</h1>
        <p className="text-slate-600 text-sm">
          Cut through the noise. In 2 minutes, find the programs, formats, and timelines that fit your life and budget. No upfront fees. 100% confidential.
        </p>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-slate-600">
            Step {step + 1} of {total}
          </span>
          <span className="text-sm font-medium text-slate-600">{pct}%</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          variants={stepVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="min-h-[300px]"
        >
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{current.title}</h3>

              {current.type === "dropdown" && (
                <div className="relative">
                  <select
                    value={data[current.key] || ""}
                    onChange={(e) => onOptionChange(current.key, e.target.value)}
                    className="
                      w-full
                      px-4 py-3
                      border border-slate-300
                      rounded-lg appearance-none cursor-pointer
                      bg-white text-black
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      transition
                    "
                    aria-label={current.title}
                  >
                    <option value="" className="text-black bg-white">
                      Select {current.title}
                    </option>
                    {current.options.map((op) => (
                      <option key={op.value} value={op.value} className="text-black bg-white">
                        {op.label}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute top-3 right-3 text-slate-400 select-none">
                    ▼
                  </span>
                  {touchedError && hasError && (
                    <p className="text-red-500 text-sm mt-2">Please select an option to continue.</p>
                  )}
                </div>
              )}

              {current.type === "radio" && (
                <div className="space-y-3">
                  {current.options.map((op) => {
                    const checked = data[current.key] === op.value;
                    return (
                      <label
                        key={op.value}
                        className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all hover:border-blue-300 ${
                          checked ? "border-blue-500 bg-blue-50" : "border-slate-200"
                        }`}
                      >
                        <input
                          type="radio"
                          value={op.value}
                          onChange={() => onOptionChange(current.key, op.value)}
                          checked={checked}
                          readOnly
                          className="sr-only"
                        />
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                checked ? "border-blue-500 bg-blue-500" : "border-slate-300"
                              }`}
                            >
                              {checked && <div className="w-2 h-2 bg-white rounded-full" />}
                            </div>
                            <span className="font-medium text-slate-700">{op.label}</span>
                          </div>
                          <span className="text-blue-500 font-medium">➜</span>
                        </div>
                      </label>
                    );
                  })}
                  {touchedError && hasError && (
                    <p className="text-red-500 text-sm mt-2">Please choose an option to continue.</p>
                  )}
                </div>
              )}

              {current.info && (
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 mt-4">
                  <p className="text-sm text-slate-600">{current.info}</p>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            {step > 0 ? (
              <button
                onClick={prev}
                className="px-4 py-2 text-slate-600 hover:text-slate-800 transition-colors"
              >
                ← Back
              </button>
            ) : (
              <div></div>
            )}

            <button
              onClick={guardedNext}
              disabled={hasError}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
            >
              {step < total - 1 ? "Next →" : "Find My Schools"}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
