import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Natal01 from "./pages/Natal01";
import NatalUpsell from "./pages/NatalUpsell";
import NatalDownsell from "./pages/NatalDownsell";
import NatalThankYou from "./pages/NatalThankYou";
import ReceitasPets from "./pages/ReceitasPets";
import SemDoresCorredor from "./pages/SemDoresCorredor";
import PascoaLanding from "./components/PascoaLanding"; // Importado diretamente pois não foi criado em pages/
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/natal01" element={<Natal01 />} />
          <Route path="/natal01-upsell01" element={<NatalUpsell />} />
          <Route path="/natal01-downsell01" element={<NatalDownsell />} />
          
          <Route path="/obgdo-natal-final-2025x26" element={<NatalThankYou />} />
          
          <Route path="/receitas-natural-pets" element={<ReceitasPets />} />
          <Route path="/sem-dores-corredor" element={<SemDoresCorredor />} />
          
          {/* Nova Rota de Páscoa */}
          <Route path="/pascoa01" element={<PascoaLanding />} />

          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;