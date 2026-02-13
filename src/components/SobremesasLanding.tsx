import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Check, Star, ShieldCheck, 
  Zap, ChevronRight, ChefHat, Scale, HeartPulse, Droplet, Candy, Lock, HelpCircle, ArrowRight, ThumbsUp, ArrowLeft, Flame
} from "lucide-react";
import SobremesasUpsellModal from './SobremesasUpsellModal';

// Images
import heroImgSrc from '@/assets/images/sobremesas/imagem-secao-1.png';
import happyEatingImg from '@/assets/images/sobremesas/esqueca-dieta-chata.png';

// Carousel Assets
import brownieImg from '@/assets/images/sobremesas/brownie.png';
import pudimImg from '@/assets/images/sobremesas/pudim.png';
import paveImg from '@/assets/images/sobremesas/pave.png';
import doceDeLeiteImg from '@/assets/images/sobremesas/doce-de-leite.png';
import cheesecakeImg from '@/assets/images/sobremesas/cheesecake.png';
import mousseImg from '@/assets/images/sobremesas/mousse.png';
import boloPoteImg from '@/assets/images/sobremesas/bolo-no-pote.png';
import tortaLimaoImg from '@/assets/images/sobremesas/torta-de-limao.png';

// Bonus Assets
import bonusSecaBarriga from '@/assets/images/sobremesas/protocolo-seca-barriga.png';
import bonusLanches from '@/assets/images/sobremesas/50-lanches-fit.png';
import bonusAlmoco from '@/assets/images/sobremesas/receitas-almoco.png';

const imgExpert = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop"; 

const carouselImages = [
  { img: brownieImg, name: "Brownie" },
  { img: pudimImg, name: "Pudim" },
  { img: paveImg, name: "Pavê" },
  { img: doceDeLeiteImg, name: "Doce de Leite" },
  { img: cheesecakeImg, name: "Cheesecake" },
  { img: mousseImg, name: "Mousse" },
  { img: boloPoteImg, name: "Bolo de Pote" },
  { img: tortaLimaoImg, name: "Torta de Limão" },
];

const avatar1 = "https://randomuser.me/api/portraits/women/44.jpg";
const avatar2 = "https://randomuser.me/api/portraits/women/68.jpg";
const avatar3 = "https://randomuser.me/api/portraits/women/12.jpg";
const avatar5 = "https://randomuser.me/api/portraits/men/32.jpg";
const avatar6 = "https://randomuser.me/api/portraits/women/22.jpg";

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
  </svg>
);

