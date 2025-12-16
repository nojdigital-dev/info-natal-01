import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ShieldCheck, AlertCircle, Lock, Gift, Star, ArrowDown } from "lucide-react";

const ChristmasUpsell = () => {
  const [showOffer, setShowOffer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes
  const offerRef = useRef<HTMLDivElement>(null);

  // Helper para UTMs
  const applyUtms = (url: string) => {
    try {
        const currentSearchParams = new URLSearchParams(window.location.search);
        const paramsString = currentSearchParams.toString();
        if (!paramsString) return url;
        const separator = url.indexOf("?") === -1 ? "?" : "&";
        return `${url}${separator}${paramsString}`;
    } catch (e) {
        console.error("Erro ao aplicar UTMs:", e);
        return url;
    }
  };

  useEffect(() => {
    // Timer para mostrar oferta (01:38 = 98000ms)
    const timer = setTimeout(() => {
      setShowOffer(true);
    }, 98000);

    // Countdown do topo
    const countdown = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // Segredo: Apertar ENTER para mostrar oferta
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        setShowOffer(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      clearInterval(countdown);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Espere! Oferta Especial de Natal</title>
        <meta name="robots" content="noindex, nofollow" />
        {/* Removido o script do Vimeo */}
      </Helmet>
      
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
        
        {/* Progress Bar */}
        <div className="w-full bg-slate-200 h-2">
          <div className="bg-green-600 h-2 w-[95%] animate-pulse"></div>
        </div>

        {/* Header Alert */}
        <div className="bg-red-600 text-white text-center py-3 px-4 font-bold text-sm md:text-base animate-pulse flex items-center justify-center gap-2 sticky top-0 z-50">
          <AlertCircle size={20} />
          NÃO FECHE ESSA PÁGINA! SEU PEDIDO AINDA NÃO FOI FINALIZADO.
        </div>

        <div className="max-w-4xl mx-auto px-4 pt-8 text-center">
          <h1 className="text-2xl md:text-4xl font-extrabold text-red-700 mb-2 uppercase leading-tight">
            PARABÉNS PELA SUA COMPRA! <br/>
            <span className="text-slate-700 text-lg md:text-2xl normal-case font-bold">Mas falta apenas 1 passo para liberar seus bônus exclusivos...</span>
          </h1>
          
          {!showOffer && (
            <p className="text-slate-500 text-sm mb-6 animate-pulse">
              Assista ao vídeo abaixo para entender (é rapidinho)
            </p>
          )}

          {/* v.turb Embed Container */}
          <div className="relative w-full max-w-[340px] mx-auto rounded-2xl shadow-2xl overflow-hidden mb-6 border-4 border-slate-800 ring-4 ring-slate-200/50">
            <vturb-smartplayer id="vid-6940d14daba852f9cccf8094" style={{display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px'}}></vturb-smartplayer> 
            <script type="text/javascript"> 
              {`var s=document.createElement("script"); s.src="https://scripts.converteai.net/eba76355-5284-4bc9-887e-541862b4eefe/players/6940d14daba852f9cccf8094/v4/player.js", s.async=!0,document.head.appendChild(s);`}
            </script>
          </div>

          {/* Offer Section (Hidden initially) */}
          {showOffer && (
            <div ref={offerRef} className="animate-in fade-in slide-in-from-bottom-10 duration-700">
              
              <div className="flex justify-center mb-2 -mt-4 relative z-10">
                <ArrowDown className="text-red-600 w-12 h-12 animate-bounce drop-shadow-md" strokeWidth={3} />
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-400 text-yellow-900 p-4 rounded-xl max-w-xl mx-auto mb-6 flex flex-col items-center shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>
                <div className="font-bold text-xl mb-1 flex items-center gap-2 text-red-600">
                  <Gift /> CONSEGUIMOS 50% DE DESCONTO!
                </div>
                <div className="text-lg flex flex-col md:flex-row items-center gap-1 md:gap-2">
                  <span>De <span className="line-through text-slate-400">R$ 12,90</span></span>
                  <span className="font-black bg-green-600 text-white px-2 py-0.5 rounded text-xl md:text-xl text-center shadow-sm block w-full md:w-auto mt-1 md:mt-0">
                    POR APENAS R$ 6,00
                  </span>
                </div>
              </div>

              <div className="max-w-md mx-auto mb-6">
                <Button 
                  onClick={() => window.location.href = applyUtms('https://pay.lowify.com.br/checkout.php?product_id=0QCYwH')}
                  className="w-full bg-green-600 hover:bg-green-500 text-white font-black text-xl md:text-2xl py-8 rounded-xl shadow-[0_4px_14px_0_rgba(22,163,74,0.6)] transform transition hover:scale-105 active:scale-95 border-b-4 border-green-800 whitespace-normal h-auto leading-tight flex flex-col gap-1"
                >
                  <span>SIM! QUERO POR R$ 6,00</span>
                  <span className="text-xs font-normal opacity-90 uppercase tracking-widest">Adicionar ao meu pedido agora</span>
                </Button>
                <div className="flex items-center justify-center gap-2 mt-3 text-xs text-slate-500">
                  <Lock size={12} /> Pagamento Único • Acesso Imediato
                </div>
              </div>

              <Card className="max-w-xl mx-auto bg-white border-2 border-slate-100 shadow-sm mb-8">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-slate-800 text-lg mb-4 flex items-center justify-center gap-2">
                    <Star className="text-yellow-400 fill-current" /> O que você vai levar agora:
                  </h3>
                  <ul className="space-y-3 text-left max-w-sm mx-auto">
                    <li className="flex items-start gap-3 bg-green-50 p-2 rounded-md border border-green-100">
                      <div className="bg-green-600 p-1 rounded-full"><Check className="text-white w-3 h-3" strokeWidth={4} /></div> 
                      <span className="text-green-800 font-bold">TODO MATERIAL COMPLETO +</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-green-100 p-1 rounded-full"><Check className="text-green-600 w-4 h-4" /></div> 
                      <span className="text-slate-700 font-medium">100 Dinâmicas Divertidas em Vídeo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-green-100 p-1 rounded-full"><Check className="text-green-600 w-4 h-4" /></div> 
                      <span className="text-slate-700 font-medium">Tutorial em Vídeo (Passo a Passo)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-green-100 p-1 rounded-full"><Check className="text-green-600 w-4 h-4" /></div> 
                      <span className="text-slate-700 font-medium">Acesso Vitalício ao material</span>
                    </li>
                    <li className="flex items-start gap-3 bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                      <Gift className="text-red-500 shrink-0 animate-pulse" /> 
                      <span className="text-red-800 font-bold text-sm leading-tight">BÔNUS ESPECIAL: Concorra ao Pacote "Todas as Datas 2026"</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="max-w-md mx-auto mb-8">
                <Button 
                  onClick={() => window.location.href = applyUtms('https://pay.lowify.com.br/checkout.php?product_id=0QCYwH')}
                  className="w-full bg-green-600 hover:bg-green-500 text-white font-black text-xl md:text-2xl py-8 rounded-xl shadow-[0_4px_14px_0_rgba(22,163,74,0.6)] transform transition hover:scale-105 active:scale-95 border-b-4 border-green-800 whitespace-normal h-auto leading-tight flex flex-col gap-1"
                >
                  <span>SIM! QUERO POR R$ 6,00</span>
                  <span className="text-xs font-normal opacity-90 uppercase tracking-widest">Adicionar ao meu pedido agora</span>
                </Button>
              </div>

              <div className="pb-12">
                <a 
                  href={applyUtms('/natal01-downsell01')}
                  className="text-slate-400 hover:text-red-500 text-sm underline decoration-slate-300 hover:decoration-red-500 transition-colors cursor-pointer"
                >
                  Não obrigado, não quero as dinâmicas e nem concorrer aos prêmios. <br/>Quero finalizar meu pedido.
                </a>
              </div>

            </div>
          )}

          {!showOffer && (
             <div className="mt-8 pt-6 pb-20 text-center">
                 <p className="text-xs text-slate-400 animate-pulse">Carregando seu material especial...</p>
             </div>
          )}

          {showOffer && (
            <div className="mt-0 border-t border-slate-200 pt-6">
                <div className="flex justify-center gap-4 text-slate-400 grayscale opacity-50 mb-4">
                <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-8" />
                <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-8" />
                <img src="https://img.icons8.com/color/48/pix.png" alt="Pix" className="h-8" />
                </div>
                <p className="text-xs text-slate-400">
                Copyright © {new Date().getFullYear()} Natal Criativo. Todos os direitos reservados.
                </p>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default ChristmasUpsell;