import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout";
import { useMode } from "@/context/mode-context";
import { useLanguage } from "@/context/language-context";
import { useRef, useEffect } from "react";
import HealthMode from "./health-mode";

export default function Home() {
  const { mode } = useMode();
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Self-driven open/close loop — independent of scroll, so it always plays
  // smoothly instead of lagging behind a fast scroll gesture.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const START_OFFSET = 0.1; // closed
    const OPEN_OFFSET = 0.6; // open
    const OPEN_MS = 2200;
    const HOLD_OPEN_MS = 2600;
    const CLOSE_MS = 1800;
    const HOLD_CLOSED_MS = 1200;

    let rafId = 0;
    let cancelled = false;

    const waitForMetadata = () =>
      new Promise<void>((resolve) => {
        if (video.readyState >= 1 && video.duration) {
          resolve();
        } else {
          video.addEventListener("loadedmetadata", () => resolve(), { once: true });
        }
      });

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animateTime = (from: number, to: number, durationMs: number) =>
      new Promise<void>((resolve) => {
        const start = performance.now();
        const step = (now: number) => {
          if (cancelled) return resolve();
          const t = Math.min(1, (now - start) / durationMs);
          video.currentTime = from + (to - from) * easeOutCubic(t);
          if (t < 1) {
            rafId = requestAnimationFrame(step);
          } else {
            resolve();
          }
        };
        rafId = requestAnimationFrame(step);
      });

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const id = setTimeout(resolve, ms);
        if (cancelled) {
          clearTimeout(id);
          resolve();
        }
      });

    const loop = async () => {
      await waitForMetadata();
      if (cancelled) return;
      const duration = video.duration || 0;
      const startT = START_OFFSET * duration;
      const openT = OPEN_OFFSET * duration;
      video.currentTime = startT;

      while (!cancelled) {
        await animateTime(startT, openT, OPEN_MS);
        if (cancelled) break;
        await wait(HOLD_OPEN_MS);
        if (cancelled) break;
        await animateTime(openT, startT, CLOSE_MS);
        if (cancelled) break;
        await wait(HOLD_CLOSED_MS);
      }
    };

    loop();

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
    };
  }, []);

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
            {/* Hero viewport — the toilet opens/closes on a self-driven loop, not tied to scroll */}
            <div
              className="relative h-screen w-full overflow-hidden"
              style={{
                background:
                  "radial-gradient(ellipse at 18% 55%, #1d2024 0%, transparent 55%)," +
                  "radial-gradient(ellipse at 75% 15%, #16191c 0%, transparent 45%)," +
                  "radial-gradient(ellipse at 60% 85%, #141618 0%, transparent 40%)," +
                  "linear-gradient(170deg, #141618 0%, #0e1012 35%, #0b0d0f 65%, #10120f 100%)",
              }}
            >

              {/* Raises the whole hero (video + overlays + content) slightly within the viewport */}
              <div className="absolute inset-0" style={{ transform: "translateY(-5vh)" }}>

              {/* ── Video ── mirrored, shifted right ~14vw so the toilet sits right of centre, right edge clips off-screen */}
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
                    transform: "scaleX(-1) translateX(-20%)",
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
