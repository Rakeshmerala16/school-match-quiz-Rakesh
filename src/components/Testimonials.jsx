import React from "react";
import { motion, useAnimation } from "framer-motion";
import { HiChevronLeft, HiChevronRight, HiStar } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";

/* -------------------------------------------------------------------------- */
/* DATA - School Match Quiz Testimonials                                      */
/* -------------------------------------------------------------------------- */
const DATA = [
  {
    quote: "I found the perfect program that fits my lifestyle and career goals. The quiz was quick and super helpful!",
    name: "Emily R.",
    place: "Seattle, WA",
  },
  {
    quote: "This quiz made choosing my school so much easier. I was matched with great options that I didn’t know existed.",
    name: "Jason T.",
    place: "Austin, TX",
  },
  {
    quote: "Professional and easy to use. I’m starting classes next month thanks to these personalized matches!",
    name: "Sophia K.",
    place: "Denver, CO",
  },
  {
    quote: "I love that the quiz is confidential and free. It helped me find an online program that works perfectly with my schedule.",
    name: "Carlos M.",
    place: "Miami, FL",
  },
];

/* -------------------------------------------------------------------------- */
/* Responsive visible slides count: sm=1, md=3, lg=4                         */
/* -------------------------------------------------------------------------- */
function useVisibleCount() {
  const get = () => {
    if (typeof window === "undefined") return 1;
    if (window.matchMedia("(min-width:1024px)").matches) return 4;
    if (window.matchMedia("(min-width:768px)").matches) return 3;
    return 1;
  };
  const [count, setCount] = React.useState(get);
  React.useEffect(() => {
    const mqLg = window.matchMedia("(min-width:1024px)");
    const mqMd = window.matchMedia("(min-width:768px)");
    const onChange = () => setCount(get());
    mqLg.addEventListener?.("change", onChange);
    mqMd.addEventListener?.("change", onChange);
    mqLg.addListener?.(onChange);
    mqMd.addListener?.(onChange);
    onChange();
    return () => {
      mqLg.removeEventListener?.("change", onChange);
      mqMd.removeEventListener?.("change", onChange);
      mqLg.removeListener?.(onChange);
      mqMd.removeListener?.(onChange);
    };
  }, []);
  return count;
}

