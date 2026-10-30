import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Prevent the browser from restoring a previous scroll position on reload —
// every load/refresh should start at the top of the page.
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);

createRoot(document.getElementById("root")!).render(<App />);
