import { Switch, Route } from "wouter";
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

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/product" component={Product} />
      <Route path="/company" component={Company} />
      <Route path="/projects" component={Projects} />
      <Route path="/about">{() => <InfoPage slug="about" />}</Route>
      <Route path="/technology">{() => <InfoPage slug="technology" />}</Route>
      <Route path="/faq">{() => <InfoPage slug="faq" />}</Route>
      <Route path="/en/about">{() => <InfoPage slug="about" />}</Route>
      <Route path="/en/technology">{() => <InfoPage slug="technology" />}</Route>
      <Route path="/en/faq">{() => <InfoPage slug="faq" />}</Route>
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
            <Router />
          </ModeProvider>
        </LanguageProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
