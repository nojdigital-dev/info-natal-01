import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles, BookOpen, Star } from "lucide-react";

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onReject: () => void;
}

const EducacaoKidsUpsellModal: React.FC<UpsellModalProps> = ({ isOpen, onClose, onConfirm, onReject }) => {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95%] max-w-[425px] p-0 overflow-hidden rounded-3xl border-4 border-blue-400 shadow-2xl bg-white mx-auto font-sans">
        <DialogHeader className="p-6 pb-0 text-center bg-blue-50">
          <DialogTitle className="text-2xl md:text-3xl font-black text-blue-600 uppercase tracking-tight flex flex-col items-center gap-2">
            <span className="text-4xl">😱</span>
            <span>ESPERE, MAMÃE!</span>
          </DialogTitle>
          <DialogDescription className="text-slate-600 text-base md:text-lg pt-2 leading-snug font-medium">
            Não leve apenas o básico! Seu filho merece o <span className="font-black text-blue-800">Kit Completo (+6 Bônus)</span> com uma condição especial agora.
          </DialogDescription>
        </DialogHeader>
        
        <div className="p-6 pt-4 text-center">
          <div className="my-4 bg-yellow-100 p-4 rounded-xl border-2 border-yellow-400 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg shadow-sm uppercase">Oferta Relâmpago</div>
            <p className="text-xs md:text-sm text-slate-500 mb-1 line-through font-bold">De R$ 25,00</p>
            <div className="flex items-center justify-center gap-2">
                <span className="text-5xl md:text-6xl font-black text-green-600 tracking-tighter">R$ 20<span className="text-2xl md:text-3xl align-top">,00</span></span>
            </div>
            <div className="mt-2 flex items-center justify-center gap-1 text-xs font-bold text-blue-700 bg-blue-200/50 py-1 px-2 rounded-full inline-flex border border-blue-200">
                <Sparkles size={12} className="text-yellow-500 fill-current" /> Inclui Todos os 6 Bônus Extras
            </div>
          </div>

          <div className="space-y-3 mb-6">
             <div className="flex items-center gap-2 text-sm text-slate-700 font-bold bg-slate-50 p-2 rounded-lg">
                <BookOpen size={16} className="text-blue-500"/> Material de Apoio Completo
             </div>
             <div className="flex items-center gap-2 text-sm text-slate-700 font-bold bg-slate-50 p-2 rounded-lg">
                <Star size={16} className="text-yellow-500"/> Jogos de Alfabetização
             </div>
          </div>

          <Button 
            onClick={onConfirm}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-black text-lg md:text-xl py-8 rounded-xl shadow-[0_4px_0_rgb(21,128,61)] transform transition active:translate-y-1 active:shadow-none h-auto border-b-0 flex flex-col leading-tight"
          >
            <span>QUERO LEVAR TUDO</span>
            <span className="text-xs font-normal opacity-90 tracking-wide uppercase">Por apenas R$ 3,00 a mais</span>
          </Button>
          
          <Button 
            variant="link" 
            onClick={onReject}
            className="mt-4 text-slate-400 hover:text-red-500 text-xs underline transition-colors h-auto whitespace-normal"
          >
            Não obrigado. Quero apenas o kit básico incompleto por R$ 17,00.
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EducacaoKidsUpsellModal;