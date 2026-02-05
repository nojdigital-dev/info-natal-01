import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onReject: () => void;
}

const SobremesasUpsellModal: React.FC<UpsellModalProps> = ({ isOpen, onClose, onConfirm, onReject }) => {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden rounded-2xl border-none shadow-2xl bg-white">
        <DialogHeader className="p-6 pb-0 text-center">
          <DialogTitle className="text-3xl font-extrabold text-pink-600 uppercase tracking-tight">
            ESPERE! OFERTA ÚNICA
          </DialogTitle>
          <DialogDescription className="text-slate-600 text-lg pt-2">
            Não compre o básico! Leve o <span className="font-bold text-slate-800">Pacote Completo (300+ Receitas)</span> com um desconto secreto agora.
          </DialogDescription>
        </DialogHeader>
        <div className="p-6 pt-2 text-center">
          <div className="my-4 bg-gradient-to-br from-pink-50 to-purple-50 p-4 rounded-xl border border-pink-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">50% OFF EXTRA</div>
            <p className="text-sm text-slate-500 mb-1 line-through">De R$ 19,90</p>
            <div className="flex items-center justify-center gap-2">
                <span className="text-6xl font-black text-green-600 tracking-tighter">R$ 14<span className="text-2xl align-top">,90</span></span>
            </div>
            <div className="mt-2 flex items-center justify-center gap-1 text-xs font-bold text-purple-600">
                <Sparkles size={12} /> Inclui: Tortas + Lanches + Geleias
            </div>
          </div>
          <Button 
            onClick={onConfirm}
            className="w-full bg-green-600 hover:bg-green-500 text-white font-bold text-xl py-8 rounded-xl shadow-lg transform transition hover:scale-105 h-auto border-b-4 border-green-800 flex flex-col leading-tight"
          >
            <span>QUERO LEVAR TUDO</span>
            <span className="text-xs font-normal opacity-90">Por apenas R$ 4,90 a mais</span>
          </Button>
          <Button 
            variant="link" 
            onClick={onReject}
            className="mt-4 text-slate-400 hover:text-red-500 text-xs underline decoration-slate-300 hover:decoration-red-500 transition-colors"
          >
            Não obrigado. Quero apenas o básico incompleto por R$ 10,00.
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SobremesasUpsellModal;