const SobremesasLanding = () => {
  const [isUpsellModalOpen, setIsUpsellModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 22, seconds: 35 });
  const [todayDate, setTodayDate] = useState("");
  
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);

  const carouselRef = useRef<HTMLDivElement>(null);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);

  const benefits = [
    { title: "Fim da Compulsão", text: "Chega de atacar a geladeira de madrugada. Nossas receitas saciam a vontade real de doce.", icon: <Zap size={32} /> },
    { title: "Controle Glicêmico", text: "Perfeito para diabéticos e pré-diabéticos. Desfrute de doces incríveis sem causar picos de insulina.", icon: <Droplet size={32} /> },
    { title: "Perca Peso Comendo", text: "Substitua calorias vazias por nutrientes e veja a balança descer enquanto come brownie.", icon: <Scale size={32} /> },
    { title: "Zero Experiência", text: "Não sabe cozinhar? Sem problemas. Receitas de liquidificador, caneca e muito fáceis.", icon: <ChefHat size={32} /> },
    { title: "Saúde da Família", text: "Seu filho vai amar os sabores da infância, mas com uma nutrição equilibrada.", icon: <ShieldCheck size={32} /> },
    { title: "Digestão Leve", text: "Sem glúten e sem lactose significa zero inchaço. Sinta-se leve após cada sobremesa.", icon: <HeartPulse size={32} /> },
  ];

  const resetAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearTimeout(autoPlayRef.current);
    setIsAutoPlaying(false);
    autoPlayRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveBenefit((prev) => (prev + 1) % benefits.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, benefits.length]);

  const handleNextBenefit = () => {
    resetAutoPlay();
    setActiveBenefit((prev) => (prev + 1) % benefits.length);
  };

  const handlePrevBenefit = () => {
    resetAutoPlay();
    setActiveBenefit((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNextBenefit();
      else handlePrevBenefit();
    }
    touchStartX.current = null;
  };

  useEffect(() => {
    const scrollContainer = carouselRef.current;
    if (!scrollContainer) return;
    let scrollAmount = 0;
    const speed = 1;
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

  const applyUtms = (url: string) => {
    try {
        const currentSearchParams = new URLSearchParams(window.location.search);
        const paramsString = currentSearchParams.toString();
        if (!paramsString) return url;
        const separator = url.indexOf("?") === -1 ? "?" : "&";
        return `${url}${separator}${paramsString}`;
    } catch (e) { return url; }
  };

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
        <title>350+ Sobremesas Zero - Coma Sem Culpa</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        
        {/* Meta Pixel Code Sobremesa Zero */}
        <script>{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '871872252422177');
          fbq('track', 'PageView');
        `}</script>
        <noscript>{`
          <img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=871872252422177&ev=PageView&noscript=1" />
        `}</noscript>

        {/* UTMify Script */}
        <script 
          src="https://cdn.utmify.com.br/scripts/utms/latest.js" 
          data-utmify-prevent-xcod-sck 
          data-utmify-prevent-subids 
          async 
          defer 
        />

        <style>{`
          @keyframes shimmer {
            0% { background-position: 200% center; }
            100% { background-position: -200% center; }
          }
          @keyframes subtle-pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
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
            animation: shimmer 3s linear infinite, subtle-pulse 3s ease-in-out infinite;
            border-bottom: 4px solid #14532d;
          }
          .btn-hypnotic:hover {
            background: linear-gradient(110deg, #16a34a 35%, #86efac 50%, #16a34a 65%);
            background-size: 200% 100%;
            animation: shimmer 1s linear infinite, subtle-pulse 3s ease-in-out infinite;
            transform: scale(1.03);
          }
          .btn-shiny {
            background: linear-gradient(110deg, #ec4899 25%, #f472b6 50%, #ec4899 75%);
            background-size: 200% 100%;
            animation: shimmer 3s linear infinite, scale-only-pulse 2s ease-in-out infinite;
            border-bottom: 4px solid #be185d;
          }
          .fade-in-slide {
            animation: fadeInSlide 0.5s ease-out forwards;
          }
          @keyframes fadeInSlide {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </Helmet>
      
      <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
        
        <div className="bg-pink-600 text-white text-center py-2 px-2 font-bold text-[10px] md:text-sm animate-pulse sticky top-0 z-50 shadow-md flex justify-center items-center gap-2 tracking-wide">
           🧁 DESCONTO ESPECIAL SÓ HOJE: {todayDate.toUpperCase()}
        </div>

        <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-white py-10 md:py-24 px-4 overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              
              <div className="flex flex-col items-center text-center md:items-start md:text-left order-2 md:order-1">
                <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 mb-4 px-3 py-1 text-xs md:text-sm font-bold border border-purple-200 inline-flex items-center gap-2 shadow-sm">
                  <ChefHat size={14} /> Receitas Validadas por Nutricionista
                </Badge>
                
                <h1 className="text-3xl md:text-6xl font-extrabold mb-4 leading-tight text-slate-900 tracking-tight">
                  Coma Sua Sobremesa Favorita <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">De Domingo a Domingo</span> <br/>
                  <span className="bg-pink-600 text-white px-2 transform -rotate-1 inline-block mt-2 text-2xl md:text-5xl shadow-sm">SEM CULPA!</span>
                </h1>
                
                <p className="text-base md:text-xl mb-6 text-slate-600 font-medium leading-relaxed px-2 md:px-0 max-w-lg md:max-w-none">
                  + de 350 Sobremesas Deliciosas: <span className="font-bold text-red-500 whitespace-nowrap">Zero Açúcar</span>, <span className="font-bold text-red-500 whitespace-nowrap">Zero Glúten</span> e <span className="font-bold text-red-500 whitespace-nowrap">Zero Lactose</span>. <br className="hidden md:block"/>
                  Emagreça sem abrir mão do prazer.
                </p>
                
                <div className="flex flex-col gap-4 w-full md:w-auto items-center md:items-start">
                    <Button 
                        onClick={scrollToPricing}
                        className="btn-hypnotic text-white font-black text-lg md:text-xl py-7 px-8 rounded-full shadow-xl flex items-center justify-center gap-2 w-full md:w-fit transition-all uppercase tracking-wide"
                    >
                        QUERO BAIXAR AS RECEITAS <ChevronRight size={24} strokeWidth={3} />
                    </Button>
                    <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-slate-500 font-semibold">
                        <div className="flex text-yellow-400"><Star fill="currentColor" size={14}/><Star fill="currentColor" size={14}/><Star fill="currentColor" size={14}/><Star fill="currentColor" size={14}/><Star fill="currentColor" size={14}/></div>
                        <span>(5.482) Avaliações • 97% Aprovado</span>
                    </div>
                </div>
              </div>

              <div className="relative order-1 md:order-2 flex justify-center mt-2 md:mt-0">
                 <div className="relative w-[280px] md:w-[350px] aspect-square">
                    <div className="absolute inset-0 bg-pink-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                    <img 
                        src={heroImgSrc} 
                        alt="Brownie Zero Açúcar" 
                        className="relative rounded-3xl shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-all duration-500 object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-xl border-l-4 border-pink-500 animate-bounce z-20">
                        <p className="font-bold text-slate-800 text-xs md:text-sm">350+ Sobremesas Fit</p>
                        <p className="text-[10px] md:text-xs text-green-600 font-bold flex items-center gap-1"><Check size={10}/> Zero Açúcar</p>
                    </div>
                 </div>
              </div>

            </div>
          </div>
        </section>

        <section className="py-8 bg-white overflow-hidden border-y border-slate-100">
          <div className="text-center mb-6 px-4">
              <h2 className="text-xl md:text-3xl font-extrabold text-slate-900">O Que Você Vai Poder Comer?</h2>
              <p className="text-slate-500 text-xs md:text-sm">Arraste para o lado e veja as delícias fit 👆</p>
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
                {[...carouselImages, ...carouselImages, ...carouselImages].map((item, index) => (
                   <div key={index} className="w-[140px] md:w-[220px] shrink-0 mx-2 md:mx-4 select-none">
                      <div className="relative rounded-xl overflow-hidden shadow-md aspect-square group pointer-events-none">
                         <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 md:p-4">
                            <span className="text-white font-bold text-sm md:text-lg drop-shadow-md">{item.name}</span>
                         </div>
                      </div>
                   </div>
                ))}
             </div>
          </div>

          <div className="max-w-4xl mx-auto mt-8 bg-pink-50 border border-pink-200 rounded-xl p-4 md:p-6 text-center mx-4">
              <h3 className="text-base md:text-xl font-bold text-pink-700 mb-2 flex items-center justify-center gap-2">
                  <Candy className="animate-spin-slow w-5 h-5" /> Sim! São mais de 350 receitas!
              </h3>
              <p className="text-xs md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  Do clássico Brigadeiro ao sofisticado Cheesecake: redescubra o prazer de comer <strong>Beijinho, Mousses, Bolos e Tortas</strong> com a mesma textura e sabor das originais, mas totalmente <strong>Zero Açúcar, Zero Glúten e Zero Lactose</strong>.
              </p>
          </div>
        </section>

        <section className="py-12 md:py-20 px-4 bg-pink-600 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-6xl mx-auto relative z-10">
              <h2 className="text-2xl md:text-5xl font-extrabold text-center mb-4 text-white leading-tight">
                  Esqueça a "Dieta Chata"
              </h2>
              <p className="text-center text-pink-100 mb-8 md:mb-16 max-w-2xl mx-auto text-sm md:text-base px-2">
                  Veja o que acontece com seu corpo quando você troca o açúcar pelas nossas receitas:
              </p>
              
              <div className="md:hidden relative">
                  <div 
                    className="bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-2xl relative overflow-hidden h-[450px] flex flex-col items-center text-center mx-auto max-w-sm"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                  >
                      <div className="w-28 h-28 rounded-full border-4 border-pink-400 overflow-hidden mb-6 shadow-[0_0_30px_rgba(236,72,153,0.4)] shrink-0 bg-slate-800">
                          <img src={happyEatingImg} alt="Happy" className="w-full h-full object-cover opacity-90" />
                      </div>
                      <div key={activeBenefit} className="fade-in-slide flex-1 flex flex-col items-center justify-center w-full">
                          <div className="bg-slate-800 p-4 rounded-full text-pink-300 mb-4 inline-block border border-slate-700 shadow-inner">
                              {benefits[activeBenefit].icon}
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">{benefits[activeBenefit].title}</h3>
                          <p className="text-slate-400 text-sm leading-relaxed px-2">
                              {benefits[activeBenefit].text}
                          </p>
                      </div>
                      <div className="flex items-center justify-between w-full mt-4 px-2">
                          <Button size="icon" variant="ghost" onClick={handlePrevBenefit} className="text-slate-500 hover:text-white hover:bg-slate-800 rounded-full">
                              <ArrowLeft />
                          </Button>
                          <div className="flex gap-1.5">
                              {benefits.map((_, idx) => (
                                  <div 
                                    key={idx} 
                                    onClick={() => { resetAutoPlay(); setActiveBenefit(idx); }}
                                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === activeBenefit ? 'w-6 bg-pink-400' : 'w-1.5 bg-slate-700'}`}
                                  />
                              ))}
                          </div>
                          <Button size="icon" variant="ghost" onClick={handleNextBenefit} className="text-slate-500 hover:text-white hover:bg-slate-800 rounded-full">
                              <ArrowRight />
                          </Button>
                      </div>
                  </div>
              </div>

              <div className="hidden md:flex flex-row items-center gap-12">
                  <div className="flex-1 space-y-8">
                      {benefits.slice(0, 3).map((item, idx) => (
                          <div key={idx} className="flex gap-4 text-right flex-row-reverse items-start group">
                              <div className="bg-slate-900 p-4 rounded-xl text-pink-300 shrink-0 border border-slate-800 shadow-lg group-hover:border-pink-500/50 transition-colors">
                                  {item.icon}
                              </div>
                              <div>
                                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                  <p className="text-pink-100 text-sm leading-relaxed">{item.text}</p>
                              </div>
                          </div>
                      ))}
                  </div>
                  <div className="w-[350px] shrink-0 relative group">
                      <div className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-purple-600 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
                      <img 
                          src={happyEatingImg} 
                          alt="Mulher feliz comendo doce fit" 
                          className="relative rounded-3xl shadow-2xl border-4 border-slate-900 w-full object-cover aspect-[3/4] transform hover:scale-105 transition-transform duration-500 z-10"
                      />
                  </div>
                  <div className="flex-1 space-y-8">
                      {benefits.slice(3, 6).map((item, idx) => (
                          <div key={idx} className="flex gap-4 items-start group">
                              <div className="bg-slate-900 p-4 rounded-xl text-pink-300 shrink-0 border border-slate-800 shadow-lg group-hover:border-pink-500/50 transition-colors">
                                  {item.icon}
                              </div>
                              <div>
                                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                  <p className="text-pink-100 text-sm leading-relaxed">{item.text}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-pink-600 font-bold tracking-widest uppercase text-xs md:text-sm bg-pink-50 px-4 py-1 rounded-full">Depoimentos Reais</span>
                    <h2 className="text-2xl md:text-5xl font-black text-slate-900 mt-4">Elas Já Estão <span className="text-purple-600">Amando os Resultados</span></h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                        <div className="flex items-center gap-3 mb-4">
                            <img src={avatar1} alt="User" className="w-12 h-12 rounded-full border-2 border-pink-200" />
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm">Juliana Castro</h4>
                                <div className="flex text-yellow-400 text-xs"><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/></div>
                            </div>
                        </div>
                        <p className="text-slate-600 text-sm italic">"Eu sou diabética e achava que nunca mais ia comer um pudim gostoso na vida. Fiz o pudim do e-book e chorei de emoção. É idêntico!"</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 mt-0 md:mt-8">
                        <div className="flex items-center gap-3 mb-4">
                            <img src={avatar2} alt="User" className="w-12 h-12 rounded-full border-2 border-pink-200" />
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm">Carla Dias</h4>
                                <div className="flex text-yellow-400 text-xs"><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/></div>
                            </div>
                        </div>
                        <p className="text-slate-600 text-sm italic">"Perdi 4kg em 1 mês só trocando o doce da padaria pelas receitas da Dra. Isabela. O bolo de pote é sensacional."</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                        <div className="flex items-center gap-3 mb-4">
                            <img src={avatar3} alt="User" className="w-12 h-12 rounded-full border-2 border-pink-200" />
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm">Renata Souza</h4>
                                <div className="flex text-yellow-400 text-xs"><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/></div>
                            </div>
                        </div>
                        <p className="text-slate-600 text-sm italic">"Meu filho tem intolerância a lactose e glúten. Era uma luta achar lanches pra ele. Esse material salvou a lancheira da escola!"</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 mt-0 md:mt-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full border-2 border-pink-200 bg-pink-100 flex items-center justify-center font-bold text-pink-600">AS</div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm">Ana Silva</h4>
                                <div className="flex text-yellow-400 text-xs"><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/></div>
                            </div>
                        </div>
                        <p className="text-slate-600 text-sm italic">"As receitas de torta são maravilhosas. Ninguém diz que é fit. Servi no almoço de domingo e acabou tudo!"</p>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <Button 
                        onClick={scrollToPricing}
                        className="btn-shiny text-white font-black text-lg py-6 px-10 rounded-full shadow-xl animate-scale-pulse transition-transform hover:scale-105 flex items-center justify-center gap-2 mx-auto w-fit"
                    >
                        <HeartPulse size={20} /> QUERO ESSES RESULTADOS
                    </Button>
                </div>
            </div>
        </section>

        <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-pink-600 to-pink-800 relative overflow-hidden">
            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-8 md:mb-12">
                    <span className="bg-white text-pink-700 font-bold px-4 py-1 rounded-full text-xs uppercase tracking-wider shadow-lg">Presente Exclusivo</span>
                    <h2 className="text-2xl md:text-5xl font-extrabold mt-4 mb-2 text-white">GANHE 3 BÔNUS DE GRAÇA</h2>
                    <p className="text-pink-100 text-sm md:text-lg">Levando o pacote hoje, você não paga nada por esses guias extras:</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    <PhotoBonusCard 
                        image={bonusSecaBarriga}
                        title="PROTOCOLO SECA BARRIGA"
                        desc="Desafio 30 dias: passo a passo validado para destravar seu metabolismo e queimar gordura visceral."
                        price="97,00"
                    />
                    <PhotoBonusCard 
                        image={bonusLanches}
                        title="50 LANCHES FIT"
                        desc="Coxinha, empada e salgados proteicos. Opções deliciosas para o lanche da tarde que matam a fome."
                        price="47,00"
                    />
                    <PhotoBonusCard 
                        image={bonusAlmoco}
                        title="100 RECEITAS DE ALMOÇO"
                        desc="O guia definitivo de refeições salgadas. Strogonoff, Lasanha e Escondidinho em versões que emagrecem."
                        price="67,00"
                    />
                </div>
                <div className="mt-8 md:mt-12 text-center">
                    <p className="text-base md:text-xl font-bold text-white mb-6">Valor Total dos Bônus: <span className="line-through text-pink-300">R$ 211,00</span> = <span className="bg-yellow-400 text-purple-900 px-2 rounded">GRÁTIS HOJE</span></p>
                    <Button 
                        onClick={scrollToPricing}
                        className="btn-shiny text-white font-black text-base md:text-lg px-8 py-6 rounded-full shadow-lg animate-scale-pulse w-full md:w-auto transform hover:scale-105 transition-transform"
                    >
                        QUERO GARANTIR MEUS BÔNUS
                    </Button>
                </div>
            </div>
        </section>

        <section id="pricing" className="py-12 md:py-20 px-4 bg-slate-50 border-t border-slate-200">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-xl shadow-xl mb-4 animate-bounce">
                  <div className="text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1 text-red-100">⏳ O PREÇO SOBE EM:</div>
                  <div className="text-2xl md:text-5xl font-mono font-black tracking-widest text-white">
                      {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                  </div>
              </div>
              <h2 className="text-2xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                  Escolha Seu Plano e <br/><span className="text-pink-600">Comece a Emagrecer Comendo</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start max-w-4xl mx-auto">
              <div className="order-2 md:order-1 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all relative mt-4">
                 <h3 className="text-lg font-bold text-slate-500 mb-1">Acesso ao Livro Digital</h3>
                 <p className="text-xs text-slate-400 mb-4">Acesso básico aos arquivos</p>
                 <div className="mb-4">
                    <span className="text-3xl font-extrabold text-slate-700">R$ 9,90</span>
                 </div>
                 <ul className="space-y-3 mb-6 text-xs text-slate-500">
                    <li className="flex items-center gap-2"><Check size={14}/> Todas as 350+ Receitas</li>
                    <li className="flex items-center gap-2"><Check size={14}/> Arquivo PDF Completo</li>
                    <li className="flex items-center gap-2 text-red-400 line-through"><Check size={14}/> Sem Guia Seca Barriga</li>
                    <li className="flex items-center gap-2 text-red-400 line-through"><Check size={14}/> Sem Lanches Fit</li>
                    <li className="flex items-center gap-2 text-red-400 line-through"><Check size={14}/> Sem 100 Receitas Salgadas</li>
                 </ul>
                 <Button 
                    onClick={() => setIsUpsellModalOpen(true)}
                    className="w-full bg-green-100 hover:bg-green-200 text-green-700 font-bold py-6 text-sm border border-green-200 shadow-none transition-colors"
                 >
                    QUERO O BÁSICO
                 </Button>
              </div>
              <div className="order-1 md:order-2 bg-white p-6 md:p-8 rounded-3xl border-4 border-pink-500 shadow-2xl relative transform md:scale-105 z-10">
                 <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-[10px] md:text-sm font-bold uppercase tracking-wide shadow-md whitespace-nowrap">
                    👑 Recomendado • Completo
                 </div>
                 <h3 className="text-xl md:text-2xl font-black text-pink-600 text-center mb-1 uppercase">Pacote Premium</h3>
                 <p className="text-xs md:text-sm text-center text-slate-500 mb-4">Todas as 350+ Receitas + Bônus</p>
                 <div className="text-center mb-6 bg-pink-50 py-3 rounded-2xl border border-pink-100">
                    <p className="text-[10px] text-slate-400 line-through mb-1">De R$ 97,00 por</p>
                    <div className="flex justify-center items-baseline gap-1">
                        <span className="text-5xl md:text-6xl font-black text-green-600 tracking-tighter">R$ 19,90</span>
                    </div>
                    <p className="text-[10px] md:text-xs text-green-700 font-bold mt-1 bg-green-100 inline-block px-2 py-0.5 rounded">Pagamento Único • Acesso Vitalício</p>
                 </div>
                 <ul className="space-y-3 mb-6 text-sm font-medium text-slate-700">
                    <li className="flex items-center gap-3"><div className="bg-green-100 p-1 rounded-full text-green-600"><Check size={12} strokeWidth={4}/></div> <span>350+ Receitas Zero</span></li>
                    <li className="flex items-center gap-3"><div className="bg-green-100 p-1 rounded-full text-green-600"><Check size={12} strokeWidth={4}/></div> <span>BÔNUS 1: Guia Seca Barriga 7KG</span></li>
                    <li className="flex items-center gap-3"><div className="bg-green-100 p-1 rounded-full text-green-600"><Check size={12} strokeWidth={4}/></div> <span>BÔNUS 2: 50 Lanches Salgados Fit</span></li>
                    <li className="flex items-center gap-3"><div className="bg-green-100 p-1 rounded-full text-green-600"><Check size={12} strokeWidth={4}/></div> <span>BÔNUS 3: 100 Receitas Almoço/Jantar</span></li>
                    <li className="flex items-center gap-3"><div className="bg-green-100 p-1 rounded-full text-green-600"><Check size={12} strokeWidth={4}/></div> <span>Atualizações Gratuitas</span></li>
                 </ul>
                 <Button 
                    onClick={() => window.location.href = applyUtms('https://pay.lowify.com.br/go.php?offer=0ywam9c')}
                    className="btn-hypnotic w-full text-white font-black text-lg md:text-xl py-8 rounded-xl shadow-[0_4px_0_rgb(21,128,61)] active:shadow-none active:translate-y-1 transition-all whitespace-normal h-auto leading-tight"
                 >
                    QUERO O PACOTE COMPLETO
                 </Button>
                 <p className="text-[10px] text-center text-slate-400 mt-4 flex items-center justify-center gap-1">
                    <Lock size={10}/> Acesso Imediato no seu E-mail
                 </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
             <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-2xl border-4 border-white/50 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10 text-center md:text-left">
                 <div className="shrink-0 relative">
                     <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-yellow-300 to-orange-500 rounded-full flex items-center justify-center border-4 border-white shadow-xl relative z-10 transform -rotate-12 mx-auto md:mx-0">
                        <div className="text-center text-white">
                            <ShieldCheck size={50} className="mx-auto mb-1 drop-shadow-md md:w-16 md:h-16" />
                            <span className="block text-xl md:text-2xl font-black uppercase tracking-tighter drop-shadow-md">7 DIAS</span>
                        </div>
                     </div>
                 </div>
                 <div className="flex-1">
                     <h3 className="text-2xl md:text-4xl font-black text-slate-900 mb-2 uppercase italic tracking-tight">Garantia Blindada</h3>
                     <h4 className="text-lg md:text-xl font-bold text-red-600 mb-4 bg-red-100 px-4 py-1 inline-block rounded-lg transform -rotate-1 border border-red-200">Risco Zero Absoluto para Você</h4>
                     <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-6 font-medium">
                         Você não precisa decidir agora. <span className="font-bold">Entre, baixe as receitas e faça o teste.</span> Se você não amar o sabor ou achar difícil, devolvo 100% do seu dinheiro.
                     </p>
                     <Button 
                         onClick={scrollToPricing}
                         className="bg-red-600 hover:bg-red-500 text-white font-bold py-6 px-8 rounded-full shadow-lg flex items-center gap-2 mx-auto md:mx-0 animate-scale-pulse transition-transform hover:scale-105"
                     >
                         QUERO TESTAR SEM RISCOS
                     </Button>
                 </div>
             </div>
        </section>

        <section className="py-12 md:py-20 px-4 bg-slate-50">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10">
                <div className="w-full md:w-1/3">
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-2 w-[220px] md:w-full mx-auto">
                        <img src={imgExpert} alt="Dra. Isabela Mendes" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="w-full md:w-2/3 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Conheça a Criadora</h2>
                    <h3 className="text-lg md:text-xl text-purple-600 font-bold mb-4">Dra. Isabela Mendes</h3>
                    <div className="w-16 h-1 bg-purple-600 mx-auto md:mx-0 mb-6"></div>
                    <p className="text-slate-600 mb-4 leading-relaxed text-sm md:text-base">
                        Nutricionista especializada em Confeitaria Inclusiva e Pós-Graduada em Nutrição Funcional. Isabela dedicou 5 anos de pesquisa para desenvolver o método "Doce Saúde".
                    </p>
                </div>
            </div>
        </section>

        <section className="py-12 md:py-16 px-4 bg-white">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8 md:mb-10 flex items-center justify-center gap-2">
                    <HelpCircle className="text-pink-500"/> Perguntas Frequentes
                </h2>
                <Accordion type="single" collapsible className="w-full space-y-3 mb-10">
                    <FAQItem q="O acesso é imediato?" a="Sim! Assim que o pagamento for confirmado, você recebe um e-mail automático com o link para baixar todo o material e os bônus." />
                    <FAQItem q="É realmente Zero Açúcar?" a="Sim! Todas as receitas utilizam adoçantes naturais que não elevam a glicemia e são seguros para diabéticos." />
                    <FAQItem q="Contém Glúten ou Lactose?" a="Não! Todas as receitas foram adaptadas para serem 100% livres de glúten e sem lactose." />
                </Accordion>
                <Button 
                    onClick={scrollToPricing}
                    className="bg-pink-600 hover:bg-pink-500 text-white font-bold py-4 px-10 rounded-full shadow-md animate-scale-pulse transition-transform hover:scale-105 mx-auto"
                >
                    AINDA TENHO DÚVIDAS (GARANTIR AGORA)
                </Button>
            </div>
        </section>

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
                <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                    <div className="bg-white p-4 md:p-6 rounded-xl border border-slate-200 shadow-sm relative">
                        <div className="absolute top-4 right-4"><GoogleIcon /></div>
                        <div className="flex items-center gap-3 mb-3">
                            <img src={avatar5} alt="User" className="w-8 h-8 md:w-10 md:h-10 rounded-full" />
                            <div>
                                <p className="font-bold text-xs md:text-sm text-slate-900">Ricardo Mendes</p>
                                <p className="text-[10px] text-slate-500">2 dias atrás</p>
                            </div>
                        </div>
                        <div className="text-yellow-400 text-xs mb-2">★★★★★</div>
                        <p className="text-slate-600 text-xs md:text-sm text-center md:text-left">"Comprei para minha esposa que descobriu diabetes gestacional. Ela amou! As receitas são fáceis."</p>
                    </div>
                    <div className="bg-white p-4 md:p-6 rounded-xl border border-slate-200 shadow-sm relative">
                        <div className="absolute top-4 right-4"><GoogleIcon /></div>
                        <div className="flex items-center gap-3 mb-3">
                            <img src={avatar6} alt="User" className="w-8 h-8 md:w-10 md:h-10 rounded-full" />
                            <div>
                                <p className="font-bold text-xs md:text-sm text-slate-900">Fernanda Lima</p>
                                <p className="text-[10px] text-slate-500">1 semana atrás</p>
                            </div>
                        </div>
                        <div className="text-yellow-400 text-xs mb-2">★★★★★</div>
                        <p className="text-slate-600 text-xs md:text-sm text-center md:text-left">"O bônus de almoço fit vale o preço sozinho! Já emagreci 2kg essa semana. Recomendo demais!"</p>
                    </div>
                    <div className="bg-white p-4 md:p-6 rounded-xl border border-slate-200 shadow-sm relative">
                        <div className="absolute top-4 right-4"><GoogleIcon /></div>
                        <div className="flex items-center gap-3 mb-3">
                            <img src={avatar1} alt="User" className="w-8 h-8 md:w-10 md:h-10 rounded-full" />
                            <div>
                                <p className="font-bold text-xs md:text-sm text-slate-900">Mariana Costa</p>
                                <p className="text-[10px] text-slate-500">Ontem</p>
                            </div>
                        </div>
                        <div className="text-yellow-400 text-xs mb-2">★★★★★</div>
                        <p className="text-slate-600 text-xs md:text-sm text-center md:text-left">"Chegou no meu email na hora. O PDF é lindo. Amei o bolo de cenoura!"</p>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <Button 
                        onClick={scrollToPricing}
                        className="btn-shiny text-white font-black text-lg py-6 px-10 rounded-full shadow-lg animate-scale-pulse transition-transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
                    >
                        <ThumbsUp size={20} /> QUERO FAZER PARTE DESSA TURMA
                    </Button>
                </div>
            </div>
        </section>

        <section className="py-16 md:py-20 px-4 bg-slate-900 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-20">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="absolute bg-pink-500 rounded-full animate-pulse" style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 10 + 2}px`,
                        height: `${Math.random() * 10 + 2}px`,
                        animationDuration: `${Math.random() * 2 + 1}s`
                    }}></div>
                ))}
            </div>
            <div className="max-w-3xl mx-auto relative z-10">
                <h2 className="text-2xl md:text-5xl font-black mb-6 uppercase leading-tight">
                    Não Deixe para Amanhã o Corpo <br/> <span className="text-pink-500">(e o Doce) que Você Pode Ter Hoje!</span>
                </h2>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 md:p-6 rounded-2xl inline-block mb-8">
                    <p className="text-slate-300 text-xs uppercase tracking-widest font-bold mb-2">Oferta expira em:</p>
                    <div className="text-3xl md:text-6xl font-mono font-black text-white">
                      {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                    </div>
                </div>
                <div>
                    <Button 
                        onClick={scrollToPricing}
                        className="btn-hypnotic text-white font-black text-lg md:text-2xl py-8 px-10 rounded-full shadow-[0_0_40px_rgba(34,197,94,0.6)] transform transition hover:scale-105 active:scale-95 animate-pulse w-full md:w-auto"
                    >
                        QUERO APROVEITAR AGORA <ArrowRight className="ml-2" />
                    </Button>
                </div>
                <p className="mt-6 text-slate-400 text-xs md:text-sm">
                    Acesso Imediato • Compra Segura • Garantia de 7 Dias
                </p>
            </div>
        </section>

        <footer className="bg-slate-950 text-slate-500 py-8 md:py-12 text-center text-xs md:text-sm border-t-8 border-pink-500">
          <div className="container mx-auto px-4 text-center">
            <p className="mb-4 font-bold text-slate-300 text-base md:text-lg">🧁 Sobremesas Zero</p>
            <p className="mb-4">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
          </div>
        </footer>

        <SobremesasUpsellModal 
          isOpen={isUpsellModalOpen}
          onClose={() => setIsUpsellModalOpen(false)}
          onConfirm={() => {
              window.location.href = applyUtms('https://pay.lowify.com.br/go.php?offer=cn2ijyo');
          }}
          onReject={() => {
              window.location.href = applyUtms('https://pay.lowify.com.br/checkout.php?product_id=nNtdm7');
          }}
        />
      </div>
    </>
  );
};

const FAQItem = ({ q, a }: { q: string, a: string }) => (
    <AccordionItem value={q} className="border border-pink-100 rounded-xl px-4 bg-pink-50/50">
        <AccordionTrigger className="text-left font-bold text-slate-800 text-sm md:text-base hover:text-pink-600 hover:no-underline">{q}</AccordionTrigger>
        <AccordionContent className="text-slate-600 text-sm">{a}</AccordionContent>
    </AccordionItem>
);

const PhotoBonusCard = ({ title, desc, price, image }: { title: string, desc: string, price: string, image: string }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 flex flex-col hover:-translate-y-2 transition-transform duration-300">
        <div className="h-48 md:h-64 overflow-hidden relative">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute top-2 right-2 bg-green-600 text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded">GRÁTIS</div>
        </div>
        <div className="p-4 md:p-6 flex-1 flex flex-col">
            <h3 className="text-base md:text-lg font-black text-slate-900 mb-2 leading-tight text-center md:text-left">{title}</h3>
            <p className="text-slate-600 text-xs md:text-sm mb-4 flex-1 text-center md:text-left">{desc}</p>
            <div className="pt-4 border-t border-slate-100 text-center md:text-left">
                <span className="text-[10px] md:text-xs text-slate-400 line-through block">Vendido por R$ {price}</span>
                <span className="text-pink-600 font-bold text-sm md:text-base">Hoje: R$ 0,00</span>
            </div>
        </div>
    </div>
);

export default SobremesasLanding;