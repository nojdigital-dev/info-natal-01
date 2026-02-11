import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles, BookOpen, Star, Zap } from "lucide-react";

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onReject: () => void;
}

const EducacaoKidsV2UpsellModal: React.FC<UpsellModalProps> = ({ isOpen, onClose, onConfirm, onReject }) => {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95%] max-w-[425px] p-0 overflow-hidden rounded-3xl border-4 border-yellow-400 shadow-2xl bg-white mx-auto font-sans">
        <DialogHeader className="p-6 pb-0 text-center bg-blue-600">
          <DialogTitle className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight flex flex-col items-center gap-2">
            <span className="text-4xl animate-bounce">🎁</span>
            <span>PRESENTE SURPRESA!</span>
          </DialogTitle>
          <DialogDescription className="text-blue-100 text-base md:text-lg pt-2 leading-snug font-medium">
            Mães inteligentes não levam o básico. Leve o <span className="font-black text-yellow-300">KIT COMPLETO (+ Bônus)</span> com um desconto secreto agora.
          </DialogDescription>
        </DialogHeader>
        
        <div className="p-6 pt-4 text-center">
          <div className="my-4 bg-yellow-50 p-4 rounded-xl border-2 border-yellow-400 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg shadow-sm uppercase animate-pulse">Oferta Única</div>
            <p className="text-xs md:text-sm text-slate-400 mb-1 line-through font-bold">De R$ 19,90</p>
            <div className="flex items-center justify-center gap-2">
                <span className="text-5xl md:text-6xl font-black text-green-600 tracking-tighter">R$ 14<span className="text-2xl md:text-3xl align-top">,90</span></span>
            </div>
            <div className="mt-2 flex items-center justify-center gap-1 text-xs font-bold text-blue-700 bg-blue-100 py-1 px-2 rounded-full inline-flex border border-blue-200">
                <Zap size={12} className="text-yellow-600 fill-current" /> Acesso Vitalício + Todos os Bônus
            </div>
          </div>

          <div className="space-y-2 mb-6 text-left">
             <div className="flex items-center gap-2 text-xs md:text-sm text-slate-700 font-bold bg-slate-50 p-2 rounded-lg border border-slate-100">
                <BookOpen size={16} className="text-blue-500 shrink-0"/> +100 Atividades de Grafismo
             </div>
             <div className="flex items-center gap-2 text-xs md:text-sm text-slate-700 font-bold bg-slate-50 p-2 rounded-lg border border-slate-100">
                <Star size={16} className="text-yellow-500 shrink-0"/> 3 Cadernos de Bônus Exclusivos
             </div>
          </div>

          <Button 
            onClick={onConfirm}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-black text-lg md:text-xl py-8 rounded-xl shadow-[0_4px_0_rgb(21,128,61)] transform transition active:translate-y-1 active:shadow-none h-auto border-b-0 flex flex-col leading-tight animate-pulse"
          >
            <span>QUERO O COMPLETO</span>
            <span className="text-xs font-normal opacity-90 tracking-wide uppercase">Por apenas R$ 5,00 a mais</span>
          </Button>
          
          <Button 
            variant="link" 
            onClick={onReject}
            className="mt-4 text-slate-400 hover:text-red-500 text-xs underline transition-colors h-auto whitespace-normal"
          >
            Não obrigado. Vou perder essa oportunidade e levar o kit básico incompleto por R$ 9,90.
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EducacaoKidsV2UpsellModal;