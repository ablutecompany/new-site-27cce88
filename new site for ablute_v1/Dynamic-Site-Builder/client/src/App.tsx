import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { ModeProvider } from "@/context/mode-context";
import { LanguageProvider } from "@/context/language-context";

import Home from "./pages/home";
import PostDetail from "./pages/post-detail";
import Product from "./pages/product";
import Company from "./pages/company";
import Projects from "./pages/projects";
import InfoPage from "./pages/info-page";

// Scrolls to the top of the viewport whenever the route changes, so SPA
// navigation (clicking a nav link, etc.) behaves like a normal page load.
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/product" component={Product} />
      <Route path="/company" component={Company} />
      <Route path="/projects" component={Projects} />
      {["", "/en", "/fr", "/de", "/it", "/ar"].flatMap((prefix) =>
        (["about", "technology", "health-faq", "faq"] as const).map((slug) => (
          <Route key={`${prefix}/${slug}`} path={`${prefix}/${slug}`}>{() => <InfoPage slug={slug} />}</Route>
        )),
      )}
      <Route path="/posts/:id" component={PostDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <ModeProvider>
            <ScrollToTop />
            <Router />
          </ModeProvider>
        </LanguageProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
