import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { CheckCircle2, Download, Gift, Star, TreePine } from "lucide-react";

const ChristmasThankYou = () => {
  return (
    <>
      <Helmet>
        <title>Compra Concluída! - Natal Criativo</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-green-800 to-green-900 text-white flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
        
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
            <TreePine className="absolute bottom-0 left-10 w-64 h-64" />
            <TreePine className="absolute bottom-0 right-10 w-48 h-48" />
            <Star className="absolute top-20 left-20 w-12 h-12 animate-pulse" />
            <Star className="absolute top-40 right-20 w-8 h-8 animate-pulse delay-75" />
        </div>

        <div className="bg-white text-slate-900 p-8 md:p-12 rounded-3xl shadow-2xl max-w-lg w-full relative z-10 mx-4 border-b-8 border-red-600">
          
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-2">
            Compra Confirmada!
          </h1>
          <p className="text-slate-600 mb-8">
            Seu pagamento foi aprovado e seu acesso já está liberado. Obrigado por confiar no nosso trabalho!
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
            <h2 className="font-bold text-red-600 flex items-center justify-center gap-2 mb-3">
              <Gift size={20} /> ACESSE SEU MATERIAL
            </h2>
            <p className="text-sm text-slate-500 mb-4">
              Clique no botão abaixo para acessar todos os arquivos, bônus e tutoriais no nosso Drive exclusivo.
            </p>
            <a 
              href="https://drive.google.com/drive/folders/1ocXy7OjqbQv1gr2nOiqNqgmfLD_modoR?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button className="w-full bg-green-600 hover:bg-green-500 text-white font-bold text-lg py-6 rounded-lg shadow-lg transform transition hover:scale-105 active:scale-95 whitespace-normal h-auto leading-tight">
                <Download className="mr-2 shrink-0" /> ACESSAR MATERIAL AGORA
              </Button>
            </a>
          </div>

          <p className="text-xs text-slate-400">
            Enviamos também uma cópia do acesso para o seu e-mail. <br/>
            Caso precise de ajuda, responda ao e-mail de compra.
          </p>
        </div>

        <div className="mt-8 text-white/50 text-sm">
            Feliz Natal e Boas Festas! 🎅
        </div>

      </div>
    </>
  );
};

export default ChristmasThankYou;