import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext, useContext } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Create context for managing active section
interface AnimationContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
  triggerAnimation: boolean;
  setTriggerAnimation: (trigger: boolean) => void;
}

export const AnimationContext = createContext<AnimationContextType>({
  activeSection: "home",
  setActiveSection: () => {},
  triggerAnimation: false,
  setTriggerAnimation: () => {},
});

export const useAnimationContext = () => useContext(AnimationContext);

const queryClient = new QueryClient();

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    setTriggerAnimation(prev => !prev); // Toggle to trigger animation
  };

  return (
    <QueryClientProvider client={queryClient}>
      <AnimationContext.Provider 
        value={{ 
          activeSection, 
          setActiveSection, 
          triggerAnimation, 
          setTriggerAnimation 
        }}
      >
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index onSectionChange={handleSectionChange} />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AnimationContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
