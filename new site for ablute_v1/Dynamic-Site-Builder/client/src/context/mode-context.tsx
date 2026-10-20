import { createContext, useContext, useState, ReactNode } from "react";

type Mode = "bathroom" | "health";
export type HealthTab = "home" | "product" | "science" | "forwho";

const ModeContext = createContext<{
  mode: Mode;
  setMode: (mode: Mode) => void;
  healthTab: HealthTab;
  setHealthTab: (tab: HealthTab) => void;
  subNavVisible: boolean;
  setSubNavVisible: (v: boolean) => void;
  healthSubTab: string;
  setHealthSubTab: (id: string) => void;
}>({ mode: "bathroom", setMode: () => {}, healthTab: "home", setHealthTab: () => {}, subNavVisible: true, setSubNavVisible: () => {}, healthSubTab: "", setHealthSubTab: () => {} });

export const useMode = () => useContext(ModeContext);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>("bathroom");
  const [healthTab, setHealthTab] = useState<HealthTab>("home");
  const [subNavVisible, setSubNavVisible] = useState(true);
  const [healthSubTab, setHealthSubTab] = useState("");
  return (
    <ModeContext.Provider value={{ mode, setMode, healthTab, setHealthTab, subNavVisible, setSubNavVisible, healthSubTab, setHealthSubTab }}>
      {children}
    </ModeContext.Provider>
  );
}
