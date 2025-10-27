import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import TemplatesGallery from "./pages/TemplatesGallery";
import Template1Page from "./pages/Template1Page";
import Template2Page from "./pages/Template2Page";
import Template3Page from "./pages/Template3Page";
import Template4Page from "./pages/Template4Page";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacidade" element={<PrivacyPolicy />} />
          <Route path="/termos" element={<TermsOfUse />} />
          
          {/* Template Gallery & Individual Templates */}
          <Route path="/templates" element={<TemplatesGallery />} />
          <Route path="/template1" element={<Template1Page />} />
          <Route path="/template2" element={<Template2Page />} />
          <Route path="/template3" element={<Template3Page />} />
          <Route path="/template4" element={<Template4Page />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
