import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Check, Star, ShieldCheck, 
  Zap, ChevronRight, Brain, BookOpen, Smile, Baby, Lock, HelpCircle, ArrowRight, Pencil, Puzzle, Download, Printer, Heart, Clock, AlertTriangle, Target, Lightbulb
} from "lucide-react";
import EducacaoKidsV2UpsellModal from './EducacaoKidsV2UpsellModal';
import UtmifyScript from './UtmifyScript';

// Images
import heroImg from '@/assets/images/educacao-kids/hero-kids.png';
import mockupImg from '@/assets/images/educacao-kids/mockup-completo.png';
import bonusAlfabeto from '@/assets/images/educacao-kids/bonus-alfabeto.png';
import bonusQuebraCabeca from '@/assets/images/educacao-kids/bonus-quebra-cabeca.png';
import bonusPalavras from '@/assets/images/educacao-kids/bonus-formando-palavras.png';

// Placeholders
const vslPlaceholder = "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1000&auto=format&fit=crop";
const testimonial1 = "https://randomuser.me/api/portraits/women/44.jpg";
const testimonial2 = "https://randomuser.me/api/portraits/women/68.jpg";
const testimonial3 = "https://randomuser.me/api/portraits/women/12.jpg";
const testimonial4 = "https://randomuser.me/api/portraits/men/32.jpg";

// Google Icon
const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
  </svg>
);

