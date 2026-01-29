import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onReject: () => void;
}

const LeisCantadasUpsellModal: React.FC<UpsellModalProps> = ({ isOpen, onClose, onConfirm, onReject }) => {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden rounded-2xl border-none shadow-2xl bg-slate-900 text-white">
        <DialogHeader className="p-6 pb-0 text-center">
          <DialogTitle className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 uppercase tracking-tight">
            ESPERE! PRESENTE VIP
          </DialogTitle>
          <DialogDescription className="text-slate-300 text-lg pt-2">
            Liberamos um <span className="font-bold text-white">Desconto Secreto</span> no Plano Anual para você não sair de mãos vazias.
          </DialogDescription>
        </DialogHeader>
        <div className="p-6 pt-2 text-center">
          <div className="my-6 bg-slate-800 p-4 rounded-xl border border-purple-500/30">
            <p className="text-sm text-slate-400 line-through">De R$ 197,90</p>
            <span className="text-6xl font-black text-green-400 tracking-tighter">R$ 147<span className="text-2xl align-top">,90</span></span>
            <div className="flex items-center justify-center gap-2 mt-2 text-xs font-bold text-purple-300">
               <Sparkles size={12} /> Acesso Liberado por 12 Meses
            </div>
          </div>
          <Button 
            onClick={onConfirm}
            className="w-full bg-green-600 hover:bg-green-500 text-white font-bold text-xl py-8 rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.4)] transform transition hover:scale-105 h-auto border-b-4 border-green-800"
          >
            QUERO O DESCONTO VIP
          </Button>
          <Button 
            variant="link" 
            onClick={onReject}
            className="mt-4 text-slate-500 hover:text-slate-400"
          >
            Não, obrigado. Prefiro pagar o preço normal depois.
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeisCantadasUpsellModal;