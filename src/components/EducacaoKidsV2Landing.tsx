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

// Carousel Items
const carouselItems = [
    { title: "Nível 1: 2 Sílabas", color: "bg-blue-100 border-blue-300" },
    { title: "Nível 2: 3 Sílabas", color: "bg-green-100 border-green-300" },
    { title: "Nível 3: 4 Sílabas", color: "bg-yellow-100 border-yellow-300" },
    { title: "Letra Cursiva", color: "bg-pink-100 border-pink-300" },
    { title: "Letra Bastão", color: "bg-purple-100 border-purple-300" },
    { title: "Coordenação Motora", color: "bg-orange-100 border-orange-300" },
];

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
          .scroll-container {
            overflow: hidden;
            white-space: nowrap;
          }
          .scroll-content {
            display: inline-block;
            animation: scroll 20s linear infinite;
          }
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
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
            <div className="flex flex-col items-center text-center">
                
                <Badge className="bg-white text-blue-700 hover:bg-blue-50 mb-6 px-4 py-2 text-sm font-bold border-2 border-blue-600 inline-flex items-center gap-2 shadow-lg rounded-full uppercase">
                  <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" className="w-5 h-auto shadow-sm" alt="USA"/> Método Americano de Alfabetização
                </Badge>
                
                <h1 className="text-3xl md:text-6xl font-black mb-4 leading-tight text-white drop-shadow-md tracking-tight max-w-4xl">
                  Ensine Seu Filho a Ler <br/>
                  <span className="text-yellow-300 text-4xl md:text-7xl">Até 5x Mais Rápido</span> <br/>
                  <span className="bg-blue-900 text-white px-4 py-1 transform -rotate-2 inline-block mt-2 rounded-xl border-b-4 border-black/30 shadow-xl text-2xl md:text-5xl">SEM PRESSÃO!</span>
                </h1>
                
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 md:p-6 mb-8 border border-white/40 shadow-lg max-w-3xl">
                    <p className="text-lg md:text-xl text-blue-900 font-bold leading-relaxed">
                        Com apenas <span className="bg-yellow-300 px-1 rounded">10 minutos por dia</span>.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 mt-4">
                        <span className="bg-white text-blue-700 px-3 py-1 rounded-full text-xs md:text-sm font-bold shadow-sm flex items-center gap-1"><Check size={14} className="text-green-500"/> 2 a 12 Anos</span>
                        <span className="bg-white text-blue-700 px-3 py-1 rounded-full text-xs md:text-sm font-bold shadow-sm flex items-center gap-1"><Check size={14} className="text-green-500"/> TDAH e Autismo</span>
                        <span className="bg-white text-blue-700 px-3 py-1 rounded-full text-xs md:text-sm font-bold shadow-sm flex items-center gap-1"><Check size={14} className="text-green-500"/> Dificuldade de Foco</span>
                    </div>
                </div>
                
                <Button 
                    onClick={scrollToPricing}
                    className="bg-green-500 hover:bg-green-400 text-white font-black text-xl md:text-3xl py-8 px-12 rounded-full btn-kid uppercase flex items-center gap-3 shadow-xl animate-bounce-slow"
                >
                    QUERO MEU PEQUENO LENDO <ArrowRight size={32} strokeWidth={4} />
                </Button>
            </div>
          </div>
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
                    <h3 className="text-2xl font-black text-blue-900 bg-yellow-300 inline-block px-4 py-1 rounded transform -rotate-1 mb-4">
                        A Verdade Que Ninguém Te Conta 🤫
                    </h3>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        O que realmente atrasa seu filho é a <strong className="text-red-500">falta de estímulo fonético na fase certa</strong>. O cérebro precisa "ver" o som antes de ler. Mas calma, a culpa não é sua! Ninguém te ensinou isso... até agora.
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
                            <p className="text-sm text-slate-600">Associação imediata do som à letra, criando memória de longo prazo.</p>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                        <CardContent className="p-6 text-center">
                            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                                <Puzzle size={28} />
                            </div>
                            <h3 className="font-bold text-lg text-slate-800 mb-2">Formação de Palavras</h3>
                            <p className="text-sm text-slate-600">Atividades dinâmicas que transformam juntar sílabas em brincadeira.</p>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                        <CardContent className="p-6 text-center">
                            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
                                <BookOpen size={28} />
                            </div>
                            <h3 className="font-bold text-lg text-slate-800 mb-2">Leitura Fluente</h3>
                            <p className="text-sm text-slate-600">Exercícios que melhoram a compreensão e velocidade da leitura.</p>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                        <CardContent className="p-6 text-center">
                            <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600">
                                <Check size={28} />
                            </div>
                            <h3 className="font-bold text-lg text-slate-800 mb-2">Guia Passo a Passo</h3>
                            <p className="text-sm text-slate-600">Instruções visuais para os pais aplicarem sem dúvidas.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        {/* Carousel / What's Included */}
        <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
            <div className="text-center mb-8 px-4">
                <h2 className="text-2xl font-black text-slate-800">Veja tudo que você vai receber:</h2>
                <p className="text-slate-500 text-sm">+ de 100 Atividades Prontas para Imprimir</p>
            </div>
            
            <div className="scroll-container w-full">
                <div className="scroll-content flex gap-4 px-4">
                    {[...carouselItems, ...carouselItems, ...carouselItems].map((item, index) => (
                        <div key={index} className={`w-64 h-40 shrink-0 rounded-2xl border-4 ${item.color} flex items-center justify-center shadow-sm`}>
                            <p className="font-bold text-slate-700 text-lg">{item.title}</p>
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

        {/* Bonus Section (Kept from V1 but refined) */}
        <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <Badge className="bg-red-100 text-red-600 font-bold mb-4 px-4 py-1 text-sm border border-red-200">
                        🎁 SOMENTE HOJE
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-800">
                        Leve 6 Bônus Exclusivos <br/><span className="text-green-600">Totalmente de Graça!</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                    {[
                        { title: "Alfabeto com Imagens", price: "37,00", color: "bg-blue-100 text-blue-600" },
                        { title: "Quebra-Cabeça Alfabeto", price: "47,00", color: "bg-green-100 text-green-600" },
                        { title: "Formando Palavras", price: "57,00", color: "bg-purple-100 text-purple-600" },
                        { title: "Alfabeto com Relógio", price: "39,00", color: "bg-yellow-100 text-yellow-600" },
                        { title: "Alfabeto Traçado", price: "27,00", color: "bg-pink-100 text-pink-600" },
                        { title: "Alfabeto com Carinhas", price: "49,00", color: "bg-orange-100 text-orange-600" },
                    ].map((bonus, idx) => (
                        <div key={idx} className="bg-slate-50 rounded-xl p-4 border-2 border-slate-100 hover:border-blue-300 transition-colors text-center">
                            <div className={`w-12 h-12 ${bonus.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                                <Star size={24} fill="currentColor"/>
                            </div>
                            <h3 className="font-bold text-slate-800 text-sm md:text-base mb-2">{bonus.title}</h3>
                            <p className="text-xs text-slate-400 line-through">Vendido por R$ {bonus.price}</p>
                            <p className="text-sm font-bold text-green-600 uppercase">Hoje: Grátis</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 px-4 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Investimento Simbólico</h2>
                    <p className="text-blue-100 text-lg">Menos que um lanche para o futuro do seu filho.</p>
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

        {/* Social Proof */}
        <section className="py-16 px-4 bg-slate-50 border-t border-slate-200">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-black text-center text-slate-800 mb-10">
                    O que Pais e Educadores dizem:
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                    <TestimonialCard 
                        img={testimonial1}
                        name="Marisa Correia"
                        role="Mãe de 2"
                        text="Acreditem em mim, essa é a melhor compra que vocês vão fazer este ano. Meus filhos amam as atividades, nem parece que estão estudando!"
                    />
                    <TestimonialCard 
                        img={testimonial2}
                        name="Ana Oliveira"
                        role="Pedagoga"
                        text="Minha filha começou a formar palavras com apenas duas semanas usando o kit. É incrível como ela evoluiu em tão pouco tempo!"
                    />
                    <TestimonialCard 
                        img={testimonial3}
                        name="Camila Silva"
                        role="Mãe Atípica"
                        text="É incrível como algo tão simples pode fazer tanta diferença! Meu filho tem dificuldade de foco e essas atividades prenderam a atenção dele."
                    />
                    <TestimonialCard 
                        img={testimonial4}
                        name="André Azevedo"
                        role="Pai"
                        text="Meus pequenos estão conseguindo ter uma evolução significativa graças ao Grafismo Fonético. Quem comprar outro produto, é porque não gosta de dinheiro."
                    />
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

export default EducacaoKidsV2Landing;