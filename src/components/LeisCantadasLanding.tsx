import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Check, Star, ShieldCheck, Zap, Lock, ChevronRight, 
  Headphones, Music, Play, Pause, Brain, Clock, 
  Dumbbell, Sparkles, Car, Download, ListMusic
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

  // Helper UTMs (mantendo padrão do projeto)
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
        
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 px-4 font-bold text-xs md:text-sm sticky top-0 z-50 shadow-[0_0_20px_rgba(168,85,247,0.5)] flex justify-center items-center gap-2">
           🎧 OFERTA DE LANÇAMENTO: ACESSO TOTAL LIBERADO HOJE
        </div>

        {/* Hero Section */}
        <section className="relative pt-12 pb-24 px-4 overflow-hidden">
          {/* Background Gradient Effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-900/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div className="text-center md:text-left">
                <Badge className="bg-slate-800 text-purple-400 hover:bg-slate-800 mb-6 px-4 py-1.5 text-sm font-bold border border-purple-500/30 inline-flex items-center gap-2">
                  <Brain size={16} /> Neurociência Aplicada aos Estudos
                </Badge>
                
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                  Memorize Todo o Edital <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Sem Ler Nenhuma Página</span>
                </h1>
                
                <p className="text-lg md:text-xl mb-8 text-slate-400 max-w-xl mx-auto md:mx-0 font-medium leading-relaxed">
                  Transforme o Direito Constitucional, Penal e Administrativo em músicas "chiclete" que grudam no seu cérebro. <br/>
                  <span className="text-white font-bold">Mais de 5.000 músicas</span> para você estudar na academia, no ônibus ou limpando a casa.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button 
                        onClick={scrollToPricing}
                        className="bg-green-500 hover:bg-green-400 text-slate-900 font-black text-xl py-8 px-10 rounded-full shadow-[0_0_30px_rgba(34,197,94,0.3)] transform transition hover:scale-105 active:scale-95 flex items-center gap-2"
                    >
                        <Play fill="currentColor" size={24} /> COMEÇAR A OUVIR AGORA
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
              <div className="relative">
                 {/* Fake Music Player UI */}
                 <div className="relative z-10 bg-slate-900/80 backdrop-blur-xl border border-slate-700 p-6 rounded-3xl shadow-2xl max-w-sm mx-auto transform rotate-3 hover:rotate-0 transition-all duration-500">
                    <div className="aspect-square bg-gradient-to-br from-purple-600 to-indigo-800 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden group">
                        <img src={studentHero} alt="Estudante" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay" />
                        <Button 
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="bg-green-500 hover:bg-green-400 text-black rounded-full w-16 h-16 flex items-center justify-center pl-1 shadow-lg transform group-hover:scale-110 transition-transform z-20"
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
                    
                    <div className="space-y-1 mb-4">
                        <h3 className="font-bold text-white text-lg">Artigo 5º - CF/88 (Remix)</h3>
                        <p className="text-slate-400 text-sm">Leis Cantadas • Direito Constitucional</p>
                    </div>

                    <div className="w-full bg-slate-700 h-1.5 rounded-full mb-2 overflow-hidden">
                        <div className={`h-full bg-green-500 rounded-full ${isPlaying ? 'w-2/3 animate-pulse' : 'w-1/3'}`}></div>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500">
                        <span>1:15</span>
                        <span>3:42</span>
                    </div>
                 </div>

                 {/* Decorative Elements */}
                 <Music className="absolute -top-10 -right-10 text-pink-500/20 animate-bounce" size={80} />
                 <Headphones className="absolute -bottom-10 -left-10 text-purple-500/20 animate-pulse" size={80} />
              </div>

            </div>
          </div>
        </section>

        {/* Pain Points / Solution Strip */}
        <section className="py-12 bg-slate-900 border-y border-slate-800">
          <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-10">
                  <h2 className="text-2xl font-bold text-white mb-2">Com o Leis Cantadas, você estuda enquanto:</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex items-center gap-4 hover:border-purple-500 transition-colors">
                      <div className="bg-purple-900/50 p-4 rounded-full text-purple-400">
                          <Dumbbell size={24} />
                      </div>
                      <div>
                          <h3 className="font-bold text-white text-lg">Malha na Academia</h3>
                          <p className="text-slate-400 text-sm">Troque o playlist de treino pelo Artigo 5º.</p>
                      </div>
                  </div>
                  <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex items-center gap-4 hover:border-pink-500 transition-colors">
                      <div className="bg-pink-900/50 p-4 rounded-full text-pink-400">
                          <Sparkles size={24} />
                      </div>
                      <div>
                          <h3 className="font-bold text-white text-lg">Limpa a Casa</h3>
                          <p className="text-slate-400 text-sm">A louça fica limpa e a matéria revisada.</p>
                      </div>
                  </div>
                  <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex items-center gap-4 hover:border-blue-500 transition-colors">
                      <div className="bg-blue-900/50 p-4 rounded-full text-blue-400">
                          <Car size={24} />
                      </div>
                      <div>
                          <h3 className="font-bold text-white text-lg">Está no Trânsito</h3>
                          <p className="text-slate-400 text-sm">Transforme horas perdidas em horas líquidas.</p>
                      </div>
                  </div>
              </div>
          </div>
        </section>

        {/* Catalog Section */}
        <section className="py-20 px-4 bg-slate-950">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
               <Badge className="bg-green-500/10 text-green-400 mb-4 hover:bg-green-500/20 border border-green-500/20">CATÁLOGO GIGANTE</Badge>
               <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                   Mais de <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">5.000 Músicas</span> Disponíveis
               </h2>
               <p className="text-slate-400 max-w-2xl mx-auto">
                   Nossa plataforma funciona igualzinho ao seu app de música favorito. É só dar play nas playlists prontas ou criar a sua.
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Card Areas */}
                <Card className="bg-slate-900 border-slate-800 text-slate-100">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><ListMusic className="text-purple-400"/> Áreas do Direito</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-2 text-sm text-slate-400">
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-500"/> Constitucional</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-500"/> Administrativo</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-500"/> Penal & Processo</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-500"/> Civil & Processo</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-500"/> Tributário</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-500"/> Eleitoral</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-500"/> Previdenciário</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-500"/> E muito mais...</span>
                    </CardContent>
                </Card>

                {/* Card Concursos */}
                <Card className="bg-slate-900 border-slate-800 text-slate-100">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Brain className="text-pink-400"/> Focado no seu Concurso</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-2 text-sm text-slate-400">
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-500"/> Tribunais (TJ, TRT, TRF)</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-500"/> Policiais (PF, PRF, PC)</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-500"/> Bancários (BB, Caixa)</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-500"/> CNU (Unificado)</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-500"/> INSS</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-500"/> Cartórios</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-500"/> OAB</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-500"/> Prefeituras</span>
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

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 bg-slate-950 relative">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-16">
              <div className="inline-block bg-pink-600 text-white px-6 py-2 rounded-xl shadow-[0_0_20px_rgba(236,72,153,0.5)] mb-6 animate-pulse">
                  <div className="text-xs md:text-sm font-bold uppercase tracking-wider mb-1 text-pink-100">⏰ PREÇOS ESPECIAIS EXPIRAM EM:</div>
                  <div className="text-3xl md:text-5xl font-mono font-black tracking-widest text-white">
                      {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                  </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                  Escolha Seu Plano e <br/><span className="text-green-400">Comece a Memorizar</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end max-w-6xl mx-auto">
              
              {/* Plano Mensal */}
              <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-sm flex flex-col relative">
                <h3 className="text-xl font-bold text-slate-400 text-center mb-1">Mensal</h3>
                <p className="text-xs text-center text-slate-500 mb-6">Para testar a plataforma</p>
                
                <div className="text-center mb-6">
                  <p className="text-sm text-slate-500 line-through">De R$ 99,90</p>
                  <span className="text-4xl font-extrabold text-white">R$ 79,90</span>
                  <p className="text-xs text-slate-500 mt-1">cobrado mensalmente</p>
                </div>
                
                <Button 
                    onClick={() => window.location.href = applyUtms('https://pay.lowify.com.br/checkout?product_id=mensal')}
                    className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-6 rounded-xl border border-slate-700"
                >
                    ASSINAR MENSAL
                </Button>
                
                <div className="mt-6 space-y-3 text-sm text-slate-400">
                    <p className="flex items-center gap-2"><Check size={16} className="text-purple-500"/> Acesso ao Catálogo Completo</p>
                    <p className="flex items-center gap-2"><Check size={16} className="text-purple-500"/> Atualizações Semanais</p>
                    <p className="flex items-center gap-2"><Check size={16} className="text-purple-500"/> Playlists Personalizadas</p>
                </div>
              </div>

              {/* Plano Anual (Destaque) */}
              <div className="bg-slate-900 rounded-3xl p-8 border-2 border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.2)] relative z-10 transform md:-translate-y-4">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg whitespace-nowrap">
                  👑 Melhor Opção
                </div>

                <h3 className="text-2xl font-black text-white text-center mb-1 uppercase">Plano Anual</h3>
                <p className="text-sm text-center text-purple-400 font-bold mb-6">Economize R$ 200,00</p>
                
                <div className="text-center mb-6 bg-slate-800/50 py-4 rounded-2xl border border-slate-700">
                  <p className="text-xs text-slate-400 line-through mb-1">De R$ 397,90 por</p>
                  <span className="text-5xl font-black text-green-400 tracking-tighter">R$ 197,90</span>
                  <p className="text-xs text-green-500 font-bold mt-2">Pagamento Único • 12 Meses de Acesso</p>
                  <p className="text-[10px] text-slate-500 mt-1">(Sai por R$ 16,49/mês)</p>
                </div>
                
                <Button 
                    onClick={() => setIsUpsellModalOpen(true)}
                    className="w-full bg-green-600 hover:bg-green-500 text-white font-black text-xl py-8 rounded-xl shadow-lg animate-pulse"
                >
                    QUERO PASSAR ESSE ANO
                </Button>
                
                <div className="mt-8 space-y-4 text-sm text-white font-medium">
                    <p className="flex items-center gap-2"><Check size={18} className="text-green-500"/> <strong>TUDO do Plano Mensal</strong></p>
                    <p className="flex items-center gap-2"><Check size={18} className="text-green-500"/> <strong>Créditos EXTRAS na IA</strong></p>
                    <p className="flex items-center gap-2"><Check size={18} className="text-green-500"/> <strong>Download Offline (App)</strong></p>
                    <p className="flex items-center gap-2"><Check size={18} className="text-green-500"/> <strong>Prioridade no Suporte</strong></p>
                </div>
              </div>

              {/* Plano Semestral */}
              <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-sm flex flex-col relative">
                <h3 className="text-xl font-bold text-slate-400 text-center mb-1">Semestral</h3>
                <p className="text-xs text-center text-slate-500 mb-6">Meio termo</p>
                
                <div className="text-center mb-6">
                  <p className="text-sm text-slate-500 line-through">De R$ 247,90</p>
                  <span className="text-4xl font-extrabold text-white">R$ 167,90</span>
                  <p className="text-xs text-slate-500 mt-1">cobrado a cada 6 meses</p>
                </div>
                
                <Button 
                    onClick={() => window.location.href = applyUtms('https://pay.lowify.com.br/checkout?product_id=semestral')}
                    className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-6 rounded-xl border border-slate-700"
                >
                    ASSINAR SEMESTRAL
                </Button>
                
                <div className="mt-6 space-y-3 text-sm text-slate-400">
                    <p className="flex items-center gap-2"><Check size={16} className="text-purple-500"/> Acesso Completo</p>
                    <p className="flex items-center gap-2"><Check size={16} className="text-purple-500"/> 6 Meses de Acesso</p>
                </div>
              </div>

            </div>
            
            <div className="text-center mt-12 flex items-center justify-center gap-2 text-slate-500 text-sm">
                <Lock size={14} /> Pagamento 100% Seguro via Hotmart/Eduzz
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="py-16 px-4 bg-slate-900 border-t border-slate-800">
             <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-slate-800/50 p-8 rounded-3xl shadow-lg border border-purple-500/20">
                 <div className="shrink-0 relative">
                     <div className="absolute inset-0 bg-purple-500 blur-2xl opacity-20 rounded-full"></div>
                     <ShieldCheck size={100} className="text-purple-500 relative z-10" />
                 </div>
                 <div>
                     <h3 className="text-2xl font-bold text-white mb-2">Garantia Incondicional de 7 Dias</h3>
                     <p className="text-slate-400 leading-relaxed">
                         Entre na plataforma, ouça as músicas, use a IA para criar suas próprias paródias. Se você sentir que não está aprendendo mais rápido, nós devolvemos 100% do seu dinheiro. É risco zero.
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
              window.location.href = applyUtms('https://pay.lowify.com.br/checkout?product_id=leis-anual-full'); 
          }}
        />
      </div>
    </>
  );
};

export default LeisCantadasLanding;