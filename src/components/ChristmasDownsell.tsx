import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { AlertTriangle, Check, Gift, Lock, ShieldCheck, ArrowRight } from "lucide-react";

const ChristmasDownsell = () => {
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

  return (
    <>
      <Helmet>
        <title>Última Chance - 80% OFF</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-red-700 flex items-center justify-center p-4 relative overflow-hidden">
        
        {/* Confetti / Snow background effect */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
            {[...Array(30)].map((_, i) => (
                <div 
                    key={i}
                    className="absolute bg-white rounded-full"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 10 + 2}px`,
                        height: `${Math.random() * 10 + 2}px`,
                        opacity: Math.random(),
                        animation: `pulse ${Math.random() * 2 + 1}s infinite`
                    }}
                />
            ))}
        </div>

        <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden relative z-10 animate-in zoom-in-95 duration-500">
            
            {/* Header de Urgência */}
            <div className="bg-yellow-400 p-4 text-center border-b-4 border-yellow-500">
                <h1 className="text-red-900 font-black text-2xl uppercase flex items-center justify-center gap-2 animate-pulse">
                    <AlertTriangle fill="currentColor" className="text-red-600" />
                    ESPERE! NÃO VÁ AINDA!
                </h1>
                <p className="text-red-800 font-bold text-sm">Essa é a sua ÚLTIMA oportunidade.</p>
            </div>

            <div className="p-6 md:p-8 text-center">
                
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-4 leading-tight">
                    Eu não quero que o preço seja um problema para você...
                </h2>

                <p className="text-slate-600 mb-6 text-lg">
                    Por isso, vou fazer algo que <strong>nunca fiz antes</strong>. Vou liberar o pacote de dinâmicas praticamente de graça para você não sair de mãos vazias.
                </p>

                {/* Caixa de Preço */}
                <div className="bg-slate-50 border-2 border-dashed border-red-300 rounded-2xl p-6 mb-8 relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                        80% DE DESCONTO IMEDIATO
                    </div>
                    
                    <div className="flex flex-col items-center justify-center">
                        <span className="text-slate-400 text-lg line-through font-medium">De R$ 12,90</span>
                        <div className="text-5xl md:text-6xl font-black text-green-600 my-2 tracking-tighter">
                            R$ 3,99
                        </div>
                        <p className="text-sm text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                            Menos que um cafezinho ☕
                        </p>
                    </div>
                </div>

                {/* Lista de Benefícios */}
                <div className="text-left bg-green-50 p-4 rounded-xl border border-green-100 mb-8">
                    <h3 className="font-bold text-green-800 mb-3 text-sm uppercase tracking-wide text-center">Você ainda vai levar tudo:</h3>
                    <ul className="space-y-2">
                         <li className="flex items-center gap-2 text-sm text-slate-700">
                            <Check size={16} className="text-green-600 shrink-0" /> 100 Dinâmicas em Vídeo
                         </li>
                         <li className="flex items-center gap-2 text-sm text-slate-700">
                            <Check size={16} className="text-green-600 shrink-0" /> Tutoriais Passo a Passo
                         </li>
                         <li className="flex items-center gap-2 text-sm text-slate-700">
                            <Check size={16} className="text-green-600 shrink-0" /> Sorteio do Pacote 2026
                         </li>
                         <li className="flex items-center gap-2 text-sm text-slate-700">
                            <Check size={16} className="text-green-600 shrink-0" /> Acesso Vitalício
                         </li>
                    </ul>
                </div>

                {/* Botão de Compra */}
                <Button 
                  onClick={() => window.location.href = applyUtms('https://pay.lowify.com.br/go.php?offer=r45vzx8')}
                  className="w-full bg-green-600 hover:bg-green-500 text-white font-black text-xl py-8 rounded-xl shadow-[0_4px_14px_0_rgba(22,163,74,0.5)] transform transition hover:scale-105 active:scale-95 border-b-4 border-green-800 whitespace-normal h-auto leading-tight group"
                >
                  <div className="flex flex-col items-center">
                    <span className="flex items-center gap-2">QUERO POR R$ 3,99 <ArrowRight className="group-hover:translate-x-1 transition-transform"/></span>
                  </div>
                </Button>
                
                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-slate-400">
                  <Lock size={12} /> Ambiente Seguro • Acesso Imediato
                </div>

            </div>

            <div className="bg-slate-100 p-4 text-center border-t border-slate-200">
                <a 
                    href={applyUtms('/obgado-natal-final-2025x26')} // Pula direto para o obrigado se negar o downsell
                    className="text-xs text-slate-400 hover:text-red-500 underline decoration-slate-300 transition-colors"
                >
                    Não, eu realmente não quero aproveitar essa oportunidade única.
                </a>
            </div>

        </div>
      </div>
    </>
  );
};

export default ChristmasDownsell;