/* -------------------------------------------------------------------------- */
/* Testimonial Card with soft hover shadow and modern typography              */
/* -------------------------------------------------------------------------- */
function Card({ quote, name, place }) {
  return (
    <div
      className="
        group relative overflow-hidden rounded-3xl border border-indigo-200 bg-white shadow-md
        hover:shadow-xl transition-shadow duration-300
        p-6 w-[clamp(240px,88vw,280px)] h-[380px] flex flex-col
      "
    >
      <p className="mt-1 text-indigo-800 italic leading-relaxed select-none">“{quote}”</p>
      <div className="mt-auto pt-6">
        <div className="flex items-center gap-2 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <AiFillStar key={i} className="w-5 h-5 drop-shadow" />
          ))}
        </div>
        <div className="mt-3">
          <h4 className="font-extrabold text-indigo-900 text-lg">{name}</h4>
          {place && <span className="text-sm text-indigo-500">{place}</span>}
        </div>
      </div>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-[radial-gradient(closest-side,rgba(79,70,229,0.15),transparent)] blur-3xl"
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Testimonials slider with smooth infinite scroll and controls              */
/* -------------------------------------------------------------------------- */
export default function Testimonials() {
  const visibleCount = useVisibleCount(); // 1 | 3 | 4

  const probeRef = React.useRef(null);
  const [cardW, setCardW] = React.useState(280);
  const GAP = 16;

  React.useEffect(() => {
    const el = probeRef.current;
    if (!el) return;
    const update = () => setCardW(el.getBoundingClientRect().width);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [visibleCount]);

  const BASE = DATA.length;
  const EXT = [...DATA, ...DATA, ...DATA]; // tripled for infinite scroll effect
  const stepPx = cardW + GAP;
  const fullSetPx = BASE * stepPx;

  const controls = useAnimation();
  const [offset, setOffset] = React.useState(fullSetPx);
  const DEFAULT_DIR = 1; // scroll left
  const [paused, setPaused] = React.useState(false);
  const pauseRef = React.useRef(null);

  React.useEffect(() => {
    setOffset((o) => {
      let normalized = ((o % fullSetPx) + fullSetPx) % fullSetPx;
      return normalized + fullSetPx;
    });
    controls.set({ x: -offset });
  }, [fullSetPx]);

  const animateStep = React.useCallback(
    async (direction) => {
      let next = offset + direction * stepPx;

      await controls.start({
        x: -next,
        transition: { duration: 0.48, ease: [0.22, 0.61, 0.36, 1] },
      });

      let committed = next;
      if (committed >= 2 * fullSetPx) {
        committed -= fullSetPx;
        await controls.set({ x: -committed });
      } else if (committed < 0) {
        committed += fullSetPx;
        await controls.set({ x: -committed });
      }
      setOffset(committed);
    },
    [controls, offset, stepPx, fullSetPx]
  );

  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => animateStep(DEFAULT_DIR), 1000);
    return () => clearInterval(t);
  }, [animateStep, paused]);

  function stepOnce(direction) {
    setPaused(true);
    if (pauseRef.current) clearTimeout(pauseRef.current);
    animateStep(direction).finally(() => {
      pauseRef.current = setTimeout(() => setPaused(false), 1200);
    });
  }

  const wrapperWidth = visibleCount * stepPx - GAP;

  return (
    <section className="py-16 bg-gradient-to-b from-indigo-50 to-indigo-100">
      <div className="container-narrow">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 bg-indigo-100 border-indigo-300 text-indigo-600 font-bold text-sm tracking-wide uppercase select-none">
            <HiStar className="text-indigo-500 w-5 h-5" />
            Success Stories
          </div>
          <h2 className="mt-3 font-extrabold text-indigo-900 text-[clamp(1.6rem,4.8vw,2.4rem)] leading-tight select-none">
            Real Students, Real Success. See How Our Quiz Made a Difference.
          </h2>
          <p className="mt-2 text-indigo-700 select-none">
            Hear from students who found their perfect program and took the next step with confidence.
          </p>

        </div>

        
        {/* Invisible probe */}
        <div className="sr-only">
          <Card {...DATA[0]} measureRef={probeRef} />
        </div>

        {/* Slider viewport */}
        <div className="mx-auto overflow-hidden rounded-3xl" style={{ width: wrapperWidth }}>
          <motion.ul className="flex gap-4 will-change-transform" animate={controls} initial={{ x: -offset }}>
            {EXT.map((testimonial, i) => (
              <li key={`${testimonial.name}-${i}`} className="shrink-0">
                <Card {...testimonial} />
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Controls */}
        <div
          className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 flex w-full max-w-[calc(240px*4+16px*3)] items-center justify-between"
          style={{ width: wrapperWidth }}
        >
          {/* <button
            aria-label="Previous testimonial"
            onClick={() => stepOnce(1)}
            className="pointer-events-auto grid place-items-center w-12 h-12 rounded-full bg-white border border-indigo-200 shadow hover:scale-110 active:scale-95 transition"
          >
            <HiChevronLeft className="w-7 h-7 text-indigo-700" />
          </button>
          <button
            aria-label="Next testimonial"
            onClick={() => stepOnce(-1)}
            className="pointer-events-auto grid place-items-center w-12 h-12 rounded-full bg-white border border-indigo-200 shadow hover:scale-110 active:scale-95 transition"
          >
            <HiChevronRight className="w-7 h-7 text-indigo-700" />
          </button> */}
        </div>
      </div>
    </section>
  );
}
