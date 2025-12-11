import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Natal01 from "./pages/Natal01";
import ReceitasPets from "./pages/ReceitasPets";
import SemDoresCorredor from "./pages/SemDoresCorredor";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import FacebookPixel from "./components/FacebookPixel";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <FacebookPixel />
        <Routes>
          <Route path="/natal01" element={<Natal01 />} />
          <Route path="/receitas-natural-pets" element={<ReceitasPets />} />
          <Route path="/sem-dores-corredor" element={<SemDoresCorredor />} />
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;