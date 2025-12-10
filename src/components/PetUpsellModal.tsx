import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onReject: () => void;
}

const PetUpsellModal: React.FC<UpsellModalProps> = ({ isOpen, onClose, onConfirm, onReject }) => {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden rounded-2xl border-none shadow-2xl bg-white">
        <DialogHeader className="p-6 pb-0 text-center">
          <DialogTitle className="text-3xl font-extrabold text-green-700 uppercase tracking-tight">
            Oferta Exclusiva
          </DialogTitle>
          <DialogDescription className="text-slate-600 text-lg pt-2">
            Leve o <span className="font-bold text-slate-800">Pacote Saúde Total Pet</span> por Apenas
          </DialogDescription>
        </DialogHeader>
        <div className="p-6 pt-2 text-center">
          <div className="my-4">
            <span className="text-7xl font-black text-orange-600 tracking-tighter">R$ 14<span className="text-4xl align-top">,90</span></span>
          </div>
          <Button 
            onClick={onConfirm}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-xl py-8 rounded-xl shadow-lg transform transition hover:scale-105 h-auto"
          >
            QUERO CUIDAR DO MEU PET!
          </Button>
          <Button 
            variant="link" 
            onClick={onReject}
            className="mt-4 text-slate-500 hover:text-slate-700"
          >
            Não, obrigado. Quero apenas o guia básico.
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PetUpsellModal;