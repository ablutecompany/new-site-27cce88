import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Layout } from "@/components/layout";
import { useMode } from "@/context/mode-context";
import { useLanguage } from "@/context/language-context";
import { useRef, useEffect } from "react";
import HealthMode from "./health-mode";

export default function Home() {
  const { mode } = useMode();
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
    layoutEffect: false,
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const START_OFFSET = 0.1;
    const END_OFFSET   = 0.6;

    let rafId: number;
    let targetTime   = 0;
    let displayTime  = 0;
    let running      = true;

    const unsubscribe = scrollYProgress.on("change", (p) => {
      const mapped = START_OFFSET + p * (END_OFFSET - START_OFFSET);
      targetTime = mapped * (video.duration || 0);
    });

    const tick = () => {
      if (!running) return;
      if (video.duration) {
        const diff = targetTime - displayTime;
        displayTime += diff * 0.1;
        if (Math.abs(diff) > 0.0005) {
          video.currentTime = displayTime;
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      unsubscribe();
    };
  }, [scrollYProgress]);

  return (
    <Layout>
      <AnimatePresence mode="wait">
        {mode === "bathroom" ? (
          <motion.div
            key="bathroom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Scroll Container — 300vh gives room to scrub the video */}
            <div ref={containerRef} className="relative h-[300vh]">

              {/* Sticky viewport — stays pinned while user scrolls */}
              <div
                className="sticky top-0 h-screen w-full overflow-hidden"
                style={{
                  background:
                    "radial-gradient(ellipse at 18% 55%, #1d2024 0%, transparent 55%)," +
                    "radial-gradient(ellipse at 75% 15%, #16191c 0%, transparent 45%)," +
                    "radial-gradient(ellipse at 60% 85%, #141618 0%, transparent 40%)," +
                    "linear-gradient(170deg, #141618 0%, #0e1012 35%, #0b0d0f 65%, #10120f 100%)",
                }}
              >

                {/* ── Video ── mirrored, shifted right ~20vw, right edge clips off-screen */}
                <video
                  ref={videoRef}
                  src="/videos/ablute_opening.mp4"
                  muted
                  playsInline
                  preload="auto"
                  className="absolute top-0 right-0 h-full object-cover"
                  style={{
                    width: "72%",
                    opacity: 0.82,
                    filter: "brightness(1.15) contrast(1.05)",
                    transform: "scaleX(-1) translateX(-28%)",
                  }}
                />

                {/* ── Gradient overlays ── */}

                {/* Strong left fade: video bleeds into dark background */}
                <div
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    background:
                      "linear-gradient(to right, #0e1012 0%, #0e1012 28%, rgba(14,16,18,0.85) 42%, rgba(14,16,18,0.4) 58%, transparent 78%)",
                  }}
                />

                {/* Top vignette */}
                <div
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    background:
                      "linear-gradient(to bottom, #0e1012 0%, rgba(14,16,18,0.6) 8%, transparent 22%)",
                  }}
                />

                {/* Bottom vignette */}
                <div
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    background:
                      "linear-gradient(to top, #0e1012 0%, rgba(14,16,18,0.7) 10%, transparent 28%)",
                  }}
                />

                {/* Subtle radial depth — centre darkening for cinematic feel */}
                <div
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    background:
                      "radial-gradient(ellipse at 80% 50%, transparent 30%, rgba(10,12,14,0.35) 100%)",
                  }}
                />

                {/* ── Hero content ── */}
                <div
                  className="absolute inset-0 z-20 flex flex-col items-start justify-center text-left px-4 md:px-20"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <div className="max-w-3xl space-y-8">

                    {/* Eyebrow */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[11px] tracking-[0.22em] font-medium uppercase text-white/40"
                    >
                      {t.hero.eyebrow}
                    </motion.p>

                    <div className="space-y-7">
                      {/* H1 */}
                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 }}
                        className="text-[clamp(3.2rem,8vw,6.5rem)] font-extralight tracking-[-0.025em] leading-[0.92] text-white"
                      >
                        {t.hero.line1}<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200">
                          {t.hero.line2}
                        </span>
                        {t.hero.line3 && <><br />{t.hero.line3}</>}
                      </motion.h1>

                      {/* Sub-lines */}
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="flex flex-col gap-1.5 text-lg md:text-xl text-white/55 font-light"
                      >
                        {t.hero.sub1 && <p>{t.hero.sub1}</p>}
                        {t.hero.sub2 && <p>{t.hero.sub2}</p>}
                        {t.hero.sub3 && <p>{t.hero.sub3}</p>}
                      </motion.div>
                    </div>

                    {/* Feature bullets */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-10 text-left"
                    >
                      {[t.hero.feat1, t.hero.feat2, t.hero.feat3, t.hero.feat4]
                        .filter(Boolean)
                        .map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-3 text-base text-white/50 font-light tracking-wide"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 shrink-0" />
                            {feature}
                          </div>
                        ))}
                    </motion.div>

                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="health"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <HealthMode />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
