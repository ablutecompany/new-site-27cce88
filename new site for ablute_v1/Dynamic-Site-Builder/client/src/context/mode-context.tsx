import { createContext, useContext, useState, ReactNode } from "react";

type Mode = "bathroom" | "health";
export type HealthTab = "product" | "science" | "forwho" | "areas" | "client";

const ModeContext = createContext<{
  mode: Mode;
  setMode: (mode: Mode) => void;
  healthTab: HealthTab;
  setHealthTab: (tab: HealthTab) => void;
  subNavVisible: boolean;
  setSubNavVisible: (v: boolean) => void;
}>({ mode: "bathroom", setMode: () => {}, healthTab: "product", setHealthTab: () => {}, subNavVisible: true, setSubNavVisible: () => {} });

export const useMode = () => useContext(ModeContext);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>("bathroom");
  const [healthTab, setHealthTab] = useState<HealthTab>("product");
  const [subNavVisible, setSubNavVisible] = useState(true);
  return (
    <ModeContext.Provider value={{ mode, setMode, healthTab, setHealthTab, subNavVisible, setSubNavVisible }}>
      {children}
    </ModeContext.Provider>
  );
}
