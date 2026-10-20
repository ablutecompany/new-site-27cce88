import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, CheckCircle2, ArrowLeft } from "lucide-react";

const INTEREST_TYPES = [
  "Home",
  "Hospitality",
  "Clinic / Health Provider",
  "Wellness",
  "Investor / Partner",
  "Other",
];

const TIMELINES = [
  "Exploring",
  "3–6 months",
  "6–12 months",
  "As soon as available",
];

const UNITS = ["1", "2–5", "5–20", "20+"];

const SETTINGS = [
  "Home",
  "Hotel / Hospitality",
  "Clinic / Health Provider",
  "Wellness",
  "Other",
];

const REASONS = [
  "Water savings",
  "Design",
  "Autonomous cleaning",
  "Health features",
  "Early access",
  "Other",
];

const FOLLOWUP = [
  "Early access updates",
  "Pilot opportunities",
  "Commercial launch updates",
  "Contact from the team",
  "General updates only",
];

const ORG_TYPES = [
  "Hospital / Clinic",
  "Private Practice",
  "Diagnostic Centre",
  "Wellness / Preventive Health",
  "Research Institution",
  "Other",
];

const PILOT_INTERESTS = [
  "Interested in pilot evaluation",
  "Future deployment",
  "Research collaboration",
  "General interest",
];

const VENUE_TYPES = [
  "Boutique Hotel",
  "Hotel Chain",
  "Resort / Spa",
  "Serviced Apartments",
  "Other",
];

const VENUE_SCALES = [
  "Under 20 units",
  "20–50 units",
  "50–150 units",
  "150+",
];

interface Step1Data {
  fullName: string;
  email: string;
  country: string;
  interestType: string;
  intendedTimeline: string;
}

interface Step2Data {
  units: string;
  intendedSetting: string;
  mainReason: string;
  followUpPreference: string;
  notes: string;
  orgType: string;
  pilotInterest: string;
  venueType: string;
  venueScale: string;
}

function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-[11px] font-medium tracking-widest uppercase text-white/43">{label}</label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-sm text-white/80 focus:outline-none focus:border-white/25 focus:bg-white/[0.06] transition-all appearance-none cursor-pointer"
      >
        <option value="" className="bg-[#111]">{placeholder || "Select…"}</option>
        {options.map(o => (
          <option key={o} value={o} className="bg-[#111]">{o}</option>
        ))}
      </select>
    </div>
  );
}

function InputField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-[11px] font-medium tracking-widest uppercase text-white/43">{label}</label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-sm text-white/80 placeholder:text-white/28 focus:outline-none focus:border-white/25 focus:bg-white/[0.06] transition-all"
      />
    </div>
  );
}

