import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";

const START_DATE = new Date("2023-01-02T00:00:00Z");
const USES_PER_DAY = 2000;
const CONVENTIONAL_L = 6;
const ABLUTE_L = 0.5;
const SAVING_PER_USE = CONVENTIONAL_L - ABLUTE_L;

const LITRES_PER_SECOND = (USES_PER_DAY * SAVING_PER_USE) / 86400;

function calcLitres(atMs?: number): number {
  const ms = atMs ?? Date.now();
  const seconds = (ms - START_DATE.getTime()) / 1000;
  return seconds * LITRES_PER_SECOND;
}

function formatLitres(n: number): string {
  return Math.floor(n).toLocaleString("pt-PT").replace(",", " ").replace(".", " ");
}

function useAnimatedCounter(active: boolean) {
  const [value, setValue] = useState(calcLitres());
  const rafRef = useRef<number | null>(null);
  const phaseRef = useRef<"countdown" | "live">("countdown");
  const animStartRef = useRef<number | null>(null);
  const animDuration = 2600;

  useEffect(() => {
    if (!active) return;

    const target = calcLitres();
    phaseRef.current = "countdown";
    animStartRef.current = null;

    function tick(now: number) {
      if (phaseRef.current === "countdown") {
        if (animStartRef.current === null) animStartRef.current = now;
        const elapsed = now - animStartRef.current;
        const t = Math.min(elapsed / animDuration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(eased * target);

        if (t < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          phaseRef.current = "live";
          rafRef.current = requestAnimationFrame(tick);
        }
      } else {
        setValue(calcLitres());
        rafRef.current = requestAnimationFrame(tick);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [active]);

  return value;
}

function FlowLine({ delay = 0, top = "50%", opacity = 0.07 }: { delay?: number; top?: string; opacity?: number }) {
  return (
    <motion.div
      className="absolute left-0 h-px w-full pointer-events-none"
      style={{ top, background: "linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.6) 40%, rgba(56,189,248,0.6) 60%, transparent 100%)", opacity }}
      animate={{ x: ["-100%", "100%"] }}
      transition={{ duration: 7, delay, repeat: Infinity, ease: "linear" }}
    />
  );
}

export function WaterImpactBlock() {
  const { t } = useLanguage();
  const wi = t.waterImpact;
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const liveActive = inView && !shouldReduceMotion;
  const animatedValue = useAnimatedCounter(liveActive);
  const displayValue = shouldReduceMotion ? calcLitres() : animatedValue;

  const convBarPct = 100;
  const abluteBarPct = Math.round((ABLUTE_L / CONVENTIONAL_L) * 100);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ background: "#060809" }}
      data-testid="section-water-impact"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "60vw", height: "40vw", maxWidth: 800, maxHeight: 520,
            background: "radial-gradient(ellipse, rgba(14,60,95,0.38) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {!shouldReduceMotion && (
        <>
          <FlowLine top="20%" delay={0} opacity={0.06} />
          <FlowLine top="50%" delay={2.5} opacity={0.09} />
          <FlowLine top="80%" delay={4.8} opacity={0.05} />
        </>
      )}

      <div className="relative max-w-5xl mx-auto px-6 md:px-14 py-20 md:py-28">

        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[10px] font-semibold tracking-[0.28em] uppercase text-cyan-400/60 mb-5"
          data-testid="text-water-eyebrow"
        >
          {wi.eyebrow}
        </motion.p>

        <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-20">

          <div className="flex-1 min-w-0">
            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
              className="text-white/40 text-sm font-light mb-2 tracking-wide"
            >
              {wi.title}
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-baseline gap-3 flex-wrap"
              data-testid="counter-water-litres"
            >
              <span
                className="font-bold tabular-nums leading-none text-white"
                style={{
                  fontSize: "clamp(3rem, 10vw, 6.5rem)",
                  fontFamily: "Inter, sans-serif",
                  letterSpacing: "-0.03em",
                  textShadow: "0 0 60px rgba(56,189,248,0.18)",
                }}
              >
                {formatLitres(displayValue)}
              </span>
              <span
                className="text-cyan-400 font-semibold"
                style={{ fontSize: "clamp(1.4rem, 4vw, 2.8rem)", letterSpacing: "-0.02em" }}
              >
                L
              </span>
            </motion.div>

            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-white/32 text-sm font-light mt-3 tracking-wide"
            >
              {wi.subtitle} · <span className="text-white/20 text-xs">{wi.since}</span>
            </motion.p>
          </div>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="w-full lg:w-64 shrink-0"
          >
            <div className="space-y-5">

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] text-white/38 tracking-wide font-light">{wi.conventional}</span>
                  <span className="text-[13px] font-semibold text-white/50 tabular-nums">{CONVENTIONAL_L} L <span className="text-[10px] font-light text-white/28">{wi.perUse}</span></span>
                </div>
                <div className="h-1.5 rounded-full bg-white/6 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "rgba(255,255,255,0.18)", width: `${convBarPct}%` }}
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] text-cyan-400/70 tracking-wide font-medium">ablute_</span>
                  <span className="text-[13px] font-semibold text-cyan-400 tabular-nums">{ABLUTE_L} L <span className="text-[10px] font-light text-cyan-400/50">{wi.perUse}</span></span>
                </div>
                <div className="h-1.5 rounded-full bg-white/6 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg, rgba(56,189,248,0.8) 0%, rgba(56,189,248,0.5) 100%)", width: `${abluteBarPct}%` }}
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>

              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 6 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="flex items-center gap-2 pt-1"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 shrink-0" />
                <span className="text-[11px] text-cyan-400/60 font-light tracking-wide">
                  −{Math.round(((CONVENTIONAL_L - ABLUTE_L) / CONVENTIONAL_L) * 100)}% {t.dir === "rtl" ? "استهلاك المياه" : "water consumption"}
                </span>
              </motion.div>

            </div>
          </motion.div>
        </div>

        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-[10px] text-white/18 font-light tracking-wide mt-10 max-w-xl leading-relaxed"
          data-testid="text-water-note"
        >
          {wi.note}
        </motion.p>

      </div>

      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />

    </section>
  );
}
