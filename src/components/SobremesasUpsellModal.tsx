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

const SobremesasUpsellModal: React.FC<UpsellModalProps> = ({ isOpen, onClose, onConfirm, onReject }) => {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden rounded-2xl border-none shadow-2xl bg-white">
        <DialogHeader className="p-6 pb-0 text-center">
          <DialogTitle className="text-3xl font-extrabold text-pink-600 uppercase tracking-tight">
            ESPERE! NÃO FECHE!
          </DialogTitle>
          <DialogDescription className="text-slate-600 text-lg pt-2">
            Você foi selecionada para levar o <span className="font-bold text-slate-800">Pacote Vitalício + Bônus</span> por um preço ridículo.
          </DialogDescription>
        </DialogHeader>
        <div className="p-6 pt-2 text-center">
          <div className="my-4 bg-pink-50 p-4 rounded-xl border border-pink-100">
            <p className="text-sm text-slate-500 mb-1 line-through">De R$ 97,00</p>
            <div className="flex items-center justify-center gap-2">
                <span className="text-6xl font-black text-pink-600 tracking-tighter">R$ 10<span className="text-2xl align-top">,00</span></span>
            </div>
            <div className="mt-2 flex items-center justify-center gap-1 text-xs font-bold text-purple-600">
                <Sparkles size={12} /> TUDO INCLUSO (300+ Receitas + 3 Bônus)
            </div>
          </div>
          <Button 
            onClick={onConfirm}
            className="w-full bg-green-600 hover:bg-green-500 text-white font-bold text-xl py-8 rounded-xl shadow-lg transform transition hover:scale-105 h-auto border-b-4 border-green-800"
          >
            QUERO APROVEITAR AGORA!
          </Button>
          <Button 
            variant="link" 
            onClick={onReject}
            className="mt-4 text-slate-400 hover:text-slate-600 text-xs"
          >
            Não obrigado, prefiro continuar comendo açúcar e engordando.
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SobremesasUpsellModal;