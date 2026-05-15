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

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/product" component={Product} />
      <Route path="/company" component={Company} />
      <Route path="/projects" component={Projects} />
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
