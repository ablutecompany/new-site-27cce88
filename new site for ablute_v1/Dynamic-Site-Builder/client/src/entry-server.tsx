import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";

// Used only at build time by script/prerender.ts to produce static HTML per route.
export function render(url: string): string {
  return renderToString(
    <Router ssrPath={url}>
      <App />
    </Router>,
  );
}
