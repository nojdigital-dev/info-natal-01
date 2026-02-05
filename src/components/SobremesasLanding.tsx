import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Check, Star, ShieldCheck, 
  Zap, ChevronRight, ChefHat, Scale, HeartPulse, Droplet, Candy, Lock, Clock, HelpCircle, ArrowRight
} from "lucide-react";
import SobremesasUpsellModal from './SobremesasUpsellModal';
import UtmifyScript from './UtmifyScript';

// Images (Unsplash & Placeholders)
const heroImg = "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1000&auto=format&fit=crop"; 
const imgExpert = "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1000&auto=format&fit=crop"; // Chef woman

// Carousel Images
const carouselImages = [
  { img: "https://images.unsplash.com/photo-1606313564200-e75d5e304abd?q=80&w=300&auto=format&fit=crop", name: "Brownie" },
  { img: "https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?q=80&w=300&auto=format&fit=crop", name: "Pudim" },
  { img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=300&auto=format&fit=crop", name: "Pavê" },
  { img: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=300&auto=format&fit=crop", name: "Doce de Leite" },
  { img: "https://images.unsplash.com/photo-1579306194872-64d3b7bac4c2?q=80&w=300&auto=format&fit=crop", name: "Cheesecake" },
  { img: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=300&auto=format&fit=crop", name: "Mousse" },
  { img: "https://images.unsplash.com/photo-1551024601-5629636e331c?q=80&w=300&auto=format&fit=crop", name: "Bolo de Pote" },
  { img: "https://images.unsplash.com/photo-1488477181946-6428a029177b?q=80&w=300&auto=format&fit=crop", name: "Torta de Limão" },
];

// Bonus Images
const imgBonus1 = "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?q=80&w=500&auto=format&fit=crop"; // Torta
const imgBonus2 = "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=500&auto=format&fit=crop"; // Pancakes/Lanche
const imgBonus3 = "https://images.unsplash.com/photo-1600788907416-456578634209?q=80&w=500&auto=format&fit=crop"; // Geleia

const SobremesasLanding = () => {
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
        <title>300+ Sobremesas Zero - Coma Sem Culpa</title>
        <meta name="description" content="Descubra como comer suas sobremesas favoritas de domingo a domingo sem engordar. Receitas Zero Açúcar, Glúten e Lactose." />
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `}</style>
      </Helmet>
      <UtmifyScript />
      
      <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
        
        {/* Sticky Bar */}
        <div className="bg-pink-600 text-white text-center py-2 px-4 font-bold text-xs md:text-sm animate-pulse sticky top-0 z-50 shadow-md flex justify-center items-center gap-2">
           🧁 DESCONTO ESPECIAL SÓ HOJE: {todayDate.toUpperCase()}
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-white py-12 md:py-24 px-4 overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              
              <div className="text-center md:text-left order-2 md:order-1">
                <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 mb-6 px-4 py-1 text-sm font-bold border border-purple-200 inline-flex items-center gap-2 shadow-sm">
                  <ChefHat size={16} /> Receitas Validadas por Nutricionista
                </Badge>
                
                <h1 className="text-3xl md:text-6xl font-extrabold mb-6 leading-tight text-slate-900">
                  Coma Sua Sobremesa Favorita <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">De Domingo a Domingo</span> <br/>
                  <span className="bg-pink-600 text-white px-2 transform -rotate-1 inline-block mt-2 text-2xl md:text-5xl">SEM CULPA!</span>
                </h1>
                
                <p className="text-lg md:text-xl mb-8 text-slate-600 font-medium leading-relaxed">
                  + de 300 Sobremesas Deliciosas: <span className="font-bold text-red-500">Zero Açúcar</span>, <span className="font-bold text-red-500">Zero Glúten</span> e <span className="font-bold text-red-500">Zero Lactose</span>. <br/>
                  Emagreça sem abrir mão do prazer.
                </p>
                
                <div className="flex flex-col gap-4">
                    <Button 
                        onClick={scrollToPricing}
                        className="bg-green-600 hover:bg-green-500 text-white border-b-4 border-green-800 font-black text-xl py-8 px-10 rounded-full shadow-2xl transform transition hover:scale-105 active:scale-95 flex items-center justify-center gap-2 w-full md:w-fit mx-auto md:mx-0"
                    >
                        QUERO BAIXAR AS RECEITAS <ChevronRight size={24} />
                    </Button>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-slate-500 font-semibold">
                        <div className="flex text-yellow-400"><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/></div>
                        <span>(2.137) Avaliações • 97% Aprovado</span>
                    </div>
                </div>
              </div>

              <div className="relative order-1 md:order-2 flex justify-center">
                 <div className="relative w-full max-w-[350px] aspect-square">
                    <div className="absolute inset-0 bg-pink-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                    <img 
                        src={heroImg} 
                        alt="Brownie Zero Açúcar" 
                        className="relative rounded-3xl shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-all duration-500 object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border-l-4 border-pink-500 animate-bounce">
                        <p className="font-bold text-slate-800 text-sm">Brownie Cremoso</p>
                        <p className="text-xs text-green-600 font-bold flex items-center gap-1"><Check size={12}/> Zero Açúcar</p>
                    </div>
                 </div>
              </div>

            </div>
          </div>
        </section>

        {/* Infinite Carousel Section */}
        <section className="py-12 bg-white overflow-hidden border-y border-slate-100">
          <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">O Que Você Vai Poder Comer?</h2>
              <p className="text-slate-500 text-sm">Sim, tudo isso na versão fit!</p>
          </div>
          
          <div className="relative w-full">
             <div className="flex w-[200%] animate-scroll hover:pause">
                {[...carouselImages, ...carouselImages].map((item, index) => (
                   <div key={index} className="w-[150px] md:w-[200px] shrink-0 mx-2 md:mx-4">
                      <div className="relative rounded-xl overflow-hidden shadow-md aspect-square group">
                         <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                            <span className="text-white font-bold text-sm md:text-lg">{item.name}</span>
                         </div>
                      </div>
                   </div>
                ))}
             </div>
          </div>

          <div className="max-w-4xl mx-auto mt-12 bg-pink-50 border border-pink-200 rounded-2xl p-6 text-center mx-4">
              <h3 className="text-xl font-bold text-pink-700 mb-2 flex items-center justify-center gap-2">
                  <Candy className="animate-spin-slow" /> Sim! São mais de 300 receitas!
              </h3>
              <p className="text-slate-600">
                  Beijinho, Forrobodó, Geleias, Bolos, Tortas... Tudo <span className="font-bold">Zero Açúcar, Zero Glúten e Zero Lactose</span> com o sabor das tradicionais!
              </p>
          </div>
        </section>

        {/* Benefits Section (Improved) */}
        <section className="py-16 px-4 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="max-w-6xl mx-auto relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  O Fim da "Dieta Chata"
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                  {/* Benefit Card 1 */}
                  <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-pink-500 transition-colors group">
                      <div className="bg-slate-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-500 transition-colors">
                          <Zap className="text-white w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">Controle a Compulsão</h3>
                      <p className="text-slate-400 leading-relaxed">
                          Chega de atacar a geladeira. Nossas receitas saciam a vontade real de doce, mantendo você na linha.
                      </p>
                  </div>

                  {/* Benefit Card 2 */}
                  <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-blue-500 transition-colors group">
                      <div className="bg-slate-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors">
                          <Droplet className="text-white w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">Controle a Glicemia</h3>
                      <p className="text-slate-400 leading-relaxed">
                          Perfeito para diabéticos e pré-diabéticos. Desfrute de doces incríveis sem causar picos de insulina.
                      </p>
                  </div>

                  {/* Benefit Card 3 */}
                  <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-green-500 transition-colors group">
                      <div className="bg-slate-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors">
                          <Scale className="text-white w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">Emagreça com Prazer</h3>
                      <p className="text-slate-400 leading-relaxed">
                          Substitua calorias vazias por nutrientes. Veja a balança descer enquanto você come seu brownie favorito.
                      </p>
                  </div>

                  {/* Benefit Card 4 */}
                  <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-purple-500 transition-colors group">
                      <div className="bg-slate-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors">
                          <HeartPulse className="text-white w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">Digestão Leve</h3>
                      <p className="text-slate-400 leading-relaxed">
                          Zero glúten e zero lactose significa zero inchaço. Sinta-se leve e energizada após cada sobremesa.
                      </p>
                  </div>

                  {/* Benefit Card 5 */}
                  <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-yellow-500 transition-colors group">
                      <div className="bg-slate-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors">
                          <ShieldCheck className="text-white w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">Saúde para Família</h3>
                      <p className="text-slate-400 leading-relaxed">
                          Seu filho vai amar os sabores da infância, mas com uma nutrição equilibrada e saudável.
                      </p>
                  </div>

                  {/* Benefit Card 6 */}
                  <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-red-500 transition-colors group">
                      <div className="bg-slate-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-500 transition-colors">
                          <ChefHat className="text-white w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">Fácil de Fazer</h3>
                      <p className="text-slate-400 leading-relaxed">
                          Sem ingredientes alienígenas. Tudo o que você precisa está no mercado da esquina. Simples e rápido.
                      </p>
                  </div>
              </div>
          </div>
        </section>

        {/* Bonuses Section (With Photos) */}
        <section className="py-16 px-4 bg-gradient-to-b from-pink-50 to-white relative overflow-hidden">
            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <span className="bg-purple-600 text-white font-bold px-6 py-2 rounded-full text-sm uppercase tracking-wider shadow-lg">Presente Exclusivo</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold mt-6 mb-4 text-slate-900">GANHE 3 BÔNUS DE GRAÇA</h2>
                    <p className="text-slate-600 text-lg">Levando o pacote hoje, você não paga nada por esses guias extras:</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <PhotoBonusCard 
                        image={imgBonus1}
                        title="TORTAS DOCES"
                        desc="Zero açúcar, zero glúten e zero lactose. Perfeitas para festas."
                        price="39,90"
                    />
                    <PhotoBonusCard 
                        image={imgBonus2}
                        title="LANCHE DA TARDE"
                        desc="Salgados e snacks saudáveis para nunca mais passar fome."
                        price="29,90"
                    />
                    <PhotoBonusCard 
                        image={imgBonus3}
                        title="GELEIAS CASEIRAS"
                        desc="Aprenda a fazer geleias 100% fruta e zero açúcar para acompanhar."
                        price="19,90"
                    />
                </div>
                
                <div className="mt-12 text-center">
                    <p className="text-xl font-bold text-pink-600 mb-6">Valor Total dos Bônus: <span className="line-through text-slate-400">R$ 89,70</span> = <span className="bg-green-100 text-green-700 px-2 rounded">GRÁTIS HOJE</span></p>
                    <Button 
                        onClick={scrollToPricing}
                        className="bg-purple-600 hover:bg-purple-500 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg animate-pulse"
                    >
                        QUERO GARANTIR MEUS BÔNUS
                    </Button>
                </div>
            </div>
        </section>

        {/* Pricing Section - Aggressive Split */}
        <section id="pricing" className="py-20 px-4 bg-slate-50 border-t border-slate-200">
          <div className="max-w-5xl mx-auto">
            
            <div className="text-center mb-12">
              <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-xl shadow-xl mb-6 animate-bounce">
                  <div className="text-xs md:text-sm font-bold uppercase tracking-wider mb-1 text-red-100">⏳ O PREÇO SOBE EM:</div>
                  <div className="text-3xl md:text-5xl font-mono font-black tracking-widest text-white">
                      {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                  </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                  Escolha Seu Plano e <br/><span className="text-pink-600">Comece a Emagrecer Comendo</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
              
              {/* Anchor Plan (Decoy) - R$ 10 */}
              <div className="order-2 md:order-1 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all relative mt-4">
                 <h3 className="text-xl font-bold text-slate-500 mb-2">Pacote Básico</h3>
                 <p className="text-xs text-slate-400 mb-6">Apenas para conhecer</p>
                 
                 <div className="mb-6">
                    <span className="text-4xl font-extrabold text-slate-700">R$ 10,00</span>
                 </div>

                 <ul className="space-y-3 mb-8 text-sm text-slate-500">
                    <li className="flex items-center gap-2"><Check size={16}/> Algumas Receitas Zero</li>
                    <li className="flex items-center gap-2"><Check size={16}/> Acesso PDF simples</li>
                    <li className="flex items-center gap-2 text-red-400 line-through"><Check size={16}/> Sem Bônus de Tortas</li>
                    <li className="flex items-center gap-2 text-red-400 line-through"><Check size={16}/> Sem Bônus de Lanches</li>
                    <li className="flex items-center gap-2 text-red-400 line-through"><Check size={16}/> Sem Bônus de Geleias</li>
                 </ul>
                 
                 <Button 
                    onClick={() => setIsUpsellModalOpen(true)}
                    variant="outline" 
                    className="w-full border-slate-300 text-slate-600 hover:bg-slate-100 py-6"
                 >
                    QUERO O BÁSICO
                 </Button>
              </div>

              {/* Hero Plan - R$ 19,90 */}
              <div className="order-1 md:order-2 bg-white p-8 rounded-3xl border-4 border-pink-500 shadow-2xl relative transform md:scale-105 z-10">
                 <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-md whitespace-nowrap">
                    👑 Recomendado • Completo
                 </div>
                 
                 <h3 className="text-2xl font-black text-pink-600 text-center mb-1 uppercase">Pacote Premium</h3>
                 <p className="text-sm text-center text-slate-500 mb-6">Todas as 300+ Receitas + Bônus</p>
                 
                 <div className="text-center mb-6 bg-pink-50 py-4 rounded-2xl border border-pink-100">
                    <p className="text-xs text-slate-400 line-through mb-1">De R$ 97,00 por</p>
                    <div className="flex justify-center items-baseline gap-1">
                        <span className="text-6xl font-black text-green-600 tracking-tighter">R$ 19,90</span>
                    </div>
                    <p className="text-xs text-green-700 font-bold mt-2 bg-green-100 inline-block px-2 py-1 rounded">Pagamento Único • Acesso Vitalício</p>
                 </div>
                 
                 <ul className="space-y-3 mb-8 text-sm md:text-base font-medium text-slate-700">
                    <li className="flex items-center gap-3"><div className="bg-green-100 p-1 rounded-full text-green-600"><Check size={14} strokeWidth={4}/></div> <span>300+ Receitas Zero</span></li>
                    <li className="flex items-center gap-3"><div className="bg-green-100 p-1 rounded-full text-green-600"><Check size={14} strokeWidth={4}/></div> <span>BÔNUS 1: Tortas Doces</span></li>
                    <li className="flex items-center gap-3"><div className="bg-green-100 p-1 rounded-full text-green-600"><Check size={14} strokeWidth={4}/></div> <span>BÔNUS 2: Lanche da Tarde</span></li>
                    <li className="flex items-center gap-3"><div className="bg-green-100 p-1 rounded-full text-green-600"><Check size={14} strokeWidth={4}/></div> <span>BÔNUS 3: Geleias Caseiras</span></li>
                    <li className="flex items-center gap-3"><div className="bg-green-100 p-1 rounded-full text-green-600"><Check size={14} strokeWidth={4}/></div> <span>Atualizações Gratuitas</span></li>
                 </ul>

                 <Button 
                    onClick={() => window.location.href = applyUtms('https://pay.lowify.com.br/checkout?product_id=sobremesas-premium-19')}
                    className="w-full bg-green-600 hover:bg-green-500 text-white font-black text-xl py-8 rounded-xl shadow-[0_4px_0_rgb(21,128,61)] active:shadow-none active:translate-y-1 transition-all whitespace-normal h-auto leading-tight"
                 >
                    QUERO O PACOTE COMPLETO
                 </Button>
                 
                 <p className="text-xs text-center text-slate-400 mt-4 flex items-center justify-center gap-1">
                    <Lock size={12}/> Acesso Imediato no seu E-mail
                 </p>
              </div>

            </div>
          </div>
        </section>

        {/* Guarantee Section (Improved) */}
        <section className="py-16 px-4 bg-white relative overflow-hidden">
             <div className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-50 to-orange-50 p-8 md:p-12 rounded-[3rem] border-2 border-yellow-200 shadow-xl flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
                 
                 <div className="shrink-0 relative">
                     <div className="w-32 h-32 bg-slate-900 rounded-full flex items-center justify-center border-4 border-yellow-400 shadow-xl relative z-10">
                        <div className="text-center text-white">
                            <span className="block text-4xl font-black text-yellow-400">7</span>
                            <span className="block text-xs font-bold uppercase tracking-widest">Dias</span>
                        </div>
                     </div>
                     <div className="absolute top-0 left-0 w-full h-full bg-yellow-400 rounded-full blur-xl opacity-40 animate-pulse"></div>
                 </div>

                 <div className="text-center md:text-left">
                     <h3 className="text-3xl font-black text-slate-900 mb-2">Garantia Blindada de Satisfação</h3>
                     <p className="text-slate-700 text-lg leading-relaxed mb-6">
                         Eu assumo todo o risco. Você entra, baixa as receitas, faz aquele bolo de chocolate... Se você não amar o sabor ou achar difícil, eu devolvo 100% do seu dinheiro. Sem letras miúdas.
                     </p>
                     <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100 text-sm font-bold text-slate-600">
                        <ShieldCheck className="text-green-600"/> Risco Zero para você
                     </div>
                 </div>
             </div>
        </section>

        {/* Expert/Author Section */}
        <section className="py-16 px-4 bg-slate-50">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/3">
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-2">
                        <img src={imgExpert} alt="Dra. Isabela Mendes" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="w-full md:w-2/3 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Conheça a Criadora</h2>
                    <h3 className="text-xl text-purple-600 font-bold mb-4">Dra. Isabela Mendes</h3>
                    <div className="w-16 h-1 bg-purple-600 mx-auto md:mx-0 mb-6"></div>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                        Nutricionista especializada em Confeitaria Inclusiva e Pós-Graduada em Nutrição Funcional. Após ver sua própria mãe sofrer com diabetes e a falta de opções doces saborosas, Isabela dedicou 5 anos de pesquisa para desenvolver o método "Doce Saúde".
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        Hoje, ela já ajudou mais de 12.000 pessoas a voltarem a comer doces sem prejudicar a saúde, provando que restrição não precisa ser sinônimo de comida sem graça.
                    </p>
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-10 flex items-center justify-center gap-2">
                    <HelpCircle className="text-pink-500"/> Perguntas Frequentes
                </h2>
                <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem value="item-1" className="border border-pink-100 rounded-xl px-4 bg-pink-50/50">
                        <AccordionTrigger className="text-slate-800 font-bold hover:text-pink-600 hover:no-underline">O acesso é imediato?</AccordionTrigger>
                        <AccordionContent className="text-slate-600">
                            Sim! Assim que o pagamento for confirmado (PIX e Cartão são na hora), você recebe um e-mail automático com o link para baixar todo o material e os bônus.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="border border-pink-100 rounded-xl px-4 bg-pink-50/50">
                        <AccordionTrigger className="text-slate-800 font-bold hover:text-pink-600 hover:no-underline">Sou diabético(a), posso comer?</AccordionTrigger>
                        <AccordionContent className="text-slate-600">
                            Com certeza! Todas as receitas são Zero Açúcar e pensadas para não gerar picos de insulina. Porém, sempre recomendamos consultar seu médico.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="border border-pink-100 rounded-xl px-4 bg-pink-50/50">
                        <AccordionTrigger className="text-slate-800 font-bold hover:text-pink-600 hover:no-underline">Os ingredientes são caros?</AccordionTrigger>
                        <AccordionContent className="text-slate-600">
                            Não. Focamos em ingredientes acessíveis que você encontra em qualquer supermercado ou loja de produtos naturais. Nada de itens importados impossíveis de achar.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className="border border-pink-100 rounded-xl px-4 bg-pink-50/50">
                        <AccordionTrigger className="text-slate-800 font-bold hover:text-pink-600 hover:no-underline">É livro físico ou digital?</AccordionTrigger>
                        <AccordionContent className="text-slate-600">
                            É um produto 100% digital (E-book em PDF). Você não paga frete e pode acessar pelo celular, tablet ou computador, ou imprimir se preferir.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>

        {/* Final CTA Section with Timer */}
        <section className="py-20 px-4 bg-slate-900 text-white text-center relative overflow-hidden">
            {/* Particles */}
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
                <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase leading-tight">
                    Última Chance para Garantir <br/> <span className="text-pink-500">O Pacote Completo</span>
                </h2>
                
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl inline-block mb-8">
                    <p className="text-slate-300 text-sm uppercase tracking-widest font-bold mb-2">Desconto expira em:</p>
                    <div className="text-4xl md:text-6xl font-mono font-black text-white">
                      {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                    </div>
                </div>

                <div>
                    <Button 
                        onClick={scrollToPricing}
                        className="bg-green-600 hover:bg-green-500 text-white font-black text-xl md:text-2xl py-8 px-12 rounded-full shadow-[0_0_40px_rgba(34,197,94,0.6)] transform transition hover:scale-105 active:scale-95 animate-pulse"
                    >
                        QUERO APROVEITAR AGORA <ArrowRight className="ml-2" />
                    </Button>
                </div>
                
                <p className="mt-6 text-slate-400 text-sm">
                    Acesso Imediato • Compra Segura • Garantia de 7 Dias
                </p>
            </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-950 text-slate-500 py-12 text-center text-sm border-t border-slate-900">
          <div className="container mx-auto px-4">
            <p className="mb-4 font-bold text-slate-300 text-lg">🧁 Sobremesas Zero</p>
            <p className="mb-4">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
            <p className="text-xs text-slate-700 max-w-2xl mx-auto">
                Os resultados podem variar de pessoa para pessoa. Consulte sempre seu médico ou nutricionista antes de mudar sua dieta. Este produto não substitui o parecer médico profissional.
            </p>
          </div>
        </footer>

        <SobremesasUpsellModal 
          isOpen={isUpsellModalOpen}
          onClose={() => setIsUpsellModalOpen(false)}
          onConfirm={() => {
              window.location.href = applyUtms('https://pay.lowify.com.br/checkout?product_id=sobremesas-upsell-14'); // Link Upsell 14.90
          }}
          onReject={() => {
              window.location.href = applyUtms('https://pay.lowify.com.br/checkout?product_id=sobremesas-basic-10'); // Link Basic 10.00
          }}
        />
      </div>
    </>
  );
};

// Subcomponents
const DessertCard = ({ img, title, badge }: { img: string, title: string, badge?: string }) => (
    <div className="group relative rounded-2xl overflow-hidden shadow-lg border border-slate-100">
        <div className="aspect-square overflow-hidden">
            <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <div>
                {badge && <span className="bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 rounded mb-1 inline-block">{badge}</span>}
                <h3 className="text-white font-bold text-lg">{title}</h3>
                <p className="text-white/80 text-xs">Zero Açúcar • Zero Glúten</p>
            </div>
        </div>
    </div>
);

const PhotoBonusCard = ({ title, desc, price, image }: { title: string, desc: string, price: string, image: string }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 flex flex-col hover:-translate-y-2 transition-transform duration-300">
        <div className="h-40 overflow-hidden relative">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">GRÁTIS</div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-lg font-black text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-600 text-sm mb-4 flex-1">{desc}</p>
            <div className="pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-400 line-through block">Vendido por R$ {price}</span>
                <span className="text-pink-600 font-bold">Hoje: R$ 0,00</span>
            </div>
        </div>
    </div>
);

export default SobremesasLanding;