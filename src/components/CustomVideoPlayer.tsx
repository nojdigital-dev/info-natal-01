import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX } from "lucide-react";

interface CustomVideoPlayerProps {
  src: string;
  poster?: string;
  onPlay?: () => void;
}

const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({ src, poster, onPlay }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    // Tenta iniciar o vídeo automaticamente mutado
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.currentTime = 0; // Reinicia para a pessoa ouvir do começo
      videoRef.current.play();
      setIsMuted(false);
      setShowOverlay(false);
      if (onPlay) onPlay();
    }
  };

  return (
    <div 
      className="relative w-full h-full bg-black rounded-2xl overflow-hidden cursor-pointer group"
      onClick={handleUnmute}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover" // Garante preenchimento total sem bordas pretas
        playsInline
        muted
        loop
        autoPlay
      />

      {/* Overlay de "Clique para Ouvir" */}
      {showOverlay && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/10 backdrop-blur-[2px] transition-all duration-500">
          
          {/* Aviso Flutuante Topo */}
          <div className="absolute top-8 left-0 right-0 mx-auto w-max bg-white/90 text-slate-900 px-4 py-2 rounded-full flex items-center gap-2 text-xs md:text-sm font-bold shadow-lg animate-in fade-in slide-in-from-top-4 duration-700">
             <VolumeX size={16} className="text-red-600 animate-pulse" /> SEU VÍDEO JÁ COMEÇOU...
          </div>
          
          {/* Botão Central Pulsante */}
          <div className="bg-green-600/90 p-5 rounded-full shadow-[0_0_30px_rgba(22,163,74,0.6)] scale-100 animate-pulse group-hover:scale-110 transition-transform duration-300 border-4 border-white/30">
             <Volume2 size={40} className="text-white fill-white" />
          </div>
          
          {/* Texto Inferior */}
          <div className="absolute top-[60%] left-0 right-0 text-center">
             <span className="text-white font-black text-shadow-md uppercase text-sm tracking-widest bg-black/40 px-3 py-1 rounded backdrop-blur-sm border border-white/20">
               Clique para ouvir
             </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomVideoPlayer;