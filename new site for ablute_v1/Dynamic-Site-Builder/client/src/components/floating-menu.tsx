import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Grid3x3, User, Handshake, TrendingUp, Mail, CheckCircle2, ChevronRight, Briefcase, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/context/language-context";

type Overlay = "client" | "partners" | "workwithus" | "investors" | "contacts" | null;
type ClientView = "login" | "error" | "support" | "support-sent";

const inputClass = "w-full px-4 py-3 border border-white/10 rounded-xl text-sm bg-white/5 text-white placeholder-white/30 focus:ring-1 focus:ring-white/30 outline-none";
const inputClassLight = "w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-white text-slate-800 placeholder-slate-400 focus:ring-1 focus:ring-blue-300 outline-none";
const labelClass = "block text-xs text-white/40 font-medium mb-1.5 tracking-wide";
const labelClassLight = "block text-xs text-slate-500 font-medium mb-1.5 tracking-wide";

function OverlayPanel({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 8 }}
        transition={{ duration: 0.22 }}
        onClick={e => e.stopPropagation()}
        className="bg-[#111111] border border-white/10 rounded-3xl shadow-2xl w-full max-w-lg max-h-[88vh] overflow-y-auto"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        <div className="flex justify-between items-center px-8 pt-8 pb-6 border-b border-white/8">
          <h2 className="text-base font-light text-white">{title}</h2>
          <button onClick={onClose} className="text-white/30 hover:text-white/70 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="px-8 py-7">{children}</div>
      </motion.div>
    </motion.div>
  );
}

