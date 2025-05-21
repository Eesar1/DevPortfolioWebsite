import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Projects from "@/pages/projects";
import { queryClient } from "./lib/queryClient";

function Router() {
  const [location] = useLocation();
  
  return (
    <AnimatePresence mode="sync">
      <Switch location={location} key={location}>
        <Route path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-slate-900 dark:text-white transition-colors">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
