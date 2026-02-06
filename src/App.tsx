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
import PascoaLanding from "./components/PascoaLanding"; 
import ShopeeLanding from "./components/ShopeeLanding"; 
import LeisCantadasLanding from "./components/LeisCantadasLanding";
import USChristmasLanding from "./components/USChristmasLanding"; 
import SobremesasLanding from "./components/SobremesasLanding";
import EducacaoKidsLanding from "./components/EducacaoKidsLanding";
import EducacaoKidsV2Landing from "./components/EducacaoKidsV2Landing"; // Novo Import V2
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
          
          <Route path="/pascoa01" element={<PascoaLanding />} />
          <Route path="/shopee01" element={<ShopeeLanding />} />

          <Route path="/leis-cantadas" element={<LeisCantadasLanding />} />
          
          <Route path="/christmas-us" element={<USChristmasLanding />} />

          <Route path="/sobremesas-zero" element={<SobremesasLanding />} />
          
          <Route path="/educacao-kids" element={<EducacaoKidsLanding />} />
          <Route path="/educacao-kids-v2" element={<EducacaoKidsV2Landing />} /> {/* Nova Rota */}

          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;