const EducacaoKidsV2Landing = () => {
  const [isUpsellModalOpen, setIsUpsellModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 22, seconds: 35 });
  const [todayDate, setTodayDate] = useState("");
  
  // UTM Helper
  const applyUtms = (url: string) => {
    try {
        const currentSearchParams = new URLSearchParams(window.location.search);
        const paramsString = currentSearchParams.toString();
        if (!paramsString) return url;
        const separator = url.indexOf("?") === -1 ? "?" : "&";
        return `${url}${separator}${paramsString}`;
    } catch (e) { return url; }
  };

  // Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    const date = new Date();
    setTodayDate(date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' }));

    return () => clearInterval(timer);
  }, []);

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Kit Grafismo Fonético - Leitura Acelerada</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        
        {/* Meta Pixel Code Educacao Kids */}
        <script>{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '880360944811912');
          fbq('track', 'PageView');
        `}</script>
        <noscript>{`
          <img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=880360944811912&ev=PageView&noscript=1" />
        `}</noscript>

        <style>{`
          @keyframes shimmer {
            0% { background-position: 200% center; }
            100% { background-position: -200% center; }
          }
          @keyframes scale-only-pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          .animate-scale-pulse {
            animation: scale-only-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          .btn-hypnotic {
            background: linear-gradient(110deg, #16a34a 25%, #4ade80 50%, #16a34a 75%);
            background-size: 200% 100%;
            animation: shimmer 3s linear infinite, scale-only-pulse 3s ease-in-out infinite;
            border-bottom: 4px solid #14532d;
          }
          .btn-hypnotic:hover {
            background: linear-gradient(110deg, #16a34a 35%, #86efac 50%, #16a34a 65%);
            background-size: 200% 100%;
            animation: shimmer 1s linear infinite, scale-only-pulse 3s ease-in-out infinite;
            transform: scale(1.03);
          }
          /* Hide scrollbar for carousel */
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </Helmet>
      <UtmifyScript />
      
      <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
        
        {/* Sticky Bar */}
        <div className="bg-red-600 text-white text-center py-2 px-2 font-bold text-xs md:text-sm animate-pulse sticky top-0 z-50 shadow-md flex justify-center items-center gap-2 uppercase tracking-wide border-b-4 border-red-800">
           🔥 Desconto Liberado Apenas Hoje: {todayDate}
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-sky-400 via-sky-300 to-white pt-10 pb-20 px-4 overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              
              {/* Text Content - Order 2 Mobile, Order 1 Desktop */}
              <div className="flex flex-col items-center text-center md:items-start md:text-left order-2 md:order-1">
                <Badge className="bg-white text-blue-700 hover:bg-blue-50 mb-6 px-4 py-2 text-sm font-bold border-2 border-blue-600 inline-flex items-center gap-2 shadow-lg rounded-full uppercase">
                  <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" className="w-5 h-auto shadow-sm" alt="USA"/> Método Americano de Alfabetização
                </Badge>
                
                <h1 className="text-3xl md:text-6xl font-black mb-4 leading-tight text-white drop-shadow-md tracking-tight">
                  Ensine Seu Filho a Ler <br/>
                  <span className="text-yellow-300 text-4xl md:text-7xl">Até 5x Mais Rápido</span> <br/>
                  <span className="bg-blue-900 text-white px-4 py-1 transform -rotate-2 inline-block mt-2 rounded-xl border-b-4 border-black/30 shadow-xl text-2xl md:text-5xl">SEM PRESSÃO!</span>
                </h1>
                
                <p className="text-lg md:text-xl mb-8 text-blue-900 font-bold leading-relaxed max-w-lg md:max-w-none">
                  Com apenas <span className="bg-yellow-300 px-1 rounded">10 minutos por dia</span>. Ideal para crianças de 2 a 12 anos, <span className="underline decoration-red-500 decoration-4">mesmo com TDAH, Autismo ou dificuldade de foco.</span>
                </p>
                
                <div className="flex flex-col gap-4 w-full md:w-auto items-center md:items-start">
                    <Button 
                        onClick={scrollToPricing}
                        className="btn-hypnotic text-white font-black text-xl md:text-3xl py-8 px-12 rounded-full w-full md:w-fit uppercase flex items-center justify-center gap-3 shadow-xl"
                    >
                        QUERO MEU PEQUENO LENDO <ArrowRight size={32} strokeWidth={4} />
                    </Button>
                    <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-blue-900 font-bold bg-white/30 px-4 py-2 rounded-full backdrop-blur-sm">
                        <div className="flex text-yellow-400"><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/></div>
                        <span>+15.000 Famílias Ajudadas</span>
                    </div>
                </div>
              </div>

              {/* Image Content - Order 1 Mobile, Order 2 Desktop */}
              <div className="relative order-1 md:order-2 flex justify-center">
                 <div className="relative w-[280px] md:w-[400px] aspect-square group">
                    <div className="absolute inset-0 bg-white rounded-full blur-3xl opacity-40 animate-pulse"></div>
                    <img 
                        src={heroImg} 
                        alt="Criança feliz lendo" 
                        className="relative rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 border-white transform rotate-2 group-hover:rotate-0 transition-all duration-500 object-cover w-full h-full z-10"
                    />
                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -right-4 bg-white px-6 py-4 rounded-xl shadow-xl border-b-4 border-blue-600 animate-bounce z-20">
                        <p className="font-black text-blue-600 text-2xl">10 min</p>
                        <p className="text-xs text-slate-500 font-bold uppercase">Por dia</p>
                    </div>
                 </div>
              </div>

            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{clipPath: "polygon(0 100%, 100% 100%, 100% 0)"}}></div>
        </section>

        {/* Agitation / Truth Section (No CTA - "Não") */}
        <section className="py-12 px-4 bg-white relative -mt-10 z-20">
            <div className="max-w-4xl mx-auto">
                <div className="bg-slate-50 border-l-8 border-red-500 rounded-r-2xl shadow-xl p-6 md:p-10 mb-12">
                    <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-6 flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
                        <AlertTriangle className="text-red-500 shrink-0 mt-1 mx-auto md:mx-0" size={32} fill="currentColor" />
                        <span>Muitos pais acham que "cada criança tem seu tempo". Até que...</span>
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-slate-700 font-medium bg-white/50 p-2 rounded-lg">
                            <span className="text-2xl shrink-0">👎🏻</span> <span>As tarefas de leitura viram um campo de guerra e choro.</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-700 font-medium bg-white/50 p-2 rounded-lg">
                            <span className="text-2xl shrink-0">👎🏻</span> <span>As notas baixas começam a aparecer.</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-700 font-medium bg-white/50 p-2 rounded-lg">
                            <span className="text-2xl shrink-0">👎🏻</span> <span>Ela se sente “menos inteligente” do que os coleguinhas.</span>
                        </div>
                        <p className="text-red-600 font-bold mt-4 border-t border-red-200 pt-4 text-center md:text-left">
                            E o pior: Começa a achar que não é capaz, sem entender o porquê.
                        </p>
                    </div>
                </div>

                <div className="text-center mb-10">
                    <h3 className="text-3xl font-black text-blue-900 mb-4">
                        A Verdade Que Ninguém Te Conta 🤫
                    </h3>
                    <p className="text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
                        O que realmente atrasa seu filho é a <strong className="text-red-500 bg-red-50 px-1">falta de estímulo fonético na fase certa</strong>. O cérebro precisa "ver" o som antes de ler. Mas calma, a culpa não é sua! Ninguém te ensinou isso... até agora.
                    </p>
                </div>
            </div>
        </section>

        {/* Vertical VSL Section (With CTA - "Sim") */}
        <section className="py-12 px-4 bg-slate-900 text-white text-center">
            <div className="max-w-md mx-auto">
                <h2 className="text-2xl font-bold mb-6">Veja como é fácil ensinar seu filho(a) a ler...</h2>
                <div className="aspect-[9/16] bg-slate-800 rounded-3xl border-4 border-slate-700 overflow-hidden relative shadow-2xl mx-auto mb-8">
                    <img src={vslPlaceholder} alt="Video Placeholder" className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-xl animate-pulse">
                            <ArrowRight size={40} className="ml-1" fill="white" />
                        </div>
                        <p className="mt-4 font-bold uppercase tracking-widest">Aperte o Play 👇</p>
                    </div>
                </div>
                
                <Button 
                    onClick={scrollToPricing}
                    className="btn-hypnotic text-white font-black text-lg md:text-xl py-6 px-10 rounded-full w-full md:w-auto mx-auto shadow-lg mt-4"
                >
                    QUERO TESTAR O MÉTODO
                </Button>
            </div>
        </section>

        {/* Benefits Section (No CTA - "Não") */}
        <section className="py-16 px-4 bg-yellow-400 relative">
            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-4">Por que o Kit Funciona?</h2>
                    <p className="text-blue-900/80 font-bold text-lg">O segredo está no <span className="bg-white px-2 rounded text-blue-900 border-2 border-blue-900">Grafismo Fonético</span></p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border-b-8 border-blue-500 transform hover:-translate-y-1 transition-transform">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
                            <div className="bg-blue-100 p-3 rounded-full text-blue-600 shrink-0"><Brain size={32}/></div>
                            <div>
                                <h3 className="font-bold text-xl text-slate-800 mb-2">Conexões Cerebrais</h3>
                                <p className="text-slate-600">Ao traçar lines e curvas associadas a sons, a criança fortalece as áreas do cérebro responsáveis pela leitura.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border-b-8 border-green-500 transform hover:-translate-y-1 transition-transform">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
                            <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0"><Pencil size={32}/></div>
                            <div>
                                <h3 className="font-bold text-xl text-slate-800 mb-2">Coordenação Motora</h3>
                                <p className="text-slate-600">Prepara a mãozinha para a escrita cursiva e bastão, melhorando a caligrafia desde cedo.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border-b-8 border-purple-500 transform hover:-translate-y-1 transition-transform">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
                            <div className="bg-purple-100 p-3 rounded-full text-purple-600 shrink-0"><Smile size={32}/></div>
                            <div>
                                <h3 className="font-bold text-xl text-slate-800 mb-2">Sem Pressão</h3>
                                <p className="text-slate-600">As atividades parecem brincadeira. A criança aprende se divertindo, sem perceber que está estudando.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border-b-8 border-red-500 transform hover:-translate-y-1 transition-transform">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
                            <div className="bg-red-100 p-3 rounded-full text-red-600 shrink-0"><Puzzle size={32}/></div>
                            <div>
                                <h3 className="font-bold text-xl text-slate-800 mb-2">Inclusivo</h3>
                                <p className="text-slate-600">Metodologia visual e prática, altamente recomendada para crianças com TDAH, Autismo ou dislexia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Wave divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg className="relative block w-[calc(130%+1.3px)] h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
                </svg>
            </div>
        </section>

        {/* Transformation Section (With CTA - "Sim") */}
        <section className="py-16 px-4 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 mb-10">
                    E em poucos dias você vai notar <br/> <span className="text-green-500">a diferença no seu filho:</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="p-6 rounded-2xl border-2 border-slate-100 bg-slate-50 flex flex-col items-center">
                        <Target className="w-12 h-12 text-blue-500 mb-4" />
                        <h3 className="font-bold text-lg text-slate-900 mb-2">Leitura Fluida</h3>
                        <p className="text-sm text-slate-600">Vai começar a ler placas na rua, embalagens e livrinhos sem gaguejar.</p>
                    </div>
                    <div className="p-6 rounded-2xl border-2 border-slate-100 bg-slate-50 flex flex-col items-center">
                        <Smile className="w-12 h-12 text-yellow-500 mb-4" />
                        <h3 className="font-bold text-lg text-slate-900 mb-2">Autoconfiança</h3>
                        <p className="text-sm text-slate-600">O orgulho de conseguir ler sozinho vai transformar a autoestima dele.</p>
                    </div>
                    <div className="p-6 rounded-2xl border-2 border-slate-100 bg-slate-50 flex flex-col items-center">
                        <Lightbulb className="w-12 h-12 text-purple-500 mb-4" />
                        <h3 className="font-bold text-lg text-slate-900 mb-2">Gosto por Estudar</h3>
                        <p className="text-sm text-slate-600">O momento do dever de casa vai deixar de ser uma briga para ser um prazer.</p>
                    </div>
                </div>

                <Button 
                    onClick={scrollToPricing}
                    className="btn-hypnotic text-white font-black text-lg md:text-xl py-6 px-10 rounded-full w-full md:w-auto mx-auto shadow-lg"
                >
                    QUERO ESSA TRANSFORMAÇÃO
                </Button>
            </div>
        </section>

        {/* What's Included Section (No CTA - "Não") */}
        <section className="py-16 px-4 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-black mb-4">Veja tudo que você vai receber:</h2>
                    <p className="text-slate-400 text-lg">Um material completo, organizado e pronto para imprimir.</p>
                </div>

                {/* Mockup Image */}
                <div className="flex justify-center mb-12">
                    <img 
                        src={mockupImg} 
                        alt="Kit Completo Mockup" 
                        className="w-full max-w-4xl object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        "Caderno do Alfabeto", "Coordenação Motora", "Junção de Sílabas", "Formação de Palavras",
                        "Pequenos Textos", "Interpretação", "Matemática Básica", "Desenhos para Colorir"
                    ].map((item, idx) => (
                        <div key={idx} className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex items-center justify-center md:justify-start gap-3">
                            <div className="bg-green-500/20 p-2 rounded-full text-green-400 shrink-0"><Check size={16} strokeWidth={3}/></div>
                            <span className="font-bold text-sm md:text-base text-center md:text-left">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* How to Start (With CTA - "Sim") */}
        <section className="py-16 px-4 bg-slate-50">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-black text-slate-800 mb-10">Muito Simples de Começar!</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white mb-4 shadow-lg border-4 border-blue-200">
                            <Download size={32} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">1. Chega no E-mail</h3>
                        <p className="text-sm text-slate-600">Acesso imediato à plataforma com todos os PDFs.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mb-4 shadow-lg border-4 border-green-200">
                            <Printer size={32} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">2. Você Imprime</h3>
                        <p className="text-sm text-slate-600">Imprima quando quiser, no seu tempo. Acesso vitalício.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-white mb-4 shadow-lg border-4 border-yellow-200">
                            <Smile size={32} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">3. Eles Amam!</h3>
                        <p className="text-sm text-slate-600">Atividades lúdicas que parecem brincadeira.</p>
                    </div>
                </div>

                {/* Extra CTA */}
                <div className="text-center mt-12">
                    <Button 
                        onClick={scrollToPricing}
                        className="btn-hypnotic text-white font-black text-lg md:text-xl py-6 px-10 rounded-full w-full md:w-auto mx-auto shadow-lg"
                    >
                        COMEÇAR AGORA POR R$ 9,90
                    </Button>
                </div>
            </div>
        </section>

        {/* Social Proof (No CTA - "Não") */}
        <section className="py-16 px-4 bg-white border-y border-slate-200">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-black text-center text-slate-800 mb-10">
                    O que Pais e Educadores dizem:
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <TestimonialCard 
                        img={testimonial1}
                        name="Mariana Costa"
                        role="Mãe de Gêmeos"
                        text="Meus pequenos estavam travados na leitura. Com o Grafismo Fonético, foi como mágica. Em 2 semanas já estavam juntando as sílabas sozinhos!"
                    />
                    <TestimonialCard 
                        img={testimonial2}
                        name="Profa. Helena"
                        role="Pedagoga"
                        text="Uso em sala de aula e recomendo para todos os pais. É o melhor material de apoio que já encontrei. As crianças amam as atividades."
                    />
                    <TestimonialCard 
                        img={testimonial3}
                        name="Fernanda Lima"
                        role="Mãe Atípica"
                        text="Meu filho tem TDAH e nunca parava quieto para estudar. As atividades são tão visuais e rápidas que ele faz sem reclamar. Evoluiu muito!"
                    />
                    <TestimonialCard 
                        img={testimonial4}
                        name="Ricardo Alves"
                        role="Pai do Davi"
                        text="Vale cada centavo. Só de ver a alegria dele conseguindo ler as placas na rua já pagou o investimento. Muito obrigado!"
                    />
                </div>
            </div>
        </section>

        {/* Bonus Section (With CTA - "Sim") */}
        <section className="py-16 px-4 bg-blue-50 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <Badge className="bg-red-100 text-red-600 font-bold mb-4 px-4 py-1 text-sm border border-red-200">
                        🎁 PRESENTE EXCLUSIVO
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-800">
                        Leve 3 Bônus Incríveis <br/><span className="text-green-600">Totalmente de Graça!</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    <PhotoBonusCard 
                        image={bonusAlfabeto}
                        title="Alfabeto com Imagens"
                        desc="Apresenta cada letra com imagens associadas para familiarização visual e rápida memorização."
                        price="37,00"
                    />
                    <PhotoBonusCard 
                        image={bonusQuebraCabeca}
                        title="Quebra-Cabeça Alfabeto"
                        desc="Atividades de quebra-cabeça para fixação divertida das letras e desenvolvimento lógico."
                        price="47,00"
                    />
                    <PhotoBonusCard 
                        image={bonusPalavras}
                        title="Formando Palavras"
                        desc="Exercícios práticos que incentivam a leitura e escrita, construindo vocabulário desde cedo."
                        price="57,00"
                    />
                </div>
                
                <div className="mt-12 text-center">
                    <p className="text-base md:text-xl font-bold text-slate-700 mb-6">
                        Valor Total dos Bônus: <span className="line-through text-red-400">R$ 141,00</span> = <span className="bg-green-100 text-green-800 px-2 rounded border border-green-200">GRÁTIS HOJE</span>
                    </p>
                    <Button 
                        onClick={scrollToPricing}
                        className="btn-hypnotic text-white font-black text-base md:text-lg px-8 py-6 rounded-full shadow-lg animate-scale-pulse w-full md:w-auto transform hover:scale-105 transition-transform"
                    >
                        QUERO GARANTIR MEUS BÔNUS
                    </Button>
                </div>
            </div>
        </section>

        {/* Pricing Section (Updated Prices: 9.90 / 19.90) */}
        <section id="pricing" className="py-16 px-4 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Escolha o Melhor para seu Filho</h2>
                    <p className="text-blue-100 text-lg">Acesso vitalício e imediato por um valor simbólico.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
                    
                    {/* Basic Plan */}
                    <div className="bg-green-50 rounded-3xl p-6 border-4 border-green-200 opacity-95 hover:opacity-100 transition-opacity mt-4 order-2 md:order-1">
                        <h3 className="text-xl font-bold text-green-800 text-center uppercase tracking-wide">Kit Básico</h3>
                        <div className="text-center my-6">
                            <span className="text-sm text-green-700 line-through">De R$ 97,00</span>
                            <div className="text-4xl font-black text-green-900">R$ 9,90</div>
                        </div>
                        <ul className="space-y-3 mb-8 text-sm text-green-800">
                            <li className="flex items-center gap-2"><Check size={16} className="text-green-600"/> Arquivos em PDF</li>
                            <li className="flex items-center gap-2"><Check size={16} className="text-green-600"/> Grafismo Fonético</li>
                            <li className="flex items-center gap-2 text-red-400 line-through"><Lock size={16}/> Sem Bônus Exclusivos</li>
                            <li className="flex items-center gap-2 text-red-400 line-through"><Lock size={16}/> Sem Jogos Educativos</li>
                        </ul>
                        <Button 
                            onClick={() => setIsUpsellModalOpen(true)}
                            className="w-full bg-green-200 hover:bg-green-300 text-green-800 font-bold py-6 rounded-xl border-b-4 border-green-400 active:border-b-0 active:translate-y-1 transition-all"
                        >
                            QUERO O BÁSICO
                        </Button>
                    </div>

                    {/* Complete Plan (Hero) */}
                    <div className="bg-white rounded-3xl p-8 border-4 border-yellow-400 shadow-2xl relative transform md:scale-105 order-1 md:order-2">
                        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide shadow-md whitespace-nowrap border-2 border-white animate-pulse">
                            🏆 Oferta Completa
                        </div>
                        <h3 className="text-2xl font-black text-blue-600 text-center uppercase tracking-wide">Kit Completo + Bônus</h3>
                        <div className="text-center my-6 bg-blue-50 py-4 rounded-xl border border-blue-100">
                            <span className="text-sm text-slate-400 line-through">De R$ 197,00</span>
                            <div className="text-6xl font-black text-green-600 tracking-tighter">R$ 19,90</div>
                            <span className="text-xs font-bold text-blue-800 bg-blue-200 px-2 py-1 rounded-full">Pagamento Único</span>
                        </div>
                        <ul className="space-y-3 mb-8 text-sm font-bold text-slate-700">
                            <li className="flex items-center gap-2"><div className="bg-green-100 p-1 rounded-full"><Check size={14} className="text-green-600"/></div> Kit Grafismo Completo</li>
                            <li className="flex items-center gap-2"><div className="bg-green-100 p-1 rounded-full"><Check size={14} className="text-green-600"/></div> +100 Atividades PDF</li>
                            <li className="flex items-center gap-2"><div className="bg-green-100 p-1 rounded-full"><Check size={14} className="text-green-600"/></div> TODOS OS 3 BÔNUS</li>
                            <li className="flex items-center gap-2"><div className="bg-green-100 p-1 rounded-full"><Check size={14} className="text-green-600"/></div> Suporte Pedagógico</li>
                        </ul>
                        <Button 
                            onClick={() => window.location.href = applyUtms('https://pay.lowify.com.br/go.php?offer=65lwvno')}
                            className="btn-hypnotic w-full text-white font-black text-xl py-8 rounded-xl shadow-[0_4px_0_rgb(21,128,61)]"
                        >
                            QUERO O KIT COMPLETO
                        </Button>
                        <p className="text-center text-xs text-slate-400 mt-4 flex justify-center gap-2">
                            <Lock size={12}/> Compra Segura • Acesso Imediato
                        </p>
                    </div>

                </div>
            </div>
        </section>

        {/* Guarantee (With CTA - "Sim") */}
        <section className="py-16 px-4 bg-white">
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 border-2 border-dashed border-blue-200 p-8 rounded-3xl bg-blue-50/50 text-center md:text-left">
                <div className="shrink-0">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center border-4 border-yellow-400 shadow-xl mx-auto md:mx-0">
                        <ShieldCheck size={64} className="text-green-500"/>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-black text-slate-800 mb-2">Garantia Incondicional de 7 Dias</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        Se você sentir que o material não ajudou seu filho, nós devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. O risco é todo nosso.
                    </p>
                    <Button 
                        onClick={scrollToPricing}
                        className="btn-hypnotic text-white font-black text-lg py-4 px-8 rounded-full shadow-lg"
                    >
                        TESTAR SEM RISCO
                    </Button>
                </div>
            </div>
        </section>

        {/* Google Reviews Section (No CTA - "Não") */}
        <section className="py-12 md:py-16 px-4 bg-slate-50 border-t border-slate-200">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <h3 className="text-lg md:text-2xl font-bold text-slate-800 flex items-center justify-center gap-2">
                        O que estão falando no <GoogleIcon /> <span className="text-blue-600 sr-only">Google</span>
                    </h3>
                    <div className="flex justify-center items-center gap-1 mt-2">
                        <span className="text-yellow-400 text-lg md:text-xl">★★★★★</span>
                        <span className="text-slate-500 text-xs md:text-sm">(4.9/5.0 de 2.100+ avaliações)</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {/* G-Review 1 */}
                    <div className="bg-white p-4 md:p-6 rounded-xl border border-slate-200 shadow-sm relative">
                        <div className="absolute top-4 right-4"><GoogleIcon /></div>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center font-bold text-purple-600">AM</div>
                            <div>
                                <p className="font-bold text-xs md:text-sm text-slate-900">Ana Maria</p>
                                <p className="text-[10px] text-slate-500">2 dias atrás</p>
                            </div>
                        </div>
                        <div className="text-yellow-400 text-xs mb-2">★★★★★</div>
                        <p className="text-slate-600 text-xs md:text-sm">"Comprei para meu filho de 6 anos que estava com dificuldade. Ele amou as atividades de ligar os pontos e o alfabeto! Muito bom."</p>
                    </div>

                    {/* G-Review 2 */}
                    <div className="bg-white p-4 md:p-6 rounded-xl border border-slate-200 shadow-sm relative">
                        <div className="absolute top-4 right-4"><GoogleIcon /></div>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">RP</div>
                            <div>
                                <p className="font-bold text-xs md:text-sm text-slate-900">Rafael Pereira</p>
                                <p className="text-[10px] text-slate-500">1 semana atrás</p>
                            </div>
                        </div>
                        <div className="text-yellow-400 text-xs mb-2">★★★★★</div>
                        <p className="text-slate-600 text-xs md:text-sm">"Material excelente. Sou professor e uso em sala de aula. As crianças se engajam muito mais do que com o livro didático comum."</p>
                    </div>

                    {/* G-Review 3 */}
                    <div className="bg-white p-4 md:p-6 rounded-xl border border-slate-200 shadow-sm relative">
                        <div className="absolute top-4 right-4"><GoogleIcon /></div>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center font-bold text-green-600">JC</div>
                            <div>
                                <p className="font-bold text-xs md:text-sm text-slate-900">Júlia Costa</p>
                                <p className="text-[10px] text-slate-500">Ontem</p>
                            </div>
                        </div>
                        <div className="text-yellow-400 text-xs mb-2">★★★★★</div>
                        <p className="text-slate-600 text-xs md:text-sm">"Chegou no e-mail na hora. Imprimi no trabalho e levei pra casa. Minha filha de 4 anos já aprendeu a escrever o nome!"</p>
                    </div>
                </div>
            </div>
        </section>

        {/* FAQ (With CTA - "Sim") */}
        <section className="py-12 px-4 bg-white">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-black text-center text-slate-800 mb-8">Perguntas Frequentes</h2>
                <Accordion type="single" collapsible className="space-y-2 mb-10">
                    <FAQItem q="O material é físico ou digital?" a="É 100% digital (PDF). Você recebe no e-mail, baixa e imprime quantas vezes quiser." />
                    <FAQItem q="Para qual idade é indicado?" a="Ideal para crianças de 2 a 12 anos, ou qualquer criança em fase de alfabetização ou com dificuldades." />
                    <FAQItem q="Serve para autistas ou TDAH?" a="Sim! O método visual e prático é altamente recomendado por especialistas para crianças atípicas." />
                    <FAQItem q="Como acesso o material?" a="O acesso chega no seu e-mail imediatamente após a confirmação do pagamento." />
                </Accordion>

                {/* Extra CTA */}
                <div className="text-center">
                    <Button 
                        onClick={scrollToPricing}
                        className="btn-hypnotic text-white font-black text-lg md:text-xl py-6 px-10 rounded-full w-full md:w-auto mx-auto shadow-lg"
                    >
                        TIRAR MINHAS DÚVIDAS AGORA
                    </Button>
                </div>
            </div>
        </section>

        {/* Aggressive CTA Section (Final - "Sim") */}
        <section className="py-16 md:py-20 px-4 bg-slate-900 text-white text-center relative overflow-hidden">
            {/* Particles */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="absolute bg-blue-500 rounded-full animate-pulse" style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 10 + 2}px`,
                        height: `${Math.random() * 10 + 2}px`,
                        animationDuration: `${Math.random() * 2 + 1}s`
                    }}></div>
                ))}
            </div>

            <div className="max-w-3xl mx-auto relative z-10">
                <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-xl shadow-xl mb-6 animate-bounce">
                    <div className="text-xs font-bold uppercase tracking-wider mb-1 text-red-100">⚠️ ÚLTIMA CHANCE</div>
                    <div className="text-3xl font-mono font-black tracking-widest">
                        {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                    </div>
                </div>

                <h2 className="text-2xl md:text-5xl font-black mb-6 uppercase leading-tight">
                    Não Deixe o Futuro do Seu Filho <br/> <span className="text-yellow-400">Para Depois!</span>
                </h2>
                
                <p className="text-slate-300 text-base md:text-lg mb-8 max-w-xl mx-auto">
                    A alfabetização é a base de tudo. Cada dia sem o estímulo certo é um dia perdido no desenvolvimento dele. <br/>
                    <strong className="text-white">Garanta o futuro dele pelo preço de um lanche.</strong>
                </p>

                <div>
                    <Button 
                        onClick={scrollToPricing}
                        className="btn-hypnotic text-white font-black text-lg md:text-xl py-8 px-12 rounded-full shadow-[0_0_40px_rgba(37,99,235,0.6)] transform transition hover:scale-105 active:scale-95 animate-pulse w-full md:w-auto mx-auto"
                    >
                        SIM! QUERO AJUDAR MEU FILHO <ArrowRight className="ml-2" />
                    </Button>
                </div>
                
                <div className="mt-8 flex justify-center gap-6 text-slate-400 text-xs md:text-sm">
                    <span className="flex items-center gap-1"><Lock size={14}/> Compra Segura</span>
                    <span className="flex items-center gap-1"><Clock size={14}/> Acesso Imediato</span>
                    <span className="flex items-center gap-1"><ShieldCheck size={14}/> Garantia 7 Dias</span>
                </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="bg-blue-900 text-white py-12 text-center border-t-8 border-yellow-400">
            <div className="container mx-auto px-4">
                <div className="flex justify-center items-center gap-2 mb-4 font-bold text-xl">
                    <Baby /> Educação Kids
                </div>
                <p className="text-sm opacity-80 mb-4">Copyright © {new Date().getFullYear()} – Editora Inove. Todos os direitos reservados.</p>
                <div className="flex justify-center gap-4 text-xs opacity-60">
                    <span>Políticas de Privacidade</span>
                    <span>Termos de Uso</span>
                </div>
            </div>
        </footer>

        <EducacaoKidsV2UpsellModal 
            isOpen={isUpsellModalOpen}
            onClose={() => setIsUpsellModalOpen(false)}
            onConfirm={() => {
                window.location.href = applyUtms('https://pay.lowify.com.br/go.php?offer=ke895za'); // Link Upsell 14.90
            }}
            onReject={() => {
                window.location.href = applyUtms('https://pay.lowify.com.br/checkout.php?product_id=C4T1vY'); // Link Basic 9.90
            }}
        />

      </div>
    </>
  );
};

// Subcomponents
const TestimonialCard = ({ img, name, role, text }: { img: string, name: string, role: string, text: string }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-start">
        <img src={img} alt={name} className="w-12 h-12 rounded-full border-2 border-blue-200" />
        <div>
            <div className="flex items-center gap-2 mb-1">
                <h4 className="font-bold text-slate-900 text-sm">{name}</h4>
                <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full font-bold">{role}</span>
            </div>
            <div className="flex text-yellow-400 text-xs mb-2"><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/></div>
            <p className="text-xs md:text-sm text-slate-600 italic">"{text}"</p>
        </div>
    </div>
);

const FAQItem = ({ q, a }: { q: string, a: string }) => (
    <AccordionItem value={q} className="bg-white border border-slate-200 rounded-lg px-4">
        <AccordionTrigger className="font-bold text-slate-700 hover:text-blue-600 hover:no-underline text-left text-sm md:text-base">{q}</AccordionTrigger>
        <AccordionContent className="text-slate-600 text-sm">{a}</AccordionContent>
    </AccordionItem>
);

const PhotoBonusCard = ({ title, desc, price, image }: { title: string, desc: string, price: string, image: string }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 flex flex-col hover:-translate-y-2 transition-transform duration-300">
        <div className="h-40 md:h-48 overflow-hidden relative">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute top-2 right-2 bg-green-600 text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded">GRÁTIS</div>
        </div>
        <div className="p-4 md:p-6 flex-1 flex flex-col">
            <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-600 text-xs md:text-sm mb-4 flex-1">{desc}</p>
            <div className="pt-4 border-t border-slate-100">
                <span className="text-[10px] md:text-xs text-slate-400 line-through block">Vendido por R$ {price}</span>
                <span className="text-green-600 font-bold text-sm md:text-base">Hoje: R$ 0,00</span>
            </div>
        </div>
    </div>
);

export default EducacaoKidsV2Landing;