function ClientArea({ onClose }: { onClose: () => void }) {
  const { t } = useLanguage();
  const [view, setView] = useState<ClientView>("login");
  const [loginForm, setLoginForm] = useState({ nome: "", numero: "" });
  const [supportForm, setSupportForm] = useState({ nome: "", email: "", numero: "", mensagem: "" });

  return (
    <OverlayPanel title={t.float.clientTitle} onClose={onClose}>
      <AnimatePresence mode="wait">
        {view === "login" && (
          <motion.div key="login" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
            <p className="text-sm text-white/40 font-light mb-6">{t.float.clientDesc}</p>
            <div>
              <label className={labelClass}>{t.float.clientNome}</label>
              <input data-testid="input-client-nome" className={inputClass} placeholder={t.float.clientNomePlaceholder} value={loginForm.nome} onChange={e => setLoginForm({ ...loginForm, nome: e.target.value })} />
            </div>
            <div>
              <label className={labelClass}>{t.float.clientNumero}</label>
              <input data-testid="input-client-numero" className={inputClass} placeholder={t.float.clientNumeroPlaceholder} value={loginForm.numero} onChange={e => setLoginForm({ ...loginForm, numero: e.target.value })} />
            </div>
            <button
              data-testid="button-client-entrar"
              onClick={() => setView("error")}
              className="w-full py-3 mt-2 bg-white text-[#111111] rounded-xl text-sm font-medium hover:bg-white/90 transition-all"
            >
              {t.float.clientEnter}
            </button>
          </motion.div>
        )}

        {view === "error" && (
          <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
            <div className="p-5 rounded-2xl border border-red-500/20 bg-red-500/5 space-y-2">
              <p className="text-sm font-light text-white/80">{t.float.clientErrorTitle}</p>
              {t.float.clientErrorDesc.split("\n").map((line, i) => (
                <p key={i} className="text-sm font-light text-white/50">{line}</p>
              ))}
            </div>
            <div className="flex gap-3">
              <button onClick={() => setView("login")} className="flex-1 py-3 border border-white/15 rounded-xl text-sm text-white/50 hover:text-white/80 hover:border-white/30 transition-all font-light">
                {t.float.clientRetry}
              </button>
              <button
                data-testid="button-apoio-tecnico"
                onClick={() => setView("support")}
                className="flex-1 py-3 bg-white text-[#111111] rounded-xl text-sm font-medium hover:bg-white/90 transition-all"
              >
                {t.float.clientErrorCta}
              </button>
            </div>
          </motion.div>
        )}

        {view === "support" && (
          <motion.div key="support" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
            <div>
              <label className={labelClass}>{t.float.clientSupportNome}</label>
              <input className={inputClass} placeholder={t.float.clientNomePlaceholder} value={supportForm.nome} onChange={e => setSupportForm({ ...supportForm, nome: e.target.value })} />
            </div>
            <div>
              <label className={labelClass}>{t.float.clientSupportEmail}</label>
              <input type="email" className={inputClass} placeholder={t.float.contactsEmailPlaceholder} value={supportForm.email} onChange={e => setSupportForm({ ...supportForm, email: e.target.value })} />
            </div>
            <div>
              <label className={labelClass}>{t.float.clientSupportNumero}</label>
              <input className={inputClass} placeholder={t.float.clientNumeroPlaceholder} value={supportForm.numero} onChange={e => setSupportForm({ ...supportForm, numero: e.target.value })} />
            </div>
            <div>
              <label className={labelClass}>{t.float.clientSupportMsg}</label>
              <textarea rows={3} className={inputClass + " resize-none"} placeholder="..." value={supportForm.mensagem} onChange={e => setSupportForm({ ...supportForm, mensagem: e.target.value })} />
            </div>
            <button
              data-testid="button-enviar-apoio"
              onClick={() => setView("support-sent")}
              className="w-full py-3 bg-white text-[#111111] rounded-xl text-sm font-medium hover:bg-white/90 transition-all"
            >
              {t.float.clientSupportSubmit}
            </button>
          </motion.div>
        )}

        {view === "support-sent" && (
          <motion.div key="support-sent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <p className="text-base font-light text-white">{t.float.clientSupportSent}</p>
            <p className="text-sm text-white/40 font-light">{t.float.clientSupportSentDesc}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </OverlayPanel>
  );
}

function Partners({ onClose }: { onClose: () => void }) {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ empresa: "", website: "", pais: "", area: "", mensagem: "" });

  return (
    <OverlayPanel title={t.float.partners} onClose={onClose}>
      {submitted ? (
        <div className="text-center py-8 space-y-4">
          <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
          <p className="text-base font-light text-white">{t.float.investorsSent}</p>
          <p className="text-sm text-white/40 font-light">{t.float.investorsSentDesc}</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-extralight text-white mb-2">{t.float.partnersTitle}</h3>
            <p className="text-sm text-white/40 font-light leading-relaxed">{t.float.partnersIntro}</p>
            <ul className="mt-3 space-y-1.5">
              {[t.float.partnersBullet1, t.float.partnersBullet2, t.float.partnersBullet3, t.float.partnersBullet4].map(i => (
                <li key={i} className="flex items-center gap-2 text-xs text-white/30 font-light">
                  <div className="w-1 h-1 rounded-full bg-cyan-400/50 shrink-0" />{i}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-white/8 pt-5">
            <p className="text-xs text-white/25 uppercase tracking-widest font-medium mb-4">{t.float.partnersCategoriesLabel}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[t.float.partnersCat1, t.float.partnersCat2, t.float.partnersCat3, t.float.partnersCat4, t.float.partnersCat5, t.float.partnersCat6].map(c => (
                <span key={c} className="text-[11px] px-3 py-1 rounded-full border border-white/10 text-white/35">{c}</span>
              ))}
            </div>
            <p className="text-sm font-light text-white mb-5">{t.float.partnersProposeBtn}</p>
            <div className="space-y-3">
              <div>
                <label className={labelClass}>{t.float.partnersEmpresa}</label>
                <input className={inputClass} placeholder={t.float.partnersEmpresaPlaceholder} value={form.empresa} onChange={e => setForm({ ...form, empresa: e.target.value })} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>{t.float.partnersWebsite}</label>
                  <input className={inputClass} placeholder="www.empresa.pt" value={form.website} onChange={e => setForm({ ...form, website: e.target.value })} />
                </div>
                <div>
                  <label className={labelClass}>{t.float.partnersPais}</label>
                  <input className={inputClass} placeholder={t.float.partnersPaisPlaceholder} value={form.pais} onChange={e => setForm({ ...form, pais: e.target.value })} />
                </div>
              </div>
              <div>
                <label className={labelClass}>{t.float.partnersArea}</label>
                <input className={inputClass} placeholder={t.float.partnersAreaPlaceholder} value={form.area} onChange={e => setForm({ ...form, area: e.target.value })} />
              </div>
              <div>
                <label className={labelClass}>{t.float.partnersMensagem}</label>
                <textarea rows={3} className={inputClass + " resize-none"} placeholder={t.float.partnersMensagemPlaceholder} value={form.mensagem} onChange={e => setForm({ ...form, mensagem: e.target.value })} />
              </div>
              <button
                data-testid="button-propor-parceria"
                onClick={() => setSubmitted(true)}
                className="w-full py-3 bg-white text-[#111111] rounded-xl text-sm font-medium hover:bg-white/90 transition-all"
              >
                {t.float.partnersProposeBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </OverlayPanel>
  );
}

const openPositions = [
  { title: "Embedded Systems Engineer", dept: "Hardware", loc: "Lisboa", type: "Full-time" },
  { title: "Product Designer — Industrial", dept: "Design", loc: "Remote / Lisboa", type: "Full-time" },
  { title: "Biomedical Research Scientist", dept: "Science", loc: "Lisboa", type: "Contract" },
];

function WorkWithUs({ onClose }: { onClose: () => void }) {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [applyingTo, setApplyingTo] = useState<string | null>(null);
  const [form, setForm] = useState({ nome: "", email: "", area: "", linkedin: "", mensagem: "" });

  const handleApply = (title: string) => {
    setApplyingTo(title);
    setForm(f => ({ ...f, mensagem: `${t.float.workWithUsApplyingTo} ${title}\n\n` }));
  };

  return (
    <OverlayPanel title={t.float.workWithUsTitle} onClose={onClose}>
      {submitted ? (
        <div className="text-center py-8 space-y-4">
          <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
          <p className="text-base font-light text-white">{t.float.workWithUsSent}</p>
          <p className="text-sm text-white/40 font-light">{t.float.workWithUsSentDesc}</p>
        </div>
      ) : (
        <div className="space-y-6">
          <p className="text-sm text-white/40 font-light leading-relaxed">{t.float.workWithUsIntro}</p>

          {/* Open positions */}
          <div>
            <p className="text-xs text-white/25 uppercase tracking-widest font-medium mb-3">{t.float.workWithUsOpenLabel}</p>
            <div className="space-y-2">
              {openPositions.map((pos) => (
                <div
                  key={pos.title}
                  className="rounded-xl border border-white/8 bg-white/3 p-4 hover:bg-white/6 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1.5">
                      <p className="text-sm font-medium text-white/90">{pos.title}</p>
                      <div className="flex flex-wrap gap-3 text-[11px] text-white/35">
                        <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" />{pos.dept}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{pos.loc}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{pos.type}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleApply(pos.title)}
                      className="shrink-0 text-[11px] px-3 py-1.5 rounded-lg border border-white/15 text-white/50 hover:text-white hover:border-white/30 transition-all whitespace-nowrap"
                    >
                      {t.float.workWithUsApply}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Spontaneous application form */}
          <div className="border-t border-white/8 pt-5 space-y-3">
            <p className="text-sm font-light text-white mb-1">
              {applyingTo ? applyingTo : t.float.workWithUsSpontLabel}
            </p>
            <div>
              <label className={labelClass}>{t.float.workWithUsNome}</label>
              <input className={inputClass} placeholder={t.float.clientNomePlaceholder} value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} />
            </div>
            <div>
              <label className={labelClass}>{t.float.workWithUsEmail}</label>
              <input type="email" className={inputClass} placeholder={t.float.contactsEmailPlaceholder} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            </div>
            {!applyingTo && (
              <div>
                <label className={labelClass}>{t.float.workWithUsArea}</label>
                <select className={inputClass + " bg-[#1a1a1a] cursor-pointer"} value={form.area} onChange={e => setForm({ ...form, area: e.target.value })}>
                  <option value=""></option>
                  <option value="hw">{t.float.workWithUsAreaOpt1}</option>
                  <option value="sw">{t.float.workWithUsAreaOpt2}</option>
                  <option value="design">{t.float.workWithUsAreaOpt3}</option>
                  <option value="health">{t.float.workWithUsAreaOpt4}</option>
                  <option value="biz">{t.float.workWithUsAreaOpt5}</option>
                </select>
              </div>
            )}
            <div>
              <label className={labelClass}>{t.float.workWithUsLinkedin}</label>
              <input className={inputClass} placeholder={t.float.workWithUsLinkedinPlaceholder} value={form.linkedin} onChange={e => setForm({ ...form, linkedin: e.target.value })} />
            </div>
            <div>
              <label className={labelClass}>{t.float.workWithUsMsg}</label>
              <textarea rows={3} className={inputClass + " resize-none"} placeholder={t.float.workWithUsMsgPlaceholder} value={form.mensagem} onChange={e => setForm({ ...form, mensagem: e.target.value })} />
            </div>
            <button
              data-testid="button-workwithus-submit"
              onClick={() => setSubmitted(true)}
              className="w-full py-3 bg-white text-[#111111] rounded-xl text-sm font-medium hover:bg-white/90 transition-all"
            >
              {t.float.workWithUsSubmit}
            </button>
          </div>
        </div>
      )}
    </OverlayPanel>
  );
}

function Investors({ onClose }: { onClose: () => void }) {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ nome: "", empresa: "", email: "", telefone: "", area: "", mensagem: "" });

  return (
    <OverlayPanel title={t.float.investorsTitle} onClose={onClose}>
      {submitted ? (
        <div className="text-center py-8 space-y-4">
          <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
          <p className="text-base font-light text-white">{t.float.investorsSent}</p>
          <p className="text-sm text-white/40 font-light">{t.float.investorsSentDesc}</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-extralight text-white mb-3 leading-snug">{t.float.investorsDesc.split("\n")[0]}<br />{t.float.investorsDesc.split("\n").slice(1).join(" ")}</h3>
            <div className="mt-4 space-y-2">
              {[
                t.float.investorsHighlight1,
                t.float.investorsHighlight2,
                t.float.investorsHighlight3,
                t.float.investorsHighlight4,
              ].map(h => (
                <div key={h} className="flex items-start gap-2.5 p-3 rounded-xl border border-white/8 bg-white/[0.02]">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400/70 shrink-0 mt-1.5" />
                  <span className="text-xs text-white/50 font-light">{h}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-white/8 pt-5 space-y-3">
            <p className="text-sm font-light text-white mb-2">{t.float.investorsSubmit}</p>
            <div>
              <label className={labelClass}>{t.float.investorsNome} <span className="text-red-400/60">*</span></label>
              <input required className={inputClass} placeholder={t.float.investorsNomePlaceholder} value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} />
            </div>
            <div>
              <label className={labelClass}>{t.float.investorsEmpresa}</label>
              <input className={inputClass} placeholder={t.float.investorsEmpresaPlaceholder} value={form.empresa} onChange={e => setForm({ ...form, empresa: e.target.value })} />
            </div>
            <div>
              <label className={labelClass}>{t.float.investorsEmail} <span className="text-red-400/60">*</span></label>
              <input type="email" required className={inputClass} placeholder={t.float.investorsEmailPlaceholder} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <label className={labelClass}>{t.float.investorsTelefone} <span className="text-red-400/60">*</span></label>
              <input type="tel" required className={inputClass} placeholder={t.float.investorsTelefonePlaceholder} value={form.telefone} onChange={e => setForm({ ...form, telefone: e.target.value })} />
            </div>
            <div>
              <label className={labelClass}>{t.float.investorsArea}</label>
              <input className={inputClass} placeholder={t.float.investorsAreaPlaceholder} value={form.area} onChange={e => setForm({ ...form, area: e.target.value })} />
            </div>
            <div>
              <label className={labelClass}>{t.float.investorsMensagem}</label>
              <textarea rows={3} className={inputClass + " resize-none"} placeholder={t.float.investorsMensagemPlaceholder} value={form.mensagem} onChange={e => setForm({ ...form, mensagem: e.target.value })} />
            </div>
            <button
              data-testid="button-investor-brief"
              onClick={() => setSubmitted(true)}
              className="w-full py-3 bg-white text-[#111111] rounded-xl text-sm font-medium hover:bg-white/90 transition-all"
            >
              {t.float.investorsSubmit}
            </button>
          </div>
        </div>
      )}
    </OverlayPanel>
  );
}

function Contacts({ onClose }: { onClose: () => void }) {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ nome: "", email: "", assunto: "", mensagem: "" });

  return (
    <OverlayPanel title={t.float.contactsTitle} onClose={onClose}>
      {submitted ? (
        <div className="text-center py-8 space-y-4">
          <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
          <p className="text-base font-light text-white">{t.float.contactsSent}</p>
          <p className="text-sm text-white/40 font-light">{t.float.contactsSentDesc}</p>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-sm text-white/40 font-light leading-relaxed mb-2">
            {t.float.contactsDesc}
          </p>
          <div>
            <label className={labelClass}>{t.float.contactsNome}</label>
            <input className={inputClass} placeholder={t.float.contactsNomePlaceholder} value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} />
          </div>
          <div>
            <label className={labelClass}>{t.float.contactsEmail}</label>
            <input type="email" className={inputClass} placeholder={t.float.contactsEmailPlaceholder} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
          </div>
          <div>
            <label className={labelClass}>{t.float.contactsAssunto}</label>
            <select className={inputClass + " bg-[#1a1a1a] cursor-pointer"} value={form.assunto} onChange={e => setForm({ ...form, assunto: e.target.value })}>
              <option value="">{t.float.contactsAssuntoPlaceholder}</option>
              <option value="informacao">{t.float.contactsOpt1}</option>
              <option value="parcerias">{t.float.contactsOpt2}</option>
              <option value="investidores">{t.float.contactsOpt3}</option>
              <option value="suporte">{t.float.contactsOpt4}</option>
              <option value="imprensa">{t.float.contactsOpt5}</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>{t.float.contactsMensagem}</label>
            <textarea rows={4} className={inputClass + " resize-none"} placeholder={t.float.contactsMensagemPlaceholder} value={form.mensagem} onChange={e => setForm({ ...form, mensagem: e.target.value })} />
          </div>
          <button
            data-testid="button-enviar-mensagem"
            onClick={() => setSubmitted(true)}
            className="w-full py-3 bg-white text-[#111111] rounded-xl text-sm font-medium hover:bg-white/90 transition-all"
          >
            {t.float.contactsSubmit}
          </button>
        </div>
      )}
    </OverlayPanel>
  );
}

const menuItemIds = [
  { id: "client" as Overlay, icon: User },
  { id: "partners" as Overlay, icon: Handshake },
  { id: "workwithus" as Overlay, icon: Briefcase },
  { id: "investors" as Overlay, icon: TrendingUp },
  { id: "contacts" as Overlay, icon: Mail },
];

export function FloatingMenu() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState<Overlay>(null);
  const menuItemLabels: Record<string, string> = {
    client: t.float.clientTitle,
    partners: t.float.partners,
    workwithus: t.float.workWithUs,
    investors: t.float.investorsTitle,
    contacts: t.float.contactsTitle,
  };

  const openOverlay = (id: Overlay) => {
    setActiveOverlay(id);
    setIsOpen(false);
  };

  const closeOverlay = () => setActiveOverlay(null);

  return (
    <>
      {/* Floating button + panel */}
      <div className="fixed bottom-6 right-6 z-[200] flex flex-col items-end gap-3">

        {/* Menu panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="bg-[#111111] border border-white/12 rounded-2xl shadow-2xl overflow-hidden min-w-[210px]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {menuItemIds.map((item, i) => (
                <button
                  key={item.id}
                  data-testid={`floating-menu-${item.id}`}
                  onClick={() => openOverlay(item.id)}
                  className={`w-full flex items-center gap-3 px-5 py-3.5 text-sm font-light text-white/70 hover:text-white hover:bg-white/5 transition-all text-left ${i > 0 ? "border-t border-white/6" : ""}`}
                >
                  <item.icon className="w-3.5 h-3.5 text-white/30 shrink-0" />
                  {menuItemLabels[item.id!]}
                  <ChevronRight className="w-3 h-3 text-white/20 ml-auto" />
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating toggle button */}
        <button
          data-testid="button-floating-menu"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-2xl transition-all duration-200 active:scale-95 ${
            isOpen
              ? "bg-white text-[#111111] shadow-white/20"
              : "bg-[#111111] text-white border border-white/15 shadow-black/50 hover:bg-[#1e1e1e]"
          }`}
          style={{ boxShadow: isOpen ? "0 4px 24px rgba(255,255,255,0.15)" : "0 4px 24px rgba(0,0,0,0.6)" }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X className="w-4 h-4" />
              </motion.span>
            ) : (
              <motion.span key="grid" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <Grid3x3 className="w-4 h-4" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Overlays */}
      <AnimatePresence>
        {activeOverlay === "client" && <ClientArea onClose={closeOverlay} />}
        {activeOverlay === "partners" && <Partners onClose={closeOverlay} />}
        {activeOverlay === "workwithus" && <WorkWithUs onClose={closeOverlay} />}
        {activeOverlay === "investors" && <Investors onClose={closeOverlay} />}
        {activeOverlay === "contacts" && <Contacts onClose={closeOverlay} />}
      </AnimatePresence>
    </>
  );
}
