import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Check, Star, ShieldCheck, 
  Zap, ChevronRight, Brain, BookOpen, Smile, Baby, Lock, HelpCircle, ArrowRight, Pencil, Puzzle, AlertTriangle, Download, Printer, Heart
} from "lucide-react";
import EducacaoKidsV2UpsellModal from './EducacaoKidsV2UpsellModal';
import UtmifyScript from './UtmifyScript';

// Placeholders
const heroImg = "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1000&auto=format&fit=crop"; 
const vslPlaceholder = "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1000&auto=format&fit=crop";
const testimonial1 = "https://randomuser.me/api/portraits/women/44.jpg";
const testimonial2 = "https://randomuser.me/api/portraits/women/68.jpg";
const testimonial3 = "https://randomuser.me/api/portraits/women/12.jpg";
const testimonial4 = "https://randomuser.me/api/portraits/men/32.jpg";

// Bonus Images (Placeholders for Kids Material)
const imgBonus1 = "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=500&auto=format&fit=crop";
const imgBonus2 = "https://images.unsplash.com/photo-1596464716127-f9a82763ef5c?q=80&w=500&auto=format&fit=crop";
const imgBonus3 = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=500&auto=format&fit=crop";

// Carousel Activity Images
const carouselImages = [
  { img: "https://images.unsplash.com/photo-1513542789411-b6a5d4412b82?q=80&w=300&auto=format&fit=crop", name: "Alfabeto" },
  { img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=300&auto=format&fit=crop", name: "Coordenação" },
  { img: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=300&auto=format&fit=crop", name: "Sílabas" },
  { img: "https://images.unsplash.com/photo-1596464716127-f9a82763ef5c?q=80&w=300&auto=format&fit=crop", name: "Números" },
  { img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=300&auto=format&fit=crop", name: "Leitura" },
  { img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=300&auto=format&fit=crop", name: "Jogos" },
];

const EducacaoKidsV2Landing = () => {
  const [isUpsellModalOpen, setIsUpsellModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 22, seconds: 35 });
  const [todayDate, setTodayDate] = useState("");
  
  // Carousel Logic
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);

  // Infinite Scroll Logic (JS driven for drag support)
  useEffect(() => {
    const scrollContainer = carouselRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const speed = 1; // Pixels per frame
    let animationId: number;

    const step = () => {
      if (!isCarouselHovered) {
        scrollAmount += speed;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft = scrollAmount;
        }
      } else {
        scrollAmount = scrollContainer.scrollLeft;
      }
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [isCarouselHovered]);
  
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
        <style>{`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 3s infinite ease-in-out;
          }
          .btn-kid {
            box-shadow: 0 4px 0 #00000030;
            transition: all 0.1s;
          }
          .btn-kid:active {
            transform: translateY(4px);
            box-shadow: none;
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
        <div className="bg-red-600 text-white text-center py-2 px-2 font-bold text-xs md:text-sm animate-pulse sticky top-0 z-50 shadow-md flex justify-center items-center gap-2 uppercase tracking-wide">
           🔥 Desconto Liberado Apenas Hoje: {todayDate}
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-sky-400 via-sky-300 to-white pt-10 pb-20 px-4 overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              
              {/* Text Content */}
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
                        className="bg-green-500 hover:bg-green-400 text-white font-black text-xl md:text-3xl py-8 px-12 rounded-full btn-kid uppercase flex items-center gap-3 shadow-xl animate-bounce-slow"
                    >
                        QUERO MEU PEQUENO LENDO <ArrowRight size={32} strokeWidth={4} />
                    </Button>
                    <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-blue-900 font-bold bg-white/30 px-4 py-2 rounded-full backdrop-blur-sm">
                        <div className="flex text-yellow-400"><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/></div>
                        <span>+15.000 Famílias Ajudadas</span>
                    </div>
                </div>
              </div>

              {/* Image Content - PHOTO FIELD ADDED */}
              <div className="relative order-1 md:order-2 flex justify-center">
                 <div className="relative w-[280px] md:w-[400px] aspect-square group">
                    <div className="absolute inset-0 bg-white rounded-full blur-3xl opacity-40 animate-pulse"></div>
                    <img 
                        src={heroImg} 
                        alt="Criança feliz lendo" 
                        className="relative rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 border-white transform rotate-2 group-hover:rotate-0 transition-all duration-500 object-cover w-full h-full z-10"
                    />
                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -right-4 bg-white px-6 py-4 rounded-xl shadow-xl border-b-4 border-blue-600 animate-bounce-slow z-20">
                        <p className="font-black text-blue-600 text-2xl">10 min</p>
                        <p className="text-xs text-slate-500 font-bold uppercase">Por dia</p>
                    </div>
                 </div>
              </div>

            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{clipPath: "polygon(0 100%, 100% 100%, 100% 0)"}}></div>
        </section>

        {/* Agitation / Truth Section */}
        <section className="py-12 px-4 bg-white relative -mt-10 z-20">
            <div className="max-w-4xl mx-auto">
                <div className="bg-slate-50 border-l-8 border-red-500 rounded-r-2xl shadow-xl p-6 md:p-10 mb-12">
                    <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-6 flex items-start gap-3">
                        <AlertTriangle className="text-red-500 shrink-0 mt-1" size={32} fill="currentColor" />
                        Muitos pais acham que "cada criança tem seu tempo". Até que...
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-slate-700 font-medium">
                            <span className="text-2xl">👎🏻</span> As tarefas de leitura viram um campo de guerra e choro.
                        </div>
                        <div className="flex items-center gap-3 text-slate-700 font-medium">
                            <span className="text-2xl">👎🏻</span> As notas baixas começam a aparecer.
                        </div>
                        <div className="flex items-center gap-3 text-slate-700 font-medium">
                            <span className="text-2xl">👎🏻</span> Ela se sente “menos inteligente” do que os coleguinhas.
                        </div>
                        <p className="text-red-600 font-bold mt-4 border-t border-red-200 pt-4">
                            E o pior: Começa a achar que não é capaz, sem entender o porquê.
                        </p>
                    </div>
                </div>

                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center p-2 bg-yellow-100 rounded-full mb-4 animate-pulse">
                        <AlertTriangle className="text-orange-500" size={32} />
                    </div>
                    <h3 className="text-3xl font-black text-blue-900 mb-4">
                        A Verdade Que Ninguém Te Conta 🤫
                    </h3>
                    <p className="text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
                        O que realmente atrasa seu filho é a <strong className="text-red-500 bg-red-50 px-1">falta de estímulo fonético na fase certa</strong>. O cérebro precisa "ver" o som antes de ler. Mas calma, a culpa não é sua! Ninguém te ensinou isso... até agora.
                    </p>
                </div>
            </div>
        </section>

        {/* Vertical VSL Section (Placeholder) */}
        <section className="py-12 px-4 bg-slate-900 text-white text-center">
            <div className="max-w-md mx-auto">
                <h2 className="text-2xl font-bold mb-6">Veja como é fácil ensinar seu filho(a) a ler...</h2>
                <div className="aspect-[9/16] bg-slate-800 rounded-3xl border-4 border-slate-700 overflow-hidden relative shadow-2xl mx-auto">
                    <img src={vslPlaceholder} alt="Video Placeholder" className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-xl animate-pulse">
                            <ArrowRight size={40} className="ml-1" fill="white" />
                        </div>
                        <p className="mt-4 font-bold uppercase tracking-widest">Aperte o Play 👇</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Checklist / Development Section */}
        <section className="py-16 px-4 bg-blue-50">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-2">Por que o Kit Funciona?</h2>
                    <p className="text-slate-600">Baseado em Neurociência e Pedagogia Ativa</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <div className="flex gap-4 bg-white p-4 rounded-xl shadow-sm border-l-4 border-green-500">
                            <Check className="text-green-500 shrink-0" />
                            <p className="text-slate-700 font-medium">Desenvolve a <strong>coordenação motora fina</strong> (essencial para a escrita).</p>
                        </div>
                        <div className="flex gap-4 bg-white p-4 rounded-xl shadow-sm border-l-4 border-blue-500">
                            <Check className="text-blue-500 shrink-0" />
                            <p className="text-slate-700 font-medium">Estimula a <strong>criatividade e o foco</strong> (ideal para mentes agitadas).</p>
                        </div>
                        <div className="flex gap-4 bg-white p-4 rounded-xl shadow-sm border-l-4 border-purple-500">
                            <Check className="text-purple-500 shrink-0" />
                            <p className="text-slate-700 font-medium">Fortalece as <strong>conexões neurais</strong> que "destravam" a leitura.</p>
                        </div>
                        <div className="flex gap-4 bg-white p-4 rounded-xl shadow-sm border-l-4 border-yellow-500">
                            <Check className="text-yellow-500 shrink-0" />
                            <p className="text-slate-700 font-medium">Desperta o interesse natural pelas palavras, <strong>sem forçar</strong>.</p>
                        </div>
                        
                        <div className="bg-blue-100 p-4 rounded-xl text-center mt-6">
                            <p className="text-blue-800 font-bold">⏱️ Tudo isso com apenas alguns minutos por dia!</p>
                        </div>
                    </div>
                    
                    <div className="relative">
                        <div className="absolute inset-0 bg-yellow-200 rounded-full blur-3xl opacity-50"></div>
                        <img src={heroImg} alt="Criança estudando" className="relative rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500 border-4 border-white" />
                    </div>
                </div>
            </div>
        </section>

        {/* Results Transformation */}
        <section className="py-16 px-4 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-4xl font-black text-slate-800 mb-10">
                    E em poucos dias você vai notar <br/> <span className="text-green-600 bg-green-50 px-2 rounded">a diferença no seu filho:</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                        <div className="bg-green-100 p-2 rounded-full text-green-600"><Brain size={20}/></div>
                        <span className="font-bold text-slate-700">Reconhece sons e sílabas fácil</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                        <div className="bg-blue-100 p-2 rounded-full text-blue-600"><Smile size={20}/></div>
                        <span className="font-bold text-slate-700">Mais confiante para ler alto</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                        <div className="bg-yellow-100 p-2 rounded-full text-yellow-600"><BookOpen size={20}/></div>
                        <span className="font-bold text-slate-700">Pede para ler livros e histórias</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                        <div className="bg-purple-100 p-2 rounded-full text-purple-600"><Heart size={20}/></div>
                        <span className="font-bold text-slate-700">Aprende sem frustração ou choro</span>
                    </div>
                </div>
            </div>
        </section>

        {/* Curriculum Section */}
        <section className="py-16 px-4 bg-sky-100">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-sky-600 font-bold uppercase tracking-widest text-sm">Método Completo</span>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-800 mt-2">📚 O Que Seu Filho Vai Aprender</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="border-0 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                        <CardContent className="p-6 text-center">
                            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                                <Zap size={28} />
                            </div>
                            <h3 className="font-bold text-lg text-slate-800 mb-2">Sons e Letras</h3>
                            <p className="text-sm text-slate-600">Associação imediata do som à letra, fortalecendo as conexões cerebrais de forma sólida.</p>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                        <CardContent className="p-6 text-center">
                            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                                <Puzzle size={28} />
                            </div>
                            <h3 className="font-bold text-lg text-slate-800 mb-2">Formação de Palavras</h3>
                            <p className="text-sm text-slate-600">Atividades dinâmicas que transformam a construção de palavras em diversão.</p>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                        <CardContent className="p-6 text-center">
                            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
                                <BookOpen size={28} />
                            </div>
                            <h3 className="font-bold text-lg text-slate-800 mb-2">Leitura Fluente</h3>
                            <p className="text-sm text-slate-600">Exercícios práticos que aprimoram a compreensão, ajudando a ganhar fluência.</p>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                        <CardContent className="p-6 text-center">
                            <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600">
                                <Check size={28} />
                            </div>
                            <h3 className="font-bold text-lg text-slate-800 mb-2">Guia Passo a Passo</h3>
                            <p className="text-sm text-slate-600">Instruções visuais e detalhadas para que cada fase seja clara e tranquila.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        {/* Image Carousel / What's Included */}
        <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
            <div className="text-center mb-8 px-4">
                <h2 className="text-2xl font-black text-slate-800">Veja tudo que você vai receber:</h2>
                <p className="text-slate-500 text-sm">+ de 100 Atividades de Grafismo Fonético</p>
            </div>
            
            <div 
              className="relative w-full overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
              ref={carouselRef}
              onMouseEnter={() => setIsCarouselHovered(true)}
              onMouseLeave={() => setIsCarouselHovered(false)}
              onTouchStart={() => setIsCarouselHovered(true)}
              onTouchEnd={() => setIsCarouselHovered(false)}
            >
               <div className="flex w-fit px-4">
                  {[...carouselImages, ...carouselImages].map((item, index) => (
                     <div key={index} className="w-[200px] shrink-0 mx-3 select-none">
                        <div className="relative rounded-xl overflow-hidden shadow-md aspect-[3/4] group pointer-events-none">
                           <img src={item.img} alt={item.name} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
                           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/90 to-transparent p-4 pt-10">
                              <span className="text-white font-bold text-lg drop-shadow-md">{item.name}</span>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
        </section>

        {/* How to Start */}
        <section className="py-16 px-4 bg-slate-50">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-black text-slate-800 mb-10">Muito Simples de Começar!</h2>
                <div className="grid md:grid-cols-3 gap-8">
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
            </div>
        </section>

        {/* Bonus Section - PhotoBonusCard Style */}
        <section className="py-16 px-4 bg-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <Badge className="bg-red-100 text-red-600 font-bold mb-4 px-4 py-1 text-sm border border-red-200">
                        🎁 PRESENTE ESPECIAL
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-800">
                        Leve 6 Bônus Exclusivos <br/><span className="text-green-600">Totalmente de Graça!</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    <PhotoBonusCard 
                        image={imgBonus1}
                        title="Alfabeto com Imagens"
                        desc="Apresenta cada letra com imagens associadas para familiarização visual."
                        price="37,00"
                    />
                    <PhotoBonusCard 
                        image={imgBonus2}
                        title="Quebra-Cabeça Alfabeto"
                        desc="Atividades de quebra-cabeça para fixação divertida das letras."
                        price="47,00"
                    />
                    <PhotoBonusCard 
                        image={imgBonus3}
                        title="Formando Palavras"
                        desc="Exercícios que incentivam a leitura e escrita, construindo vocabulário."
                        price="57,00"
                    />
                    {/* Simplified list for remaining bonuses */}
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-6">
                     <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                        <h4 className="font-bold text-slate-800">Alfabeto com Relógio</h4>
                        <p className="text-xs text-slate-500">De R$ 39,00 por <span className="text-green-600 font-bold">GRÁTIS</span></p>
                     </div>
                     <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                        <h4 className="font-bold text-slate-800">Alfabeto Traçado</h4>
                        <p className="text-xs text-slate-500">De R$ 27,00 por <span className="text-green-600 font-bold">GRÁTIS</span></p>
                     </div>
                     <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                        <h4 className="font-bold text-slate-800">Alfabeto com Carinhas</h4>
                        <p className="text-xs text-slate-500">De R$ 49,00 por <span className="text-green-600 font-bold">GRÁTIS</span></p>
                     </div>
                </div>
            </div>
        </section>

        {/* Social Proof */}
        <section className="py-16 px-4 bg-slate-50 border-t border-slate-200">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-black text-center text-slate-800 mb-10">
                    O que Pais e Educadores dizem:
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
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

        {/* Pricing Section */}
        <section id="pricing" className="py-16 px-4 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Escolha o Melhor para seu Filho</h2>
                    <p className="text-blue-100 text-lg">Acesso vitalício e imediato por um valor simbólico.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
                    
                    {/* Basic Plan (Trigger Upsell) */}
                    <div className="bg-white rounded-3xl p-6 border-4 border-blue-200 opacity-90 hover:opacity-100 transition-opacity">
                        <h3 className="text-xl font-bold text-slate-500 text-center uppercase tracking-wide">Kit Básico</h3>
                        <div className="text-center my-6">
                            <span className="text-sm text-slate-400 line-through">De R$ 97,00</span>
                            <div className="text-4xl font-black text-slate-800">R$ 17,00</div>
                        </div>
                        <ul className="space-y-3 mb-8 text-sm text-slate-600">
                            <li className="flex items-center gap-2"><Check size={16} className="text-green-500"/> Arquivos em PDF</li>
                            <li className="flex items-center gap-2"><Check size={16} className="text-green-500"/> Grafismo Fonético</li>
                            <li className="flex items-center gap-2 text-red-400"><Lock size={16}/> Sem Bônus Exclusivos</li>
                        </ul>
                        <Button 
                            onClick={() => setIsUpsellModalOpen(true)}
                            variant="outline"
                            className="w-full py-6 text-slate-600 border-2 border-slate-200 font-bold hover:bg-slate-50"
                        >
                            QUERO O BÁSICO
                        </Button>
                    </div>

                    {/* Complete Plan (Hero) */}
                    <div className="bg-white rounded-3xl p-8 border-4 border-yellow-400 shadow-2xl relative transform md:scale-105">
                        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide shadow-md whitespace-nowrap border-2 border-white animate-pulse">
                            🏆 Oferta Completa
                        </div>
                        <h3 className="text-2xl font-black text-blue-600 text-center uppercase tracking-wide">Kit Completo + Bônus</h3>
                        <div className="text-center my-6 bg-blue-50 py-4 rounded-xl border border-blue-100">
                            <span className="text-sm text-slate-400 line-through">De R$ 197,00</span>
                            <div className="text-6xl font-black text-green-600 tracking-tighter">R$ 25,00</div>
                            <span className="text-xs font-bold text-blue-800 bg-blue-200 px-2 py-1 rounded-full">Pagamento Único</span>
                        </div>
                        <ul className="space-y-3 mb-8 text-sm font-bold text-slate-700">
                            <li className="flex items-center gap-2"><div className="bg-green-100 p-1 rounded-full"><Check size={14} className="text-green-600"/></div> Kit Grafismo Completo</li>
                            <li className="flex items-center gap-2"><div className="bg-green-100 p-1 rounded-full"><Check size={14} className="text-green-600"/></div> +100 Atividades PDF</li>
                            <li className="flex items-center gap-2"><div className="bg-green-100 p-1 rounded-full"><Check size={14} className="text-green-600"/></div> TODOS OS 6 BÔNUS</li>
                            <li className="flex items-center gap-2"><div className="bg-green-100 p-1 rounded-full"><Check size={14} className="text-green-600"/></div> Suporte Pedagógico</li>
                        </ul>
                        <Button 
                            onClick={() => window.location.href = applyUtms('https://pay.lowify.com.br/checkout?product_id=kids-complete-25')}
                            className="w-full bg-green-500 hover:bg-green-400 text-white font-black text-xl py-8 rounded-xl shadow-[0_4px_0_rgb(21,128,61)] btn-kid"
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

        {/* Aggressive Guarantee */}
        <section className="py-16 px-4 bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500">
            <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden border-4 border-white/50">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>
                
                <div className="shrink-0 relative z-10">
                    <div className="w-32 h-32 bg-blue-900 rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                        <ShieldCheck size={64} className="text-yellow-400"/>
                    </div>
                </div>
                <div className="text-center md:text-left z-10">
                    <h3 className="text-3xl font-black text-slate-900 mb-2 uppercase italic">Garantia Blindada de 7 Dias</h3>
                    <p className="text-slate-700 leading-relaxed font-medium text-lg">
                        Estamos tão certos de que o Kit vai ajudar seu filho a ler, que assumimos todo o risco. <br/><br/>
                        <strong>Se você não ver evolução, nós devolvemos 100% do seu dinheiro.</strong> Sem perguntas, sem burocracia. É só enviar um e-mail.
                    </p>
                </div>
            </div>
        </section>

        {/* FAQ */}
        <section className="py-12 px-4 bg-white">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-black text-center text-slate-800 mb-8">Perguntas Frequentes</h2>
                <Accordion type="single" collapsible className="space-y-2">
                    <FAQItem q="O material é físico ou digital?" a="É 100% digital (PDF). Você recebe no e-mail, baixa e imprime quantas vezes quiser." />
                    <FAQItem q="Para qual idade é indicado?" a="Ideal para crianças de 2 a 12 anos, ou qualquer criança em fase de alfabetização ou com dificuldades." />
                    <FAQItem q="Serve para autistas ou TDAH?" a="Sim! O método visual e prático é altamente recomendado por especialistas para crianças atípicas." />
                    <FAQItem q="Como acesso o material?" a="O acesso chega no seu e-mail imediatamente após a confirmação do pagamento." />
                </Accordion>
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
                window.location.href = applyUtms('https://pay.lowify.com.br/checkout?product_id=kids-offer-20'); // Link Upsell R$ 20
            }}
            onReject={() => {
                window.location.href = applyUtms('https://pay.lowify.com.br/checkout?product_id=kids-basic-17'); // Link Basic R$ 17
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
        <div className="h-32 md:h-40 overflow-hidden relative">
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