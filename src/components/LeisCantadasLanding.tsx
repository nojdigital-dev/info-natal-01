import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Check, ShieldCheck, Zap, Lock, ChevronRight, 
  Headphones, Music, Play, Pause, Brain, 
  Dumbbell, Sparkles, Car, ListMusic, Crown, AlertTriangle
} from "lucide-react";
import LeisCantadasUpsellModal from './LeisCantadasUpsellModal';
import UtmifyScript from './UtmifyScript';

// Images
const studentHero = "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=1000&auto=format&fit=crop";

const LeisCantadasLanding = () => {
  const [isUpsellModalOpen, setIsUpsellModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 12, seconds: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // Helper UTMs
  const applyUtms = (url: string) => {
      try {
          const currentSearchParams = new URLSearchParams(window.location.search);
          const paramsString = currentSearchParams.toString();
          if (!paramsString) return url;
          const separator = url.indexOf("?") === -1 ? "?" : "&";
          return `${url}${separator}${paramsString}`;
      } catch (e) { return url; }
  };

  return (
    <>
      <Helmet>
        <title>Leis Cantadas - Acelere sua Aprovação com Música</title>
        <meta name="description" content="Memorize Leis e Conteúdos Difíceis Ouvindo Música. O método de 'Estudo Passivo' que já aprovou milhares de concurseiros." />
      </Helmet>
      <UtmifyScript />
      
      <div className="min-h-screen bg-slate-950 font-sans text-slate-100 overflow-x-hidden selection:bg-purple-500 selection:text-white">
        
        {/* Top Bar - Mobile Optimized */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 px-2 font-bold text-[10px] md:text-sm sticky top-0 z-50 shadow-[0_0_20px_rgba(168,85,247,0.5)] flex justify-center items-center gap-1 md:gap-2">
           <Zap size={14} className="animate-pulse" /> OFERTA RELÂMPAGO: PAGAMENTO ÚNICO HOJE
        </div>

        {/* Hero Section */}
        <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 px-4 overflow-hidden">
          {/* Background Gradient Effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-900/20 blur-[80px] md:blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              
              {/* Left Content */}
              <div className="text-center md:text-left">
                <Badge className="bg-slate-800 text-purple-400 hover:bg-slate-800 mb-4 md:mb-6 px-3 py-1 text-xs md:text-sm font-bold border border-purple-500/30 inline-flex items-center gap-2">
                  <Brain size={14} /> Neurociência Aplicada aos Estudos
                </Badge>
                
                <h1 className="text-3xl md:text-6xl font-extrabold mb-4 md:mb-6 leading-tight tracking-tight">
                  Memorize Todo o Edital <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Sem Ler Nenhuma Página</span>
                </h1>
                
                <p className="text-base md:text-xl mb-6 md:mb-8 text-slate-400 max-w-xl mx-auto md:mx-0 font-medium leading-relaxed">
                  Transforme o Direito Constitucional, Penal e Administrativo em músicas "chiclete" que grudam no seu cérebro. <br className="hidden md:block" />
                  <span className="text-white font-bold">Mais de 5.000 músicas</span> para você estudar na academia, no ônibus ou limpando a casa.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                    <Button 
                        onClick={scrollToPricing}
                        className="bg-green-500 hover:bg-green-400 text-slate-900 font-black text-lg md:text-xl py-6 md:py-8 px-8 md:px-10 rounded-full shadow-[0_0_30px_rgba(34,197,94,0.3)] transform transition hover:scale-105 active:scale-95 flex items-center gap-2 w-full sm:w-auto"
                    >
                        <Play fill="currentColor" size={20} /> COMEÇAR A OUVIR
                    </Button>
                </div>
                
                <div className="mt-6 flex items-center justify-center md:justify-start gap-4 text-xs text-slate-500">
                    <div className="flex -space-x-2">
                        {[1,2,3,4].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-950 flex items-center justify-center text-[10px] text-white overflow-hidden">
                                <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                            </div>
                        ))}
                    </div>
                    <p>+12.000 Alunos Aprovados</p>
                </div>
              </div>

              {/* Right Content - Visual Mockup */}
              <div className="relative mt-8 md:mt-0">
                 {/* Fake Music Player UI */}
                 <div className="relative z-10 bg-slate-900/80 backdrop-blur-xl border border-slate-700 p-4 md:p-6 rounded-3xl shadow-2xl max-w-xs md:max-w-sm mx-auto transform rotate-3 hover:rotate-0 transition-all duration-500">
                    <div className="aspect-square bg-gradient-to-br from-purple-600 to-indigo-800 rounded-2xl mb-4 md:mb-6 flex items-center justify-center relative overflow-hidden group">
                        <img src={studentHero} alt="Estudante" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay" />
                        <Button 
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="bg-green-500 hover:bg-green-400 text-black rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center pl-1 shadow-lg transform group-hover:scale-110 transition-transform z-20"
                        >
                            {isPlaying ? <Pause fill="currentColor" /> : <Play fill="currentColor" />}
                        </Button>
                        {/* Audio Wave Animation */}
                        {isPlaying && (
                             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-end gap-1 h-8">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-1 bg-white animate-music-bar" style={{animationDelay: `${i * 0.1}s`}}></div>
                                ))}
                             </div>
                        )}
                    </div>
                    
                    <div className="space-y-1 mb-3 md:mb-4 text-center md:text-left">
                        <h3 className="font-bold text-white text-base md:text-lg">Artigo 5º - CF/88 (Remix)</h3>
                        <p className="text-slate-400 text-xs md:text-sm">Leis Cantadas • Direito Constitucional</p>
                    </div>

                    <div className="w-full bg-slate-700 h-1 md:h-1.5 rounded-full mb-2 overflow-hidden">
                        <div className={`h-full bg-green-500 rounded-full ${isPlaying ? 'w-2/3 animate-pulse' : 'w-1/3'}`}></div>
                    </div>
                    <div className="flex justify-between text-[10px] md:text-xs text-slate-500">
                        <span>1:15</span>
                        <span>3:42</span>
                    </div>
                 </div>

                 {/* Decorative Elements */}
                 <Music className="absolute -top-5 -right-5 md:-top-10 md:-right-10 text-pink-500/20 animate-bounce w-[50px] h-[50px] md:w-[80px] md:h-[80px]" />
                 <Headphones className="absolute -bottom-5 -left-5 md:-bottom-10 md:-left-10 text-purple-500/20 animate-pulse w-[50px] h-[50px] md:w-[80px] md:h-[80px]" />
              </div>

            </div>
          </div>
        </section>

        {/* Pain Points / Solution Strip - Mobile Scrollable */}
        <section className="py-8 md:py-12 bg-slate-900 border-y border-slate-800">
          <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-6 md:mb-10">
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Com o Leis Cantadas, você estuda enquanto:</h2>
              </div>
              <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-6">
                  <div className="bg-slate-800/50 p-4 md:p-6 rounded-2xl border border-slate-700 flex items-center gap-4 hover:border-purple-500 transition-colors">
                      <div className="bg-purple-900/50 p-3 rounded-full text-purple-400 shrink-0">
                          <Dumbbell size={20} />
                      </div>
                      <div>
                          <h3 className="font-bold text-white text-base md:text-lg">Malha na Academia</h3>
                          <p className="text-slate-400 text-xs md:text-sm">Troque o playlist de treino pelo Artigo 5º.</p>
                      </div>
                  </div>
                  <div className="bg-slate-800/50 p-4 md:p-6 rounded-2xl border border-slate-700 flex items-center gap-4 hover:border-pink-500 transition-colors">
                      <div className="bg-pink-900/50 p-3 rounded-full text-pink-400 shrink-0">
                          <Sparkles size={20} />
                      </div>
                      <div>
                          <h3 className="font-bold text-white text-base md:text-lg">Limpa a Casa</h3>
                          <p className="text-slate-400 text-xs md:text-sm">A louça fica limpa e a matéria revisada.</p>
                      </div>
                  </div>
                  <div className="bg-slate-800/50 p-4 md:p-6 rounded-2xl border border-slate-700 flex items-center gap-4 hover:border-blue-500 transition-colors">
                      <div className="bg-blue-900/50 p-3 rounded-full text-blue-400 shrink-0">
                          <Car size={20} />
                      </div>
                      <div>
                          <h3 className="font-bold text-white text-base md:text-lg">Está no Trânsito</h3>
                          <p className="text-slate-400 text-xs md:text-sm">Transforme horas perdidas em horas líquidas.</p>
                      </div>
                  </div>
              </div>
          </div>
        </section>

        {/* Catalog Section */}
        <section className="py-12 md:py-20 px-4 bg-slate-950">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
               <Badge className="bg-green-500/10 text-green-400 mb-4 hover:bg-green-500/20 border border-green-500/20">CATÁLOGO GIGANTE</Badge>
               <h2 className="text-2xl md:text-5xl font-black text-white mb-4">
                   Mais de <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">5.000 Músicas</span> Disponíveis
               </h2>
               <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto px-2">
                   Nossa plataforma funciona igualzinho ao seu app de música favorito. É só dar play nas playlists prontas ou criar a sua.
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {/* Card Areas */}
                <Card className="bg-slate-900 border-slate-800 text-slate-100">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg md:text-xl"><ListMusic className="text-purple-400"/> Áreas do Direito</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-3 text-xs md:text-sm text-slate-400">
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-500 shrink-0"/> Constitucional</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-500 shrink-0"/> Administrativo</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-500 shrink-0"/> Penal & Processo</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-500 shrink-0"/> Civil & Processo</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-500 shrink-0"/> Tributário</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-500 shrink-0"/> Eleitoral</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-500 shrink-0"/> Previdenciário</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-500 shrink-0"/> E muito mais...</span>
                    </CardContent>
                </Card>

                {/* Card Concursos */}
                <Card className="bg-slate-900 border-slate-800 text-slate-100">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg md:text-xl"><Brain className="text-pink-400"/> Focado no seu Concurso</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-3 text-xs md:text-sm text-slate-400">
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-500 shrink-0"/> Tribunais (TJ, TRT)</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-500 shrink-0"/> Policiais (PF, PRF)</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-500 shrink-0"/> Bancários (BB, Caixa)</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-500 shrink-0"/> CNU (Unificado)</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-500 shrink-0"/> INSS</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-500 shrink-0"/> Cartórios & OAB</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-500 shrink-0"/> Prefeituras</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-500 shrink-0"/> Carreiras Fiscais</span>
                    </CardContent>
                </Card>
            </div>
          </div>
        </section>

        {/* AI Bonus Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-purple-900 to-slate-950 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            
            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold mb-4 uppercase tracking-widest">
                    Tecnologia Exclusiva
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                    Apresentando: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">LC Studio IA</span> 🤖
                </h2>
                <p className="text-lg md:text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                    Não achou a música que queria? Sem problemas. <br/>
                    Com nossa Inteligência Artificial, você cola o texto da lei e <strong>a IA cria uma música exclusiva para você em segundos.</strong>
                </p>

                <div className="bg-slate-900/50 backdrop-blur-md p-8 rounded-3xl border border-purple-500/30 inline-block shadow-2xl">
                    <div className="flex flex-col md:flex-row items-center gap-8 text-left">
                        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 w-full md:w-64">
                            <div className="text-xs text-slate-500 mb-2 uppercase font-bold">Input (Texto)</div>
                            <div className="h-2 bg-slate-600 rounded w-3/4 mb-2"></div>
                            <div className="h-2 bg-slate-600 rounded w-1/2 mb-2"></div>
                            <div className="h-2 bg-slate-600 rounded w-full mb-4"></div>
                            <div className="flex justify-end"><Zap size={16} className="text-yellow-400"/></div>
                        </div>
                        <ChevronRight className="hidden md:block text-purple-500" size={32} />
                        <div className="bg-slate-800 p-4 rounded-xl border border-green-500/50 w-full md:w-64 relative overflow-hidden">
                             <div className="absolute inset-0 bg-green-500/10 animate-pulse"></div>
                             <div className="text-xs text-green-400 mb-2 uppercase font-bold flex items-center gap-1"><Music size={12}/> Output (Música)</div>
                             <div className="flex items-center gap-3">
                                 <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-black"><Play size={16} fill="black"/></div>
                                 <div className="flex-1 space-y-1">
                                     <div className="h-1.5 bg-slate-600 rounded-full w-full">
                                         <div className="h-full bg-green-500 w-2/3"></div>
                                     </div>
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
                
                <p className="mt-8 text-sm text-purple-200 font-bold uppercase tracking-wide">
                    *Créditos de criação inclusos em todos os planos
                </p>
            </div>
        </section>

        {/* Pricing Section (UPDATED) */}
        <section id="pricing" className="py-16 md:py-20 px-4 bg-slate-950 relative">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-12">
              <div className="inline-block bg-green-600 text-white px-4 md:px-6 py-2 rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.5)] mb-6 animate-pulse">
                  <div className="text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1 text-green-100">⏰ PAGAMENTO ÚNICO - VAGAS LIMITADAS</div>
                  <div className="text-2xl md:text-4xl font-mono font-black tracking-widest text-white">
                      {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                  </div>
              </div>
              <h2 className="text-2xl md:text-5xl font-black text-white leading-tight">
                  Escolha Seu Plano e <br/><span className="text-purple-400">Comece Hoje</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center max-w-3xl mx-auto">
              
              {/* Plano Básico */}
              <div className="bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-800 shadow-sm flex flex-col relative order-2 md:order-1 opacity-90 hover:opacity-100 transition-opacity">
                <h3 className="text-xl font-bold text-slate-400 text-center mb-1">Kit Essencial</h3>
                <p className="text-xs text-center text-slate-500 mb-6">Apenas as músicas</p>
                
                <div className="text-center mb-6">
                  <span className="text-4xl md:text-5xl font-extrabold text-white">R$ 37</span>
                  <span className="text-xl font-bold text-slate-500">,00</span>
                  <p className="text-xs text-slate-500 mt-2 font-bold uppercase">Pagamento Único</p>
                </div>
                
                <Button 
                    onClick={() => setIsUpsellModalOpen(true)}
                    className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-6 rounded-xl border border-slate-700"
                >
                    QUERO O BÁSICO
                </Button>
                
                <div className="mt-6 space-y-3 text-xs md:text-sm text-slate-400">
                    <p className="flex items-center gap-2"><Check size={16} className="text-purple-500"/> Acesso às Músicas</p>
                    <p className="flex items-center gap-2"><Check size={16} className="text-purple-500"/> Playlists Básicas</p>
                    <p className="flex items-center gap-2 text-slate-600 line-through"><Check size={16} className="text-slate-700"/> Criação com IA</p>
                    <p className="flex items-center gap-2 text-slate-600 line-through"><Check size={16} className="text-slate-700"/> Download Offline</p>
                </div>
              </div>

              {/* Plano Premium (Destaque) */}
              <div className="bg-slate-900 rounded-3xl p-8 border-2 border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.3)] relative z-10 order-1 md:order-2 transform scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg whitespace-nowrap border border-white/20">
                  👑 Recomendado
                </div>

                <h3 className="text-2xl font-black text-white text-center mb-1 uppercase">Plano Premium</h3>
                <p className="text-sm text-center text-purple-400 font-bold mb-6">Acesso Completo + IA</p>
                
                <div className="text-center mb-6 bg-slate-800/50 py-4 rounded-2xl border border-slate-700">
                  <p className="text-xs text-slate-400 line-through mb-1">De R$ 97,00 por</p>
                  <div className="flex justify-center items-baseline gap-1">
                      <span className="text-6xl font-black text-green-400 tracking-tighter">R$ 47</span>
                      <span className="text-2xl font-bold text-green-500">,00</span>
                  </div>
                  <p className="text-[10px] text-green-500 font-bold uppercase mt-2 tracking-widest bg-green-500/10 inline-block px-3 py-1 rounded-full">Vitalício • Sem mensalidade</p>
                </div>
                
                <Button 
                    onClick={() => window.location.href = applyUtms('https://pay.lowify.com.br/checkout?product_id=leis-premium')}
                    className="w-full bg-green-600 hover:bg-green-500 text-white font-black text-lg md:text-xl py-8 rounded-xl shadow-lg animate-pulse hover:scale-105 transition-transform"
                >
                    QUERO ACESSO TOTAL
                </Button>
                
                <div className="mt-8 space-y-3 text-sm text-white font-medium">
                    <p className="flex items-center gap-2"><Check size={18} className="text-green-500 shrink-0"/> <strong>5.000+ Músicas</strong></p>
                    <p className="flex items-center gap-2"><Check size={18} className="text-green-500 shrink-0"/> <strong>Criador de Paródias com IA</strong> 🤖</p>
                    <p className="flex items-center gap-2"><Check size={18} className="text-green-500 shrink-0"/> <strong>Download Offline (App)</strong></p>
                    <p className="flex items-center gap-2"><Check size={18} className="text-green-500 shrink-0"/> <strong>Garantia Vitalícia</strong></p>
                </div>
              </div>

            </div>
            
            <div className="text-center mt-12 flex flex-col md:flex-row items-center justify-center gap-2 text-slate-500 text-xs md:text-sm">
                <span className="flex items-center gap-1"><Lock size={12} /> Compra Segura</span>
                <span className="hidden md:block">•</span>
                <span className="flex items-center gap-1"><Zap size={12} /> Entrega Imediata</span>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-slate-900 border-t border-slate-800">
             <div className="max-w-3xl mx-auto">
                 <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-10">Perguntas Frequentes</h2>
                 <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem value="item-1" className="border border-slate-700 rounded-xl px-4 bg-slate-800">
                        <AccordionTrigger className="text-slate-100 font-bold hover:text-purple-400 hover:no-underline text-left">Como recebo o acesso?</AccordionTrigger>
                        <AccordionContent className="text-slate-400">
                            Imediatamente após a confirmação do pagamento, você recebe um e-mail com seu login e senha para acessar nossa plataforma (funciona no celular e computador).
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="border border-slate-700 rounded-xl px-4 bg-slate-800">
                        <AccordionTrigger className="text-slate-100 font-bold hover:text-purple-400 hover:no-underline text-left">Serve para o meu concurso?</AccordionTrigger>
                        <AccordionContent className="text-slate-400">
                            Sim! Cobrimos as matérias base de 99% dos concursos (Direito Constitucional, Administrativo, Português, RLM, Informática, etc). Temos playlists específicas para Tribunais, Polícias, Bancos e Prefeituras.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="border border-slate-700 rounded-xl px-4 bg-slate-800">
                        <AccordionTrigger className="text-slate-100 font-bold hover:text-purple-400 hover:no-underline text-left">É mensalidade?</AccordionTrigger>
                        <AccordionContent className="text-slate-400">
                            Não! Nesta oferta especial, o pagamento é ÚNICO. Você paga apenas R$ 47,00 uma vez e tem acesso para sempre (Vitalício).
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className="border border-slate-700 rounded-xl px-4 bg-slate-800">
                        <AccordionTrigger className="text-slate-100 font-bold hover:text-purple-400 hover:no-underline text-left">Posso baixar as músicas?</AccordionTrigger>
                        <AccordionContent className="text-slate-400">
                            Sim, no Plano Premium você pode baixar as músicas no aplicativo para ouvir offline (sem internet), igualzinho ao Spotify.
                        </AccordionContent>
                    </AccordionItem>
                 </Accordion>
             </div>
        </section>

        {/* Chamativa Guarantee Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-yellow-500 via-orange-500 to-yellow-600 text-slate-900">
             <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md p-8 md:p-12 rounded-[2rem] shadow-2xl border-4 border-white/50 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden">
                 
                 {/* Shine Effect */}
                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 translate-x-[-200%] animate-[shimmer_2s_infinite]"></div>

                 <div className="shrink-0 relative z-10">
                     <div className="w-32 h-32 bg-slate-900 rounded-full flex items-center justify-center border-4 border-yellow-400 shadow-xl">
                        <ShieldCheck size={64} className="text-yellow-400" />
                     </div>
                 </div>
                 <div className="text-center md:text-left z-10">
                     <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 uppercase italic tracking-tight">Risco Zero Absoluto</h3>
                     <h4 className="text-xl font-bold text-red-600 mb-4 bg-red-100 px-3 py-1 inline-block rounded-lg transform -rotate-1">7 Dias de Garantia Blindada</h4>
                     <p className="text-slate-700 text-lg leading-relaxed font-medium">
                         Você não precisa decidir agora. <span className="font-bold">Entre, ouça as músicas e teste a IA.</span> Se você não sentir que está aprendendo 3x mais rápido, nós devolvemos cada centavo do seu dinheiro. Basta um único e-mail.
                     </p>
                 </div>
             </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-slate-500 py-12 text-center text-sm border-t border-slate-900">
          <div className="container mx-auto px-4">
            <div className="flex justify-center gap-4 mb-4 text-purple-500">
                <Music size={24} />
            </div>
            <p className="mb-4 font-bold text-slate-300 text-lg">Leis Cantadas ®</p>
            <p className="mb-4">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
            <p className="text-xs text-slate-700 max-w-2xl mx-auto">
                Este site não tem vínculo com o Governo Federal ou organizadoras de concurso.
                Metodologia baseada em técnicas de mnemônica musical.
            </p>
          </div>
        </footer>

        <LeisCantadasUpsellModal 
          isOpen={isUpsellModalOpen}
          onClose={() => setIsUpsellModalOpen(false)}
          onConfirm={() => {
              window.location.href = applyUtms('https://pay.lowify.com.br/go.php?offer=leis-upsell'); 
          }}
          onReject={() => {
              window.location.href = applyUtms('https://pay.lowify.com.br/checkout?product_id=leis-basic'); 
          }}
        />
      </div>
    </>
  );
};

export default LeisCantadasLanding;