export function CreatePostDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [step, setStep] = useState<1 | 2 | "done">(1);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const [s1, setS1] = useState<Step1Data>({
    fullName: "", email: "", country: "", interestType: "", intendedTimeline: "",
  });

  const [s2, setS2] = useState<Step2Data>({
    units: "", intendedSetting: "", mainReason: "", followUpPreference: "", notes: "",
    orgType: "", pilotInterest: "", venueType: "", venueScale: "",
  });

  const s1Valid = s1.fullName.trim() && s1.email.includes("@") && s1.country.trim() && s1.interestType && s1.intendedTimeline;

  function handleClose() {
    onOpenChange(false);
    setTimeout(() => {
      setStep(1);
      setS1({ fullName: "", email: "", country: "", interestType: "", intendedTimeline: "" });
      setS2({ units: "", intendedSetting: "", mainReason: "", followUpPreference: "", notes: "", orgType: "", pilotInterest: "", venueType: "", venueScale: "" });
      setError("");
    }, 400);
  }

  async function handleSubmit() {
    setSubmitting(true);
    setError("");
    try {
      const payload: Record<string, string> = {
        fullName: s1.fullName,
        email: s1.email,
        country: s1.country,
        interestType: s1.interestType,
        intendedTimeline: s1.intendedTimeline,
      };
      if (s2.units) payload.units = s2.units;
      if (s2.intendedSetting) payload.intendedSetting = s2.intendedSetting;
      if (s2.mainReason) payload.mainReason = s2.mainReason;
      if (s2.followUpPreference) payload.followUpPreference = s2.followUpPreference;
      if (s2.notes.trim()) payload.notes = s2.notes.trim();
      if (s2.orgType) payload.orgType = s2.orgType;
      if (s2.pilotInterest) payload.pilotInterest = s2.pilotInterest;
      if (s2.venueType) payload.venueType = s2.venueType;
      if (s2.venueScale) payload.venueScale = s2.venueScale;

      const res = await fetch("/api/waitinglist/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Submission failed");
      setStep("done");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const isClinic = s1.interestType === "Clinic / Health Provider";
  const isHospitality = s1.interestType === "Hospitality";

  if (!open) return null;

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#0d0f11] border border-white/10 rounded-2xl shadow-2xl"
            style={{ scrollbarWidth: "none" }}
          >
            {/* Close */}
            <button
              data-testid="button-waitinglist-close"
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg text-white/38 hover:text-white/70 hover:bg-white/5 transition-all z-10"
            >
              <X className="w-4 h-4" />
            </button>

            <AnimatePresence mode="wait">

              {/* ── STEP 1 ── */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.2 }}
                  className="p-8"
                >
                  <div className="mb-7">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-cyan-400/50 font-medium mb-2">Priority Waiting List</p>
                    <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "Comfortaa, sans-serif" }}>
                      Reserve Your Place
                    </h2>
                    <p className="text-sm text-white/48 leading-relaxed">
                      Be among the first to hear about availability, early access opportunities and launch updates.
                    </p>
                    <p className="mt-2 text-xs text-white/28">No payment required at this stage.</p>
                  </div>

                  {/* Step indicator */}
                  <div className="flex items-center gap-2 mb-7">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center">
                        <span className="text-[10px] text-cyan-400 font-bold">1</span>
                      </div>
                      <span className="text-xs text-white/58">Your details</span>
                    </div>
                    <div className="flex-1 h-px bg-white/8" />
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <span className="text-[10px] text-white/33 font-bold">2</span>
                      </div>
                      <span className="text-xs text-white/28">Optional details</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <InputField
                        label="Full Name"
                        value={s1.fullName}
                        onChange={v => setS1(p => ({ ...p, fullName: v }))}
                        placeholder="Your name"
                      />
                      <InputField
                        label="Email"
                        type="email"
                        value={s1.email}
                        onChange={v => setS1(p => ({ ...p, email: v }))}
                        placeholder="your@email.com"
                      />
                    </div>
                    <InputField
                      label="Country"
                      value={s1.country}
                      onChange={v => setS1(p => ({ ...p, country: v }))}
                      placeholder="Your country"
                    />
                    <SelectField
                      label="Interest Type"
                      value={s1.interestType}
                      onChange={v => setS1(p => ({ ...p, interestType: v }))}
                      options={INTEREST_TYPES}
                      placeholder="What best describes you?"
                    />
                    <SelectField
                      label="Intended Timeline"
                      value={s1.intendedTimeline}
                      onChange={v => setS1(p => ({ ...p, intendedTimeline: v }))}
                      options={TIMELINES}
                      placeholder="When are you thinking?"
                    />
                  </div>

                  <div className="mt-8 flex gap-3">
                    <button
                      data-testid="button-waitinglist-continue"
                      onClick={() => setStep(2)}
                      disabled={!s1Valid}
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm shadow-[0_0_20px_-5px_rgba(6,182,212,0.4)] hover:shadow-[0_0_28px_-5px_rgba(6,182,212,0.65)] transition-all active:scale-[0.98] disabled:opacity-30 disabled:cursor-not-allowed disabled:shadow-none"
                    >
                      Continue
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ── STEP 2 ── */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 12 }}
                  transition={{ duration: 0.2 }}
                  className="p-8"
                >
                  <button
                    onClick={() => setStep(1)}
                    className="flex items-center gap-1.5 text-xs text-white/38 hover:text-white/60 transition-colors mb-6"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Back
                  </button>

                  <div className="mb-7">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-cyan-400/50 font-medium mb-2">Optional</p>
                    <h2 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "Comfortaa, sans-serif" }}>
                      Help us prioritise the right follow-up
                    </h2>
                    <p className="text-sm text-white/43 leading-relaxed">
                      A few extra details help us prioritise early access, pilot discussions and relevant launch communication.
                    </p>
                  </div>

                  {/* Step indicator */}
                  <div className="flex items-center gap-2 mb-7">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="text-xs text-white/38">Your details</span>
                    </div>
                    <div className="flex-1 h-px bg-white/8" />
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center">
                        <span className="text-[10px] text-cyan-400 font-bold">2</span>
                      </div>
                      <span className="text-xs text-white/58">Optional details</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <SelectField
                      label="Number of Units"
                      value={s2.units}
                      onChange={v => setS2(p => ({ ...p, units: v }))}
                      options={UNITS}
                      placeholder="Approx. how many?"
                    />
                    <SelectField
                      label="Intended Setting"
                      value={s2.intendedSetting}
                      onChange={v => setS2(p => ({ ...p, intendedSetting: v }))}
                      options={SETTINGS}
                      placeholder="Where would this be installed?"
                    />
                    <SelectField
                      label="Main Reason for Interest"
                      value={s2.mainReason}
                      onChange={v => setS2(p => ({ ...p, mainReason: v }))}
                      options={REASONS}
                      placeholder="What interests you most?"
                    />
                    <SelectField
                      label="Follow-up Preference"
                      value={s2.followUpPreference}
                      onChange={v => setS2(p => ({ ...p, followUpPreference: v }))}
                      options={FOLLOWUP}
                      placeholder="How can we be useful?"
                    />

                    {/* Conditional: Clinic */}
                    {isClinic && (
                      <>
                        <div className="border-t border-white/6 pt-4">
                          <p className="text-[10px] text-white/33 uppercase tracking-widest mb-4">Clinical context</p>
                          <div className="space-y-4">
                            <SelectField
                              label="Type of Organisation"
                              value={s2.orgType}
                              onChange={v => setS2(p => ({ ...p, orgType: v }))}
                              options={ORG_TYPES}
                              placeholder="Organisation type"
                            />
                            <SelectField
                              label="Interest in Pilot / Evaluation"
                              value={s2.pilotInterest}
                              onChange={v => setS2(p => ({ ...p, pilotInterest: v }))}
                              options={PILOT_INTERESTS}
                              placeholder="What are you looking for?"
                            />
                          </div>
                        </div>
                      </>
                    )}

                    {/* Conditional: Hospitality */}
                    {isHospitality && (
                      <>
                        <div className="border-t border-white/6 pt-4">
                          <p className="text-[10px] text-white/33 uppercase tracking-widest mb-4">Hospitality context</p>
                          <div className="space-y-4">
                            <SelectField
                              label="Type of Venue"
                              value={s2.venueType}
                              onChange={v => setS2(p => ({ ...p, venueType: v }))}
                              options={VENUE_TYPES}
                              placeholder="What kind of property?"
                            />
                            <SelectField
                              label="Potential Scale of Deployment"
                              value={s2.venueScale}
                              onChange={v => setS2(p => ({ ...p, venueScale: v }))}
                              options={VENUE_SCALES}
                              placeholder="Approx. number of rooms/units"
                            />
                          </div>
                        </div>
                      </>
                    )}

                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-medium tracking-widest uppercase text-white/43">Notes (optional)</label>
                      <textarea
                        data-testid="input-waitinglist-notes"
                        rows={3}
                        value={s2.notes}
                        onChange={e => setS2(p => ({ ...p, notes: e.target.value }))}
                        placeholder="Tell us more about your intended use, timeline or interest"
                        className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-sm text-white/80 placeholder:text-white/28 focus:outline-none focus:border-white/25 focus:bg-white/[0.06] transition-all resize-none"
                      />
                    </div>
                  </div>

                  {error && (
                    <p className="mt-4 text-xs text-red-400/80">{error}</p>
                  )}

                  <div className="mt-8 flex gap-3">
                    <button
                      data-testid="button-waitinglist-skip"
                      onClick={handleSubmit}
                      disabled={submitting}
                      className="px-5 py-3.5 rounded-xl border border-white/10 text-white/43 text-sm hover:text-white/63 hover:border-white/20 transition-all disabled:opacity-30"
                    >
                      Skip
                    </button>
                    <button
                      data-testid="button-waitinglist-submit"
                      onClick={handleSubmit}
                      disabled={submitting}
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm shadow-[0_0_20px_-5px_rgba(6,182,212,0.4)] hover:shadow-[0_0_28px_-5px_rgba(6,182,212,0.65)] transition-all active:scale-[0.98] disabled:opacity-30 disabled:cursor-not-allowed disabled:shadow-none"
                    >
                      {submitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending…
                        </span>
                      ) : (
                        <>Complete Reservation</>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ── CONFIRMATION ── */}
              {step === "done" && (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="p-10 flex flex-col items-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.35, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 className="w-7 h-7 text-green-400" />
                  </motion.div>

                  <p className="text-[10px] tracking-[0.2em] uppercase text-cyan-400/50 font-medium mb-3">Confirmed</p>
                  <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "Comfortaa, sans-serif" }}>
                    Your place is reserved
                  </h2>
                  <p className="text-sm text-white/48 leading-relaxed max-w-sm">
                    Thank you. You've joined the ablute_ priority waiting list. We'll use the information you shared to tailor launch communication, early access opportunities and relevant follow-up.
                  </p>
                  {s2.units || s2.notes ? null : (
                    <p className="mt-4 text-xs text-white/30 max-w-xs">
                      More complete submissions help us better prioritise pilots, early adopters and commercial conversations.
                    </p>
                  )}

                  <button
                    data-testid="button-waitinglist-return"
                    onClick={handleClose}
                    className="mt-8 px-8 py-3 rounded-xl border border-white/12 text-white/58 text-sm hover:text-white/75 hover:border-white/22 transition-all"
                  >
                    Return to site
                  </button>
                </motion.div>
              )}

            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
